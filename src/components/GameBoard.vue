<template>
  <div class="board w-700 h-700">
    <local-board v-for="i in 9" :key="i - 1" :board="i - 1" />
  </div>
</template>

<script>
import LocalBoard from '@/components/LocalBoard.vue';

export default {
  components: {
    LocalBoard,
  },
};
</script>
