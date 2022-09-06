//leetcode.com/problems/shuffle-the-array/
var shuffle = function (nums, n) {
  const result = [];
  let i = 0;
  let middle = n;
  while (middle < nums.length) {
    result.push(nums[i]);
    result.push(nums[middle]);
    i++;
    middle++;
  }

  return result;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
