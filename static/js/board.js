import { createHtmlElement } from "./utils.js";
import { checkWin } from "./win.js";

export class Board {
  constructor(size,container) {
    this.size = size;
    this.container = container;
    this.grids = [];
    for (let i = 0; i < this.size; i++) {
      this.grids[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.grids[i][j] = null;
      }
    }
  }

  render() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const grid = createHtmlElement("div", "grid");
        grid.dataset.rowIndex = i;
        grid.dataset.colIndex = j;
        if (this.grids[i][j]) {
          grid.appendChild(createChess(this.grids[i][j]));
        }
        this.container.appendChild(grid);
      }
    }
  }

  placeMove(rowIndex, colIndex, color) {
    if (this.grids[rowIndex][colIndex] !== null) {
      return false;
    }
    this.grids[rowIndex][colIndex] = color;
    const winner = checkWin(this.grids);
    if (winner) {
      this.isGameOver = true;
      // 弹出提示框或在页面上显示相应的信息
      alert(`${winner} wins!`);
    }
    return true;
  }  
}

function createChess(color) {
  const chess = createHtmlElement("div", color === "black" ? "black" : "white");
  const hint = createHtmlElement("div", "hint");
  hint.addEventListener("click", () => {
    if (!this.isGameOver) {
      const success = this.placeMove(i, j, this.isBlack ? "black" : "white");
      if (success) {
        this.isBlack = !this.isBlack;
        this.board.render();
      }
    }
  });
  chess.appendChild(hint);
  return chess;
}
