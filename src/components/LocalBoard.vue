<template>
  <div class="board board--local">
    <square v-for="(square, index) in localBoard.squares"
            :key="index"
            :value="square"
            @click.native="setSquareValue(board, index)"></square>
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
    setSquareValue(board, square) {
      this.$store.commit('setSquareValue', {
        board,
        square,
        value: 'X',
      });
    },
  },
};
</script>
