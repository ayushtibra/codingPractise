// return index of target element to where insert in ascending array

const nums = [1, 3, 5, 6];
const target = 2;

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.includes(target)) {
    return nums.indexOf(target);
  }

  while (right >= left) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    }
  }

  return left;
};

const result = searchInsert(nums, target);
console.log('result', result);
