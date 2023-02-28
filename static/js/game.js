import { Board } from "./board.js";
import { Player } from "./player.js";

export class Game {
  constructor(size,container) {
    this.board = new Board(size,container);
    this.players = [
      new Player("Player 1", "black"),
      new Player("Player 2", "white")
    ];
    this.currentPlayerIndex = 0;
    this.isGameOver = false;
  }

  start() {
    this.board.render();
    this.setupBoardEventListener();
  }

  setupBoardEventListener() {
    this.board.container.addEventListener("click", event => {
      const targetGrid = event.target.closest(".grid");
      console.log(targetGrid);
      if (!targetGrid) return;
      const { rowIndex, colIndex } = targetGrid.dataset;
      const isMoveValid = this.board.placeMove(rowIndex, colIndex, this.players[this.currentPlayerIndex].color);
      if (isMoveValid) {
        this.board.render();
        if (this.isGameOver) {
          alert(`Game over! ${this.players[this.currentPlayerIndex].name} wins!`);
        } else {
          this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }
      } else {
        alert("Invalid move! Please try again.");
      }
    });
  }
}
