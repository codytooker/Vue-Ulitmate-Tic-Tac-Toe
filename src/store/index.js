import Vue from 'vue';
import Vuex from 'vuex';

import isWinningCombo from './utils/isWinningCombo';

Vue.use(Vuex);

const getDefaultState = () => {
  const boards = [];

  for (let i = 0; i < 9; i += 1) {
    const el = {
      isPlayable: true,
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
    getBoardAvailability: state => state.boards.map(board => board.winner === null),
    getCurrentTurn: state => state.currentTurn,
    getWinner: state => state.winner,
  },
  mutations: {
    setCellValue(state, { board, cell, value }) {
      state.boards[board].cells.splice(cell, 1, value);
    },
    setBoardAvailability(state, { board, playable }) {
      state.boards[board].isPlayable = playable;
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
    processTurn({ commit, dispatch, getters }, { board, cell }) {
      const localBoard = getters.getBoardById(board);
      const currentTurn = getters.getCurrentTurn;

      if (localBoard.isPlayable && localBoard.cells[cell] === null) {
        commit('changeCurrentTurn');
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
          } else {
            dispatch('setAvailableBoards', cell);
          }
        } else {
          dispatch('setAvailableBoards', cell);
        }
      }
    },
    setAvailableBoards({ commit, getters }, id) {
      const boardAvailability = getters.getBoardAvailability;

      if (boardAvailability[id]) {
        boardAvailability.forEach((el, i) => {
          if (i === id) {
            commit('setBoardAvailability', {
              board: i,
              playable: true,
            });
          } else {
            commit('setBoardAvailability', {
              board: i,
              playable: false,
            });
          }
        });
      } else {
        boardAvailability.forEach((el, i) => {
          commit('setBoardAvailability', {
            board: i,
            playable: true,
          });
        });
      }
    },
  },
});
