const setInitialState = () => {
  const state = [];
  for (let i = 0; i < 9; i++) {
    const el = {
      winner: null,
      squares: [],
    };
    for (let j = 0; j < 9; j++) {
      const square = null;
      el.squares.push(square);
    }

    state.push(el);
  }

  return state;
}

const squares = {
  state: setInitialState,
  getters: {
    getBoardById: state => id => {
      return state[id];
    },
  },
  mutations: {
    setSquareValue(state, { board, square, value }) {
      if (state[board].squares[square] === null) {
        console.log('updating');
        state[board].squares.splice(square, 1, value);
      }
    }
  }
}

export default squares;