<template>
  <div class="about">
    <n-flex justify="space-between">
      <h1 class="pink-text">Education</h1>
      <h1 class="blue-text">Other</h1>
      <h1 class="white-text">Experience</h1>
    </n-flex>
    <n-grid y-gap="16" :cols="1">
      <n-gi 
        v-for="(item, index) in cvData" 
        :key="index"
        class="cv-entry"
        :class="getCardClass(item.type)"
      >
        <CVEntry>
          <template v-slot:header>
            <span v-html="item.title"></span>
          </template>
          <template v-slot:headerExtra>
            {{ item.time }}
          </template>
          <template v-slot:description>
            {{ item.subtitle }}
          </template>
          <template v-slot:footer>
            <span v-html="item.description"></span>
          </template>
        </CVEntry>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import CVEntry from "../components/CVEntry.vue";
  import { cvData } from "../data/cv";

  function getCardClass(type: string) {
    if (type === 'Education') return 'card-left';
    if (type === 'Experience') return 'card-right';
    return 'card-center';
  }
</script>

<style scoped lang="sass">
.cv-entry
  width: 60%
.card-left
  justify-self: flex-start
  > *
    @extend .pink
.card-right
  justify-self: flex-end
  > *
    @extend .white
.card-center
  justify-self: center
  > *
    @extend .blue

.pink
  background-color: rgba(255,198,194,0.5)
.white
  background-color: rgba(250,233,218,0.5)
.blue
  background-color: rgba(195,224,221,0.5)

.pink-text
  color: rgba(255,198,194)
.white-text
  color: rgba(250,233,218)
.blue-text
  color: rgba(195,224,221)

</style>
