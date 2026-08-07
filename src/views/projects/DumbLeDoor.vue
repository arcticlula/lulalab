<template>
  <ProjectTemplate id="dumb-le-door" :media="media">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      Named as a joke — “dumb le door” (no more) — this was a small hack to make an old intercom do slightly smarter things. 
      I tapped into the existing intercom lines and added a microcontroller so the system can detect a call, 
      pick up simple user input (think: a short code entered at the entrance), and trigger the door's lock — the main goal being to release the lobby door when the right code is entered.
    </n-p>
    <n-p>
      The priority was keeping the install as non-invasive as possible: work with the existing wiring and avoid modifying the intercom itself whenever feasible - tapping the lines proved to be enough for most situations.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Reverse-engineer + augment legacy intercoms</n-li>
      <n-li>Microcontroller for detection, signal injection, and control</n-li>
      <n-li>Detects calls and simple keypad/code input to trigger actions - open the door</n-li>
      <n-li>Non-invasive as possible, compatible with existing wiring</n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Controller: <span class="squid-text-alt">ESP32-S2</span></n-li>
      <n-li>Signal Conditioning: <span class="squid-text-alt">TLP627 Optocouplers - to isolate signals from the microcontroller</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      When testing most of the features, the biggest challenge really was that i could not be in two places at the same time. 
      Since the main unit is at my apartment entrance, i had to go up and down multiple times to capture the signals in my oscilloscope, which complicated debugging a bit.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li>Build notes and details are on the <n-a href="https://hackaday.io/project/203886-dumbledoor" target="_blank">[Hackaday]</n-a> page.</n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'dumb-le-door/videos/PXL_20250902_143514640.mp4', description: 'first test - press to enter to see if the signal was being captured' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250828_155309347.jpg', description: 'my intercom - BPT 200' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20240912_145124867.MP.jpg', description: 'screw terminal behind the unit' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250828_155556007.jpg', description: 'tapping the receiver\'s wires' },
  { type: 'video', src: 'dumb-le-door/videos/PXL_20250827_161411748.mp4', description: 'testing each line with the osciloscope' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250828_095239043.jpg', description: 'variable resistor - creates voltage divider with the internal line\'s resistance' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250828_134725802.jpg', description: 'after finding resistor values - one button opens audio channel, the other unlocks door' },
  { type: 'video', src: 'dumb-le-door/videos/PXL_20240926_171021956.mp4', description: 'aquiring lobby door signal - yellow is the signal, blue after passing through the optocoupler' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250903_194359003.jpg', description: 'perfboard build, also tagged the lines with colored labels' },
  { type: 'image', src: 'dumb-le-door/images/PXL_20250914_205136132.jpg', description: 'it\'s been a while since the osciloscope left the kitchen' }
]);

</script>

<style scoped lang="sass">
</style>
