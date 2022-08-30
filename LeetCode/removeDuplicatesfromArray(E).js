// Remove duplicates from an array without using new array

const nums = [0, 1, 1, 1, 2, 2, 3, 3, 4];

// var removeDuplicates = function (nums) {
//   let p1 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != nums[i + 1]) {
//       nums[p1] = nums[i];
//       p1++;
//     }
//   }
//   nums.splice(p1);
//   return p1;
// };

// removeDuplicates(nums);

// -------------------------------------------------------

// var removeDuplicates = function (nums) {
//   let p1 = 0;
//   let p2 = 1;
//   while (p1 < nums.length) {
//     if (nums[p1] === nums[p2]) {
//       nums.splice(p1, 1);
//     } else {
//       p1 += 1;
//       p2 += 1;
//     }
//   }
//   console.log(nums);
//   return nums.length;
// };

// const result = removeDuplicates(nums);
// console.log(result);

// -----------------------------------------------------------

// const result = nums.filter((value, index, array) => {
//   console.log(value, index, array);
//   return array.indexOf(value) === index;
// });
// console.log(result);

// --------------------------------------------------------------

// const uniqueValue = [...new Set([...arr])];
