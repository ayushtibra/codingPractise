//leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function (nums) {
  const ans = [];
  let i = 0;
  let sum = 0;
  while (i < nums.length) {
    sum = sum + nums[i];
    ans.push(sum);
    i++;
  }

  return ans;
};

runningSum([3, 1, 2, 10, 1]);
