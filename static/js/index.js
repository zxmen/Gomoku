import { Game } from "./game.js";
let container = document.querySelector('#board-container')
const game = new Game(15,container);
game.start();
