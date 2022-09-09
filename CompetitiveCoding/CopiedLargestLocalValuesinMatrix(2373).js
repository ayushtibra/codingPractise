//leetcode.com/problems/largest-local-values-in-a-matrix/submissions/

var largestLocal = function (grid) {
  let ans = [];
  for (let i = 0; i < grid.length - 2; i++) {
    let row = [];
    for (let j = 0; j < grid.length - 2; j++) {
      const num = Math.max(
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2]
      );
      row.push(num);
    }
    ans.push(row);
  }
  return ans;
};

largestLocal([
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
]);
