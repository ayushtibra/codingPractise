// Return index of target element in array

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 5;

var search = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    return -1;
  }
};

const result = search(nums, target);
console.log(result);
