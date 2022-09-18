// var minOperations = function (nums) {
//   if (nums.length == 1) {
//     return 0;
//   }

//   let count = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] > nums[i]) {
//       continue;
//     } else {
//       count = count + (nums[i] - nums[i + 1]) + 1;
//       nums[i + 1] = nums[i] + 1;
//     }
//   }

//   return count;
// };

// minOperations([1, 5, 2, 4, 1]);

var push = (k, array) => {
  for (let i = 1; i <= k / 2; i++) {
    array.push(i, -i);
  }
  return array;
};

var sumZero = function (n) {
  let output = [];

  if (n % 2 === 0) {
    push(n, output);
  } else {
    push(n - 1, output);
    output.push(0);
  }

  console.log(output);
};

sumZero(5);
