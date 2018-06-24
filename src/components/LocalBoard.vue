<template>
  <div class="flex flex-wrap w-full h-full">
    <square v-for="i in 9" :key="i"></square>
  </div>
</template>

<script>
import Square from '@/components/Square.vue';

export default {
  name: 'board-section',
  components: {
    Square,
  },
};
</script>
