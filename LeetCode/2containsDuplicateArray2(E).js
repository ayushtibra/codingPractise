// https://leetcode.com/problems/contains-duplicate-ii/

// const nums = [1, 0, 1, 1];
// const k = 1;

// var containsDuplicate = function (nums, k) {
//   let count = 1;
//   nums.forEach((element, index, arr) => {
//     if (arr.indexOf(element) === index) {
//     } else {
//       count++;
//     }
//   });

//   if (nums.length <= 1) {
//     return false;
//   }

//   if (count <= 1) {
//     return false;
//   } else if (count > 2) {
//     let cluses = {};
//     for (let z = 0; z < nums.length; z++) {
//       if (nums[z] in cluses) {
//         if (Math.abs(z - cluses[nums[z]]) <= k) {
//           return true;
//         }
//       }

//       cluses[nums[z]] = z;
//     }
//   } else {
//     let i, j;
//     const d = nums.map((val, index, arr) => {
//       if (arr.indexOf(val) === index) {
//         return true;
//       } else {
//         i = arr.indexOf(val);
//         j = index;
//         return false;
//       }
//     });

//     if (Math.abs(i - j) <= k) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(containsDuplicate(nums, k));

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
