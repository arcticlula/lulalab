<template>
  <ProjectTemplate id="plant-sniffer" :media="media" :models="models">
  <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      This project was created in about a week to bring something personal to an Erasmus+ program focused on nature. 
      I'll admit - I really pushed hard on the last few days to get it done. The circuit was semi-planned and assembled on a perfboard 
      using pre-made modules (microcontroller, battery charger, and humidity sensor), which meant the 3D-printed enclosure that holds and 
      protects everything went through several iterations to get it right.
    </n-p>
    <n-p>
      The device has two inputs: a push button and the humidity sensor. It displays information on a round display, 
      allowing you to calibrate minimum values (when the soil is dry) and maximum values (after watering). 
      There are also three different visualization modes for humidity levels—the result is the same, but the animations vary.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Calibration System: <span class="squid-text-alt">Adjust minimum and maximum relative humidity values based on your specific plant and soil conditions.</span></n-li>
      <n-li>Animated Visualization: <span class="squid-text-alt">Measures relative humidity and displays the results on a circular screen using three different, distinct animations.</span></n-li>
      <n-li>Portable Design: <span class="squid-text-alt">Battery-powered with integrated charging module for convenience.</span></n-li>
      <n-li>Custom Enclosure: <span class="squid-text-alt">3D-printed frame designed to house perfboard-based circuit and modules.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Hardware: <span class="squid-text-alt">RP2040 microcontroller, capacitive soil moisture sensor, GC9A01 Round LCD, battery charging module.</span></n-li>
      <n-li>Software: <span class="squid-text-alt">Custom firmware written in C/C++ using the Arduino framework.</span></n-li>
      <n-li>3D Design: <span class="squid-text-alt">Onshape (multiple iterations to fit the perfboard assembly).</span></n-li>
      <n-li>Circuit Board Technique: <span class="squid-text-alt">Perfboard with pre-made modules.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      Working with a strict one-week time limit was the biggest challenge, especially since it required developing both the firmware and the hardware/3D structure simultaneously from scratch. 
      Using pre-made modules on a perfboard was a practical time-saver, but it also meant the enclosure design had to remain flexible, ultimately going through multiple revisions to fit everything together. 
      There were also additional complications on the software side: I had to figure out how to save images to the file system and load them as if they were a GIF, with the animation frame rate and style controlled directly by the real-time humidity level. 
      This project strongly reinforced the importance of modular design and the value of rapid prototyping when time is limited. Sometimes you just have to commit and push through on that last day to make it happen.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://github.com/arcticlula/Plant-Sniffer">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/f09e939da9b2461bcee0bb02/w/fad8a904ca1fb72f1758850a/e/9bfed1484d204b0a318f43eb?renderMode=0&uiState=69237d3c0628a6c66d000ea9">[OnShape]</n-a></n-li>
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
    src: 'plant-sniffer/videos/PXL_20230904_143511372.mp4',
    description: 'demo of the device through the calibration process'
  },
  { type: 'image', src: 'plant-sniffer/images/button.jpg', description: 'the button module build' },
  { type: 'image', src: 'plant-sniffer/images/perfboard_body.jpg', description: 'perfboard body with soldered modules' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_190110418.jpg', description: 'testing the display before soldering' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_190332076.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_191710199.jpg', description: '(hopefully) making all the connections before fitting the display' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_195810073.jpg', description: 'view from the back after display assembly' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_195818712.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230902_202053748.jpg', description: 'some testing before final assembly' },
  { type: 'image', src: 'plant-sniffer/images/no_pants.jpg', description: 'still missing it\'s pants' }
]);

