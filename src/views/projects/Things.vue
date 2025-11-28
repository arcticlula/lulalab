<template>
  <ProjectTemplate id="things">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      A simple web app to keep track of everything inside my cabinets, drawers, and storage boxes — essentially a personal digital inventory for all the random things lying around, especially electronic parts. While still a work in progress, it's already quite functional. Each storage space (like a drawer) can contain multiple containers or individual items, making it easy to quickly search for something and find its exact location. The app is built with a modern frontend stack and hosted on Firebase.
    </n-p>
    <n-p><em>(A screenshot of the app's interface would be perfect here, showing the organization of items and containers.)</em></n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li><span class="squid-text-alt">Hierarchical organization with spaces, containers, and items.</span></n-li>
      <n-li><span class="squid-text-alt">Fast search to locate any logged item.</span></n-li>
      <n-li><span class="squid-text-alt">Modern, clean interface using Naive UI components.</span></n-li>
      <n-li><span class="squid-text-alt">Hosted live as a web application.</span></n-li>
      <n-li><span class="squid-text-alt">Work in progress with iterative improvements.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li><span class="squid-text-alt">Vue 3 (Composition API)</span></n-li>
      <n-li><span class="squid-text-alt">Vite</span></n-li>
      <n-li><span class="squid-text-alt">TypeScript</span></n-li>
      <n-li><span class="squid-text-alt">Naive UI</span></n-li>
      <n-li><span class="squid-text-alt">Firebase Hosting</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The main design challenge is creating a data structure flexible enough to handle various storage scenarios (from a single box to a multi-shelf cabinet) while keeping the UI for adding and finding items fast and intuitive. It’s an ongoing balance between modeling complexity and user experience for a practical personal tool.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://things-storage.web.app/#/" target="_blank">[Live Demo]</n-a></n-li>
      <n-li><n-a href="https://github.com/arcticlula/Things" target="_blank">[GitHub Repository]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import ProjectTemplate from '../../components/ProjectTemplate.vue';

</script>

<style scoped lang="sass">
</style>
