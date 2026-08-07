<template>
  <div class="home">
    <router-view></router-view>

    <div v-if="$route.name === 'projects'" class="toggle-wrapper">
      <n-radio-group v-model:value="viewMode" size="medium">
        <n-radio-button value="tree" title="Tree View">
          <n-icon size="18" style="vertical-align: middle;"><TreeIcon /></n-icon>
        </n-radio-button>
        <n-radio-button value="grid" title="Grid View">
          <n-icon size="18" style="vertical-align: middle;"><GridIcon /></n-icon>
        </n-radio-button>
      </n-radio-group>
    </div>
    
    <div v-if="$route.name === 'projects' && viewMode === 'tree'" class="tree-view-container">
      <div class="tree-sidebar">
        <n-tree
          block-line
          expand-on-click
          selectable
          default-expand-all
          :data="treeData"
          @update:selected-keys="handleTreeSelect"
        />
      </div>
      <div class="tree-content">
        <div 
          v-for="project in filteredProjects" 
          :key="project.name" 
          :id="'project-' + project.name"
          class="project-details"
        >
          <div class="post-date">{{ formatMonthYear(project.date) }}</div>
          <div class="post-title squid-title">{{ project.name }}</div>
          
          <div class="project-media-container">
            <router-link :to="{ name: project.routeName }">
              <img v-if="project.srcType === 'image'" class="project-media" :src="project.src">
              <video
                v-else-if="project.srcType === 'video'"
                class="project-media"
                :src="project.src"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              />
            </router-link>
          </div>
          
          <div class="card-content project-desc">
            {{ project.description }}
          </div>
          
          <div class="project-footer">
            <n-space>
              <n-tag
                v-for="keyword in project.keywords"
                size="small"
                :key="keyword"
                class="keyword-tag"
                :type="activeTags.includes(keyword) ? 'info' : 'success'"
                :bordered="false"
                @click="toggleTagFilter(keyword)"
              >
                {{ keyword }}
              </n-tag>
            </n-space>
          </div>
        </div>
      </div>
    </div>

    <n-grid v-if="$route.name === 'projects' && viewMode === 'grid'" cols="1 s:2 m:2 l:3" :x-gap="24" :y-gap="24" responsive="screen">
      <n-gi v-for="project in displayedProjects" :key="project.name">
        <n-card class="card" hoverable>
          <template #header>
            <div class="card-header">
              <span class="card-title squid-title">{{ project.name }}</span>
              <span class="card-date">{{  formatMonthYear(project.date) }}</span>
            </div>
          </template>
          <template #cover>
            <router-link :to="{ name: project.routeName }">
              <!-- Images: use <picture> for graceful fallback -->
              <template v-if="project.srcType === 'image'">
                <picture v-if="!failedAvif.has(project.name)">
                  <source :srcset="project.avifSrc" type="image/avif" />
                  <img
                    class="card-image"
                    :src="project.originalSrc"
                    :alt="project.name + ' preview'"
                    @error="onImageAvifFail(project)"
                  />
                </picture>
                <img
                  v-else
                  class="card-image"
                  :src="project.originalSrc"
                  :alt="project.name + ' preview'"
                />
              </template>
              <!-- Videos: prefer AVIF still; fallback to video if AVIF fails -->
              <template v-else>
                <img
                  v-if="!failedAvif.has(project.name)"
                  class="card-image"
                  :src="project.avifSrc"
                  :alt="project.name + ' video preview'"
                  @error="onVideoAvifFail(project)"
                />
                <video
                  v-else
                  class="card-video"
                  :src="project.originalSrc"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="auto"
                />
              </template>
            </router-link>
          </template>
          <div class="card-content">
            {{ project.description }}
          </div>
          <template #footer>
            <n-space>
              <n-tag
                v-for="keyword in project.keywords"
                size="small"
                :key="keyword"
                class="keyword-tag"
                :type="activeTags.includes(keyword) ? 'info' : 'success'"
                :bordered="false"
                @click="toggleTagFilter(keyword)"
              >
                {{ keyword }}
              </n-tag>
            </n-space>
          </template>
        </n-card>
      </n-gi>
    </n-grid>

    <!-- Sticky filter at the bottom -->
    <div v-if="$route.name === 'projects'" class="sticky-filter-wrapper">
      <div class="filter-space glass-pill" v-if="activeTags.length > 0">
        <n-space align="center">
          <span>Filtering by:</span>
          <n-tag
            v-for="tag in activeTags"
            :key="tag"
            type="info"
            closable
            @close="removeTagFilter(tag)"
          >
            {{ tag }}
          </n-tag>
          <n-button text type="error" @click="clearAllFilters">Clear All</n-button>
        </n-space>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { Grid24Regular as GridIcon, TextBulletListTree24Regular as TreeIcon } from '@vicons/fluent';

  import { formatMonthYear } from '../utils/date';
  import { projectData, Project } from '../data/projects';

  type ViewMode = 'tree' | 'grid';
  const viewMode = ref<ViewMode>((localStorage.getItem('viewMode') as ViewMode) || 'tree');

  watch(viewMode, (newMode) => {
    localStorage.setItem('viewMode', newMode);
  });

  interface TreeProjectOption {
    label: string;
    key: string;
    isLeaf?: boolean;
    children?: TreeProjectOption[];
  }

  const selectedProjectKey = ref<string | null>(null);

  const activeTags = ref<string[]>([]);

  const projects = ref<Project[]>(projectData);

  import { useAvif } from '../composables/useAvif';
  const { deriveAvifPath } = useAvif();

  interface DisplayProject extends Project { avifSrc: string; originalSrc: string }
  const failedAvif = ref<Set<string>>(new Set());
  
  const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  const treeData = computed(() => {
    const groups: Record<string, TreeProjectOption[]> = {};
    filteredProjects.value.forEach(p => {
      const year = new Date(p.date).getFullYear().toString();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push({
        label: p.name,
        key: p.name,
        isLeaf: true
      });
    });
    
    return Object.keys(groups)
      .sort((a, b) => Number(b) - Number(a))
      .map(year => ({
        label: year,
        key: `year-${year}`,
        children: groups[year]
      }));
  });



  function handleTreeSelect(keys: Array<string | number>, option: Array<any>) {
    if (keys.length > 0) {
      const selectedOption = option[0];
      if (selectedOption?.isLeaf) {
        selectedProjectKey.value = selectedOption.key as string;
        // Scroll to the specific project element
        const elementId = `project-${selectedOption.key}`;
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        selectedProjectKey.value = null;
      }
    } else {
      selectedProjectKey.value = null;
    }
  }

  const filteredProjects = computed(() => {
    if (activeTags.value.length === 0) {
      return sortedProjects.value;
    }
    return sortedProjects.value.filter(project =>
      activeTags.value.every(tag => project.keywords.includes(tag))
    );
  });

  const displayedProjects = computed<DisplayProject[]>(() => {
    return filteredProjects.value.map(p => {
      const explicitIsAvif = p.src.toLowerCase().endsWith('.avif');
      const avifCandidate = explicitIsAvif ? p.src : deriveAvifPath(p.src);
      return { ...p, avifSrc: avifCandidate, originalSrc: p.src };
    });
  });

  function onImageAvifFail(project: DisplayProject) {
    if (!failedAvif.value.has(project.name)) {
      const s = new Set(failedAvif.value);
      s.add(project.name);
      failedAvif.value = s;
    }
  }
  function onVideoAvifFail(project: DisplayProject) {
    if (!failedAvif.value.has(project.name)) {
      const s = new Set(failedAvif.value);
      s.add(project.name);
      failedAvif.value = s;
    }
  }

  function toggleTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index === -1) {
      activeTags.value.push(tag);
    } else {
      activeTags.value.splice(index, 1);
    }
  }

  function removeTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index > -1) {
      activeTags.value.splice(index, 1);
    }
  }

  function clearAllFilters() {
    activeTags.value = [];
  }
