<template>
  <div class="project-view">
    <!-- Header Section -->
    <n-h1 class="squid-title">{{ name }}</n-h1>
    <div class="subtitle">
      <n-p class="squid-highlight">{{ formattedDate }}</n-p>
      <n-tag size="small" :type="statusType" :bordered="false">
        {{ status }}
      </n-tag>
    </div>
    
    <!-- Description/Quote -->
    <n-blockquote v-if="description">
      {{ description }}
    </n-blockquote>
    
    <!-- Media Carousel -->
    <div v-if="media && media.length > 0" class="carousel-wrapper">
      <MediaCarousel :media="media" />
    </div>
    
    <!-- Main Content Slot -->
    <slot></slot>
    
    <!-- 3D Model Viewer -->
    <template v-if="models && models.length > 0">
      <n-p class="squid-semi-title">3D Model Viewer</n-p>
      <div ref="viewerContainer" class="viewer-container-wrapper">
        <ModelViewer
          v-if="shouldLoad3D"
          ref="viewer"
          :models="models"
          />
          <!-- :backgroundColor="0x1a1a1a" -->
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue';

import { IMedia, ICascadeCategory } from '../models/media';
import { formatMonthYear } from '../utils/date';
import MediaCarousel from './MediaCarousel.vue';
import { getProjectByRouteName, Project } from '../data/projects';

const ModelViewer = defineAsyncComponent(() => import('./ModelViewer.vue'));

interface Props {
  id: string;
  media?: IMedia[];
  models?: ICascadeCategory[];
}

const props = withDefaults(defineProps<Props>(), {
  media: () => [],
  models: () => [],
});

const project = computed<Project | undefined>(() => getProjectByRouteName(props.id));
const name = computed(() => project.value?.name);
const date = computed(() => project.value?.date);
const status = computed(() => project.value?.status);
const description = computed(() => project.value?.description);
const formattedDate = computed(() => formatMonthYear(date.value ?? ''));

const statusType = computed(() => {
  switch (status.value) {
    case 'Completed':
      return 'success';
    case 'Prototype':
      return 'warning';
    case 'Deprecated':
      return 'error';
    case 'Ongoing':
    default:
      return 'info';
  }
});

// Lazy Loading Logic
const viewerContainer = ref<HTMLDivElement | null>(null);
const shouldLoad3D = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (props.models && props.models.length > 0) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        shouldLoad3D.value = true;
        if (observer && viewerContainer.value) {
          observer.unobserve(viewerContainer.value);
          observer.disconnect();
          observer = null;
        }
      }
    }, { rootMargin: '200px' }); // Start loading 200px before it comes into view

    if (viewerContainer.value) {
      observer.observe(viewerContainer.value);
    }
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped lang="sass">
.project-view
  padding: 0 32px
  text-align: justify
  hyphens: auto
  .n-h1
    margin-bottom: 0
  .n-card
    margin-top: 24px

.subtitle
  display: flex
  align-items: center
  .n-p
    margin-top: 16px
    margin-right: 16px

.carousel-wrapper
  display: flex
  justify-content: center
  margin-top: 24px

.viewer-container-wrapper
  min-height: 500px

@media (max-width: 800px)
  .project-view
    padding: 0 !important
  .subtitle
    justify-content: space-between
</style>