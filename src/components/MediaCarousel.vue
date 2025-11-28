<template>
  <div class="carousel-div">
    <n-image-group>
      <n-carousel class="carousel" :show-arrow="!isMobile" :show-dots="isMobile" dot-type="line" @update:current-index="(i: number) => selectedIndex = i">
        <template v-for="item in media">
            <!-- Image media -->
            <n-image
              v-if="item.type === 'image'"
              class="carousel-media"
              :src="failedImageAvif.has(item.src) ? item.src : getImageSrc(item)"
              :alt="item?.description || 'no description here blind person, sorry'"
              object-fit="contain"
              @error="onImageFail(item)"
            />
            <template v-else-if="item.type === 'video'">
              <img
                v-if="!failedVideoAvif.has(item.src)"
                class="carousel-avif"
                :src="getVideoAvif(item)"
                :alt="item?.description || 'video (avif) placeholder'"
                @error="onVideoAvifFail(item)"
              />
              <video
                v-else
                class="carousel-media"
                :src="item.src"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              />
            </template>
        </template>
      </n-carousel>
      <div v-if="media[selectedIndex]?.description || media[selectedIndex]?.linkTo" class="carousel-description squid-description">
        [
        <template v-if="media[selectedIndex]?.description">{{ media[selectedIndex].description }}</template>
        <template v-if="media[selectedIndex]?.linkTo">
          <RouterLink :to="media[selectedIndex].linkTo" class="carousel-link aquid-good">
            {{ media[selectedIndex].linkLabel || '' }}
          </RouterLink>
        </template>
        ]
      </div>
      <div v-else class="carousel-description"></div>
    </n-image-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMobileDetection } from '../composables/useMobileDetection';
import { IMedia } from '../models/media';
import { useAvif } from '../composables/useAvif';

const selectedIndex = ref(0);
const { isMobile } = useMobileDetection();

defineProps<{ media: IMedia[] }>();

const { deriveAvifPath, getPreferredImage } = useAvif();
const failedVideoAvif = ref<Set<string>>(new Set());
const failedImageAvif = ref<Set<string>>(new Set());

function getImageSrc(item: IMedia) {
  if (item.type !== 'image') return item.src;
  return getPreferredImage(item.src);
}

function getVideoAvif(item: IMedia) {
  return deriveAvifPath(item.src);
}

function onVideoAvifFail(item: IMedia) {
  if (!failedVideoAvif.value.has(item.src)) {
    const s = new Set(failedVideoAvif.value);
    s.add(item.src);
    failedVideoAvif.value = s;
  }
}
function onImageFail(item: IMedia) {
  if (!failedImageAvif.value.has(item.src)) {
    const s = new Set(failedImageAvif.value);
    s.add(item.src);
    failedImageAvif.value = s;
  }
}

</script>

<style scoped lang="sass">
.carousel-div
  display: flex
  flex-direction: column

.carousel
  max-width: 800px
  height: 400px
  background-color: #000
  :deep(.n-carousel__arrow-group)
    position: absolute
    right: calc(50% - 34px)
  
:deep(.n-carousel__slide)
  display: flex
  justify-content: center
  align-items: center
  background-color: var(--background-color)

.carousel-media
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  :deep(img)
    width: 100%
    height: 100%
    object-fit: contain

.carousel-avif
  max-width: 100%
  max-height: 100%
  width: auto
  height: auto
  object-fit: contain
  display: block  // Add this - removes inline spacing

.carousel-description
  margin-top: 8px
  text-align: center
  font-size: 12px
  height: 42px
  .carousel-link
    margin-left: 4px
    text-decoration: underline
    cursor: pointer

@media (max-width: 800px)
  .carousel
    height: auto !important

  .carousel-media
    width: 100%
    height: auto !important
    max-height: 400px
  :deep(.carousel-media img)
    height: auto !important
    width: 100%
  
</style>