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
  name: 'local-board',
  props: [
    'board',
  ],
  components: {
    Cell,
  },
  computed: {
    localBoard() {
      return this.$store.getters['localboard/getBoardById'](this.board);
    },
  },
  methods: {
    processTurn(board, cell) {
      this.$store.dispatch('game/processTurn', {
        board,
        cell,
        value: 'X',
      });
    },
  },
};
</script>
