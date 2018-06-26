function isWinningCombo(cells) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.find((combo) => {
    if (cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
      return cells[combo[0]];
    }
    return false;
  });
}


export function didPlayerWinLocalBoard(localBoard) {
  return isWinningCombo(localBoard.cells);
}

export function didPlayerWinGame() {

}
