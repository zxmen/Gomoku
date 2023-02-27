const boardSize = 15;
let count = 0;

function createBoard() {
  const container = document.getElementById("board-container");
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.id = `grid-${i * boardSize + j}`;
      container.appendChild(grid);
      count++
    }
  }
  console.log(count);
}

createBoard();
