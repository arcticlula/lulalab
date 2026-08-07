<template>
  <ProjectTemplate id="better-courts" :media="media">
    <n-alert title="Deprecated" type="warning">
      I have to preface this by saying this project is marked as deprecated since the <n-a href="https://www.aircourts.com/" target="_blank">AirCourts</n-a> API it relied on is available, but no longer in use - it has been replaced by <n-a href="https://www.playtomic.com/" target="_blank">Playtomic</n-a>.
    </n-alert>
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      Once upon a time, scheduling football or padel courts in Portugal was done through the AirCourts app. 
      Since I had to use it weekly - and was never a fan of their slow and cluttered schedule search - I built 
      my own optimized interface on top of their API.  
      To bypass CORS restrictions, the project used a publicly available reverse-proxy service, which proved more 
      than sufficient for the intended usage - in order to stay within the usage limits.  
      With this setup, it became easy to present the most relevant information upfront, such as club contacts 
      and location maps, which were harder to access - even impossible sometimes - in the original app.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Search: 
        <n-ul>
          <n-li>Default values: <span class="squid-text-alt">Pre-selected options for quick filtering - location, sport, current date/time and duration.</span></n-li>
          <n-li>Courts: <span class="squid-text-alt">Possibility of filtering courts by their availability of services like Urban Sports, or individual courts for Padel for example.</span></n-li>
          <n-li>Sorting: <span class="squid-text-alt">Sorted available courts by proximity to the chosen hour - aircourts listed results by courts and not time slots.</span></n-li>
        </n-ul>
      </n-li>
      <n-li>Settings: <span class="squid-text-alt">Ability to save last chosen sport, court type, and other preferences.</span></n-li>
      <n-li>Useful extra data: <span class="squid-text-alt">Club contacts, map integration, and a link to directly make a reservation in AirCourts.</span></n-li>
      <n-li>Responsive UI: <span class="squid-text-alt">Built with both mobile and desktop in mind.</span></n-li>
      <n-li>Reverse Proxy: <span class="squid-text-alt">Direct querying of the AirCourts backend via a reverse proxy to avoid CORS issues.</span></n-li>
      <n-li>Progressive Web App: <span class="squid-text-alt">Possibility to install as a web application on desktop and mobile.</span></n-li>
    </n-ul> 
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Language: <span class="squid-text-alt">TypeScript</span></n-li>
      <n-li>Framework: <span class="squid-text-alt">Vue.js 3 with the Composition API</span></n-li>
      <n-li>UI Library: <span class="squid-text-alt">Naive UI</span></n-li>
      <n-li>State Management: <span class="squid-text-alt">Pinia</span></n-li>
      <n-li>Deployment: <span class="squid-text-alt">Firebase Hosting</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The main challenge in this project was working with an unofficial API, which meant dealing with potential changes that could break functionality. 
      Additionally, implementing a reverse proxy was a little tricky for which i opted to use a public service to avoid hosting my own.
      I was a bit lucky i had some screenshots of the app while Aircourts was still active, or it would not be possible to show certain features now.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://better-courts.web.app/" target="_blank">[BetterCourts - search not working as expected]</n-a></n-li>
      <n-li><n-a href="https://github.com/arcticlula/Better-Courts" target="_blank">[GitHub Repository]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'better-courts/videos/screen-20251126-195515.mp4', description: 'mobile screen recording - search UI' },
  { type: 'image', src: 'better-courts/images/Screenshot_2025-11-26-201436.jpg', description: 'desktop UI' },
  { type: 'image', src: 'better-courts/images/Screenshot_20220721-134800.jpg', description: 'results view for padel' },
  { type: 'image', src: 'better-courts/images/Screenshot_20220808-142725.jpg', description: 'results view for football - notice how the same court repeats but in different time slots' },
  { type: 'image', src: 'better-courts/images/Screenshot_20220808-143031.jpg', description: 'view after opening a result - you can click the first button to make a reservation in AirCourts' },
]);

</script>

<style scoped lang="sass">
</style>
