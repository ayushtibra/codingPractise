// Return index of first and last element of the target element
const nums = [5, 7, 8, 8, 8, 10];
const target = 8;

var searchRange = function (nums, target) {
  let result = [];
  let finalResult = [];

  if (!nums.includes(target)) {
    return [-1, -1];
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == target) {
      result.push(j);
    }
  }

  if (result.length >= 2) {
    const a = result.slice(0, 1);
    const b = result.slice(result.length - 1);
    finalResult = [...a, ...b];
  } else {
    const c = result.slice(0);
    finalResult = [...result, ...c];
  }

  return finalResult;
};

const result = searchRange(nums, target);
console.log(result);
