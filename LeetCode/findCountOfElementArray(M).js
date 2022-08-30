const nums = [1, 2, 3, 4, 5, 2, 1, 3, 4, 2, 2];

// const countElementArray = (nums) => {
//   const occur = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in occur) {
//       occur[nums[i]]++;
//     } else {
//       occur[nums[i]] = 1;
//     }
//   }

//   return occur;
// };

const countElementArray = (nums) => {
  const counts = {};
  nums.forEach((el) => {
    counts[el] = counts[el] ? (counts[el] += 1) : 1;
  });
  return counts;
};

const result = countElementArray(nums);
console.log(result);
