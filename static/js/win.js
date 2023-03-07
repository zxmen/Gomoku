export function checkWinner(row,col,grids) {
  console.log(grids);
  const size = grids.length;
  const color = grids[row][col];
  if (checkRow(row,col,color,grids,size) || checkCol(row,col,color,grids,size) || checkDiagonal(row,col,color,grids,size)) {
    console.log('checkRow: '+Boolean(checkRow(row,col,color,grids,size)));
    console.log('checkCol: '+Boolean(checkCol(row,col,color,grids,size)));
    console.log('checkDiagonal: '+Boolean(checkDiagonal(row,col,color,grids,size)));
    return true;
  }
  return false;
}

//检查行是否有五个相同的棋子
function checkRow(row,col,color,grids,size) {
  let x = col - 1,
      y = col + 1;
  while (x >= 0 && grids[row][x] === color) {
    x--;
  }
  while (y < size && grids[row][y] === color) {
    y++;
  }
  return y-1 - (x+1) >= 4;
}

//检查列是否有五个相同的棋子
function checkCol(row,col,color,grids,size) { 
  let x = row - 1,
      y = row + 1;
  while (x >= 0 && grids[x][col] === color) {
    x--;
  }
  while (y <= size && grids[y][col] === color) {
    y++;
  }
  console.log('row: '+row+' col: '+col+' x: '+x+' y: '+y);
  return y-1 - (x+1) >= 4;
}


//检查斜线是否有五个相同的棋子
function checkDiagonal(row,col,color,grids,size) {
  const directions = [
    { x: -1, y: -1, count: 0 },
    { x: 1, y: 1, count: 0 },
    { x: -1, y: 1, count: 0 },
    { x: 1, y: -1, count: 0 }
  ];
  
  for (let dir of directions) {
    let r = row + dir.x;
    let c = col + dir.y;

    while (r >= 0 && r < size && c >= 0 && c < size && grids[r][c] === color) {
      dir.count++;
      r += dir.x;
      c += dir.y;
    }
  }
  if (directions[0].count + directions[1].count >= 4 || directions[2].count + directions[3].count >= 4) {
    console.log('diagonal');
    return true;
  }
  return false;
}





export class Win {
  constructor() {
    this.winner = document.querySelector('.winner');
    this.winnerColor = document.querySelector('.winner-color');
  }

  showWinner(color) {
    this.winnerColor.textContent = `${color}`;
    this.winner.style.display = 'block';
    setTimeout(() => {
      this.winner.style.opacity = 0;
      this.winner.addEventListener('transitionend', () => {
        this.winner.style.display = 'none';
      }, { once: true });
    }, 2000);
  }
}
