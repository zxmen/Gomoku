import { createHtmlElement } from "./utils.js";
import { checkWinner } from "./win.js";
import { Chess } from "./chess.js";

export class Board {
  constructor(size,container) {
    this.size = size;
    this.container = container;
    //预留棋子的位置
    this.grids = [];
    this.chess = new Chess();
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
    this.chess.createChess(rowIndex,colIndex,color);
    const isGameOver = checkWinner(rowIndex,colIndex,color,this.grids,this.size);
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

  // //创建棋子
  // createChess(rowIndex,colIndex,color) {
  //   const chess = createHtmlElement("div", "chess");
  //   console.log(rowIndex,colIndex,color);
  //   chess.style.cssText = `left:${colIndex*50}px;top:${rowIndex*50}px;background-color:${color};${color === 'black' ?  'background: radial-gradient(rgb(80 80 80), rgb(42 42 42), rgb(0, 0, 0) 10px)' : 'white'};`;
  //   this.container.appendChild(chess);
  //   return chess;
  // }
}