</script>

<style scoped lang="sass">
a
  text-decoration: none
  color: inherit

.toggle-wrapper
  display: flex
  justify-content: flex-end
  width: 100%
  margin-bottom: 16px
  position: relative
  z-index: 10

.sticky-filter-wrapper
  position: sticky
  bottom: 24px
  z-index: 100
  pointer-events: none
  display: flex
  justify-content: center
  margin-top: 24px

.filter-space
  pointer-events: auto
  display: inline-block

.glass-pill
  background: rgba(0, 0, 0, 0.4)
  backdrop-filter: blur(10px)
  padding: 8px 16px
  border-radius: 8px
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)

.keyword-tag
  cursor: pointer
  transition: opacity 0.2s
  &:hover
    opacity: 0.8

.card-image
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-video
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-content
  text-align: justify
  hyphens: auto

.card-header
  display: flex
  flex-direction: column

.card-title
  font-weight: bold
  font-size: 1.2em

.card-date
  font-size: 0.9em
  color: #888

.tree-view-container
  display: flex
  flex-direction: row
  gap: 32px
  max-width: 1200px
  margin: 0 auto
  padding: 24px
  padding-top: 0
  align-items: flex-start
  @media (max-width: 768px)
    padding: 12px
    padding-top: 0
    flex-direction: column
    margin: 0
    
.tree-sidebar
  flex: 0 0 250px
  background: var(--n-color-modal, rgba(0, 0, 0, 0.02))
  padding: 16px
  padding-top: 0
  border-radius: 8px
  position: sticky
  top: 24px
  height: max-content
  max-height: calc(100vh - 48px)
  overflow-y: auto
  @media (max-width: 768px)
    flex: none
    width: 100%
    position: static
    
.tree-content
  flex: 1
  min-width: 0

.project-details
  padding: 16px 0
  margin-bottom: 64px
  border-bottom: 1px solid var(--n-border-color, rgba(0, 0, 0, 0.1))
  &:last-child
    border-bottom: none
    margin-bottom: 32px

.post-date
  font-weight: 600
  font-size: 1.1em
  opacity: 0.7
  margin-bottom: 8px

.post-title
  font-size: 2em
  font-weight: bold
  margin-bottom: 24px
  line-height: 1.2

.project-media
  width: 100%
  max-height: 600px
  object-fit: cover
  border-radius: 8px
  cursor: pointer
  margin-bottom: 24px
  transition: transform 0.2s ease
  &:hover
    transform: scale(1.01)

.project-desc
  font-size: 1.1em
  line-height: 1.6
  opacity: 0.9
  margin-bottom: 24px

.project-footer
  margin-top: 16px

.empty-selection
  display: flex
  justify-content: center
  align-items: center
  height: 400px
  opacity: 0.7
</style>
