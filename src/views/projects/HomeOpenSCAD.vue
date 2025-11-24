<template>
  <ProjectTemplate id="home-openscad" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      This OpenSCAD project was a comprehensive design exercise for home furnishings and fixtures. 
      The collection includes various pieces designed with precise parametric modeling, from seating to storage solutions.
      Each piece was carefully crafted to explore spatial relationships and fabrication possibilities. 
      This project represents a significant body of work in 3D furniture design using parametric modeling techniques. 
    </n-p>
    <n-p class="squid-semi-title">Furniture Collection</n-p>
    <n-ul>
      <n-li>Speaker: <span class="squid-text-alt">Living room speaker design</span></n-li>
      <n-li>Bookcase: <span class="squid-text-alt">Storage solution for books and displays</span></n-li>
      <n-li>TV Stand Drawer: <span class="squid-text-alt">Drawer component for TV entertainment unit</span></n-li>
      <n-li>TV Stand: <span class="squid-text-alt">Main TV entertainment unit</span></n-li>
      <n-li>Dining Room Table: <span class="squid-text-alt">Large dining surface</span></n-li>
      <n-li>Support Table: <span class="squid-text-alt">Auxiliary side table</span></n-li>
      <n-li>Puff: <span class="squid-text-alt">Ottoman seating</span></n-li>
      <n-li>Sofa (Large): <span class="squid-text-alt">Main seating furniture</span></n-li>
      <n-li>Armchair: <span class="squid-text-alt">Compact seating piece</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Design Approach</n-p>
    <n-p>
      All pieces were designed using OpenSCAD, a script-based CAD program that emphasizes parametric design. 
      This approach allows for precise control over dimensions and enables rapid iteration and adaptation. 
      The design philosophy prioritized both form and function, with each piece considering spatial relationships and practical use cases.
    </n-p>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>CAD Design: <span class="squid-text-alt">OpenSCAD</span></n-li>
      <n-li>Approach: <span class="squid-text-alt">Parametric modeling</span></n-li>
      <n-li>Output Format: <span class="squid-text-alt">STL for 3D visualization</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="toDo">[GitHub Repository]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  {
    type: 'video',
    src: 'home-scad/videos/VID_20200501_205604.mp4',
  },
  { type: 'image', src: 'home-scad/images/IMG-20200428-WA0016.jpg', description: 'Early speaker enclosure concept' },
  { type: 'image', src: 'home-scad/images/IMG-20200428-WA0018.jpg', description: 'Bookcase module parametric layout' },
  { type: 'image', src: 'home-scad/images/IMG-20200429-WA0002.jpg', description: 'TV stand structural framing in OpenSCAD' },
  { type: 'image', src: 'home-scad/images/IMG-20200429-WA0007.jpg', description: 'Dining table proportional study' },
  { type: 'image', src: 'home-scad/images/IMG-20200507-WA0010.jpg', description: 'Support table leg joinery view' },
  { type: 'image', src: 'home-scad/images/IMG_20200430_113830.jpg', description: 'Armchair and puff scale reference' }
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'hs-speaker',
    label: 'Speaker',
    src: 'home-scad/models/coluna-sala-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-bookcase',
    label: 'Bookcase',
    src: 'home-scad/models/estante-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-tv-drawer',
    label: 'TV Stand Drawer',
    src: 'home-scad/models/gaveta-movel-tv-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-tv-stand',
    label: 'TV Stand',
    src: 'home-scad/models/movel-tv-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-dining-table',
    label: 'Dining Room Table',
    src: 'home-scad/models/mesa-sala-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-support-table',
    label: 'Support Table',
    src: 'home-scad/models/mesinha-sala-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-puff',
    label: 'Puff',
    src: 'home-scad/models/puff-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-sofa-large',
    label: 'Sofa (Large)',
    src: 'home-scad/models/sofa-grande-30.stl',
    colorHex: '0xff7f00'
  },
  {
    key: 'hs-armchair',
    label: 'Armchair',
    src: 'home-scad/models/sofa-pequeno-30.stl',
    colorHex: '0xff7f00'
  }
]);
</script>

<style scoped lang="sass">
</style>
