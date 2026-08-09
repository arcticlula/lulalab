<template class="stl-viewer">
  <div class="options-div">
    <div class="select-div">
      <n-cascader class="select-model" v-model:value="cascaderValue" :options="cascadeOptions" :show-path="true" check-strategy="child"/>
      <n-button class="select-button" @click="toggleExplode" tertiary v-if="selectedVersionIsGroup && !props.disableExplode">
        <template #icon>
          <n-icon>
            <ArrowMoveInward20Regular v-if="isExploded" />
            <ArrowMove20Regular v-if="!isExploded" />
          </n-icon>
        </template>
      </n-button>
      </div>
      <div class="radio-list" v-if="versionOptions.length > 0 && !selectedVersionIsGroup">
        <label class="label"><strong>Version:</strong></label>
        <n-radio-group v-model:value="selectedVersionSrc" >
          <div class="radio-grid">
              <n-radio v-for="version in versionOptions" :key="version.value" :value="version.value">
                {{ version.label }}
              </n-radio>
          </div>
        </n-radio-group>
      </div>
      <div class="bare-list" v-if="bareAvailable">
        <n-checkbox v-model:checked="bare">Bare board</n-checkbox>
      </div>
      <div class="checkbox-list" v-if="selectedVersionIsGroup">
      <label class="label"><strong>Parts:</strong></label>
      <n-checkbox-group v-model:value="visibleParts" >
        <div class="checkbox-grid">
            <n-checkbox v-for="part in currentVersionChildren" :key="part.src" :value="part.src">
              {{ (part as any).name ?? (part as any).label ?? 'Unnamed Part' }}
            </n-checkbox>
        </div>
      </n-checkbox-group>
    </div>
    
  </div>
  <div ref="viewerContainer" class="viewer"></div>
</template>

<script setup lang="ts">
import { ArrowMove20Regular, ArrowMoveInward20Regular } from '@vicons/fluent';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { VRMLLoader } from "three/examples/jsm/loaders/VRMLLoader.js";
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { IModel, ICascadeCategory } from '../models/media';

type CascaderOption = {
  label: string;
  value: string;
  children?: CascaderOption[];
};

const props = defineProps<{ models: ICascadeCategory[], backgroundColor?: number, disableExplode?: boolean }>();

const viewerContainer = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let currentGroup: THREE.Group | null = null;
let pivotHelpers: THREE.Group = new THREE.Group();
// bumped per load so a slow load can tell it has been superseded
let loadToken = 0;

// The loop only runs while something is actually moving (orbit damping, an
// explode tween, a model swap). Idle viewers cost nothing.
let rafId: number | null = null;
let renderRequested = false;
let isVisible = true;
let visibilityObserver: IntersectionObserver | null = null;

const stlLoader = new STLLoader();
const vrmlLoader = new VRMLLoader();

