<template>
  <n-modal v-model:show="showModal" preset="card" style="max-width: 600px;" title="Pick a color you like!" :auto-focus="false" :closable="false">
    <div class="color-grid">
      <div
        v-for="color in colors"
        :key="color"
        class="color-square"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
      />
    </div>
    <template #footer>
      <n-space justify="center">
        <n-button @click="setDefault">Default</n-button>
        <n-button @click="skipModal">Skip</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createThemeOverrides } from '../themes/custom'
import type { GlobalThemeOverrides } from 'naive-ui'

const COLOR_FIRST_KEY = 'electrolula-color'
const COLOR_SKIP_KEY = 'electrolula-color-skip'

function getComplementaryColor(hex: string): string {
  const n = hex.replace('#', '')
  const bigint = parseInt(n, 16)
  const r = (bigint >> 16) & 0xff
  const g = (bigint >> 8) & 0xff
  const b = bigint & 0xff
  
  const compR = 255 - r
  const compG = 255 - g
  const compB = 255 - b
  
  return `#${((compR << 16) | (compG << 8) | compB).toString(16).padStart(6, '0')}`
}

const colors = [
  '#FF6B6B', '#FFA07A', 
  '#BB8FCE', '#85C1E2',
  '#FFD93D', '#6BCF7F',
	'#EF90DF', '#D0B49F',
]

interface Props {
  themeOverrides: GlobalThemeOverrides
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:themeOverrides': [value: GlobalThemeOverrides],
	'skiparoo': []
}>()

const showModal = ref(false)
const hasVisited = ref(localStorage.getItem(COLOR_FIRST_KEY) ?? '')
const hasSkipped = ref(localStorage.getItem(COLOR_SKIP_KEY) ?? '')
const sessionSkipCount = ref(0)

onMounted(() => {
  console.log('ColorPickerModal mounted', hasVisited.value, hasSkipped.value)
  
  if (hasVisited.value) {
    console.log('User has already selected a color:', hasVisited.value)
    applyColorTheme(hasVisited.value)
  } else {
    applyColorTheme();
  }
})

function openModal() {
  showModal.value = true
}

function selectColor(color: string) {
  localStorage.setItem(COLOR_FIRST_KEY, color)
  hasVisited.value = color
  showModal.value = false
  console.log('Selected color:', color)
  applyColorTheme(color)
}

function applyColorTheme(color?: string) {
  let updated: GlobalThemeOverrides;
	if(!props.themeOverrides.common) {
		console.warn('themeOverrides.common is undefined, cannot apply color theme.')
		return;
	}

  if (color) {
    const overrides = createThemeOverrides(color)
    updated = {
      ...overrides,
      common: {
        ...overrides.common,
        lineHeight: props.themeOverrides.common.lineHeight,
        fontFamily: props.themeOverrides.common.fontFamily,
        bodyColor: props.themeOverrides.common.bodyColor,
      },
    }
    
    document.documentElement.style.setProperty('--title', color)
    document.documentElement.style.setProperty('--semi-title', color)
    document.documentElement.style.setProperty('--theme-button', color)
    document.documentElement.style.setProperty('--semi-title-decoration', `${getComplementaryColor(color)} wavy underline`)
    
    emit('update:themeOverrides', updated)
    console.log('Applied stored color theme:', color)
  }
  else {
    const defaultColor = '#63e2b7'
    const overrides = createThemeOverrides(defaultColor)
    updated = {
      ...overrides,
      common: {
        ...overrides.common,
        lineHeight: props.themeOverrides.common.lineHeight,
        fontFamily: props.themeOverrides.common.fontFamily,
        bodyColor: props.themeOverrides.common.bodyColor,
      },
    }
    document.documentElement.style.setProperty('--title', 'rgba(255, 255, 255, 0.9)')
    document.documentElement.style.setProperty('--semi-title', '#ff9f5a')
    document.documentElement.style.setProperty('--theme-button', 'rgba(255, 255, 255, 0.82)')
    document.documentElement.style.setProperty('--semi-title-decoration', 'green wavy underline')
  }
  emit('update:themeOverrides', updated)
}

function skipModal() {
  localStorage.setItem(COLOR_SKIP_KEY, 'true')
  hasSkipped.value = 'true'
  showModal.value = false
  sessionSkipCount.value += 1
  if (sessionSkipCount.value >= 3 && props.themeOverrides.common) {
    emit('skiparoo')
		hasSkipped.value = 'true'
		const bgcolor = '#cb38a3';
		const color = getComplementaryColor(bgcolor);
		const overrides = createThemeOverrides(color);
    const updated = {
      ...overrides,
      common: {
        ...overrides.common,
        lineHeight: props.themeOverrides.common.lineHeight,
        fontFamily: props.themeOverrides.common.fontFamily,
        bodyColor: bgcolor,
      },
    }
    
    document.documentElement.style.setProperty('--background-color', bgcolor)
    document.documentElement.style.setProperty('--title', color)
    document.documentElement.style.setProperty('--semi-title', color)
    document.documentElement.style.setProperty('--theme-button', color)
    document.documentElement.style.setProperty('--semi-title-decoration', `${getComplementaryColor(color)} wavy underline`)
    
    emit('update:themeOverrides', updated)
    console.log('Applied stored color theme:', color)
  }
}

function setDefault() {
  localStorage.removeItem(COLOR_FIRST_KEY)
  hasVisited.value = ''
  applyColorTheme();
  showModal.value = false
}

defineExpose({
  openModal
})
</script>

<style scoped lang="sass">
.color-grid
  display: grid
  grid-template-columns: repeat(6, 1fr)
  gap: 16px
  padding: 16px 0

.color-square
  aspect-ratio: 1
  border-radius: 8px
  cursor: pointer
  transition: transform 0.2s, box-shadow 0.2s
  border: 2px solid rgba(255, 255, 255, 0.1)
  
  &:hover
    transform: scale(1.1)
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2)
</style>
