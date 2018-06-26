const setInitialState = () => {
  const state = [];
  for (let i = 0; i < 9; i += 1) {
    const el = {
      winner: null,
      cells: [],
    };
    for (let j = 0; j < 9; j += 1) {
      const cell = null;
      el.cells.push(cell);
    }

    state.push(el);
  }

  return state;
};

const cells = {
  state: setInitialState,
  getters: {
    getBoardById: state => id => state[id],
  },
  mutations: {
    setCellValue(state, { board, cell, value }) {
      state[board].cells.splice(cell, 1, value);
    },
    setBoardWinner(state, { board, winner }) {
      state[board].winner = winner;
    },
  },
};

export default cells;
