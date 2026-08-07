<template>
  <ProjectTemplate id="netscore-v2" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      <router-link :to="{ name: 'netscore' }"><n-a>Netscore</n-a></router-link> is a scoreboard system designed to track game scores in real time using external Bluetooth buttons.
      While the original version worked well (well, after some fixes), the ESP32-S2 main controller lacked native Bluetooth - result of my initial choice of using the devices' 
      onboard buttons to update the score - it required a complex two-chip workaround, using an ESP32 to handle Bluetooth inputs and forward events to the main controller through ESP-NOW (wifi P2P). 

      For this new version, I completely overhauled the main board, upgrading to an ESP32-S3 to handle Bluetooth natively and eliminate the need for an external hub.
      I also took the opportunity to fix a few hardware bugs i had the first time around, like correcting the battery protection circuit, implementing an improved sound driver 
      and adding a real time clock for timekeeping.
      The display setup got a massive upgrade too: it has now a time display as well as the score, multiple leds to show extra info (sets in tennis mode, that the device is charging, etc.) 
      and, instead of the old single inline headers, the system now uses a new dual-row connector with a slot detection mechanism,
      allowing it to automatically drive either one or both display panels depending on what is plugged in no matter the orientation.
    </n-p>
    
    <n-p class="squid-semi-title">Scoreboard Simulation</n-p>
    <n-p>Press the buttons in the remotes to navigate and hold to enter the menus.</n-p>
    <iframe src="netscore-v2/component/index.html" class="netscore-iframe" scrolling="no" loading="lazy"></iframe>
    
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Native Bluetooth Control: Uses a single ESP32-S3 to handle ble score updates, streamlining the architecture and eliminating the redundant Bluetooth hub.</n-li>
      <n-li>Smart Display Configuration: Features a new slot detection system that automatically detects and seamlessly drives either one or both display panels - 
        also can be configured by the user on runtime.</n-li>
      <n-li>Upgraded Displays: The new display boards utilize a TLC5951 LED driver (24ch) and a 4-stage multiplexer to drive four additional 7-segment displays for timekeeping, 
        plus new LEDs for extra game information.</n-li>      
      <n-li>Hardware Improvements: Includes a corrected battery protection circuit and an improved sound driver for better audio feedback during matches - plus a series of hardware 
        bug fixes and quality of life improvements over the original version (also new bugs as its customary).</n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Main Controller: <span class="squid-text-alt">ESP32-S3 w/ external antenna</span></n-li>
      <n-li>Display Drivers: <span class="squid-text-alt">TLC5951 Constant-Current LED Driver + 4 MOSFET Driver Circuits (for multiplexing the 7-segment displays) </span></n-li>
      <n-li>Slot Muxing: <span class="squid-text-alt">74LVC1G3157 analog switch, there mainly so that a single display board works in either slot instead of only in slot A</span></n-li>
      <n-li>Sound: <span class="squid-text-alt">DRV8833 driving 2x Passive Buzzers</span></n-li>
      <n-li>Timekeeping: <span class="squid-text-alt">DS3231MZ Real Time Clock (RTC) + Coin Cell battery for backup</span></n-li>
      <n-li>Power: <span class="squid-text-alt">1S Li-ion, TP4056 charger + FS312MH protection + AP2112K-3.3 LDO (later swapped for a pin compatible 1A XC6220), 
        plus two software switched rails (VCC, 3.3V) so the displays draw nothing when off</span></n-li>
      <n-li>Programming: <span class="squid-text-alt">C/C++ (ESP-IDF)</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
      The original prototype taught me a good lesson in hardware specification, as I had to build a communication bridge via ESP-NOW to make up for the lack of native Bluetooth on the ESP32-S2.
      The V2 solved this fundamental issue by using an ESP32-S3, which greatly simplified the overall architecture - also made me think of other ways of using esp-now, 
      like mirroring the current device to another (if you want to have more displays spread around the court). 
      The hardware redesign also provided the perfect opportunity to address previous bugs, refine the buzzer driver so it sounds louder, and create a easier to assemble, 
      more robust display system with automatic slot detection.
    <n-p>
      As you can imagine it was not all fine and dandy. The DRV8833 was a major oversight by me, i originally wanted to use it just because i had it lying around and it was similair 
      to the two h-bridges i was thinking of using. The problem is that it's a motor driver, not a piezo driver - not ideal to drive capacitive loads. Driving the elements differentially 
      did double the swing over V1's direct drive, but it's still a square wave capped by the supply, so "volume" was really just duty cycle and the DRV fault led lit up even at low levels. 
      The AP2112K turned out to be undersized too - 600mA doesn't cover an S3 wifi burst on top of the display + the rest of the ICs load when the cell is already sagging. 
      I swapped in a pin compatible XC6220, and it did help a bit - but it didn't actually solve it, which was the hint that the problem was not only the regulator. 
      The RTC's VCC and VBAT pins were swapped in the schematic (see images above), some assembled boards had a routing problem on the power button (too small of a copper area in its footprint), 
      In the big display board, the four 0.8in digits got placed with the same pinout as the smaller 0.2in - lack of information in those 7 Segment digits product description and some hurry 
      to get this new ordered forced my hand. The adaptor board was made to solve this issue, it has a thickness of 0.8mm so its not so noticeable.
      There's also a possible ESP32-S3/TLC5951 brownout that normally shows up when esp-now, ble and the buzzer all fire at once - plus the display being driven at high brightness. 
      The second 74LVC3157 I added for the dot correction line turned out to be unnecessary as well: you can just tie DCSIN to the 
      LDO rail and write the dot correction register over GSSIN alone, which is what the datasheet tells you to do if you decide to eventually read it. 
      Most of that list is what the <router-link :to="{ name: 'netscore-v3' }"><n-a>third version</n-a></router-link> is for.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><router-link :to="{ name: 'netscore' }"><n-a>[Netscore V1.0]</n-a></router-link></n-li>
      <n-li><router-link :to="{ name: 'netscore-v3' }"><n-a>[Netscore V3.0]</n-a></router-link></n-li>
      <n-li><n-a href="https://github.com/arcticlula/Netscore">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/b77c65aa9f98b1a181901fda/w/c8c1eab4d3aef0fc975e9b81/e/b66468ba799907ee8e385394?renderMode=0&uiState=6a00b787cd669e2f9e178496">[Onshape]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'netscore-v2/videos/PXL_20260603_171300074.mp4', description: "fully assembled big display board variant - just navigating through the menus" },
  { type: 'video', src: 'netscore-v2/videos/PXL_20260629_154715389.mp4', description: "testing two devices in sync using esp-now, some delay had to be introduced in the transmission due to the power delivery problems" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260513_153514295.jpg', description: "small display board revision for v2.0, the digits are just too small to see from afar" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260412_173928073.MP.jpeg', description: "populated main board - before debugging and finding some routing bugs" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260512_152959163.jpg', description: "didn't take too long to find a bug, took a while to notice what was wrong and fix it" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260412_173937972.jpeg', description: "back of the main board - mainly correct except some of the slikscreen labels on the slots connectors" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260413_162252683.jpeg', description: "display board plugged into slot A, probing the data chain" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260412_173959254.jpeg', description: "populated small display board - four mux stages, one per scan phase, and the thumbwheel on the left" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260512_153354544.MP.jpg', description: "quick trip to the tanning salon to dry off the resin after the fix" },
  { type: 'image', src: 'netscore-v2/images/PXL_20260513_153605919.jpg', description: "assembled boards top view with both display boards slotted in" },
  { type: 'image', src: 'netscore-v2/images/DSC_0900.jpg', description: "what happens when you forget to add supports" },
]);

  const models = ref<ICascadeCategory[]>([
    {
      key: 'ns-pcb',
      label: 'PCB',
      children: [
        {
          key: 'ns-display-board',
          label: 'Display Board',
          children: [
            { key: 'ns-display-board-v1.0', label: '1.0', src: 'netscore-v2/models/pcb/display-board-v1.0.wrl', bareSrc: 'netscore-v2/models/pcb/display-board-v1.0-bare.wrl'}
          ]
        },
        {
          key: 'ns-big-display-board',
          label: 'Display Board Big',
          children: [
            { key: 'ns-big-display-board-v1.0', label: '1.0', src: 'netscore-v2/models/pcb/display-board-big-v1.0.wrl', bareSrc: 'netscore-v2/models/pcb/display-board-big-v1.0-bare.wrl'}
          ]
        },
        {
          key: 'ns-main-board',
          label: 'Main Board',
          children: [
            { key: 'ns-main-board-v1.0', label: '1.0', src: 'netscore-v2/models/pcb/main-board-v1.0.wrl', bareSrc: 'netscore-v2/models/pcb/main-board-v1.0-bare.wrl'}
          ]
        },
        {
          key: 'ns-adapter-board',
          label: 'Display Big Adapter Board',
          children: [
            { key: 'ns-adapter-board-v1.0', label: '1.0', src: 'netscore-v2/models/pcb/display-board-big-adaptor.wrl', bareSrc: 'netscore-v2/models/pcb/display-board-big-adaptor-bare.wrl'}
          ]
        }
      ]
    },
    {
      key: 'ns-assembly',
      label: 'Assembly',
      children: [
        /*{
          key: 'ns-assembly-v1.5',
          label: 'v1.0 Big',
          children: [
            {
              key: 'ns-v1.5',
              label: 'Full Assembly',
              isGroup: true,
              children: [
                { key: 'ns-handle-v1.5', label: 'Handle', src: 'netscore/models/assembly/v1.5/assembly-handle-v1.5.stl', colorHex: '0xf9e1a8', explodeOffset: {x: 0, y: 0, z: 20}},
                { key: 'ns-button-v1.5', label: 'Button', src: 'netscore/models/assembly/v1.5/assembly-btn-v1.5.stl', colorHex: '0xd6e5bd', explodeOffset: {x: 0, y: 0, z: 15}},
                { key: 'ns-bottom-v1.5', label: 'Bottom', src: 'netscore/models/assembly/v1.5/assembly-bottom-v1.5.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: -15}},
                { key: 'ns-body-v1.5', label: 'Body', src: 'netscore/models/assembly/v1.5/assembly-inner-body-v1.5.stl', colorHex: '0xbcd8ec', explodeOffset: {x: 0, y: 0, z: 0}},
                { key: 'ns-body-spacer-v1.5', label: 'Body spacer', src: 'netscore/models/assembly/v1.5/assembly-inner-body-spacer-v1.5.stl', colorHex: '0xf9e1a8', explodeOffset: {x: 0, y: 0, z: 3}},
                { key: 'ns-top-v1.5', label: 'Top', src: 'netscore/models/assembly/v1.5/assembly-top-v1.5.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: 10}}
              ]
            }
          ]
        },*/
        {
          key: 'ns-assembly-v1.0',
          label: 'v1.0',
          children: [
            {
              key: 'ns-v1.0',
              label: 'Full Assembly',
              isGroup: true,
              children: [
                { key: 'ns-addons-v1.0', label: 'Addons', src: 'netscore-v2/models/assembly/v1.0/assembly-addons-v1.0.stl', colorHex: '0xFAB601', explodeOffset: {x: 0, y: 0, z: 20}},
                { key: 'ns-top-v1.0', label: 'Top', src: 'netscore-v2/models/assembly/v1.0/assembly-top-v1.0.stl', colorHex: '0x83BC68', explodeOffset: {x: 0, y: 0, z: 10}},
                { key: 'ns-bottom-v1.0', label: 'Bottom', src: 'netscore-v2/models/assembly/v1.0/assembly-bottom-v1.0.stl', colorHex: '0x83BC68', explodeOffset: {x: 0, y: 0, z: -25}},
                { key: 'ns-body-v1.0', label: 'Body', src: 'netscore-v2/models/assembly/v1.0/assembly-body-v1.0.stl', colorHex: '0xFAB601', explodeOffset: {x: 0, y: 0, z: 0}},
                { key: 'ns-body-speaker-btn-v1.0', label: 'Speaker w/ Gap', src: 'netscore-v2/models/assembly/v1.0/assembly-speaker-btn-v1.0.stl', colorHex: '0xFAB601', explodeOffset: {x: 0, y: 0, z: 0}, explodeRotation: { x: 0, y: 0, z: 45 }, rotationPivot: { x: -2, y: 14.5, z: 0 }},
                { key: 'ns-body-speaker-v1.0', label: 'Speaker', src: 'netscore-v2/models/assembly/v1.0/assembly-speaker-v1.0.stl', colorHex: '0xFAB601', explodeOffset: {x: 0, y: 0, z: 0}, explodeRotation: { x: 0, y: 0, z: 45 }, rotationPivot: { x: 2, y: -14.5, z: 0 }}
              ]
            }
          ]
        },
        {
          key: 'ns-assembly-test-rig',
          label: 'Test Rig',
          children: [
            {
              key: 'ns-test-rig-v1.0',
              label: 'v1.0',
              isGroup: true,
              children: [
                { key: 'ns-test-rig-top-v1.0', label: 'Top', src: 'netscore-v2/models/assembly/test-rig/test-top-v1.2.stl', colorHex: '0xFAB601', explodeOffset: {x: 0, y: 0, z: 10}},
                { key: 'ns-test-rig-body-v1.0', label: 'Body', src: 'netscore-v2/models/assembly/test-rig/test-body-v1.1.stl', colorHex: '0xFF0000', explodeOffset: {x: 0, y: 0, z: 0}}
              ]
            }
          ]
        }
      ]
    },
    {
      key: 'ns-inner',
      label: 'Inner Structure',
      children: [
        {
          key: 'ns-inner-struct',
          label: 'Body',
          children: [
            { key: 'ns-inner-body-v1.0', label: '1.0', src: 'netscore-v2/models/inner/inner-body-v1.0.stl', colorHex: '0xff7f00'},
            { key: 'ns-inner-body-v1.1', label: '1.1', src: 'netscore-v2/models/inner/inner-body-v1.1.stl', colorHex: '0xff7f00'},
            { key: 'ns-inner-body-v1.5', label: '1.5', src: 'netscore-v2/models/inner/inner-body-v1.5.stl', colorHex: '0xff7f00'},
            { key: 'ns-inner-body-v1.6', label: '1.6', src: 'netscore-v2/models/inner/inner-body-v1.6.stl', colorHex: '0xff7f00'},
            { key: 'ns-inner-body-v1.7', label: '1.7', src: 'netscore-v2/models/inner/inner-body-v1.7.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'ns-inner-speaker-holder',
          label: 'Speaker Holder',
          children: [
            { key: 'ns-speaker-holder-v1.0', label: '1.0', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.0.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.1', label: '1.1', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.1.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.2', label: '1.2', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.2.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.3', label: '1.3', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.3.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.4', label: '1.4', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.4.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.5', label: '1.5', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.5.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-v1.6', label: '1.6', src: 'netscore-v2/models/inner/inner-speaker-holder-v1.6.stl', colorHex: '0xFAB601'},
            { key: 'ns-speaker-holder-centered-v1.0', label: 'Centered 1.0', src: 'netscore-v2/models/inner/inner-speaker-holder-centered-v1.0.stl', colorHex: '0xFAB601'}
          ]
        }
      ]
    },
    {
      key: 'ns-outer',
      label: 'Outer Shell',
      children: [
        {
          key: 'ns-top',
          label: 'Top',
          children: [
            { key: 'ns-top-v1.0', label: 'v1.0', src: 'netscore-v2/models/outer/outer-top-v1.0.stl', colorHex: '0xff7f00'},
            { key: 'ns-top-v1.1', label: 'v1.1', src: 'netscore-v2/models/outer/outer-top-v1.1.stl', colorHex: '0xff7f00'},
          ]
        },
        {
          key: 'ns-bottom',
          label: 'Bottom',
          children: [
            { key: 'ns-bottom-v1.0', label: 'v1.0', src: 'netscore-v2/models/outer/outer-bottom-v1.0.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'ns-addon',
          label: 'Addon',
          children: [
            { key: 'ns-addon-v1.0', label: 'v1.0', src: 'netscore-v2/models/outer/outer-addon-v1.0.stl', colorHex: '0xffff00'}
          ]
        },
        {
          key: 'ns-button',
          label: 'Button',
          children: [
            { key: 'ns-button-v1.0', label: 'v1.0', src: 'netscore/models/outer/btn-v1.0.stl', colorHex: '0x00ff00'}
          ]
        }
      ]
    },
    {
      key: 'ns-test-rig',
      label: 'Test Rig',
      children: [
        {
          key: 'ns-test-rig-body',
          label: 'Body',
          children: [
            { key: 'ns-test-rig-body-v1.0', label: 'v1.0', src: 'netscore-v2/models/test-rig/test-body-v1.0.stl', colorHex: '0xff7f00'},
            { key: 'ns-test-rig-body-v1.1', label: 'v1.1', src: 'netscore-v2/models/test-rig/test-body-v1.1.stl', colorHex: '0xff7f00'},
          ]
        },
        {
          key: 'ns-test-rig-top',
          label: 'Top',
          children: [
            { key: 'ns-test-rig-top-v1.0', label: 'v1.0', src: 'netscore-v2/models/test-rig/test-top-v1.0.stl', colorHex: '0xff7f00'},
            { key: 'ns-test-rig-top-v1.1', label: 'v1.1', src: 'netscore-v2/models/test-rig/test-top-v1.1.stl', colorHex: '0xff7f00'},
            { key: 'ns-test-rig-top-v1.2', label: 'v1.2', src: 'netscore-v2/models/test-rig/test-top-v1.2.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'ns-test-rig-front',
          label: 'Front',
          children: [
            { key: 'ns-test-rig-front-v1.0', label: 'v1.0', src: 'netscore-v2/models/test-rig/test-front-v1.0.stl', colorHex: '0xff7f00'}
          ]
        }
      ]
    }
  ]);
</script>

<style scoped lang="sass">
.netscore-iframe 
  width: 100%
  height: 690px
  border: none
  margin-top: 16px


@media (max-width: 768px) 
  .netscore-iframe
    height: 350px
</style>