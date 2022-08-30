const nums = [3, 4, -1, 1];
const sortNums = [-3, -1, 1, 2, 13, 24];
const nums1 = [1, 2];

//TLE
// var firstMissingPositive = function (nums) {
//   let left = 0;
//   let i = 1;
//   while (left < nums.length) {
//     if (nums.includes(i)) {
//       i++;
//     } else {
//       break;
//     }
//   }
//   return i;
// };

// const result = firstMissingPositive(nums);
// console.log(result);

// ---------------------------------------------------------------

//TLE
// var firstMissingPositive = function (nums) {
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums.includes(i)) {
//       continue;
//     } else {
//       return i;
//     }
//   }
//   return nums.length + 1;
// };

// const result = firstMissingPositive(nums);
// console.log(result);

// ---------------------------------------------------------------

// var firstMissingPositive = function (nums) {
//   const mySet = new Set([...nums]);
//   let min = 1;

//   while (mySet.has(min)) {
//     min++;
//   }

//   return min;
// };

// const result = firstMissingPositive(nums);
// console.log(result);
