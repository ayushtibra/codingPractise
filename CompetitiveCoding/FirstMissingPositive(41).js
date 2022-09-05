//leetcode.com/problems/first-missing-positive/submissions/

var firstMissingPositive = function (nums) {
  // Start = This solution TLE
  //   let start = 1;
  //   while (nums.includes(start)) {
  //     start++;
  //   }
  //   return start;

  // End = This solution TLE

  const mySet = new Set([...nums]);
  console.log(mySet);
  let min = 1;

  while (mySet.has(min)) {
    min++;
  }

  return min;
};

const result = firstMissingPositive([3, 4, -1, 1, 2]);
console.log(result);
