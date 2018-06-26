<template>
  <div class="board board--local">
    <div class="board__winner" v-if="localBoard.winner" v-text="localBoard.winner"></div>
    <cell v-for="(cell, index) in localBoard.cells"
            :key="index"
            :value="cell"
            @click.native="processTurn(board, index)"></cell>
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue';

export default {
  name: 'board-section',
  props: [
    'board',
  ],
  components: {
    Cell,
  },
  computed: {
    localBoard() {
      return this.$store.getters.getBoardById(this.board);
    },
  },
  methods: {
    processTurn(board, cell) {
      this.$store.dispatch('processTurn', {
        board,
        cell,
        value: 'X',
      });
    },
  },
};
</script>
