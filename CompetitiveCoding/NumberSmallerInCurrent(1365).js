//leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  const output = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count = count + 1;
      }
    }
    output.push(count);
    count = 0;
  }
  return output;

  // Another Way
  // let arr = [...nums],
  //   ans = [];
  // arr.sort((a, b) => a - b); // [1, 2, 2, 3, 8];
  // let map = {};
  // map[arr[0]] = 0;
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i - 1] !== arr[i]) map[arr[i]] = i;
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   ans.push(map[nums[i]]);
  // }
  // return ans;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
