export function checkWinner(row,col,color,grids,size) {
  if (checkRow(row,col,color,grids,size) || checkCol(row,col,color,grids,size) || checkLeftTopToRightBottom(row,col,color,grids,size) || checkRightTopToLeftBottom(row,col,color,grids,size)) {
    return true;
  }
  return false;
}

//检查行是否有五个相同的棋子
function checkRow(row,col,color,grids,size) {
  let count = 1;
  let x = col - 1,
      y = col + 1;
  while (x >= 0 && grids[row][x] === color) {
    count++;
    x--;
  }
  while (y < size && grids[row][y] === color) {
    count++;
    y++;
  }
  return count >= 5;
}

//检查列是否有五个相同的棋子
function checkCol(row,col,color,grids,size) { 
  let count = 1;
  let x = row - 1,
      y = row + 1;
  while (x >= 0 && grids[x][col] === color) {
    count++;
    x--;
  }
  while (y < size && grids[y][col] === color) {
    count++;
    y++;
  }
  return count >= 5;
}

// 检查左上到右下斜线是否有五个相同的棋子
function checkLeftTopToRightBottom(row,col,color,grids,size) {
  let count = 1;
  let x = row - 1,
      y = row + 1,
      a = col - 1,
      b = col + 1;
  while (x >= 0 && a >= 0 && grids[x][a] === color) {
    count++;
    x--;
    a--;
  }
  while (y < size && b < size && grids[y][b] === color) {
    count++;
    y++;
    b++;
  }
  return count >= 5;
}

// 检查右上到左下斜线是否有五个相同的棋子
function checkRightTopToLeftBottom(row,col,color,grids,size) {
  let count = 1,
  x = row - 1,
  y = row + 1,
  a = col + 1,
  b = col - 1;
  while (x >= 0 && a < size && grids[x][a] === color) {
    count++;
    x--;
    a++;
  }
  while (y < size && b >= 0 && grids[y][b] === color) {
    count++;
    y++;
    b--;
  }
  return count >= 5;
}