//leetcode.com/problems/next-permutation/

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}

var nextPermutation = function (nums) {
  let pivot = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      pivot = i - 1;
      break;
    }
  }

  if (pivot === -1) {
    return nums.reverse();
  }

  //   console.log(pivot); // 0

  for (let i = nums.length - 1; i > pivot; i--) {
    if (nums[i] > nums[pivot]) {
      swap(nums, i, pivot);
      break;
    }
  }

  //   console.log(nums); // [3,2,1]

  let start = pivot + 1; // 1
  let end = nums.length - 1; // 2

  while (start < end) {
    swap(nums, start, end);
    end--;
    start++;
  }

  return nums;
};

const result = nextPermutation([2, 3, 1]);
console.log(result);
