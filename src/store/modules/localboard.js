const getDefaultState = () => {
  const state = {
    boards: [],
  };
  for (let i = 0; i < 9; i += 1) {
    const el = {
      winner: null,
      cells: [],
    };
    for (let j = 0; j < 9; j += 1) {
      const cell = null;
      el.cells.push(cell);
    }

    state.boards.push(el);
  }

  return state;
};

const cells = {
  namespaced: true,
  state: getDefaultState,
  getters: {
    getBoardById: state => id => state.boards[id],
    getBoardWinners: state => state.boards.map(board => board.winner),
  },
  mutations: {
    setCellValue(state, { board, cell, value }) {
      state.boards[board].cells.splice(cell, 1, value);
    },
    setBoardWinner(state, { board, winner }) {
      state.boards[board].winner = winner;
    },
    resetState(state) {
      Object.assign(state, getDefaultState());
    },
  },
};

export default cells;
