import isWinningCombo from '../utils/isWinningCombo';

const getDefaultState = () => ({
  player_one_symbol: 'X',
  player_two_symbol: 'O',
  currentTurn: 'X',
  winner: null,
});

const game = {
  namespaced: true,
  state: getDefaultState,
  getters: {
    getCurrentTurn: state => state.currentTurn,
    getWinner: state => state.winner,
  },
  mutations: {
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
    processTurn({ commit, getters, rootGetters }, { board, cell }) {
      const localBoard = rootGetters['localboard/getBoardById'](board);
      const currentTurn = getters.getCurrentTurn;

      if (localBoard.cells[cell] === null) {
        commit('localboard/setCellValue', {
          board,
          cell,
          value: currentTurn,
        }, { root: true });

        // check if localboard has a winner
        if (isWinningCombo(localBoard.cells)) {
          commit('localboard/setBoardWinner', {
            board,
            winner: currentTurn,
          }, { root: true });

          // check if full game has a winner
          if (isWinningCombo(rootGetters['localboard/getBoardWinners'])) {
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
};

export default game;
