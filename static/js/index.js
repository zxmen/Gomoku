import { Game } from "./game.js";
let container = document.querySelector('#container')
const game = new Game(15,container);
game.init();
