<template>
  <ProjectTemplate id="netscore-v3" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      <router-link :to="{ name: 'netscore' }"><n-a>Netscore</n-a></router-link> is a scoreboard system designed to track game scores in real time using external Bluetooth buttons.
      A <router-link :to="{ name: 'netscore' }"><n-a>second version</n-a></router-link> was made to address the original version's main issues - the lack of native BLE, 
      underpowered piezo driver and the lack of proper physical buttons. One of the most requested features was to have a clock, also the score was not visible at a distance. 
      All of this was successfully implemented but countless hardware bugs plagued the project so a new version was in order.
    </n-p>
    <n-p>
      V3 is not a complete revamp of the architecture, V2 already got most of the stuff right, with everything centralized in an ESP32-S3 and two display slots that can be 
      populated in any combination. This one is about what went wrong on V2, the biggest culprits being the rtc power lines being swapped, 
      the power rails being undersized for the board requirements, a "real" piezo driver and a better way to interconnect the boards.
    </n-p>
    <n-p>
      Regarding power delivery, back on V2 i swapped the 600mA AP2112K for a pin compatible 1A XC6220 expecting that to be THE fix; it helped, but under some conditions 
      the TLC5951 still "crashed" - so the regulator wasn't the only bottleneck. So I added some bulk capacitance where relevant in both boards (close to the MCU and the TLC5951) 
      and power traces drawn wide enough to carry it.
    </n-p>      
      A piezo's loudness scales with how many volts you swing across it. 
      V1 drove it's buzzers from the VCC rail.
      V2 used a DRV8833 H-bridge which doubled the swing but is still a motor driver making square waves capped by the supply - so "volume" was really duty cycle, 
      and the fault led was always on when driving it.
      V3 uses a DRV8662, an actual piezo driver: it boosts internally to about 25V and its differential amplifier puts 40Vpp across the element, fed from the S3's
      sigma-delta peripheral so the amplitude is controlled instead of the duty cycle to regulate the volume.
    <n-p>
      The rest is a list of small corrections that add up. The three navigation buttons became a rotary encoder - the thumbwheel was too finnicky. 
      The 2x12 board-to-board headers became 30-pin 0.5mm FPC connectors, which makes the boards interconnection way easier (than trying to push pins in a socket in the dark) 
      and helps the enclosure design in many ways - doesn't need to be so precise, can create different arrangements with different cable lenghts, etc. 
      The dot correction chain got swapped out for the GSSOUT chain - DCSIN can just sit tied to the LDO rail while the dot correction register gets written over GSSIN, 
      the freed up the 74LVC1G3157 now routes GSSOUT back to the MCU instead. 
      The four 0.8in score digits are finally placed with a symbol whose pinout actually matches the part - was seconds away from ordering with the wrong pinout, again.
    </n-p>

    <n-p class="squid-semi-title">Scoreboard Simulation</n-p>
    <n-p>Press the buttons in the remotes to navigate and hold to enter the menus. This is the V2 simulator - the display feature set didn't change in V3.</n-p>
    <iframe src="netscore-v2/component/index.html" class="netscore-iframe" scrolling="no" loading="lazy"></iframe>

    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Proper Piezo IC: <span class="squid-text-alt">DRV8662 with an integrated boost converter to 24.9V and a differential output stage, giving 40Vpp full scale across the piezos - roughly ten times the swing V1 managed.</span></n-li>
      <n-li>Sigma-Delta Volume: the driver is fed a 1-bit density stream from the ESP32-S3 SDM peripheral through a 2nd order RC filter, so volume is controlled by amplitude intead of PWM duty steps.</n-li>
      <n-li>Power: the XC6220B331MR carried over from V2 (1A, ~200mV dropout, 8uA quiescent), but this time backed by proper bulk capacitance and power traces widened to match.</n-li>
      <n-li>Both Slots Read Back: the 74LVC1G3157 freed up by dropping the dot correction chain now routes GSSOUT back to the MCU, so either display slot can be read back.</n-li>
      <n-li>Possible Alarm Clock: the RTC interrupt moved to GPIO10 specifically because GPIO0-21 lives in the S3's RTC IO domain - so a DS3231 alarm can actually serve as a deep sleep wake source.</n-li>
      <n-li>FPC Display Slots: 30-pin 0.5mm flex connectors replace the 2x12 headers.</n-li>
    </n-ul>

    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Main Controller: <span class="squid-text-alt">ESP32-S3</span></n-li>
      <n-li>Audio: <span class="squid-text-alt">DRV8662 piezo driver fed by the ESP32-S3 sigma-delta modulator</span></n-li>
      <n-li>Display Drivers: <span class="squid-text-alt">TLC5951 Constant-Current LED Driver (24ch) + 4-phase scan multiplexing at ~200Hz refresh</span></n-li>
      <n-li>Slot Muxing: <span class="squid-text-alt">2x 74LVC1G3157 - one selects which slot the chain feeds so a single board works in either, the other returns GSSOUT to the MCU</span></n-li>
      <n-li>Timekeeping: <span class="squid-text-alt">DS3231MZ RTC + coin cell backup, with its 32kHz output feeding the ESP32's external RTC reference</span></n-li>
      <n-li>Power: <span class="squid-text-alt">1S Li-ion, TP4056 charger + FS312MH protection + XC6220B331MR 3.3V/1A LDO, soft power latch and two software switched rails</span></n-li>
      <n-li>Control: <span class="squid-text-alt">Rotary encoder w/ push switch</span></n-li>
      <n-li>Programming: <span class="squid-text-alt">C/C++ (ESP-IDF)</span></n-li>
    </n-ul>

    <n-p class="squid-semi-title">Boards in this Release</n-p>
    <n-ul>
      <n-li>Main Board v3.0: ESP32-S3, charging and protection, power path, audio and the two display slots.</n-li>
      <n-li>Display Board v3.0: 6x 0.2in digits (time and sets), 4x 0.8in score digits, 4 bar LEDs, 4 generic leds for each side and 2 for status.
        all on one TLC5951 across a 4-phase multiplex - 24 channels x 4 phases gives us 96 addressable LED positions.</n-li>
    </n-ul>

    <n-p class="squid-semi-title">Challenges &amp; Lessons Learned</n-p>
    <n-p>The board has been ordered so it's a matter of time till this gets filled up, hopefully with nothing major.    </n-p><!-- 
      Getting the audio right has been the most difficult part, for a component apparently so simple. This time I'll be trying to output a 1-bit stream from the ESP32-S3's 
      sigma-delta modulator paired with a 2nd order RC filter to try and recreate an analog signal.
      This way I'll have more control over the amplitude and waveform of the signal and hopefully drive it loud or quiet with the same clarity.  
    </n-p>
    <n-p>
      The other lesson was that V2 had used literally every I/O on the module, so V3 couldn't add anything - it could only trade. Dropping the dot correction chain bought 
      back 1 pins and the old double buzzer differential pair (4 pins) now only needs the one (at the expense of having to drive both buzzers with the same waveform). 
      So the new 4 pins that were freed were used for the debug UART (RX), the GSSOUT from the TLC5951 feeds back into the MCU and 2 extra GPIO were broken out in the board.
    </n-p>-->

    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><router-link :to="{ name: 'netscore-v2' }"><n-a>[Netscore V2]</n-a></router-link></n-li>
      <n-li><router-link :to="{ name: 'netscore' }"><n-a>[Netscore V1]</n-a></router-link></n-li>
      <n-li><n-a href="https://github.com/arcticlula/Netscore">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="netscore-v3/schematics/main-board-schematic.pdf" target="_blank">[Main Board Schematic - PDF]</n-a></n-li>
      <n-li><n-a href="netscore-v3/schematics/display-board-big-schematic.pdf" target="_blank">[Big Display Board Schematic - PDF]</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'image', src: 'netscore-v3/images/pcbs/main-board-front.png', description: "main board front - moved the esp32 to the front and redid the buzzer circuit" },
  { type: 'image', src: 'netscore-v3/images/pcbs/main-board-back.png', description: "main board back - the two new FPC display slots solves the interboard connection rigidy of v2" },
  { type: 'image', src: 'netscore-v3/images/schematics/main-board-schematic.jpg', description: "main board schematic" },
  { type: 'image', src: 'netscore-v3/images/pcbs/display-board-big-front.png', description: "display board front - wacky design also added one extra led for each team and one extra indicator in the middle compared to v2" },
  { type: 'image', src: 'netscore-v3/images/pcbs/display-board-big-back.png', description: "display board back - the four mux stages use a mosfet pair now and the thumbwheel was swapped for a scrollwheel" },
  { type: 'image', src: 'netscore-v3/images/schematics/display-board-big-schematic.jpg', description: "display board schematic" },
  { type: 'image', src: 'netscore-v3/images/pcbs/old-display-board-adapter-front.png', description: "board adapter to use the old v2.0 display with the new corrected main board" }
]);

const models = ref<ICascadeCategory[]>([
  {
    key: 'ns3-pcb',
    label: 'PCB',
    children: [
      {
        key: 'ns3-main-board',
        label: 'Main Board',
        children: [
          { key: 'ns3-main-board-v3.0', label: '3.0', src: 'netscore-v3/models/pcb/main-board-v3.0.glb', bareSrc: 'netscore-v3/models/pcb/main-board-v3.0-bare.glb'}
        ]
      },
      {
        key: 'ns3-big-display-board',
        label: 'Display Board Big',
        children: [
          { key: 'ns3-big-display-board-v3.0', label: '3.0', src: 'netscore-v3/models/pcb/display-board-big-v3.0.glb', bareSrc: 'netscore-v3/models/pcb/display-board-big-v3.0-bare.glb'}
        ]
      },
      { key: 'ns3-display-board-adapter', label: 'Display Board Adapter', src: 'netscore-v3/models/pcb/old-display-board-adapter.glb', bareSrc: 'netscore-v3/models/pcb/old-display-board-adapter-bare.glb'}
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
