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
    processTurn({ rootState, commit, getters }, { board, cell }) {
      if (rootState.localboard[board].cells[cell] === null) {
        commit('setcellValue', {
          board,
          cell,
          value: getters.getCurrentTurn,
        });
        commit('changeCurrentTurn');
      }
    },
  },
};

export default game;
