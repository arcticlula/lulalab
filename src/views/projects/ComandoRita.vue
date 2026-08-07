<template>
  <ProjectTemplate id="comando-rita" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
      My friend Rita was complaining that her garage door opener remote was discharging it's cell in about 1/2 weeks and she had to keep replacing it. 
      Since I love to overcomplicate and have plenty of Li-ion batteries and a small 3D printer, I offered to create an "add-on" to her remote.
    <n-p>
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Rechargeable Battery: <span class="squid-text-alt">Integrated Li-ion battery with <router-link :to="{ name: 'bat-charger' }"><n-a>charging module</n-a></router-link>.</span> </n-li>
      <n-li>Unintended bright color: <span class="squid-text-alt">Bright color scheme - helpful when trying to find your remote in the nighttime.</span></n-li>
      <n-li>Custom Enclosure: <span class="squid-text-alt">3D-printed two-piece design that fits in the bottom of the original remote.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The main difficulty and what took most time here was the design and fitting of the enclosure. It went through multiple revisions but i'm pretty happy with the final result.
      Also it's working great after months of daily use, think she only had to charge it once or twice.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://cad.onshape.com/documents/31ffcb3308b75f2bb1ff166c/w/89548197c59ff9d997d42a71/e/d92636f035d145bb3223b620?renderMode=0&uiState=6925e08b2709d18bf33d0b58" target="_blank">[Onshape - v0.1]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/d91d14286b6a4806895b304f/w/b87763b473331137d6812daa/e/f6ecc14dfa3ab14ccd99145d?renderMode=0&uiState=6925f76e2709d18bf33d6de9" target="_blank">[Onshape - v1.0]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'comando-rita/videos/PXL_20240819_194017048.mp4', description: 'the final device' },
  { type: 'image', src: 'comando-rita/images/IMG-20240629-WA0000.jpg', description: 'this is what i had to begin with' },
  { type: 'image', src: 'comando-rita/images/PXL_20240818_221231460.jpg', description: 'added a simple LDO to regulate power, the white stuff is super glue' },
  { type: 'image', src: 'comando-rita/images/PXL_20240818_222616851.jpg', description: 'view from the back' },
  { type: 'image', src: 'comando-rita/images/PXL_20240818_222911372.jpg', description: 'frame screwed in place and wires routed through' },
  { type: 'image', src: 'comando-rita/images/PXL_20240818_224644668.jpg', description: 'battery + ', linkTo: '/projects/bat-charger', linkLabel: 'my charging module' },
  { type: 'image', src: 'comando-rita/images/PXL_20240818_233012353.jpg', description: 'snug fit but it worked!' },
  { type: 'image', src: 'comando-rita/images/final.jpg', description: 'the curves lined up pretty nicely' },
  { type: 'image', src: 'comando-rita/images/PXL_20240819_194327972.jpg', description: 'i\'m sure there were more revisions than what is shown' },
  { type: 'image', src: 'comando-rita/images/PXL_20240819_015024683.jpg', description: 'the previous version of the bottom print fit, just lacked height' },
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'cr-assembly',
    label: 'Assembly',
    children: [
      {
        key: 'cr-assembly-v1.0',
        label: 'v1.0',
        isGroup: true,
        children: [
          {
            key: 'cr-assembly-v1.0-group',
            label: 'v1.0',
            isGroup: true,
            children: [
              { key: 'cr-assembly-v1.0-bottom', label: 'Bottom', src: 'comando-rita/models/comando-bottom-v1.0.stl', colorHex: '0xff9900', explodeOffset: {x: 0, y: 0, z: -10} },
              { key: 'cr-assembly-v1.0-top', label: 'Top', src: 'comando-rita/models/comando-top-v1.0.stl', colorHex: '0x00ccd2', explodeOffset: {x: 0, y: 0, z: 10} },
            ]
          }
        ]
      },
      {
        key: 'cr-assembly-v0.01',
        label: 'v0.01',
        isGroup: true,
        children: [
          {
            key: 'cr-assembly-v0.01-group',
            label: 'v0.01',
            isGroup: true,
            children: [
              { key: 'cr-assembly-v0.01-bottom', label: 'Bottom', src: 'comando-rita/models/comando-bottom-v0.01.stl', colorHex: '0xff8800', explodeOffset: {x: 0, y: 0, z: -10} },
              { key: 'cr-assembly-v0.01-top', label: 'Top', src: 'comando-rita/models/comando-top-v0.01.stl', colorHex: '0x00b7bd', explodeOffset: {x: 0, y: 0, z: 10} },
            ]
          }
        ]
      }
    ]
  },
  {
    key: 'cr-enclosure',
    label: 'Enclosure',
    children: [
      {
        key: 'cr-bottom',
        label: 'Bottom',
        children: [
          { key: 'cr-bottom-v0.01', label: 'v0.01', src: 'comando-rita/models/comando-bottom-v0.01.stl', colorHex: '0xff8800' },
          { key: 'cr-bottom-v1.0', label: 'v1.0', src: 'comando-rita/models/comando-bottom-v1.0.stl', colorHex: '0xff9900' },
        ]
      },
      {
        key: 'cr-top',
        label: 'Top',
        children: [
          { key: 'cr-top-v0.01-stl', label: 'v0.01', src: 'comando-rita/models/comando-top-v0.01.stl', colorHex: '0x00b7bd' },
          { key: 'cr-top-v1.0', label: 'v1.0', src: 'comando-rita/models/comando-top-v1.0.stl', colorHex: '0x00ccd2' },
        ]
      },
    ]
  }
]);
</script>

<style scoped lang="sass">
</style>
