<template>
  <ProjectTemplate id="wtf" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      A handmade fuzz/distortion guitar pedal built on a custom PCB and housed in a 1590B enclosure.
      It includes two potentiometers (volume and gain) and two toggle switches to select different diode clipping types. 
      It features a 3PDT footswitch for true bypass and to save battery life, the circuit is designed to only power up when a guitar is plugged in, utilizing the extra 
      contact on the 6.3 mm jack to switch the 9V power. (don’t forget to unplug at the end!)
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Fuzz/Distortion effect pedal built on custom PCB.</n-li>
      <n-li>Drilled 1590B enclosure.</n-li>
      <n-li>Volume and gain controls.</n-li>
      <n-li>Switchable diode clipping: germanium, LED, silicon and two silicon diodes in series.</n-li>
      <n-li>3PDT true bypass.</n-li>
      <n-li>Auto power via input jack.</n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Components: <span class="squid-text-alt">Analog circuit with Germanium, LED, and silicon diodes for the distortion.</span></n-li>
      <n-li>Power: <span class="squid-text-alt">9V battery.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      Tuning the clipping combinations to get useful distortion tones required experimentation. 
      The physical assembly of the pedal presented the biggest hurdles. One major challenge was drilling the holes into the metal enclosure, though I was able to get some help with this from a dad's friend. 
      Additionally, managing the internal space became a significant issue—actually closing the enclosure was a big challenge because of the wire mess inside.
    </n-p>
    <n-p>The PCB was done in conjunction with two other distinct boards at the time - it was cheaper and fit the required dimensions.
      Out of curiosity, it was another pedal (a signal booster) and a USB SPI controller for a PS2 project (it will appear here eventually, not in this current form though).
    </n-p>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { ICascadeCategory, IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'image', src: 'wtf/images/cover.jpg', description: 'input jack and one of the diode switches' },
  { type: 'image', src: 'wtf/images/DSC_0892.jpg', description: 'output jack, other diode switch and mysterious hole' },
  { type: 'image', src: 'wtf/images/DSC_0893.jpg', description: 'the guts of the pedal - the wires i had at the time were way too thick' },
  { type: 'image', src: 'wtf/images/DSC_0894.jpg', description: 'view of the pcb' },
  { type: 'image', src: 'wtf/images/DSC_0895.jpg', description: 'everytime i open it i regret my life choices' },
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'wtf-pcb-v1.0',
    label: 'PCB v1.0',
    src: 'wtf/models/pcb/wtf.glb'
  }
]);

</script>

<style scoped lang="sass">
</style>
