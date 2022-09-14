//leetcode.com/problems/minimum-time-visiting-all-points
var minTimeToVisitAllPoints = function (points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const diffSecPoint = points[i + 1][1] - points[i][1];
    const diffFirPoint = points[i + 1][0] - points[i][0];

    if (Math.abs(diffSecPoint) > Math.abs(diffFirPoint)) {
      sum = sum + Math.abs(diffSecPoint);
    } else {
      sum = sum + Math.abs(diffFirPoint);
    }
  }

  return sum;
};

minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0],
]);
