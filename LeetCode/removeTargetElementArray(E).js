const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

// const nums = [3, 3];
// const val = 3;

var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums.includes(val)) {
      nums.splice(nums.indexOf(val), 1);
    } else {
      i++;
    }
  }

  //   console.log(nums);
  return nums.length;
};

removeElement(nums, val);

// // ----------------------------------------------------------

// var removeElement = function (nums, val) {
//   let len = nums.length;
//   let k = 0;
//   for (i = 0; i < len; i++) {
//     if (nums[i] != val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   nums.length = k;
// };
