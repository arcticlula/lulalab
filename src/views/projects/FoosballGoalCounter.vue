<template>
  <ProjectTemplate id="foosball-goal-counter" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      This prototype was built to automatically record foosball goals without human input. The idea: guide the ball over a sensing "bridge" after each goal using a low-friction ramp, detect passage, then update and display the score in real time. I iterated through multiple mechanical versions to get reliable ball travel and sensor triggering while keeping the structure compact and printable.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Automated Detection: <span class="squid-text-alt">Ramp + bridge assembly channels the ball through a sensor region after every goal.</span></n-li>
      <n-li>Real-Time Scoring: <span class="squid-text-alt">Microcontroller logic updates and persists scores instantly.</span></n-li>
      <n-li>Modular Printed Parts: <span class="squid-text-alt">Separate ramp, case, and bridge components iterated across versions.</span></n-li>
      <n-li>Compact Electronics Bay: <span class="squid-text-alt">Internal area for controller and wiring.</span></n-li>
      <n-li>Progressive Mechanical Refinement: <span class="squid-text-alt">Multiple geometry tweaks for ball guidance consistency.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Mechanical: <span class="squid-text-alt">Custom 3D printed ramp, bridge, and enclosure parts.</span></n-li>
      <n-li>Electronics: <span class="squid-text-alt">Microcontroller + discrete sensing (future IR / hall expansion).</span></n-li>
      <n-li>Fabrication: <span class="squid-text-alt">FDM 3D printing with iterative CAD changes.</span></n-li>
      <n-li>Interface: <span class="squid-text-alt">Intended web/app display (prototype stage).</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      Achieving consistent ball travel required tuning surface angle, wall clearances, and entry alignment. Small geometry changes (like lip height or ramp curvature) had large effects on whether the ball would stall. Future improvements would integrate fully enclosed sensing and wireless score broadcast. Mechanical repeatability matters just as much as electronics for reliability.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="toDo" target="_blank">[GitHub Repository]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'foosball-goal-counter/videos/PXL_20230815_223158959.mp4', description: 'goal detection ramp test' },
  { type: 'video', src: 'foosball-goal-counter/videos/PXL_20230821_214233713.mp4', description: 'bridge sensor activation sequence' },
  { type: 'image', src: 'foosball-goal-counter/images/PXL_20230815_205930926.jpg', description: 'enclosure and ramp iteration' },
  { type: 'image', src: 'foosball-goal-counter/images/PXL_20230816_195004995.jpg', description: 'internal wiring layout' },
  { type: 'image', src: 'foosball-goal-counter/images/PXL_20230821_213421130.jpg', description: 'bridge component closeup' },
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'fgc-enclosure',
    label: 'Enclosure',
    children: [
      {
        key: 'fgc-case-bottom',
        label: 'Bottom',
        children: [
          { key: 'fgc-bottom-v1.0', label: 'v1.0', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.0.stl', colorHex: '0xff8800' },
          { key: 'fgc-bottom-v1.1', label: 'v1.1', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.1.stl', colorHex: '0xff8800' },
          { key: 'fgc-bottom-v1.2', label: 'v1.2', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.2.stl', colorHex: '0xff9900' },
          { key: 'fgc-bottom-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v2.0.stl', colorHex: '0xffa200' },
          { key: 'fgc-bottom-v2.1', label: 'v2.1', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v2.1.stl', colorHex: '0xffaa00' },
        ]
      },
      {
        key: 'fgc-case-top',
        label: 'Top',
        children: [
          { key: 'fgc-top-v0.1', label: 'v0.1', src: 'foosball-goal-counter/models/top/matrecos-top-v0.1.stl', colorHex: '0x00b7bd' },
          { key: 'fgc-top-v1.0', label: 'v1.0', src: 'foosball-goal-counter/models/top/matrecos-top-v1.0.stl', colorHex: '0x00c1c7' },
          { key: 'fgc-top-v1.1', label: 'v1.1', src: 'foosball-goal-counter/models/top/matrecos-top-v1.1.stl', colorHex: '0x00ccd2' },
        ]
      }
    ]
  },
  {
    key: 'fgc-sensor',
    label: 'Sensor',
    children: [
      {
        key: 'fgc-ramp',
        label: 'Ramp',
        children: [
          { key: 'fgc-ramp-v0.1', label: 'v0.1', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.1.stl', colorHex: '0x3366ff' },
          { key: 'fgc-ramp-v0.2', label: 'v0.2', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.2.stl', colorHex: '0x3366ff' },
          { key: 'fgc-ramp-v0.21', label: 'v0.21', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.21.stl', colorHex: '0x2f5ee6' },
          { key: 'fgc-ramp-v0.5', label: 'v0.5', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.5.stl', colorHex: '0x2f5ee6' },
          { key: 'fgc-ramp-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v2.0.stl', colorHex: '0x294fbf' },
          { key: 'fgc-ramp-v2.2', label: 'v2.2', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v2.2.stl', colorHex: '0x253fa6' },
        ]
      },
      {
        key: 'fgc-bridge',
        label: 'Bridge',
        children: [
          { key: 'fgc-bridge-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.0.stl', colorHex: '0x00aa55' },
          { key: 'fgc-bridge-v2.2', label: 'v2.2', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.2.stl', colorHex: '0x00aa55' },
          { key: 'fgc-bridge-v2.3', label: 'v2.3', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.3.stl', colorHex: '0x00994d' },
          { key: 'fgc-bridge-v2.4', label: 'v2.4', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.4.stl', colorHex: '0x008f48' },
        ]
      }
    ]
  },
  {
    key: 'fgc-assembly',
    label: 'Assembly',
    children: [
      {
        key: 'fgc-assembly-enclosure',
        label: 'Enclosure',
        children: [
          {
            key: 'fgc-assembly-enclosure-v1.0',
            label: 'v1.0',
            isGroup: true,
            children: [
              { key: 'fgc-enclosure-bottom', label: 'Bottom', src: 'foosball-goal-counter/models/assembly/enclosure/matrecos-bottom.stl', colorHex: '0xff8800', explodeOffset: {x: 0, y: 0, z: -10} },
              { key: 'fgc-enclosure-top', label: 'Top', src: 'foosball-goal-counter/models/assembly/enclosure/matrecos-top.stl', colorHex: '0x00b7bd', explodeOffset: {x: 0, y: 0, z: 10} },
            ]
          }
        ]
      },
      {
        key: 'fgc-ramp-assembly-v0.5',
        label: 'Ramp v0.5',
        children: [
          {
            key: 'fgc-assembly-ramp-v0.5',
            label: 'v0.5',
            isGroup: true,
            children: [
              { key: 'fgc-ramp-assembly-v0.5-ramp-l', label: 'Left Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-ramp-l.stl', colorHex: '0x2f5ee6', explodeOffset: {x: -30, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-core-l', label: 'Left Core', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-core-l.stl', colorHex: '0x3366ff', explodeOffset: {x: -15, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-core-r', label: 'Right Core', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-core-r.stl', colorHex: '0x3366ff', explodeOffset: {x: 15, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-ramp-r', label: 'Right Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-ramp-r.stl', colorHex: '0x2f5ee6', explodeOffset: {x: 30, y: 0, z: 0} }
            ]
          }
        ]
      },
      {
        key: 'fgc-ramp-assembly-v2.2',
        label: 'Ramp v2.2',
        children: [
          {
            key: 'fgc-assembly-ramp-v2.2',
            label: 'v2.2',
            isGroup: true,
            children: [
              { key: 'fgc-ramp-assembly-v2.2-ramp-l', label: 'Left Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-ramp-l.stl', colorHex: '0x253fa6', explodeOffset: {x: 0, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v2.2-bridge', label: 'Bridge', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-bridge.stl', colorHex: '0x00aa55', explodeOffset: {x: 0, y: 0, z: 25} },
              { key: 'fgc-ramp-assembly-v2.2-ramp-r', label: 'Right Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-ramp-r.stl', colorHex: '0x253fa6', explodeOffset: {x: 0, y: 0, z: 0} }
            ]
          }
        ]
      }
    ]
  }
]);
</script>

<style scoped lang="sass">
</style>
