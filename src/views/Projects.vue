<template>
  <div class="home">
    <router-view></router-view>

    <div v-if="$route.name === 'projects' && activeTags.length > 0" class="filter-container">
      <n-space align="center">
        <span>Filtering by:</span>
        <n-tag
          v-for="tag in activeTags"
          :key="tag"
          type="info"
          closable
          @close="removeTagFilter(tag)"
        >
          {{ tag }}
        </n-tag>
        <n-button text type="error" @click="clearAllFilters">Clear All</n-button>
      </n-space>
    </div>
    
    <n-grid v-if="$route.name === 'projects'" cols="1 s:2 m:2 l:3" :x-gap="24" :y-gap="24" responsive="screen">
      <n-gi v-for="project in displayedProjects" :key="project.name">
        <n-card class="card" hoverable>
          <template #header>
            <div class="card-header">
              <span class="card-title squid-title">{{ project.name }}</span>
              <span class="card-date">{{  formatMonthYear(project.date) }}</span>
            </div>
          </template>
          <template #cover>
            <router-link :to="{ name: project.routeName }">
              <!-- Images: use <picture> for graceful fallback -->
              <template v-if="project.srcType === 'image'">
                <picture v-if="!failedAvif.has(project.name)">
                  <source :srcset="project.avifSrc" type="image/avif" />
                  <img
                    class="card-image"
                    :src="project.originalSrc"
                    :alt="project.name + ' preview'"
                    @error="onImageAvifFail(project)"
                  />
                </picture>
                <img
                  v-else
                  class="card-image"
                  :src="project.originalSrc"
                  :alt="project.name + ' preview'"
                />
              </template>
              <!-- Videos: prefer AVIF still; fallback to video if AVIF fails -->
              <template v-else>
                <img
                  v-if="!failedAvif.has(project.name)"
                  class="card-image"
                  :src="project.avifSrc"
                  :alt="project.name + ' video preview'"
                  @error="onVideoAvifFail(project)"
                />
                <video
                  v-else
                  class="card-video"
                  :src="project.originalSrc"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="auto"
                />
              </template>
            </router-link>
          </template>
          <div class="card-content">
            {{ project.description }}
          </div>
          <template #footer>
            <n-space>
              <n-tag
                v-for="keyword in project.keywords"
                size="small"
                :key="keyword"
                class="keyword-tag"
                :type="activeTags.includes(keyword) ? 'info' : 'success'"
                :bordered="false"
                @click="toggleTagFilter(keyword)"
              >
                {{ keyword }}
              </n-tag>
            </n-space>
          </template>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { formatMonthYear } from '../utils/date';
  import { projectData, Project } from '../data/projects';

  const activeTags = ref<string[]>([]);

  const projects = ref<Project[]>(projectData);

  import { useAvif } from '../composables/useAvif';
  const { deriveAvifPath } = useAvif();

  interface DisplayProject extends Project { avifSrc: string; originalSrc: string }
  const failedAvif = ref<Set<string>>(new Set());
  
  const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  const filteredProjects = computed(() => {
    if (activeTags.value.length === 0) {
      return sortedProjects.value;
    }
    return sortedProjects.value.filter(project =>
      activeTags.value.every(tag => project.keywords.includes(tag))
    );
  });

  const displayedProjects = computed<DisplayProject[]>(() => {
    return filteredProjects.value.map(p => {
      const explicitIsAvif = p.src.toLowerCase().endsWith('.avif');
      const avifCandidate = explicitIsAvif ? p.src : deriveAvifPath(p.src);
      return { ...p, avifSrc: avifCandidate, originalSrc: p.src };
    });
  });

  function onImageAvifFail(project: DisplayProject) {
    if (!failedAvif.value.has(project.name)) {
      const s = new Set(failedAvif.value);
      s.add(project.name);
      failedAvif.value = s;
    }
  }
  function onVideoAvifFail(project: DisplayProject) {
    if (!failedAvif.value.has(project.name)) {
      const s = new Set(failedAvif.value);
      s.add(project.name);
      failedAvif.value = s;
    }
  }

  function toggleTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index === -1) {
      activeTags.value.push(tag);
    } else {
      activeTags.value.splice(index, 1);
    }
  }

  function removeTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index > -1) {
      activeTags.value.splice(index, 1);
    }
  }

  function clearAllFilters() {
    activeTags.value = [];
  }
</script>

<style scoped lang="sass">
a
  text-decoration: none
  color: inherit

.filter-container
  margin-bottom: 24px
  display: flex
  justify-content: center

.keyword-tag
  cursor: pointer
  transition: opacity 0.2s
  &:hover
    opacity: 0.8

.card-image
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-video
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-content
  text-align: justify
  hyphens: auto

.card-header
  display: flex
  flex-direction: column

.card-title
  font-weight: bold
  font-size: 1.2em

.card-date
  font-size: 0.9em
  color: #888
</style>
