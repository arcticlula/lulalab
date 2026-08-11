<template>
  <iframe ref="frame" :src="booted ? src : undefined"></iframe>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

// The netscore simulators sleep after being idle for a while, so the iframe only gets
// its src once it scrolls into view - that way the firmware boots when it's actually seen.
const props = withDefaults(defineProps<{ src: string, rootMargin?: string }>(), { rootMargin: '200px 0px' });

const frame = ref<HTMLIFrameElement | null>(null);
const booted = ref(false);
let observer: IntersectionObserver | null = null;

const stopObserving = () => {
  observer?.disconnect();
  observer = null;
};

onMounted(() => {
  if (!frame.value || typeof IntersectionObserver === 'undefined') {
    booted.value = true;
    return;
  }

  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    booted.value = true;
    stopObserving();
  }, { rootMargin: props.rootMargin });

  observer.observe(frame.value);
});

onBeforeUnmount(stopObserving);
</script>
