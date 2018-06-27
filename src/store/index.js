import Vue from 'vue';
import Vuex from 'vuex';

import isWinningCombo from './utils/isWinningCombo';

Vue.use(Vuex);

const getDefaultState = () => {
  const boards = [];

  for (let i = 0; i < 9; i += 1) {
    const el = {
      winner: null,
      cells: [],
    };
    for (let j = 0; j < 9; j += 1) {
      const cell = null;
      el.cells.push(cell);
    }

    boards.push(el);
  }

  return {
    player_one_symbol: 'X',
    player_two_symbol: 'O',
    currentTurn: 'X',
    winner: null,
    boards,
  };
};


export default new Vuex.Store({
  state: getDefaultState,
  getters: {
    getBoardById: state => id => state.boards[id],
    getBoardWinners: state => state.boards.map(board => board.winner),
    getCurrentTurn: state => state.currentTurn,
    getWinner: state => state.winner,
  },
  mutations: {
    setCellValue(state, { board, cell, value }) {
      state.boards[board].cells.splice(cell, 1, value);
    },
    setBoardWinner(state, { board, winner }) {
      state.boards[board].winner = winner;
    },
    changeCurrentTurn(state) {
      state.currentTurn = state.currentTurn === state.player_one_symbol ? state.player_two_symbol : state.player_one_symbol;
    },
    setWinner(state, { symbol }) {
      state.winner = symbol;
    },
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    processTurn({ commit, getters }, { board, cell }) {
      const localBoard = getters.getBoardById(board);
      const currentTurn = getters.getCurrentTurn;

      if (localBoard.cells[cell] === null) {
        commit('setCellValue', {
          board,
          cell,
          value: currentTurn,
        }, { root: true });

        // check if localboard has a winner
        if (isWinningCombo(localBoard.cells)) {
          commit('setBoardWinner', {
            board,
            winner: currentTurn,
          }, { root: true });

          // check if full game has a winner
          if (isWinningCombo(getters.getBoardWinners)) {
            commit('setWinner', {
              symbol: currentTurn,
            });
          }
        } else {
          console.log('no local winner yet');
        }


        // if no winner set which local board is active

        // if no winner change the current turn
        commit('changeCurrentTurn');
      }
    },
  },
});