// The boards ship as Draco compressed glb - decoding happens off the main
// thread in a worker, so a big PCB no longer freezes the page while it parses.
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco/`);
dracoLoader.setDecoderConfig({ type: 'wasm' });

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const selectedPath = ref<string[] | null>(null);
const previousSelectedPath = ref<string[] | null>(null);
const cascaderValue = ref<string | null>(null);

const visibleParts = ref<string[]>([]);
const selectedVersionSrc = ref<string | null>(null);
// show the board with no components on it, when a bare counterpart exists
const bare = ref(false);

let currentModuleName: string | null = null;
const isExploded = ref(false);
let originalPositions = new Map<string, THREE.Vector3>();
let originalRotations = new Map<string, THREE.Euler>();
let baseDirections = new Map<string, THREE.Vector3>();
let customExplodeOffsets = new Map<string, { x: number; y: number; z: number }>();
let customExplodeRotations = new Map<string, { x: number; y: number; z: number }>();
let modelSize = 1;

type Tween = {
  mesh: THREE.Object3D;
  startPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  startQuat: THREE.Quaternion;
  endQuat: THREE.Quaternion;
  startTime: number;
};
const EXPLODE_DURATION = 350;
const activeTweens: Tween[] = [];

// One noise texture shared by every material: building it per mesh meant 256k
// random calls and a texture upload for each part of an assembly.
let noiseTexture: THREE.DataTexture | null = null;

function getNoiseTexture() {
  if (noiseTexture) return noiseTexture;

  const size = 128;
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < data.length; i++) data[i] = 128 + Math.random() * 40;

  noiseTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
  noiseTexture.repeat.set(10, 10);
  noiseTexture.needsUpdate = true;
  return noiseTexture;
}

// Cache for model lookups to avoid repeated searching
let modelLookupCache = new Map<string, any>();
let partGroupMap = new Map<string, string>();

// collect all parts (to match file paths with color/opacity)
const allParts = computed<IModel[]>(() => {
  const p: IModel[] = [];

  const collectSrcs = (items: any[]) => {
    (items || []).forEach((item: any) => {
      if (item.src) {
        p.push(item as IModel);
      }

      if (item.children && Array.isArray(item.children)) {
        collectSrcs(item.children);
      }
    });
  };

  collectSrcs(props.models as any[]);

  return p;
});

const cascadeOptions = computed(() => {
  modelLookupCache.clear();
  partGroupMap.clear();

  // Only one level of children shown; versions (leaf nodes with src) appear via radio buttons, not cascader
  const options: CascaderOption[] = (props.models as ICascadeCategory[]).map(top => {
    modelLookupCache.set(top.key, top);
    const hasChildren = top.children && top.children.length > 0;
    if (!hasChildren) {
      return { label: top.label, value: top.key };
    }

    // If all children have src -> these are versions; treat top-level as direct selectable
    const childrenAreVersions = top.children!.every((c: any) => !!c.src);
    if (childrenAreVersions) {
      return { label: top.label, value: top.key };
    }

    // Otherwise children are parts/categories; include them one level deep
    const childOpts = top.children!.map((child: any) => {
      modelLookupCache.set(child.key, child);
      partGroupMap.set(child.key, top.key);
      return { label: child.label, value: child.key } as CascaderOption;
    });
    return { label: top.label, value: top.key, children: childOpts };
  });
  return options;
});

// bare entries fall back to the populated model, so an entry without a bare
// counterpart keeps working with the toggle left on
function resolveSrc(entry: any, fallback: string | null = null): string | null {
  const src = entry?.src ?? fallback;
  if (!src) return null;
  return bare.value && entry?.bareSrc ? entry.bareSrc : src;
}

const versionData = computed(() => {
  const none = { versionOptions: [], isGroup: false, children: [], filePaths: [], hasBare: false };
  if (!selectedPath.value || selectedPath.value.length < 1) {
    return none;
  }

  const itemKey = selectedPath.value[selectedPath.value.length - 1];
  const item = modelLookupCache.get(itemKey);
  if (!item) {
    return none;
  }

  // Leaf item without versions: load directly
  if (!item.children || item.children.length === 0) {
    const src = resolveSrc(item);
    return {
      versionOptions: [],
      isGroup: false,
      children: [],
      filePaths: src ? [src] : [],
      hasBare: !!item.bareSrc
    };
  }

  const versionOptions = (item.children as any[]).map((v: any) => {
    const isGroup = !!(v as any).children && (v as any).children.length > 0;
    const value = (v as any).isGroup || isGroup ? (v.key || v.src) : (v.src || v.key);
    return {
      label: v.label,
      value,
      isGroup,
      children: (v as any).children,
      src: (v as any).src,
      bareSrc: (v as any).bareSrc,
      colorHex: (v as any).colorHex,
      opacity: (v as any).opacity
    };
  });

  const currentVersion = versionOptions.find(v => v.value === selectedVersionSrc.value);
  const isCurrentGroup = !!(currentVersion && currentVersion.children && currentVersion.children.length > 0);
  
  let children: any[] = [];
  let filePaths: string[] = [];
  
  if (selectedVersionSrc.value) {
    if (selectedVersionSrc.value.includes('/')) {
      filePaths = [resolveSrc(currentVersion, selectedVersionSrc.value)!];
    } else if (currentVersion) {
      if (isCurrentGroup && currentVersion.children) {
        children = (currentVersion.children as any[]).map((c: any) => ({
          src: c.src,
          label: c.label
        }));
        filePaths = visibleParts.value.length > 0 ? visibleParts.value : [];
      } else if (currentVersion.src) {
        filePaths = [resolveSrc(currentVersion)!];
      }
    }
  }

  return {
    versionOptions,
    isGroup: isCurrentGroup,
    children,
    filePaths,
    hasBare: !isCurrentGroup && !!(currentVersion as any)?.bareSrc
  };
});

const versionOptions = computed(() => versionData.value.versionOptions);
const selectedVersionIsGroup = computed(() => versionData.value.isGroup);
const currentVersionChildren = computed(() => versionData.value.children);
const filePaths = computed(() => versionData.value.filePaths);
const bareAvailable = computed(() => versionData.value.hasBare);

// Initialize default selection when models are ready
watch(() => props.models, () => {
  if (selectedPath.value) return;

  const models = props.models as ICascadeCategory[];
  if (!models || models.length === 0) return;

  // trigger cascadeOptions computation to populate cache
  void cascadeOptions.value;

  for (const item of models) {
    if (item.children && item.children.length > 0) {
      const firstChild = item.children[0];
      if (firstChild) {
        selectedPath.value = [item.key, firstChild.key];
        cascaderValue.value = firstChild.key;
        return;
      }
    } else if (item.src) {
      selectedPath.value = [item.key];
      cascaderValue.value = item.key;
      return;
    }
  }
}, { immediate: true });

// When cascader changes, convert selected value back to full path
watch(cascaderValue, (leafValue) => {
  if (!leafValue) {
    selectedPath.value = null;
    return;
  }

  const valueKey = Array.isArray(leafValue) ? leafValue[leafValue.length - 1] : leafValue;
  const path: string[] = [];
  let current: string | undefined = valueKey;
  const visited = new Set<string>();

  while (current && !visited.has(current)) {
    path.unshift(current);
    visited.add(current);
    current = partGroupMap.get(current);
  }

  if (path.length === 0) {
    path.push(valueKey);
  }

  selectedPath.value = path;
});

// when the cascader path changes, default the version selection to the last
watch(selectedPath, (path) => {
  if (!path || path.length < 1) return;

  const itemKey = path[path.length - 1];
  const item = modelLookupCache.get(itemKey);

  if (!item) {
    selectedVersionSrc.value = null;
    visibleParts.value = [];
    loadModel();
    return;
  }

  if (!item.children || item.children.length === 0) {
    selectedVersionSrc.value = item.src || null;
    visibleParts.value = [];
    loadModel();
    return;
  }

  const versions = item.children as any[];
  const last = versions[versions.length - 1];
  const isGroup = !!(last.children && last.children.length > 0);
  const value = isGroup ? (last.key || last.src) : (last.src || last.key);

  selectedVersionSrc.value = value;
  if (isGroup && last.children) {
    visibleParts.value = (last.children as any[]).map((c: any) => c.src);
  } else {
    visibleParts.value = [];
  }
  loadModel();
}, { immediate: true });

// when a version is selected in cascade mode, update visibleParts
watch(selectedVersionSrc, (val) => {
  if (!val || !selectedPath.value || selectedPath.value.length < 1) {
    loadModel();
    return;
  }

  const itemKey = selectedPath.value[selectedPath.value.length - 1];
  const item = modelLookupCache.get(itemKey);
  if (!item || !item.children) {
    loadModel();
    return;
  }

  const versionObj = item.children.find((v: any) => {
    const isGroup = !!(v.children && v.children.length > 0);
    const value = isGroup ? (v.key || v.src) : (v.src || v.key);
    return value === val;
  });

  if (versionObj && versionObj.children) {
    visibleParts.value = (versionObj.children as any[]).map((c: any) => c.src);
  }
  loadModel();
}, { immediate: true });

watch(visibleParts, () => {
  // For assembly groups: just toggle mesh visibility instead of reloading
  if (!selectedVersionIsGroup.value || !currentGroup) {
    loadModel();
    return;
  }

  const visibleSet = new Set(visibleParts.value);
  currentGroup.children.forEach((mesh) => {
    if (mesh instanceof THREE.Mesh || (mesh instanceof THREE.Object3D && mesh.children.length > 0)) {
      const src = mesh.userData.src as string;
      mesh.visible = visibleSet.has(src);
    }
  });
  
  if (isExploded.value) {
    reapplyExplosion();
  }

  requestRender();
}, { deep: true });


// same selection, different file: reload without touching the camera
watch(bare, () => {
  if (!bareAvailable.value) return;
  loadModel();
});

watch(selectedVersionIsGroup, (isGroup) => {
  if (!isGroup && isExploded.value) {
    isExploded.value = false;
    resetModel();
  }
});

onMounted(() => {
  initThree();

  // Stop rendering entirely while the viewer is scrolled out of view
  visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) scheduleFrame();
    else cancelFrame();
  }, { rootMargin: '100px' });
  visibilityObserver.observe(viewerContainer.value!);

  loadModel();
  requestRender();
});

onBeforeUnmount(() => {
  cancelFrame();
  isVisible = false;
  activeTweens.length = 0;

  visibilityObserver?.disconnect();
  visibilityObserver = null;

  controls?.dispose();

  if (currentGroup) {
    scene.remove(currentGroup);
    disposeObject(currentGroup);
    currentGroup = null;
  }
  clearPivotHelpers();
  scene?.clear();

  if (renderer) {
    renderer.dispose();
    // hands the WebGL context back now instead of waiting for GC - browsers
    // only allow a handful at a time, and route changes churn through them
    renderer.forceContextLoss();
    renderer.domElement.remove();
  }
});

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(props.backgroundColor || getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim() || '#101014');

  const w = viewerContainer.value!.clientWidth;
  const h = 500;

  camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 10000);
  camera.position.set(0, 0, 100);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  // uncapped DPR renders 4x the fragments on a retina panel for no visible gain
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  viewerContainer.value!.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.addEventListener('change', requestRender);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
  fillLight.position.set(-5, 0, -5);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
  backLight.position.set(0, -5, -5);
  scene.add(backLight);
  scene.add(pivotHelpers);
}

async function loadModel() {
  if (!scene) {
    return;
  }
  if (!filePaths.value.length) return;

  // Several watchers fire loadModel at once (and again on every toggle). Each
  // run builds into its own group and only swaps in if it is still the newest,
  // otherwise concurrent runs interleave meshes and the model renders twice.
  const token = ++loadToken;

  const cascaderChanged = JSON.stringify(previousSelectedPath.value) !== JSON.stringify(selectedPath.value);
  const isNewModule = selectedVersionSrc.value !== currentModuleName;

  const group = new THREE.Group();
  const meshes: THREE.Mesh[] = [];

  for (const path of filePaths.value) {
    const lower = path.toLowerCase();
    const isVRML = lower.endsWith('.wrl') || lower.endsWith('.vrml');
    const isGLTF = lower.endsWith('.glb') || lower.endsWith('.gltf');

    if (isGLTF) {
      const gltfScene = await loadGLTF(path);
      gltfScene.userData.src = path;
      meshes.push(gltfScene as any);
      group.add(gltfScene);
    } else if (isVRML) {
      const vrmlScene = await loadVRML(path);
      vrmlScene.userData.src = path;
      meshes.push(vrmlScene as any);
      group.add(vrmlScene);
    } else {
      const geom = await loadSTL(path);
      const mesh = createMeshWithMaterial(geom, path);
      mesh.userData.src = path;
      meshes.push(mesh);
      group.add(mesh);
    }
  }

  // a newer load started while this one was fetching - drop this result
  if (token !== loadToken || !scene) {
    disposeObject(group);
    return;
  }

  previousSelectedPath.value = selectedPath.value ? [...selectedPath.value] : null;

  if (currentGroup) {
    scene.remove(currentGroup);
    disposeObject(currentGroup);
  }
  currentGroup = group;
  scene.add(currentGroup);

  if (isNewModule) {
    currentModuleName = selectedVersionSrc.value ?? null;

    // if the selected version is a group, compute explosion vectors from the loaded meshes
    const v = versionOptions.value.find(v => v.value === selectedVersionSrc.value);
    if (v && v.isGroup && v.children) {
      // Filter STL meshes only for explosion calculations
      const stlMeshes = meshes.filter(m => !(m instanceof THREE.Object3D && m.children.length > 0));
      if (stlMeshes.length > 0) {
        const tempGroup = new THREE.Group();
        stlMeshes.forEach(m => tempGroup.add(m.clone()));
        tempGroup.updateMatrixWorld(true);
        computeBaseExplosionVectors(stlMeshes, tempGroup, v.children as any[]);
      }
      
      if (cascaderChanged) {
        fitCameraToModel(currentGroup);
      }
    } else {
      if (cascaderChanged) {
        fitCameraToModel(currentGroup);
      }
    }
  } else {
    controls.update();
  }

  // Store original positions and rotations for newly loaded meshes (only for STL meshes)
  currentGroup.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;
    const key = mesh.userData.src;
    if (!originalPositions.has(key)) {
      originalPositions.set(key, mesh.position.clone());
    }
    if (!originalRotations.has(key)) {
      originalRotations.set(key, mesh.rotation.clone());
    }
  });

  if (isExploded.value) {
    reapplyExplosion();
  }

  updatePivotHelpers();
  requestRender();
}

function clearPivotHelpers() {
  pivotHelpers.children.forEach(child => {
    const dot = child as THREE.Mesh;
    dot.geometry?.dispose();
    (dot.material as THREE.Material)?.dispose();
  });
  pivotHelpers.clear();
}

function updatePivotHelpers() {
  clearPivotHelpers();
  if (!currentGroup) return;

  currentGroup.children.forEach(mesh => {
    const key = mesh.userData.src;
    const part = allParts.value.find(p => p.src === key);
    if (part?.rotationPivot) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.5),
        new THREE.MeshBasicMaterial({ color: 0xff0000, depthTest: false, transparent: true, opacity: 0.8 })
      );
      dot.renderOrder = 999;
      // The pivot point in world space is the mesh's position (because we compensated)
      dot.position.copy(mesh.position);
      pivotHelpers.add(dot);
    }
  });
}


function loadSTL(path: string): Promise<THREE.BufferGeometry> {
  return new Promise((resolve, reject) => {
    stlLoader.load(path, resolve, undefined, reject);
  });
}

function loadVRML(path: string): Promise<THREE.Scene> {
  return new Promise((resolve, reject) => {
    vrmlLoader.load(path, resolve, undefined, reject);
  });
}

function loadGLTF(path: string): Promise<THREE.Group> {
  return new Promise((resolve, reject) => {
    gltfLoader.load(path, (gltf) => resolve(gltf.scene), undefined, reject);
  });
}

function createMeshWithMaterial(geometry: THREE.BufferGeometry, path: string) {
  geometry.computeVertexNormals();

  const pathLower = path.toLowerCase();
  let part = allParts.value.find((p) => p.src.toLowerCase() === pathLower);
  if (!part) {
    const fileKey = pathLower.split("/").pop()!;
    part = allParts.value.find((p) => {
      const srcFile = p.src.split("/").pop()?.toLowerCase();
      return srcFile === fileKey;
    });
  }

  // Apply rotation pivot if defined (relative to part center)
  let finalPivot = new THREE.Vector3(0, 0, 0);
  if (part?.rotationPivot) {
    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox!.getCenter(center);
    
    finalPivot.set(
      part.rotationPivot.x + center.x,
      part.rotationPivot.y + center.y,
      part.rotationPivot.z + center.z
    );

    geometry.translate(-finalPivot.x, -finalPivot.y, -finalPivot.z);
  }

  const colorHex = part?.colorHex ?? "0xffffff";
  const opacity = part?.opacity ?? 1;

  const material = new THREE.MeshStandardMaterial({
    color: parseInt(colorHex.replace("#", ""), 16),
    transparent: opacity < 1,
    opacity,
    roughness: 0.6,
    metalness: 0.05,
    emissive: 0x111111,
    normalMap: getNoiseTexture(),
    normalScale: new THREE.Vector2(0.2, 0.2),
    side: THREE.DoubleSide,
  });

  material.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <dithering_fragment>`,
      `
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `
    );
  };

  const mesh = new THREE.Mesh(geometry, material);
  
  // Compensate for pivot shift to keep visual position
  if (part?.rotationPivot) {
    mesh.position.copy(finalPivot);
  } else {
    mesh.position.set(0, 0, 0);
  }

  return mesh;
}

