<template>
  <div class="cv-wrapper">
    <div class="cv-desktop">
      <CV />
    </div>
    <div class="cv-mobile">
      <CVResponsive />
    </div>
  </div>
</template>

<script setup lang="ts">
import CV from './CV.vue'
import CVResponsive from './CVResponsive.vue'
</script>

<style scoped lang="sass">
.cv-mobile
  display: none

@media (max-width: 800px)
  .cv-desktop
    display: none
  .cv-mobile
    display: block
</style>
