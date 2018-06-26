const setInitialState = () => {
  const state = [];
  for (let i = 0; i < 9; i += 1) {
    const el = {
      winner: null,
      squares: [],
    };
    for (let j = 0; j < 9; j += 1) {
      const square = null;
      el.squares.push(square);
    }

    state.push(el);
  }

  return state;
};

const squares = {
  state: setInitialState,
  getters: {
    getBoardById: state => id => state[id],
  },
  mutations: {
    setSquareValue(state, { board, square, value }) {
      state[board].squares.splice(square, 1, value);
    },
  },
};

export default squares;
