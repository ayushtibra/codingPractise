//leetcode.com/problems/container-with-most-water/

https: var maxArea = function (height) {
  let area = 0;
  let leftP1 = 0;
  let rightP2 = height.length - 1;

  while (leftP1 < rightP2) {
    area = Math.max(
      (rightP2 - leftP1) * Math.min(height[leftP1], height[rightP2]),
      area
    );

    height[leftP1] > height[rightP2] ? rightP2-- : leftP1++;
  }

  return area;
};

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);
