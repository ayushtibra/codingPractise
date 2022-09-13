//leetcode.com/problems/maximum-product-difference-between-two-pairs
var maxProductDifference = function (nums) {
  let flarge = 0;
  let slarge = 0;
  let fsmall = 10000;
  let ssmall = 10000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > flarge) {
      slarge = flarge;
      flarge = nums[i];
    } else if (nums[i] > slarge) {
      slarge = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < fsmall) {
      ssmall = fsmall;
      fsmall = nums[i];
    } else if (nums[i] < ssmall) {
      ssmall = nums[i];
    }
  }

  const result = flarge * slarge - fsmall * ssmall;
  return result;
};

maxProductDifference([4, 2, 5, 9, 7, 4, 8]);
