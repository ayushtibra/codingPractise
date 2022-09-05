//leetcode.com/problems/valid-sudoku/
var isValidSudoku = function (board) {
  let rows = {};
  let cols = {};
  let boxs = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];

      if (num === ".") continue;

      let grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;
      //   console.log(grid);
      if (!rows[r]) rows[r] = new Set();
      if (!cols[c]) cols[c] = new Set();
      if (!boxs[grid]) boxs[grid] = new Set();

      if (rows[r].has(num) || cols[c].has(num) || boxs[grid].has(num)) {
        return false;
      }

      rows[r].add(num);
      cols[c].add(num);
      boxs[grid].add(num);
    }
  }

  //   console.log(rows);
  //   console.log(cols);
  //   console.log(boxs);
  //if there is no repetion that mean the sodoku is valid retrun true
  return true;
};

const arr = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const result = isValidSudoku(arr);
