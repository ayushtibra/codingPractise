//leetcode.com/problems/remove-element/submissions/

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(nums.indexOf(val), 1);
      i--;
    }
  }
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

//   let i = 0;
//   while (i < nums.length) {
//     if (nums.includes(val)) {
//       nums.splice(nums.indexOf(val), 1);
//     } else {
//       i++;
//     }
//   }

//   return nums.length;
