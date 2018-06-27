<template>
  <div class="board w-700 h-700">
    <local-board v-for="i in 9" :key="i - 1" :board="i - 1" />
    <div class="board__winner" v-if="gameWinner">
      <span>Player {{ gameWinner }} has won the game</span>
      <button class="btn btn--primary" @click="playAgain">Play Again</button>
    </div>
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
      return this.$store.getters.getWinner;
    },
  },
  methods: {
    playAgain() {
      this.$store.commit('resetState');
    },
  },
};
</script>