function fitCameraToModel(obj?: THREE.Object3D) {
  const targetObj = obj ?? currentGroup;
  if (!targetObj) return;

  const box = new THREE.Box3().setFromObject(targetObj);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());

  controls.target.copy(center);
  camera.position.copy(center).addScalar(size * 0.8);
  camera.lookAt(center);
}

function scheduleFrame() {
  if (rafId === null && isVisible && renderer) rafId = requestAnimationFrame(renderFrame);
}

function cancelFrame() {
  if (rafId !== null) cancelAnimationFrame(rafId);
  rafId = null;
}

function requestRender() {
  renderRequested = true;
  scheduleFrame();
}

function renderFrame() {
  rafId = null;
  if (!isVisible || !renderer) return;

  renderRequested = false;
  stepTweens(performance.now());
  // update() reports whether damping is still settling the camera
  const cameraMoving = controls.update();
  renderer.render(scene, camera);

  if (cameraMoving || renderRequested || activeTweens.length > 0) scheduleFrame();
}

function stepTweens(now: number) {
  for (let i = activeTweens.length - 1; i >= 0; i--) {
    const tween = activeTweens[i];
    const t = Math.min((now - tween.startTime) / EXPLODE_DURATION, 1);
    const easedT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    tween.mesh.position.lerpVectors(tween.startPos, tween.targetPos, easedT);
    tween.mesh.quaternion.slerpQuaternions(tween.startQuat, tween.endQuat, easedT);

    if (t >= 1) activeTweens.splice(i, 1);
  }
}

