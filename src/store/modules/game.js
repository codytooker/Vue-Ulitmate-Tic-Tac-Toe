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
    processTurn({ rootState, commit, getters }, { board, square }) {
      if (rootState.localboard[board].squares[square] === null) {
        commit('setSquareValue', {
          board,
          square,
          value: getters.getCurrentTurn,
        });
        commit('changeCurrentTurn');
      }
    },
  },
};

export default game;
