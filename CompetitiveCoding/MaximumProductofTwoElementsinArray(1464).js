//leetcode.com/problems/maximum-product-of-two-elements-in-an-array
var maxProduct = function (nums) {
  let fLarge = 0;
  let sLarge = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > fLarge) {
      sLarge = fLarge;
      fLarge = nums[i];
    } else if (nums[i] > sLarge) {
      sLarge = nums[i];
    }
  }

  return (fLarge - 1) * (sLarge - 1);
};

maxProduct([3, 4, 5, 2]);
