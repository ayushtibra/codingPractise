//leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
var countGoodRectangles = function (rectangles) {
  const lengthArr = [];
  for (let i = 0; i < rectangles.length; i++) {
    let minimum = 1000000000000000;
    for (let j = 0; j < rectangles[i].length; j++) {
      if (rectangles[i][j] < minimum) {
        minimum = rectangles[i][j];
      }
    }
    lengthArr.push(minimum);
  }

  lengthArr.sort((a, b) => a - b);
  const maxElement = lengthArr[lengthArr.length - 1];

  const mapObj = {};
  for (let i = 0; i < lengthArr.length; i++) {
    if (mapObj[lengthArr[i]]) {
      mapObj[lengthArr[i]] = mapObj[lengthArr[i]] + 1;
    } else {
      mapObj[lengthArr[i]] = 1;
    }
  }

  return mapObj[maxElement];
};

countGoodRectangles([
  [5, 8],
  [3, 9],
  [3, 12],
]);
