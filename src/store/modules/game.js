import { didPlayerWinLocalBoard } from '@/store/utils/game-logic';

const initialstate = {
  player_one_symbol: 'X',
  player_two_symbol: 'O',
  currentTurn: 'X',
  winner: null,
};

const game = {
  state: initialstate,
  getters: {
    getCurrentTurn: state => state.currentTurn,
  },
  mutations: {
    changeCurrentTurn(state) {
      state.currentTurn = state.currentTurn === state.player_one_symbol ? state.player_two_symbol : state.player_one_symbol;
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

        commit('changeCurrentTurn');

        // check if localboard has a winner
        if (didPlayerWinLocalBoard(localBoard)) {
          commit('setBoardWinner', {
            board,
            winner: currentTurn,
          });
        } else {
          console.log('no local winner yet');
        }

        // if so check if full game has a winner

        // if no winner set which local board is active
      }
    },
  },
};

export default game;
