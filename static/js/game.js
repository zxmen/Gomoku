import { Board } from "./board.js";
import { Player } from "./player.js";

export class Game {
	constructor(size, container) {
		this.board = new Board(size, container);
		this.players = [
			new Player("Player 1", "black"),
			new Player("Player 2", "white"),
		];
		this.currentPlayerIndex = 0;
		this.isGameOver = false;
	}

	init() {
		this.board.render();
		this.setupBoardEventListener();
	}

	setupBoardEventListener() {
		this.board.container.addEventListener("click", (event) => {
      let rowIndex,colIndex
			console.log(event);
			console.log(event.target);
			//有可能点击了棋盘的边框。这时候targetGrid是null
			const targetGrid = event.target.closest(".grid");
			// if (event.offsetX > event.target.clientWidth / 2) {
			//   colIndex += 1;
			// }
			// if (event.offsetY > event.target.clientHeight / 2) {
			//   rowIndex += 1;
			// }
			if (targetGrid === null) {
        let x = Math.abs(event.offsetX)
        let y = Math.abs(event.offsetY)
        console.log(x,y);
        colIndex = x < 25 ? 0 : Math.floor((x - 25) / 50) + 1;;
        rowIndex = y < 25 ? 0 : Math.floor((y - 25) / 50) + 1;;
        
			} else {
				console.log(targetGrid.dataset);
				// let { rowIndex, colIndex } = targetGrid.dataset;
				rowIndex = parseInt(targetGrid.dataset.rowIndex);
				colIndex = parseInt(targetGrid.dataset.colIndex);
				if (event.offsetX > event.target.clientWidth / 2) {
					colIndex += 1;
				}
				if (event.offsetY > event.target.clientHeight / 2) {
					rowIndex += 1;
				}
			}
      console.log(rowIndex,colIndex)
			const isMoveValid = this.board.placeMove(
				rowIndex,
				colIndex,
				this.players[this.currentPlayerIndex].color
			);
			if (isMoveValid) {
				// this.board.render();
				if (this.isGameOver) {
					alert(
						`Game over! ${this.players[this.currentPlayerIndex].name} wins!`
					);
				} else {
					this.currentPlayerIndex =
						(this.currentPlayerIndex + 1) % this.players.length;
				}
			} else {
				alert("Invalid move! Please try again.");
			}
		});
	}
}
