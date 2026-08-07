<template>
  <div ref="container" class="log-loader-container">
    <Transition name="fade">
      <div v-if="isLoaded && isVisible" class="component-wrapper">
        <component :is="dynamicComponent" />
      </div>
      <div v-else class="log-placeholder">
        <div class="placeholder-content">
          <n-h2 class="log-title">{{ log.name }}</n-h2>
          <div class="log-date">{{ formatMonthYear(log.date) }}</div>
          <div class="divider" style="margin-top: 16px;"></div>
          <n-skeleton text :repeat="10" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef, defineAsyncComponent } from 'vue';
import { Log } from '../data/logs';
import { formatMonthYear } from '../utils/date';

const props = defineProps<{
  log: Log;
}>();

const container = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const isLoaded = ref(false);
const dynamicComponent = shallowRef<any>(null);

const loadComponent = () => {
  if (isLoaded.value) return;
  
  // Dynamic import with Vite glob-like support
  // The path must be relative to this component or absolute from src
  dynamicComponent.value = defineAsyncComponent(() => 
    import(`../views/logs/${props.log.componentName}.vue`)
  );
  isLoaded.value = true;
};

const unloadComponent = () => {
  // Completely unload to free memory
  dynamicComponent.value = null;
  isLoaded.value = false;
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      isVisible.value = true;
      loadComponent();
    } else {
      isVisible.value = false;
      // Deload if it's far enough away
      unloadComponent();
    }
  }, {
    rootMargin: '600px 0px 600px 0px', // Load before it enters, deload after it leaves by 600px
    threshold: 0
  });

  if (container.value) {
    observer.observe(container.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped lang="sass">
.log-loader-container
  min-height: 400px
  margin-bottom: 80px
  width: 100%

.log-placeholder
  padding: 16px 0
  
.placeholder-content
  opacity: 0.5

.log-date
  font-family: monospace
  font-size: 1.1em
  margin-bottom: 8px

.log-title
  font-size: 2.5em
  font-weight: bold
  margin-bottom: 24px

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease

.fade-enter-from, .fade-leave-to
  opacity: 0
</style>