function disposeObject(obj: THREE.Object3D) {
  obj.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();

    const material = mesh.material;
    if (Array.isArray(material)) material.forEach(disposeMaterial);
    else if (material) disposeMaterial(material);
  });
}

function disposeMaterial(material: THREE.Material) {
  // the noise map is shared across every mesh, so it outlives any single one
  const normalMap = (material as THREE.MeshStandardMaterial).normalMap;
  if (normalMap && normalMap !== noiseTexture) normalMap.dispose();
  material.dispose();
}

function toggleExplode() {
  if (!currentGroup) return;

  if (!isExploded.value) {
    explodeModel();
  } else {
    resetModel();
  }

  isExploded.value = !isExploded.value;
}

function explodeModel() {
  if (!currentGroup) return;

  originalPositions.clear();

  const distance = modelSize * 0.25;

  currentGroup.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const key = mesh.userData.src;
    originalPositions.set(key, mesh.position.clone());

    const customOffset = customExplodeOffsets.get(key);
    let target: THREE.Vector3;
    
    if (customOffset) {
      // Use custom explode offset if defined
      target = mesh.position.clone().add(new THREE.Vector3(customOffset.x, customOffset.y, customOffset.z));
    } else {
      // Fall back to computed direction-based explosion
      const dir = baseDirections.get(key);
      if (!dir) return;
      target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));
    }

    const customRotation = customExplodeRotations.get(key);
    let targetRot = originalRotations.get(key)!.clone();
    if (customRotation) {
      targetRot.set(
        THREE.MathUtils.degToRad(customRotation.x),
        THREE.MathUtils.degToRad(customRotation.y),
        THREE.MathUtils.degToRad(customRotation.z)
      );
    }

    animateMesh(mesh, target, targetRot);
  });
}

