<template>
  <div class="log-view">
    <div class="log-header">
      <n-h1 class="log-title squid-title">{{ name }}</n-h1>
      <div class="log-meta">
        <span class="log-date squid-highlight">{{ formattedDate }}</span>
        <n-space size="small" style="display: inline-flex; margin-left: 12px;">
          <n-tag v-for="keyword in keywords" :key="keyword" size="small" :bordered="false" type="info">
            {{ keyword }}
          </n-tag>
        </n-space>
      </div>
    </div>

    <div class="log-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getLogByRouteName, Log } from '../data/logs';
import { formatMonthYear } from '../utils/date';

const props = defineProps<{
  id: string;
}>();

const log = computed<Log | undefined>(() => getLogByRouteName(props.id));
const name = computed(() => log.value?.name);
const date = computed(() => log.value?.date);
const keywords = computed(() => log.value?.keywords || []);
const formattedDate = computed(() => formatMonthYear(date.value ?? ''));

</script>

<style scoped lang="sass">
.log-view
  padding: 0 32px
  max-width: 100%
  @media (max-width: 600px)
    padding: 0 4px

.log-header
  margin-bottom: 32px

.log-title
  margin-bottom: 8px
  font-size: 2.5em
  line-height: 1.2

.log-meta
  display: flex
  align-items: center
  flex-wrap: wrap
  gap: 8px
  opacity: 0.9

.log-date
  font-family: monospace
  font-size: 1.1em

.log-content
  font-size: 1.1em
  line-height: 1.7
  text-align: justify
  hyphens: auto
</style>