const models = ref<ICascadeCategory[]>([
  {
  key: 'pl-assembly',
  label: 'Assembly',
  children: [
    {
      key: 'pl-assembly-v1.0',
      label: 'V1.0',
      children: [
        {
          key: 'pl-v1.0',
          label: 'v1.0',
          isGroup: true,
          children: [
            { key: 'pl-bottom-v1.0', label: 'Bottom', src: 'plant-sniffer/models/assembly/plant-sniffer-bottom-v1.0.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: -15, z: -10} },
            { key: 'pl-body-v1.0', label: 'Body', src: 'plant-sniffer/models/assembly/plant-sniffer-body-v1.0.stl', colorHex: '0xdcccec', explodeOffset: {x: 0, y: -15, z: 0} },
            { key: 'pl-top-v1.0', label: 'Top', src: 'plant-sniffer/models/assembly/plant-sniffer-top-v1.0.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: 0} },
            { key: 'pl-bth-v1.0', label: 'Battery Holder', src: 'plant-sniffer/models/assembly/plant-sniffer-bat-holder-v1.0.stl', colorHex: '0xdcccec', explodeOffset: {x: -10, y: 0, z: 0} },
            { key: 'pl-handle-v1.0', label: 'Handle', src: 'plant-sniffer/models/assembly/plant-sniffer-handle-v1.0.stl', colorHex: '0xdcccec', explodeOffset: {x: 10, y: 0, z: 0} }
          ]
        }
      ]
    }
  ]
},
{
  key: 'pl-parts',
  label: 'Parts',
  children: [
    {
      key: 'pl-bottom',
      label: 'Bottom',
      children: [
        { key: 'pl-bottom-v0.5', label: '0.5', src: 'plant-sniffer/models/plant-sniffer-bottom-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'pl-bottom-v0.9', label: '0.9', src: 'plant-sniffer/models/plant-sniffer-bottom-v0.9.stl', colorHex: '0xff7f00' },
        { key: 'pl-bottom-v1.0', label: '1.0', src: 'plant-sniffer/models/plant-sniffer-bottom-v1.0.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'pl-body',
      label: 'Body',
      children: [
        { key: 'pl-body-v1.0', label: '1.0', src: 'plant-sniffer/models/plant-sniffer-body-v1.0.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'pl-battery-holder',
      label: 'Battery Holder',
      children: [
        { key: 'pl-bth-v0.1', label: '0.1', src: 'plant-sniffer/models/plant-sniffer-bat-holder-v0.1.stl', colorHex: '0xff7f00' },
        { key: 'pl-bth-v0.5', label: '0.5', src: 'plant-sniffer/models/plant-sniffer-bat-holder-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'pl-bth-v0.8', label: '0.8', src: 'plant-sniffer/models/plant-sniffer-bat-holder-v0.8.stl', colorHex: '0xff7f00' },
        { key: 'pl-bth-v1.0', label: '1.0', src: 'plant-sniffer/models/plant-sniffer-bat-holder-v1.0.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'pl-handle',
      label: 'Handle',
      children: [
        { key: 'pl-handle-v0.5', label: '0.5', src: 'plant-sniffer/models/plant-sniffer-handle-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'pl-handle-v1.0', label: '1.0', src: 'plant-sniffer/models/plant-sniffer-handle-v1.0.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'pl-top',
      label: 'Top',
      children: [
        { key: 'pl-top-v0.1', label: '0.1', src: 'plant-sniffer/models/plant-sniffer-top-v0.1.stl', colorHex: '0xff7f00' },
        { key: 'pl-top-v0.5', label: '0.5', src: 'plant-sniffer/models/plant-sniffer-top-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'pl-top-v0.51', label: '0.51', src: 'plant-sniffer/models/plant-sniffer-top-v0.51.stl', colorHex: '0xff7f00' },
        { key: 'pl-top-v0.8', label: '0.8', src: 'plant-sniffer/models/plant-sniffer-top-v0.8.stl', colorHex: '0xff7f00' },
        { key: 'pl-top-v1.0', label: '1.0', src: 'plant-sniffer/models/plant-sniffer-top-v1.0.stl', colorHex: '0xff7f00' }
      ]
    }]
}
]);
</script>

<style scoped lang="sass">
</style>
