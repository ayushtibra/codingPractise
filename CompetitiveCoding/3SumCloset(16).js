//leetcode.com/problems/3sum-closest/

//leetcode.com/problems/3sum-closest/discuss/2221877/JavaScript-(JS)-solution
//leetcode.com/problems/3sum-closest/discuss/1941138/Readable-JavaScript-Solution
//leetcode.com/problems/3sum-closest/discuss/1915976/Easy-to-understand-clear-solution-or-memory-less-then-99-or-90-faster
// My soulution exceed time limit - please check above one
var threeSumClosest = function (nums, target) {
  let distance = 100000;
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        if (nums[i] + nums[j] + nums[z] == target) {
          return nums[i] + nums[j] + nums[z];
        }

        if (Math.abs(target - (nums[i] + nums[j] + nums[z])) > distance) {
        } else {
          distance = Math.abs(target - (nums[i] + nums[j] + nums[z]));
          result = nums[i] + nums[j] + nums[z];
        }
      }
    }
  }
  return result;
};

const result = threeSumClosest([1, 1, 1, 0], -100);
console.log(result);
