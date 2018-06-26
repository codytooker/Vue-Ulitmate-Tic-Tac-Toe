<template>
  <div class="board board--local">
    <square v-for="(square, index) in localBoard.squares"
            :key="index"
            :value="square"
            @click.native="processTurn(board, index)"></square>
  </div>
</template>

<script>
import Square from '@/components/Square.vue';

export default {
  name: 'board-section',
  props: [
    'board',
  ],
  components: {
    Square,
  },
  computed: {
    localBoard() {
      return this.$store.getters.getBoardById(this.board);
    },
  },
  methods: {
    processTurn(board, square) {
      this.$store.dispatch('processTurn', {
        board,
        square,
        value: 'X',
      });
    },
  },
};
</script>
