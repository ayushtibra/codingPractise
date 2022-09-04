//leetcode.com/problems/search-insert-position/submissions/

const searchInsert = (nums, target) => {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  }

  let loopStartIndex;
  let loopEndIndex;

  const middle = Math.floor(nums.length / 2);
  if (nums[middle] > target) {
    loopStartIndex = 0;
    loopEndIndex = middle;
  } else {
    loopStartIndex = middle;
    loopEndIndex = nums.length;
  }

  for (let i = loopStartIndex; i <= loopEndIndex; i++) {
    if (target < nums[i]) {
      return i;
    }
  }

  return nums.length;
};

const result = searchInsert([1, 3, 5, 6, 8], 0);
console.log(result);
