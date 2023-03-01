import { createHtmlElement } from "./utils.js";
import { checkWin } from "./win.js";

export class Board {
  constructor(size,container) {
    this.size = size;
    this.container = container;
    //预留棋子的位置
    this.grids = [];
  }

  render() {
    for (let i = 0; i <= this.size; i++) {
      this.grids[i] = [];
      for (let j = 0; j <= this.size; j++) {
        this.grids[i][j] = null;
        //棋盘的每个格子
        if (i < this.size && j < this.size) {
          const grid = document.createElement("div");
          grid.classList.add("grid");
          grid.dataset.rowIndex = i;
          grid.dataset.colIndex = j;
          this.container.appendChild(grid);  
        } 
      }
    }
  }

  placeMove(rowIndex, colIndex, color) {
    //this.grids填入颜色

    if (this.grids[rowIndex][colIndex]) {
      console.log(rowIndex, colIndex);
      console.log('重复')
      return false;
    }
    this.grids[rowIndex][colIndex] = color;
    //创建棋子
    this.createChess(rowIndex,colIndex,color);
    const isGameOver = checkWin(this.grids);
    if (isGameOver) {
      this.isGameOver = true;
      alert(`${color}获胜`)  
    }
    return true;
  }

  // switchPlayer() {
  //   this.currentPlayerSymbol = this.currentPlayerSymbol === "x" ? "o" : "x";
  //   const playerElement = document.querySelector(".current-player");
  //   playerElement.textContent = this.currentPlayerSymbol.toUpperCase();
  // }

  //创建棋子
  createChess(rowIndex,colIndex,color) {
    const chess = createHtmlElement("div", "chess");
    console.log(rowIndex,colIndex,color);
    chess.style.backgroundColor = color;
    chess.style.left = colIndex*50 + "px";
    chess.style.top = rowIndex*50 + "px";
    this.container.appendChild(chess);
    return chess;
  }
}