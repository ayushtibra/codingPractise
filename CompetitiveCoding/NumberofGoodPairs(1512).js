//leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
  // Another way in O(n2)

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
  }

  return count;

  // Another way in O(n)

  //   let counter = 0;
  //   let map = {};
  //   for (let num of nums) {
  //     if (map[num]) {
  //       counter += map[num];
  //       map[num]++;
  //     } else {
  //       map[num] = 1;
  //     }
  //   }

  //   return counter;
};

numIdenticalPairs([1, 1, 1, 1]);
