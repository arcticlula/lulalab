<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" class="app-container">
    <n-global-style />

    <div class="screen-overlay" />
    <div
      class="background-layer"
      :style="dynamicBackgroundStyle"
    />

    <div class="content-wrapper">
      <n-flex justify="center">        
        <n-flex class="header" justify="center">
          <router-link to="/"><n-button text>Home</n-button></router-link> |
          <router-link to="/projects"><n-button text>Projects</n-button></router-link> |
          <!-- | <router-link to="/logs"><n-button text>Logs</n-button></router-link> -->
          <router-link to="/cv"><n-button text>CV</n-button></router-link>
          <!-- | <router-link to="/about"><n-button text>Acerca</n-button></router-link> -->
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
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ColorSwitch } from '@vicons/carbon';

import { defaultOverrides } from './themes/custom'
import ColorPickerModal from './components/ColorPickerModal.vue'

const windowWidth = ref(window.innerWidth)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const themeOverrides = computed<GlobalThemeOverrides>(() => {
  const isMobile = windowWidth.value <= 600
  return {
    ...defaultOverrides,
    common: {
      ...defaultOverrides.common,
      lineHeight: '1.3',
      fontFamily: 'monospace',
      bodyColor: '#101014',
      fontSize: isMobile ? '12px' : '14px',
    },
  }
})

const route = useRoute()

const cvBackground = 'linear-gradient(to right, rgba(255,198,194,0.4), rgba(195,224,221,0.4), rgba(250,233,218,0.4))'

const backgroundDefinitions = {
  cv: () => ({
    backgroundImage: cvBackground,
    backgroundColor: 'black',
    backgroundSize: 'auto',
    backgroundPosition: '0 0',
    transition: 'none',
  }),

  black: () => ({
    backgroundColor: 'transparent',
    transition: 'none',
  }),
}

const defaultBackgroundKey: keyof typeof backgroundDefinitions = 'black';

const dynamicBackgroundStyle = computed(() => {
  const bgKey = (route.meta.background as keyof typeof backgroundDefinitions) || defaultBackgroundKey;
  const styleFn = backgroundDefinitions[bgKey] || backgroundDefinitions[defaultBackgroundKey];
  return styleFn();
})

//watch(() => route.name, () => {
//    document.body.style.background = 'black';
//}, { immediate: true })

const colorPickerRef = ref<InstanceType<typeof ColorPickerModal>>()
const userIsSkiparoo = ref(false);

function openModal() {
  colorPickerRef.value?.openModal()
}

function handleSkiparoo() {
  userIsSkiparoo.value = true;
}
</script>

<style lang="sass">
@keyframes interlace
  0%
    top: 1px
  50%
    top: 1px
  51%
    top: 0px
  100%
    top: 0px
</style>

<style scoped lang="sass">
.app-container
  position: relative
  min-height: 100vh
  width: 100%
  overflow: clip

.screen-overlay
  position: fixed
  top: 0
  left: 0
  height: 100lvh
  width: 100lvw
  opacity: 15%
  z-index: 20
  pointer-events: none
  animation: interlace 0.01s infinite
  background-image: repeating-linear-gradient(to bottom, var(--background-color), var(--background-color) 1px, var(--semi-title) 1px, var(--semi-title) 2px)

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
  .screen-overlay
    background-image: repeating-linear-gradient(to bottom, var(--background-color), var(--background-color) 1px, var(--semi-title) 1px, var(--semi-title) 3px)

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