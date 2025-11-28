<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" class="app-container">
    <n-global-style />
    <div class="content-wrapper">
      <n-flex justify="center">        
        <n-flex class="header" justify="center">
          <router-link to="/"><n-button text>Home</n-button></router-link> |
          <router-link to="/projects"><n-button text>Projects</n-button></router-link> |
          <router-link to="/cv"><n-button text>CV</n-button></router-link> |
          <router-link to="/about"><n-button text>About</n-button></router-link>
        </n-flex>

        <n-icon v-if="!userIsSkiparoo" class="theme-button" @click="openModal">
            <ColorSwitch />
        </n-icon>
      </n-flex>
      <div class="body">
        <router-view />
      </div>
    </div>

    <ColorPickerModal :theme-overrides="themeOverrides" @update:theme-overrides="themeOverrides = $event" @skiparoo="handleSkiparoo" ref="colorPickerRef"/>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import { ref } from 'vue'
import { ColorSwitch } from '@vicons/carbon';

import { defaultOverrides } from './themes/custom'
import ColorPickerModal from './components/ColorPickerModal.vue'

const themeOverrides = ref<GlobalThemeOverrides>({
  ...defaultOverrides,
  common: {
    ...defaultOverrides.common,
    lineHeight: '1.3',
    fontFamily: 'monospace',
    bodyColor: '#101014',
  },
})

const colorPickerRef = ref<InstanceType<typeof ColorPickerModal>>()
const userIsSkiparoo = ref(false);

function openModal() {
  colorPickerRef.value?.openModal()
}

function handleSkiparoo() {
  userIsSkiparoo.value = true;
}
</script>

<style scoped lang="sass">
.app-container
  position: relative
  min-height: 100vh
  width: 100%
  overflow: hidden

.background-layer
  position: absolute
  inset: 0
  z-index: 0
  pointer-events: none

.content-wrapper
  position: relative
  z-index: 10
  min-height: 100vh

.body
  margin: 16px 32px

.header
  padding: 16px
  > *
    margin: 0 16px

.theme-button
  color: var(--theme-button)
  align-self: center
  margin-top: 1px
  :hover
    cursor: pointer
    color: var(--theme-button)

@media (max-width: 800px)
  .body
    margin: 8px 16px
  .header
    padding: 8px 0 !important
    > *
      margin: 0 12px

  // .content-wrapper
  //   display: flex
  // .theme
  //   position: relative
  //   top: 8px
  //   right: 8px
</style>