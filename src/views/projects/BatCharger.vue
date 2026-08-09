<template>
  <ProjectTemplate id="bat-charger" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      Since I somehow accumulated dozens of reclaimed vape cells (my own and the ones people kept giving me), 
      I needed a compact module that could safely charge a Li-ion cell, provide protection, and ideally bypass the battery when powered from USB.
      The circuit is built around the classic TP4056 Li-ion charger IC paired with a FS312MH protection chip - which handles undervoltage cutoff around 3 V.
      I designed this board in order to test the concept first, before integrating it in other projects. </n-p>
    <n-p>
      That said i've used it in projects like 
      <router-link :to="{ name: 'comando-rita' }"><n-a>Rita's Garage Door Opener</n-a></router-link> and my
      <router-link :to="{ name: 'toDo' }"><n-a>Desk Vaccuum</n-a></router-link>, 
      and only recently, integrated it into the <router-link :to="{ name: 'netscore' }"><n-a>Netscore</n-a></router-link>
      project, I noticed a small but significant oversight: the BAT- trace was routed incorrectly, effectively bypassing the FS312MH undervoltage protection. 
      Not ideal, but easily fixed in the next revision (in Netscore's case i just rerouted the pcb traces with some jumper wires, but fixed it for good in the next revision).
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>LEDS: <span class="squid-text-alt">One shows charging status, another indicates full charge.</span></n-li>
      <n-li>Adjustable Current: <span class="squid-text-alt">Charging current can be adjusted with the use of a resistor.</span></n-li>
      <n-li>Battery Protection: <span class="squid-text-alt">Undervoltage, overcharge, and over-current/short-circuit protection via FS312MH controller and dual MOSFET.</span></n-li>
      <n-li>Safe USB bypass: <span class="squid-text-alt">When powered from USB, the battery can be safely charged and is "removed" from the circuit.</span></n-li>
      <n-li>Reusable power block: <span class="squid-text-alt">Can be integrated into various projects as a standalone charging and protection module.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Charging: <span class="squid-text-alt">TP4056 CC/CV linear charger IC</span></n-li>
      <n-li>Protection: <span class="squid-text-alt">FS312MH under/overvoltage protection controller and dual MOSFET.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      Here the main lesson to be taken is to double-check your work - even though the circuit might seem to be working - the protection is bypassed due to a routing mistake.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <!-- <n-li><n-a href="toDo.com" target="_blank">[GitHub Repository]</n-a></n-li> -->
      <n-li><n-a href="bat-charger/info/Bujqm.png" target="_blank" rel="noopener noreferrer">Reference #1</n-a></n-li>
      <n-li><n-a href="https://oshwlab.com/catech75/TP4056FLEXADV_v2_10-1636385dbe504ca9a2cfd3a7722e5bc7" target="_blank" rel="noopener noreferrer">Reference #2</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'image', src: 'bat-charger/images/PXL_20240326_195655690.jpg', description: 'assembled module' },
  { type: 'image', src: 'bat-charger/images/schematics/schematic.jpg', description: 'schematic - corrected version in use in ', linkTo: '/projects/netscore', linkLabel: 'Netscore' },
  { type: 'image', src: 'bat-charger/images/PXL_20240304_195547854.jpg', description: 'PCB design in kicad' },
  { type: 'image', src: 'bat-charger/images/pcb.jpg', description: 'front and back of the PCB' },
  { type: 'image', src: 'bat-charger/images/PXL_20240326_195701448.jpg', description: 'back after being populated' },
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'bc-pcb-v1.0',
    label: 'PCB v1.0',
    src: 'bat-charger/models/pcb/bat-charger-v1.0.glb'
  }
]);
</script>

<style scoped lang="sass">
</style>
