export function createChess(color) {
  const chess = document.createElement("div");
  chess.className = color;
  return chess;
}