function reapplyExplosion() {
  const distance = modelSize * 0.25;

  currentGroup!.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const key = mesh.userData.src;
    const customOffset = customExplodeOffsets.get(key);
    let target: THREE.Vector3;
    
    if (customOffset) {
      target = originalPositions.get(key)!.clone().add(new THREE.Vector3(customOffset.x, customOffset.y, customOffset.z));
    } else {
      const dir = baseDirections.get(key);
      if (!dir) return;
      target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));
    }
    
    const customRotation = customExplodeRotations.get(key);
    let targetRot = originalRotations.get(key)!.clone();
    if (customRotation) {
      targetRot.set(
        THREE.MathUtils.degToRad(customRotation.x),
        THREE.MathUtils.degToRad(customRotation.y),
        THREE.MathUtils.degToRad(customRotation.z)
      );
    }

    mesh.position.copy(target);
    mesh.rotation.copy(targetRot);
  });
}

function computeBaseExplosionVectors(meshes: THREE.Mesh[], referenceGroup: THREE.Group, parts?: any[]) {
  baseDirections.clear();
  customExplodeOffsets.clear();
  customExplodeRotations.clear();

  const box = new THREE.Box3().setFromObject(referenceGroup);
  const centerWorld = box.getCenter(new THREE.Vector3());
  const centerLocal = referenceGroup.worldToLocal(centerWorld.clone());

  modelSize = box.getSize(new THREE.Vector3()).length();

  for (const mesh of meshes) {
    const meshBox = new THREE.Box3().setFromObject(mesh);
    const meshCenterWorld = meshBox.getCenter(new THREE.Vector3());
    const meshCenterLocal = referenceGroup.worldToLocal(meshCenterWorld.clone());

    const dir = meshCenterLocal.clone().sub(centerLocal);

    if (dir.length() < 0.0001) {
      dir.set(0, 0, 0);
    } else {
      dir.normalize();
    }

    baseDirections.set(mesh.userData.src, dir);
    
    if (parts) {
      const partData = parts.find((p: any) => p.src === mesh.userData.src) as IModel | undefined;
      if (partData?.explodeOffset) {
        customExplodeOffsets.set(mesh.userData.src, partData.explodeOffset);
      }
      if (partData?.explodeRotation) {
        customExplodeRotations.set(mesh.userData.src, partData.explodeRotation);
      }
    }
  }
}

