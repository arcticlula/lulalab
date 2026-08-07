<template>
  <div class="home-container">
    <div class="avatar-container">
      <n-avatar :size="250" round bordered>
        <picture v-if="!failedAvif">
          <source srcset="/home/avif/eu.avif" type="image/avif" alt="Esta camisola foi roubada no labirinto :/" />
          <img
            src="/home/eu.jpg"
            @error="failedAvif = true"
            alt="Esta camisola foi roubada no labirinto :/"
            style="width: 100%; height: 100%; object-fit: contain;"
          />
        </picture>
        <img
          v-else
          src="/home/eu.jpg"
          alt="Esta camisola foi roubada no labirinto :/"
          style="width: 100%; height: 100%; object-fit: contain;"
        />
      </n-avatar>
    </div>
    <div class="description-container">
      <n-h1>Welcome!</n-h1>
      <n-p>
        Hey I'm Luis, a web developer and electronics enthusiast. 
        This website is a showcase of my personal projects, from hardware 
        tinkering to full-stack web applications.
      </n-p>
      <n-p>
        Feel free to browse my <router-link to="/projects">projects</router-link> 
        or check out my <router-link to="/cv">CV</router-link>.
      </n-p>
      
      <div class="featured-projects">
        <n-h3 style="margin-top: 32px; margin-bottom: 16px; font-weight: 600;">Recent Projects</n-h3>
        <n-flex gap="12px" align="center">
          <router-link 
            v-for="project in recentProjects" 
            :key="project.routeName" 
            :to="{ name: project.routeName }"
            class="project-btn"
          >
            <n-button secondary type="primary" size="small" round>
              {{ project.name }}
            </n-button>
          </router-link>
          
          <router-link to="/projects" class="view-all-link">
            View all →
          </router-link>

          <n-button text type="warning" @click="goToRandomProject" class="random-btn">
            Pick a Random Project 🎲
          </n-button>
        </n-flex>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { projectData } from '../data/projects';

const failedAvif = ref(false);
const router = useRouter();

const recentProjects = computed(() => {
  return projectData.slice(0, 3);
});

function goToRandomProject() {
  const randomIndex = Math.floor(Math.random() * projectData.length);
  const randomProject = projectData[randomIndex];
  router.push({ name: randomProject.routeName });
}
</script>

<style scoped lang="sass">
.home-container
  display: flex
  flex-direction: row
  gap: 24px

.avatar-container
  flex: 0 0 auto 
  display: flex
  justify-content: center
  align-items: center
  
  :deep(.n-avatar__text)
    transform: translateX(-50%) translateY(-40%) scale(2) !important

.description-container
  flex: 1
  display: flex
  flex-direction: column
  justify-content: center
  
  .n-h1
    margin-bottom: 16px

  .n-p
    font-size: 1.1em
    text-align: justify

  .n-p a
    text-decoration: none
    color: #58a6ff
    font-weight: bold
    transition: text-decoration 0.2s
    &:hover
      text-decoration: underline

  .project-btn
    text-decoration: none
    &:hover
      text-decoration: none

  .view-all-link
    text-decoration: none
    color: #888
    font-size: 0.9em
    font-weight: bold
    transition: color 0.2s
    margin-left: 4px
    &:hover
      color: #58a6ff
      text-decoration: none

  .random-btn
    margin-left: auto
    font-weight: bold
    transition: transform 0.2s
    &:hover
      transform: scale(1.05)

@media (max-width: 639px)
  .home-container
    flex-direction: column
    align-items: center

  .description-container
    .random-btn
      flex: 0 0 100%
</style>