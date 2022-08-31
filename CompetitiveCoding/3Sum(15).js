//leetcode.com/problems/3sum/submissions/

//leetcode.com/problems/3sum/discuss/2494813/JavaScript-Solution-Easy
// My soulution exceed time limit - please check above one
var threeSum = function (nums) {
  const result = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        if (nums[i] + nums[j] + nums[z] == 0) {
          let str = [nums[i], nums[j], nums[z]].sort((a, b) => a - b).join("");
          if (!set.has(str)) {
            result.push([nums[i], nums[j], nums[z]]);
            set.add(str);
          }
        }
      }
    }
  }

  return result;
};

const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
