//leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
var countPairs = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && (i * j) % k == 0) {
        console.log(i, j);
        count++;
      }
    }
  }

  return count;
};

countPairs([3, 1, 2, 2, 2, 1, 3], 2);
