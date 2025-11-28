<template>
  <ProjectTemplate id="home-openscad" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      This was a quick project I took on around the time I got my first 3D printer (and had plenty of time thanks to the COVID lockdown). 
      I wanted to learn parametric modeling, and I thought the furniture in our house would be a great subject. 
      It turned into a fun shared project with my mom, who started painting the real pieces while I was modeling their digital counterparts. 
      Each model was built from scratch using real measurements, though I took some creative freedom for softer shapes like the sofas. 
      The collection includes desks, shelves, cabinets, and other everyday furniture.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Parametric: <span class="squid-text-alt">Models built with parametric dimensions, allowing for easy scaling and modification.</span></n-li>
      <n-li>Code-Based Modeling: <span class="squid-text-alt">Modeled entirely in OpenSCAD, representing physical objects through code.</span></n-li>
      <n-li>Real-World Based: <span class="squid-text-alt">Dimensions and designs based on actual furniture measurements and photos.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>CAD Design: <span class="squid-text-alt">OpenSCAD for parametric, code-based 3D modeling.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The main challenge was accurately representing complex and soft shapes, like sofas, using a purely programmatic CAD tool like OpenSCAD. 
      This required creative problem-solving to approximate organic forms with geometric primitives. 
      This project was an excellent introduction to parametric design and the unique workflow of "programming" physical objects.
    </n-p>
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
    description: 'printing the sofa'
  },
  { type: 'image', src: 'home-scad/images/IMG-20200428-WA0016.jpg', description: 'old photo designing the sofa in OpenSCAD' },
  { type: 'image', src: 'home-scad/images/IMG-20200429-WA0002.jpg', description: 'some of the prints at the time' },
  { type: 'image', src: 'home-scad/images/IMG-20200429-WA0007.jpg', description: 'my parent\'s living room' },
  { type: 'image', src: 'home-scad/images/IMG_20200430_113830.jpg', description: 'some size iterations' }
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'hs-speaker',
    label: 'Speaker',
    src: 'home-scad/models/coluna-sala-30.stl',
    colorHex: '0x040404'
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
