<template>
  <ProjectTemplate id="foosball-goal-counter" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      Sometime after I started working at Fujifilm, they got a foosball table for the office. 
      After a few games and some shoddy manual scorekeeping, I decided to build an automated goal counter. 
      I placed two sensors inside the table — one on each internal return ramp. 
      This setup ensures a goal is only counted if the ball fully enters the goal and rolls down the ramp. 
      While it introduces a slight delay before the score updates, it perfectly protects the sensors from hard shots 
      ("estouros") and prevents false positives from balls that bounce in and right back out.
    </n-p>

    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Reliable Goal Detection: <span class="squid-text-alt">Uses sensors mounted on the internal return ramps to prevent false positives from bounce-outs and protect the hardware from direct ball impacts.</span></n-li>
      <n-li>Interactive Display: <span class="squid-text-alt">Features a screen and a 3-button control system (two for navigating, one to confirm) to manage the game.</span></n-li>
      <n-li>Buzzer: <span class="squid-text-alt">The device makes a noise every time a goal is scored - always a good thing to have.</span></n-li>
      <n-li>Iconic Goal Animations: <span class="squid-text-alt">Whenever a goal is scored, the display plays a random GIF animation based on real, iconic soccer goals.</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Sensors: <span class="squid-text-alt">Infrared (IR) sensors.</span></n-li>
      <n-li>Hardware: <span class="squid-text-alt">Raspberry Pi Pico (RP2040) devboard with a display and buttons, plus an accessory board that links the two sensors to the main board.</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The initial design used ultrasonic sensors to detect the ball, but I realized that was overly complex since the system didn't actually need to measure distance. 
      I switched to infrared sensors for their simplicity and reliability in just detecting whether the ball passed by the ramp. 
      Additionally, figuring out the physical sensor placement was a great lesson - mounting them in the return ramp safely solved the durability and false-positive issues.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://github.com/arcticlula/Foosball-Goal-Counter" target="_blank">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/4683c4b6d39de78bfc648ef6/w/2488d772c582580a413f5cf2/e/75c2e6e559e4e5faf6c7c454?renderMode=0&uiState=69f2ad9414aa3d1eb141742e" target="_blank">[Onshape - v0.5]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/d4462fdf167e8bc97f4330b3/w/6413723d704b0ad613a4c582/e/822169a04f2c1a64f55fee10?renderMode=0&uiState=69f2adfcfb150cc2bdaa798c" target="_blank">[Onshape - v2.0]</n-a></n-li>
    </n-ul>

  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'foosball-goal-counter/videos/demo.mp4', description: 'demo of the completed device in action' },
  { type: 'video', src: 'foosball-goal-counter/videos/early-sensor-test.mp4', description: 'early sensor test - using the ultrasonic sensors instead of IR' },
  { type: 'image', src: 'foosball-goal-counter/images/IMG_20210408_112702.jpg', description: 'first sensor assembly' },
  { type: 'image', src: 'foosball-goal-counter/images/IMG-20210415-WA0016.jpg', description: 'breadboarded version' },
  { type: 'image', src: 'foosball-goal-counter/images/back-combined.jpg', description: 'prototype back' },
  { type: 'image', src: 'foosball-goal-counter/images/front-combined.jpg', description: 'prototype front' },
  { type: 'image', src: 'foosball-goal-counter/images/close-ups.jpg', description: 'prototype close ups' },
  { type: 'image', src: 'foosball-goal-counter/images/ramp-final-combined.jpg', description: 'final ramp design' },
  { type: 'image', src: 'foosball-goal-counter/images/PXL_20230815_211846080.jpg', description: 'the whole assembly (no enclosure)' },
  { type: 'image', src: 'foosball-goal-counter/images/device-combined.jpg', description: 'final device - messy but functional' },
  { type: 'image', src: 'foosball-goal-counter/images/DSC_0897.jpg', description: 'one more shot of the assembled device dissasembled' },
  { type: 'image', src: 'foosball-goal-counter/images/mistake-combined.jpg', description: 'mistake i can\'t quite remember now' },
  { type: 'video', src: 'foosball-goal-counter/videos/mistake.mp4', description: 'it happens' },
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'fgc-assembly',
    label: 'Assembly',
    children: [
      {
        key: 'fgc-assembly-enclosure',
        label: 'Enclosure',
        children: [
          {
            key: 'fgc-assembly-enclosure-v1.0',
            label: 'v1.0',
            isGroup: true,
            children: [
              { key: 'fgc-enclosure-bottom', label: 'Bottom', src: 'foosball-goal-counter/models/assembly/enclosure/matrecos-bottom.stl', colorHex: '0xff8800', explodeOffset: {x: 0, y: 0, z: -10} },
              { key: 'fgc-enclosure-top', label: 'Top', src: 'foosball-goal-counter/models/assembly/enclosure/matrecos-top.stl', colorHex: '0x00b7bd', explodeOffset: {x: 0, y: 0, z: 10} },
            ]
          }
        ]
      },
            {
        key: 'fgc-ramp-assembly-v2.2',
        label: 'Ramp v2.2',
        children: [
          {
            key: 'fgc-assembly-ramp-v2.2',
            label: 'v2.2',
            isGroup: true,
            children: [
              { key: 'fgc-ramp-assembly-v2.2-ramp-l', label: 'Left Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-ramp-l.stl', colorHex: '0x253fa6', explodeOffset: {x: 0, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v2.2-bridge', label: 'Bridge', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-bridge.stl', colorHex: '0x00aa55', explodeOffset: {x: 0, y: 0, z: 25} },
              { key: 'fgc-ramp-assembly-v2.2-ramp-r', label: 'Right Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v2.2/matrecos-ramp-r.stl', colorHex: '0x253fa6', explodeOffset: {x: 0, y: 0, z: 0} }
            ]
          }
        ]
      },
      {
        key: 'fgc-ramp-assembly-v0.5',
        label: 'Ramp v0.5',
        children: [
          {
            key: 'fgc-assembly-ramp-v0.5',
            label: 'v0.5',
            isGroup: true,
            children: [
              { key: 'fgc-ramp-assembly-v0.5-ramp-l', label: 'Left Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-ramp-l.stl', colorHex: '0x2f5ee6', explodeOffset: {x: -30, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-core-l', label: 'Left Core', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-core-l.stl', colorHex: '0x3366ff', explodeOffset: {x: -15, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-core-r', label: 'Right Core', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-core-r.stl', colorHex: '0x3366ff', explodeOffset: {x: 15, y: 0, z: 0} },
              { key: 'fgc-ramp-assembly-v0.5-ramp-r', label: 'Right Ramp', src: 'foosball-goal-counter/models/assembly/ramp/v0.5/matrecos-ramp-r.stl', colorHex: '0x2f5ee6', explodeOffset: {x: 30, y: 0, z: 0} }
            ]
          }
        ]
      }
    ]
  },
  {
    key: 'fgc-enclosure',
    label: 'Enclosure',
    children: [
      {
        key: 'fgc-case-bottom',
        label: 'Bottom',
        children: [
          { key: 'fgc-bottom-v1.0', label: 'v1.0', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.0.stl', colorHex: '0xff8800' },
          { key: 'fgc-bottom-v1.1', label: 'v1.1', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.1.stl', colorHex: '0xff8800' },
          { key: 'fgc-bottom-v1.2', label: 'v1.2', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v1.2.stl', colorHex: '0xff9900' },
          { key: 'fgc-bottom-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v2.0.stl', colorHex: '0xffa200' },
          { key: 'fgc-bottom-v2.1', label: 'v2.1', src: 'foosball-goal-counter/models/bottom/matrecos-bottom-v2.1.stl', colorHex: '0xffaa00' },
        ]
      },
      {
        key: 'fgc-case-top',
        label: 'Top',
        children: [
          { key: 'fgc-top-v0.1', label: 'v0.1', src: 'foosball-goal-counter/models/top/matrecos-top-v0.1.stl', colorHex: '0x00b7bd' },
          { key: 'fgc-top-v1.0', label: 'v1.0', src: 'foosball-goal-counter/models/top/matrecos-top-v1.0.stl', colorHex: '0x00c1c7' },
          { key: 'fgc-top-v1.1', label: 'v1.1', src: 'foosball-goal-counter/models/top/matrecos-top-v1.1.stl', colorHex: '0x00ccd2' },
        ]
      }
    ]
  },
  {
    key: 'fgc-sensor',
    label: 'Sensor',
    children: [
      {
        key: 'fgc-ramp',
        label: 'Ramp',
        children: [
          { key: 'fgc-ramp-v0.1', label: 'v0.1', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.1.stl', colorHex: '0x3366ff' },
          { key: 'fgc-ramp-v0.2', label: 'v0.2', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.2.stl', colorHex: '0x3366ff' },
          { key: 'fgc-ramp-v0.21', label: 'v0.21', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.21.stl', colorHex: '0x2f5ee6' },
          { key: 'fgc-ramp-v0.5', label: 'v0.5', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v0.5.stl', colorHex: '0x2f5ee6' },
          { key: 'fgc-ramp-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v2.0.stl', colorHex: '0x294fbf' },
          { key: 'fgc-ramp-v2.2', label: 'v2.2', src: 'foosball-goal-counter/models/ramp/matrecos-ramp-v2.2.stl', colorHex: '0x253fa6' },
        ]
      },
      {
        key: 'fgc-bridge',
        label: 'Bridge',
        children: [
          { key: 'fgc-bridge-v2.0', label: 'v2.0', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.0.stl', colorHex: '0x00aa55' },
          { key: 'fgc-bridge-v2.2', label: 'v2.2', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.2.stl', colorHex: '0x00aa55' },
          { key: 'fgc-bridge-v2.3', label: 'v2.3', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.3.stl', colorHex: '0x00994d' },
          { key: 'fgc-bridge-v2.4', label: 'v2.4', src: 'foosball-goal-counter/models/bridge/matrecos-bridge-v2.4.stl', colorHex: '0x008f48' },
        ]
      }
    ]
  }
]);
</script>

<style scoped lang="sass">
</style>
