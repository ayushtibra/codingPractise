//leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        count++;
      }
    }
  }
  return count;
  // ----------------------------------------------------------------
  // Another solution in o(n)
  //   const map = new Map();
  //   let count = 0;
  //   // add all items in array to a map and set value
  //   // to be the amount of times they occur
  //   for (let i = 0; i < nums.length; i += 1) {
  //     if (map.has(nums[i])) {
  //       const prev = map.get(nums[i]);
  //       map.set(nums[i], prev + 1);
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  //   console.log(map);
  //   // go through array and calc the diff between target and current num
  //   // if we find the diff in the map, we have a pair
  //   // we dont need to know the index numbers so we just add the occurance to the count
  //   for (let j = 0; j < nums.length; j += 1) {
  //     const diff = nums[j] - k;
  //     if (map.has(diff)) {
  //       count += map.get(diff);
  //     }
  //   }
  //   return count;
};

countKDifference([1, 2, 2, 1], 1);
