//leetcode.com/problems/number-of-arithmetic-triplets/

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let num of nums) {
    if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
      count++;
    }
  }
  return count;
};
arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);
