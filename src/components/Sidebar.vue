<script lang="ts" setup>
import { ref } from 'vue';

const Tags = ref([
  'c#',
  'Matek',
  'JavaScript',
  'appleneplazsekneny',
  'Matek',
  'JavaScript',
  'appleneplazsekneny',
  'Matek',
  'JavaScript',
  'appleneplazsekneny',
  'c#',
  'Matek',
  'JavaScript',
  'appleneplazsekneny',
  'Matek'
]);
</script>
<template>
  <div class="sidebar mx-3">
    <h3>Címkék</h3>
    <div class="tags">
      <div v-for="tag in Tags" class="tag">
        {{ tag }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.sidebar {
  @apply flex flex-col justify-center content-start items-center h-full;
}
h3 {
  @apply w-full self-start text-3xl text-neutral-700 font-medium;
  margin: 20px 0px;
}
.tag {
  @apply flex flex-col justify-center content-center items-center text-neutral-500 px-3 py-1 w-full;
  margin-bottom: 0.5rem;
  border-radius: 10px;

  &:nth-child(even) {
    @apply bg-orange-200;
    &:hover {
      @apply bg-orange-400;
    }
  }
  &:hover {
    @apply bg-neutral-200;
  }
}
</style>
