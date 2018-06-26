<template>
  <div class="board w-700 h-700">
    <div class="board__winner" v-if="gameWinner">Player {{ gameWinner }} has won the game</div>
    <local-board v-for="i in 9" :key="i - 1" :board="i - 1" />
  </div>
</template>

<script>
import LocalBoard from '@/components/LocalBoard.vue';

export default {
  components: {
    LocalBoard,
  },
  computed: {
    gameWinner() {
      return this.$store.getters['game/getWinner'];
    },
  },
};
</script>
