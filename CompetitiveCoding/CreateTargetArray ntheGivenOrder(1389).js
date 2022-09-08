//leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function (nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  //   console.log(target);
  return target;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
