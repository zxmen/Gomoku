export function checkWin(grids) {
	console.log(grids);
  // 检查横向
  for (let i = 0; i < 14; i++) {
    for (let j = 0; j <= 9; j++) {
      if (
        grids[i][j] !== null &&
        grids[i][j] === grids[i][j + 1] &&
        grids[i][j] === grids[i][j + 2] &&
        grids[i][j] === grids[i][j + 3] &&
        grids[i][j] === grids[i][j + 4]
      ) {
        return grids[i][j];
      }
    }
  }

  // 检查纵向
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        grids[i][j] !== null &&
        grids[i][j] === grids[i + 1][j] &&
        grids[i][j] === grids[i + 2][j] &&
        grids[i][j] === grids[i + 3][j] &&
        grids[i][j] === grids[i + 4][j]
      ) {
        return grids[i][j];
      }
    }
  }

  // 检查左上到右下斜线
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      if (
        grids[i][j] !== null &&
        grids[i][j] === grids[i + 1][j + 1] &&
        grids[i][j] === grids[i + 2][j + 2] &&
        grids[i][j] === grids[i + 3][j + 3] &&
        grids[i][j] === grids[i + 4][j + 4]
      ) {
        return grids[i][j];
      }
    }
  }

  // 检查左下到右上斜线
  for (let i = 4; i < 15; i++) {
    for (let j = 0; j <= 10; j++) {
      if (
        grids[i][j] !== null &&
        grids[i][j] === grids[i - 1][j + 1] &&
        grids[i][j] === grids[i - 2][j + 2] &&
        grids[i][j] === grids[i - 3][j + 3] &&
        grids[i][j] === grids[i - 4][j + 4]
      ) {
        return grids[i][j];
      }
    }
  }

  // 如果没有获胜方，返回null
  return null;
}
