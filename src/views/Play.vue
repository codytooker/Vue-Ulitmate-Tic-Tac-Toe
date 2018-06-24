<template>
  <div class="flex items-center justify-center w-screen h-screen bg-blue">
    <GameBoard></GameBoard>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: 'play',
  components: {
    GameBoard,
  },
};
</script>
