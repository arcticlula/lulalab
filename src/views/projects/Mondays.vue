<template>
  <ProjectTemplate id="mondays" :media="media">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      An app to record and analyze the stats from our weekly soccer games — goals, assists, wins, and more.
      Originally built with SQL and a Node.js backend, it was later completely rebuilt using Firebase (NoSQL) to run entirely on the frontend.
      It uses Google Auth for login and color-coded result views per user participation (win, draw, loss).
      Users can browse season, month, or overall stats, with match pages showing per-goal summaries (minute, assist, timestamped video link),
      formations for both teams, and per-match player rankings.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>User-specific views with color-coded results.</n-li>
      <n-li>Detailed match summaries with timestamped video links.</n-li>
      <n-li>Team formations and per-match player stat rankings.</n-li>
      <n-li>Statistics filtering by season, month, or overall.</n-li>
      <n-li>Admin mode for match data input.</n-li>
      <n-li>Light and dark mode support.</n-li>
      <n-li>Frontend-only rebuild using Firebase.</n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li><span class="squid-text-alt">Nuxt.js (Vue)</span></n-li>
      <n-li><span class="squid-text-alt">Firebase: Firestore + Auth</span></n-li>
      <n-li><span class="squid-text-alt">Firebase Hosting</span></n-li>
      <n-li><span class="squid-text-alt">YouTube Linking (timestamped video references)</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      Migrating from a traditional SQL + Node.js backend to a fully serverless Firebase architecture required rethinking data modeling,
      access patterns, and performance impacts of document reads. It simplified hosting mostly (i very much like to not pay for servers) while improving iteration speed.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://segundas.web.app/" target="_blank">[Web App]</n-a></n-li>
      <n-li><n-a href="https://github.com/arcticlula/Mondays" target="_blank">[GitHub Repository]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'mondays/videos/desktop.mp4', description: "Desktop App demo" },
  { type: 'video', src: 'mondays/videos/mobile.mp4', description: "Mobile App demo" },
]);

</script>

<style scoped lang="sass">
</style>
