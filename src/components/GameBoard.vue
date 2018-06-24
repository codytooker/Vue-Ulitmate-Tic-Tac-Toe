<template>
  <div class="flex flex-wrap bg-white w-700 h-700">
    <div class="board-section flex-grow" v-for="i in 9" :key="i">
      <local-board></local-board>
    </div>
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
