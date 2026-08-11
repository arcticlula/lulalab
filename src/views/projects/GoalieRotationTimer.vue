<template>
  <ProjectTemplate id="goalie-rotation-timer" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      This project started as a dedicated device to manage goalie rotations during our soccer games, where everyone had to alternate as a keeper. 
      The idea was simple: track a set time interval and sound a buzzer when it was time to switch. 
      I built two prototypes, the first was a modular build centered around a battery, with an ESP32 + a small display, and a charging board on different sides. 
      The second version moved to a custom PCB I designed, keeping the same core functionality but still in a more compact format.
    </n-p>
    <n-p>
      Although the project was eventually scrapped, many of its ideas carried over into <router-link :to="{ name: 'netscore' }"><n-a>Netscore</n-a></router-link>, which now handles score tracking through BLE button inputs. 
      The keeper-switching logic might make a comeback there someday — though lately I've been playing more volleyball than football.    
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Interval Timing: <span class="squid-text-alt"> Provides alerts for substitutions.</span></n-li>
      <n-li>Visual Feedback: <span class="squid-text-alt"> Display shows remaining time and rotation count.</span></n-li>
      <n-li>Audible Alerts: <span class="squid-text-alt"> Buzzer cue signals when it's time to swap goalies.</span></n-li>
      <n-li>Integrated Hardware: <span class="squid-text-alt">Features a small display, a buzzer, and a self-contained battery management system.</span></n-li>
      <n-li>Iterative Prototyping: <span class="squid-text-alt">Evolved from a modular, hand-wired build to a custom-designed PCB.</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Microcontroller: <span class="squid-text-alt">ESP32-C3 module.</span></n-li>
      <n-li>Display: <span class="squid-text-alt">0.4 inch OLED display, circular display in the newer version.</span></n-li>
      <n-li>Alert Hardware: <span class="squid-text-alt">Piezo / passive buzzer for interval signals.</span></n-li>
      <n-li>Power: <span class="squid-text-alt">Battery powered for portability.</span></n-li>
      <n-li>Circuit Board Technique: <span class="squid-text-alt">Perfboard with pre-made modules. PCB for v2</span></n-li>
      <n-li>Programming: <span class="squid-text-alt">C++ (Arduino Framework)</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      While the project was eventually scrapped as a standalone device, but it was a good exercise in rapid hardware prototyping. 
      The buzzer was louder than expected, which was great since we played mostly outdoors. 
      Its core concepts (scorekeeping mostly) inspired and carried over into my later Netscore project, demonstrating how ideas from one prototype can seed a more ambitious successor.
    </n-p>

    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li>
        <n-a href="https://github.com/arcticlula/Goalie-Rotation-Timer">[GitHub Repository]</n-a>
      </n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  { type: 'video', src: 'goalie-rotation-timer/videos/PXL_20240112_004200338.mp4', description: 'demo of the prototype at work' },
  { type: 'image', src: 'goalie-rotation-timer/images/PXL_20231219_231824476.jpg', description: 'some breadboard prototyping before freestyling a build' },
  { type: 'image', src: 'goalie-rotation-timer/images/PXL_20231227_210425440.jpg', description: 'esp32 on the bottom, battery charging module on the side and protoboard above' },
  { type: 'image', src: 'goalie-rotation-timer/images/side.jpg', description: 'buttons + battery level circuit (mosfet is toggled by gpio and voltage divider value is read by the ADC)' },
  { type: 'image', src: 'goalie-rotation-timer/images/body.jpg', description: 'it was a (very) tight fit' },
  { type: 'video', src: 'goalie-rotation-timer/videos/views.mp4', description: 'some different angles' },
  { type: 'image', src: 'goalie-rotation-timer/images/buzzer.jpg', description: 'buzzer with it\'s driving circuit' },
  { type: 'image', src: 'goalie-rotation-timer/images/PXL_20231230_231417769.jpg', description: 'the full 0.42 inch display in it\'s glory - also final modifications before closing the bottom' },
  { type: 'image', src: 'goalie-rotation-timer/images/side_final.jpg', description: 'side view after fitting everything inside' },
  { type: 'image', src: 'goalie-rotation-timer/images/full_view.jpg', description: 'the complete prototype' },
  { type: 'image', src: 'goalie-rotation-timer/images/PXL_20231231_025358687.jpg', description: '' },
  { type: 'video', src: 'goalie-rotation-timer/videos/PXL_20240507_202517352.mp4', description: 'the old blink test in the new dev pcb - we can see some fixes were needed' },
  { type: 'image', src: 'goalie-rotation-timer/images/PXL_20240525_172958691.jpg', description: 'only photo that remained with the display working in the new board' },
  { type: 'video', src: 'goalie-rotation-timer/videos/PXL_20240112_004035904.mp4', description: '' },
]);

const models = ref<ICascadeCategory[]>([
  { key: 'grt-pcb-v1', label: 'PCB v1.0', src: 'goalie-rotation-timer/models/pcb/Goalie-Rotation-Timer-v1.0.glb' },
  { key: 'grt-pcb-v2', label: 'PCB v2.0', src: 'goalie-rotation-timer/models/pcb/Goalie-Rotation-Timer-v2.0.glb' },
]);
</script>

<style scoped lang="sass">
</style>
