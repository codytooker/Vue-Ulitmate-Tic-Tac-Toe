<template>
  <div class="board board--local">
    <cell v-for="(cell, index) in localBoard.cells"
            :key="index"
            :value="cell"
            @click.native="processTurn(board, index)"></cell>
  </div>
</template>

<script>
import Cell from '@/components/cell.vue';

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