function resetModel() {
  if (!currentGroup) return;

  currentGroup.children.forEach(mesh => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const origPos = originalPositions.get(mesh.userData.src);
    const origRot = originalRotations.get(mesh.userData.src);
    if (!origPos || !origRot) return;

    animateMesh(mesh, origPos, origRot);
  });
}

// queued onto the shared render loop rather than each mesh driving its own rAF
function animateMesh(mesh: THREE.Object3D, targetPos: THREE.Vector3, targetRot: THREE.Euler) {
  const inFlight = activeTweens.findIndex(t => t.mesh === mesh);
  if (inFlight > -1) activeTweens.splice(inFlight, 1);

  activeTweens.push({
    mesh,
    startPos: mesh.position.clone(),
    targetPos: targetPos.clone(),
    startQuat: mesh.quaternion.clone(),
    endQuat: new THREE.Quaternion().setFromEuler(targetRot),
    startTime: performance.now()
  });

  scheduleFrame();
}
</script>

<style scoped lang="sass">
  .stl-viewer
    text-align: center

  .options-div
    display: flex
    flex-direction: row
    align-items: center

  .select-div
    display: flex
    width: 100%
    flex: 1 1 0%
    min-width: 0
    margin-bottom: 8px

  .select-button
    margin-left: 16px

  .checkbox-list, .radio-list, .bare-list
    display: flex
    flex-direction: row
    flex: 0 0 auto !important
    width: max-content
    min-width: max-content
    margin-left: 16px

  .bare-list
    white-space: nowrap

  .checkbox-grid
    display: grid
    grid-auto-flow: column
    grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr))

    .n-checkbox
      display: flex
      align-items: center
      flex-direction: row
      white-space: nowrap

  .radio-grid
    display: grid
    grid-auto-flow: column
    grid-template-columns: repeat(auto-fit, minmax(50px, max-content))

    .n-radio
      display: flex
      align-items: center
      flex-direction: row
      white-space: nowrap

  .label
    margin-right: 8px
    margin-bottom: 4px

  @media (max-width: 1300px)
    .options-div
      flex-direction: column
      align-items: flex-start
    .select-div
      margin-bottom: 8px
    .select-button
      margin-left: 8px
    .checkbox-list, .radio-list, .bare-list
      width: 100%
      min-width: 0
      flex-direction: column
      margin-bottom: 8px
      margin-left: 0
    .checkbox-grid
      grid-auto-flow: unset
      grid-template-columns: repeat(auto-fit, minmax(80px, 150px))
      column-gap: 8px
      row-gap: 8px
    .radio-grid
      grid-auto-flow: unset
      grid-template-columns: repeat(auto-fit, minmax(50px, 150px))
      column-gap: 8px
      row-gap: 8px
</style>