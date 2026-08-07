<template>
  <div class="cv-container">
    <div class="timeline-wrapper">
      <n-timeline size="large">
        <n-timeline-item
          v-for="(item, index) in cvData"
          :key="index"
          :color="getColor(item.type)"
          :time="item.time"
        >
          <template #header>
            <span :style="{ color: getColor(item.type), fontWeight: 'bold', fontSize: '1rem' }">{{ item.title }}</span>
          </template>
          <div class="timeline-content">
            <n-p style="margin: 0 0 8px 0; font-weight: bold; font-size: 0.9rem; color: #e2e2e2">{{ item.subtitle }}</n-p>
            <n-p style="margin: 0; opacity: 0.8; line-height: 1.5; font-size: 0.7rem;" v-html="item.description"></n-p>
            <ul v-if="item.details" class="details">
              <li v-for="(detail, i) in item.details" :key="i" v-html="detail"></li>
            </ul>
          </div>
        </n-timeline-item>
      </n-timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cvData } from '../data/cv'

const COLOR_PINK = 'rgb(255,198,194)'
const COLOR_WHITE = 'rgb(250,233,218)'
const COLOR_BLUE = 'rgb(195,224,221)'

function getColor(type: string) {
  if (type === 'Education') return COLOR_PINK;
  if (type === 'Experience') return COLOR_WHITE;
  return COLOR_BLUE;
}
</script>

<style scoped lang="sass">
.cv-container
  max-width: 800px
  margin: 0 auto
  padding: 32px 16px

.legend
  margin-bottom: 48px

.legend-flex
  gap: 32px
  flex-wrap: wrap

h2
  margin: 0
  font-size: 1.5rem
  text-shadow: 0 2px 4px rgba(0,0,0,0.5)

.pink-text
  color: rgb(255,198,194)
.white-text
  color: rgb(250,233,218)
.blue-text
  color: rgb(195,224,221)

.timeline-wrapper
  background-color: rgba(0, 0, 0, 0.4)
  padding: 40px
  border-radius: 16px
  border: 1px solid rgba(255, 255, 255, 0.1)
  backdrop-filter: blur(10px)
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)

.timeline-content
  margin-top: 8px
  margin-bottom: 24px
  background-color: rgba(255, 255, 255, 0.03)
  padding: 16px 20px
  border-radius: 8px
  border-left: 2px solid transparent
  transition: all 0.2s ease

  &:hover
    transform: translateX(4px)
    background-color: rgba(255, 255, 255, 0.08)
    border-left-color: rgba(255, 255, 255, 0.5)

.details
  margin: 8px 0 0 0
  padding-left: 18px
  opacity: 0.8
  font-size: 0.7rem
  line-height: 1.5
  li
    margin-bottom: 4px
    &:last-child
      margin-bottom: 0

@media (max-width: 600px)
  .cv-container
    padding: 16px 8px
  .timeline-wrapper
    padding: 24px 16px
  .legend-flex
    gap: 16px
    justify-content: center
  h2
    font-size: 1.2rem
</style>
