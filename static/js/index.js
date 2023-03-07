import { Game } from "./game.js";
let container = document.querySelector('.board')
let menu = document.querySelector('.menu')
const game = new Game(15,container,menu);
game.init();
