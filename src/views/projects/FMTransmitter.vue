<template>
  <ProjectTemplate id="fm-transmitter" :media="media">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      One of my earlier projects was this simple monophonic FM transmitter, built "deadbug-style" based on an online schematic. 
      The frequency can be finely tuned with a variable capacitor, though finding the base frequency the first time was a challenge. 
      The entire circuit, which runs off a 9V battery, is housed in a metal cigar box. 
      Audio input is handled through a 6.3mm jack, making it easy to plug in almost any device - through the use of an adapter if needed. 
      My favorite use was connecting a guitar and "playing" directly through a nearby radio.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>FM Broadcasting: <span class="squid-text-alt">Broadcasts monophonic audio over the standard FM band. (95.70 MHz last time I checked.)</span></n-li>
      <n-li>Fine Tuning: <span class="squid-text-alt">Frequency adjustment via variable capacitor.</span></n-li>
      <n-li>Hand-Wound Inductor: <span class="squid-text-alt">Custom coil wound by hand for the LC oscillator circuit.</span></n-li>
      <n-li>Audio Input: <span class="squid-text-alt">6.3mm audio jack with a 6.3mm to 3.5mm adapter if needed.</span></n-li>
      <n-li>Portable Design: <span class="squid-text-alt">Self-contained unit powered by a 9V battery.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Construction: <span class="squid-text-alt">Deadbug-style point-to-point soldering.</span></n-li>
      <n-li>Components: <span class="squid-text-alt">Discrete transistors, resistors, capacitors, hand-wound inductor.</span></n-li>
      <n-li>Enclosure: <span class="squid-text-alt">Metal cigar box (with unintended consequences!).</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The biggest lesson from this project was in RF (Radio Frequency) design, specifically regarding enclosure materials. 
      Housing the circuit in a metal cigar box created a Faraday cage effect, which significantly interfered with the signal strength. 
      The transmitter only worked properly with the lid open, teaching me a valuable, practical lesson about how enclosure choices can 
      severly impact antenna performance and signal propagation.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://anarchy.translocal.jp/radio/micro/howtosimplestTX.html" target="_blank">[Original Schematic/Design]</n-a> - glad to see the original link still works!</n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'image', src: 'fm-transmitter/images/IMG_3957.jpg', description: 'only works with the lid open since i had the brilliant idea of housing the circuit in a metal box' },
  { type: 'image', src: 'fm-transmitter/images/IMG_3962.jpg', description: 'here we can kinda see the copper islands on top of the big copper ground plane' },
  { type: 'image', src: 'fm-transmitter/images/IMG_3963.jpg', description: 'front' },
  { type: 'image', src: 'fm-transmitter/images/IMG_3964.jpg', description: 'back' },
  { type: 'image', src: 'fm-transmitter/images/simplesttxstandard01.jpg', description: 'the circuit i based the design on - mine looks better no?' },
]);

</script>

<style scoped lang="sass">
</style>
