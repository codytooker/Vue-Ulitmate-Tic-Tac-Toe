import isWinningCombo from '../utils/isWinningCombo';

const getDefaultState = () => ({
  player_one_symbol: 'X',
  player_two_symbol: 'O',
  currentTurn: 'X',
  winner: null,
});

const game = {
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
        });

        // check if localboard has a winner
        if (isWinningCombo(localBoard.cells)) {
          commit('setBoardWinner', {
            board,
            winner: currentTurn,
          });

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
};

export default game;
