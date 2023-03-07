import { Board } from "./board.js";
import { Player } from "./player.js";
import { Menu } from "./menu.js";

export class Game {
	constructor(size, container, menu) {
		this.board = new Board(size, container);
		this.menu = new Menu(menu);
		this.players = [
			new Player("Player 1", "black", 1),
			new Player("Player 2", "white", 2),
		];
		this.currentPlayerIndex = 0;
		// this.isGameOver = false;
	}

	init() {
		this.board.init();
		this.menu.createMenu()
		this.setupBoardEventListener();
		// this.settingsEventListener()
	}

	setupBoardEventListener() {
		//下棋
		this.board.container.addEventListener("click", (event) => {
			event.stopPropagation()
      let rowIndex,colIndex
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
      // console.log(rowIndex,colIndex)
			//落子
			const isMoveValid = this.board.placeMove(
				rowIndex,
				colIndex,
				this.players[this.currentPlayerIndex]
			);
			console.log(isMoveValid);
			if ('keepPlaying' === isMoveValid) {
				this.currentPlayerIndex =
				(this.currentPlayerIndex + 1) % this.players.length;
			}
			if ('repeat' === isMoveValid) {
				alert("Invalid move! Please try again.");
			}	
			if ('gameOver' === isMoveValid) {
				this.menu.start.textContent = "重新开始";
				this.board.lock();
			}
		},);

		//第一次点击是开始游戏，第二次点击是重置游戏
		this.menu.start.addEventListener("click", () => {
			//第一次点击是开始游戏。应该省去reset的步骤
			if (this.menu.start.textContent === "重新开始") {
				this.board.reset();
			}
			this.board.unlock();
		})
	}
}
