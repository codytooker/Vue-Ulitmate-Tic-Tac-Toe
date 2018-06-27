<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen bg-blue">
    <GameBoard></GameBoard>
    <div class="text-3xl text-white mt-10">{{ currentTurn }} it's your turn</div>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: 'play',
  components: {
    GameBoard,
  },
  computed: {
    currentTurn() {
      return this.$store.getters.getCurrentTurn;
    },
  },
};
</script>
