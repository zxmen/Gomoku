import { createHtmlElement } from "./utils.js";
import { checkWinner,Win } from "./win.js";
import { Chess } from "./chess.js";

export class Board {
  constructor(size,container) {
    this.size = size;
    this.container = container;
    //预留棋子的位置
    this.grids = [];
    //创建封锁棋盘的div
    this.lockBoard = createHtmlElement("div", "lock");
    this.lockBoard.style.cssText = `width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1000;display: none;`;
    //遮住.board，e.stopPropagation()防止点击.lock后冒泡到.board
    this.lockBoard.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("请开始游戏");
    });
    this.container.appendChild(this.lockBoard);

    this.chess = new Chess(container);
    this.win = new Win();
  }

  init() {
    this.render();
    this.lock()
  }
  render() {
    for (let i = 0; i <= this.size; i++) {
      this.grids[i] = [];
      for (let j = 0; j <= this.size; j++) {
        this.grids[i][j] = 0;
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

  //锁定棋盘
  lock() {
    this.lockBoard.style.display = "block";
  }

  //解锁棋盘
  unlock() {
    this.lockBoard.style.display = "none";
  }

  placeMove(rowIndex, colIndex, player) {
    let color = player.color;
    //this.grids填入颜色
    console.log('placeMove');
    if (this.grids[rowIndex][colIndex]) {
      console.log(rowIndex, colIndex);
      console.log('重复')
      return 'repeat';
    }
    this.grids[rowIndex][colIndex] = player.index;
    //创建棋子
    this.chess.createChess(rowIndex,colIndex,color);

    // this.checkWinner.insert(rowIndex, colIndex, color);

    // const isGameOver = this.checkWinner.check(rowIndex, colIndex, this.grids);
    console.log(this.grids);
    const isGameOver = checkWinner(rowIndex, colIndex, this.grids);
    if (isGameOver) {
      this.isGameOver = true;
      this.win.showWinner(color);
      return 'gameOver';
    }
    return 'keepPlaying';
  }

  reset() {
    this.grids.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        this.grids[rowIndex][colIndex] = 0;
      });
    })
    this.clearChess();
    this.isGameOver = false;
  }

  clearChess() {
    const chessElements = document.querySelectorAll('.chess');
    chessElements.forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }
}