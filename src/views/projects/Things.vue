<template>
  <ProjectTemplate id="things" :media="media">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      As you can notice i have a lot of projects going on, with different parts - a lot of parts - so i needed a way to keep track of everything.
      I bit the bullet and created a web app to keep track of everything inside my cabinets, drawers, and storage boxes. 
      It's essentially a digital inventory for all the random parts, objects, and things lying around, especially my collection of electronic parts. 
      While still a work in progress, it's already quite functional - the UX does need improvement but i wanted something quick to use (it was anything but quick to develop!). 
      Each storage space (like a drawer) can contain multiple containers or individual items, making it easy to quickly search for something and find its exact location. 
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Hierarchical Organization: <span class="squid-text-alt">Structure your inventory with boxes, cabinets, containers that can be nested inside each other.</span></n-li>
      <n-li>Fast Search: <span class="squid-text-alt">Quickly find the location of any logged item.</span></n-li>
      <n-li>Modern Interface: <span class="squid-text-alt">Clean and responsive UI built with the Naive UI component library.</span></n-li>
      <n-li>Live Deployment: <span class="squid-text-alt">Accessible as a hosted web application - you can check it out <n-a href="https://things-storage.web.app/" target="_blank">here</n-a> (no login needed, you can browse as a guest).</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Frontend Framework: <span class="squid-text-alt">Vue 3 (Composition API)</span></n-li>
      <n-li>Build Tool: <span class="squid-text-alt">Vite</span></n-li>
      <n-li>Language: <span class="squid-text-alt">TypeScript</span></n-li>
      <n-li>UI Library: <span class="squid-text-alt">Naive UI</span></n-li>
      <n-li>Database: <span class="squid-text-alt">Firebase Firestore</span></n-li>
      <n-li>Hosting: <span class="squid-text-alt">Firebase Hosting</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The primary design challenge for this project is creating a data structure that is flexible enough to handle various types of storage 
      (from a single box to multi-shelf cabinets) while keeping the user interface for adding and finding items fast and intuitive. 
      This project is an ongoing exploration in balancing data complexity with user experience for a practical personal utility application.
    </n-p>

    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li>
        <n-a href="https://things-storage.web.app/" target="_blank">[Web App]</n-a>
      </n-li>
      <n-li>
        <n-a href="https://github.com/arcticlula/things" target="_blank">[GitHub Repository]</n-a>
      </n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'things/videos/cover.mp4', description: "App demo" },
]);

</script>

<style scoped lang="sass">
</style>
