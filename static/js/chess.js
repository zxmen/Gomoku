import { createHtmlElement } from "./utils.js";
export const BLACK = 1;
export const WHITE = 2;
export const NONE = 0;


// createChess(rowIndex,colIndex,color) {
//   const chess = createHtmlElement("div", "chess");
//   console.log(rowIndex,colIndex,color);
//   chess.style.cssText = `left:${colIndex*50}px;top:${rowIndex*50}px;background-color:${color};${color === 'black' ?  'background: radial-gradient(rgb(80 80 80), rgb(42 42 42), rgb(0, 0, 0) 10px)' : 'white'};`;
//   this.container.appendChild(chess);
//   return chess;
// }

export class Chess {
  constructor(container) {
    this.container = container;
  }

  createChess(rowIndex,colIndex,color) {
    const chess = createHtmlElement("div", "chess");
    chess.style.cssText = `left:${colIndex*50}px;top:${rowIndex*50}px;background-color:${color};${color === 'black' ?  'background: radial-gradient(rgb(80 80 80), rgb(42 42 42), rgb(0, 0, 0) 10px)' : 'white'};`;
    console.log(this.container);
    this.container.appendChild(chess);
    return chess;
  }
}