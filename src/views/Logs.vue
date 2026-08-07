<template>
  <div class="logs-container">
    <div class="tree-view-container">
      <div class="tree-sidebar">
        <n-tree
          block-line
          expand-on-click
          selectable
          default-expand-all
          :data="treeData"
          :selected-keys="selectedKeys"
          @update:selected-keys="handleTreeSelect"
        />
      </div>
      
      <div class="tree-content">
        <div 
          v-for="log in filteredLogs" 
          :key="log.name" 
          class="log-entry"
          :id="'log-' + log.routeName"
        >
          <LogLoader :log="log" />
        </div>
        <div v-if="filteredLogs.length === 0" class="empty-selection">
          <n-empty description="Select a log from the tree" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { logData } from '../data/logs';
import { formatMonthYear } from '../utils/date';
import LogLoader from '../components/LogLoader.vue';

const selectedKeys = ref<string[]>([]);

const treeData = computed(() => {
  const years = [...new Set(logData.map(l => l.date.split('-')[0]))].sort((a, b) => b.localeCompare(a));
  return years.map(year => ({
    label: year,
    key: year,
    children: logData
      .filter(l => l.date.startsWith(year))
      .map(l => ({
        label: l.name,
        key: l.routeName // Using routeName as key for scrolling
      }))
  }));
});

const filteredLogs = computed(() => {
  return logData; // Always show all logs for a "feed" feel
});

function handleTreeSelect(keys: string[]) {
  selectedKeys.value = keys;
  const key = keys[0];
  if (key) {
    const el = document.getElementById('log-' + key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
</script>

<style scoped lang="sass">
.logs-container
  width: 100%
  min-height: 100vh

.tree-view-container
  display: flex
  flex-direction: row
  @media (max-width: 768px)
    flex-direction: column
    margin: 0

.tree-sidebar
  flex: 0 0 250px
  background: var(--n-color-modal, rgba(0, 0, 0, 0.02))
  padding: 16px
  padding-top: 0
  border-radius: 8px
  position: sticky
  top: 24px
  height: max-content
  max-height: calc(100vh - 48px)
  overflow-y: auto
  @media (max-width: 768px)
    flex: none
    width: 100%
    position: static

.tree-content
  flex: 1
  min-width: 0

.log-details
  padding: 16px 0
  margin-bottom: 64px
  
.log-date
  font-family: monospace
  font-size: 1.1em
  opacity: 0.7
  margin-bottom: 8px

.log-title
  font-size: 2.5em
  font-weight: bold
  margin-top: 0
  margin-bottom: 24px
  line-height: 1.2

.log-media-container
  width: 100%
  border-radius: 8px
  overflow: hidden
  margin-bottom: 32px
  background: var(--n-color-modal, rgba(0,0,0,0.05))

.log-media
  width: 100%
  display: block
  max-height: 600px
  object-fit: cover

.log-description
  font-size: 1.2em
  line-height: 1.6
  text-align: justify
  margin-bottom: 32px
  opacity: 0.9

.log-footer
  margin-top: 24px

.empty-selection
  display: flex
  justify-content: center
  align-items: center
  height: 400px
  opacity: 0.7
</style>
