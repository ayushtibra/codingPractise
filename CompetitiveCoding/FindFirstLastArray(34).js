//leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/

const searchRange = (nums, target) => {
  const index = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      index.push(i);
    }
  }

  if (index.length == 0) {
    return [-1, -1];
  } else {
    return [index[0], index[index.length - 1]];
  }
};

const result = searchRange([5, 8, 7, 8, 3, 8], 8);
console.log(result);
