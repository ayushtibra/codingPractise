//leetcode.com/problems/build-array-from-permutation/

var buildArray = function (nums) {
  let ans = [];
  let i = 0;
  while (i < nums.length) {
    ans[i] = nums[nums[i]];
    i++;
  }

  return ans;
};

const result = buildArray([5, 0, 1, 2, 3, 4]);
