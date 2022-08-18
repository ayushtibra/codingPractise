// https://leetcode.com/problems/two-sum/

// Solution 1
function twoSum(arrNum, target) {
  for (let i = 0; i < arrNum.length; i++) {
    if (
      arrNum.includes(target - arrNum[i]) &&
      arrNum.indexOf(target - arrNum[i]) != i
    ) {
      return [i, arrNum.indexOf(target - arrNum[i])];
    }
  }
}

const result = twoSum([3, 2, 4], 6);
console.log(result);

// -------------------------------------------------------------------------------------------

// Solution 2
// function twoSum(arrNum, target) {
//   for (let i = 0; i < arrNum.length; i++) {
//     let duplicateArr = arrNum.slice(0);

//     let isPresent = target - arrNum[i];
//     duplicateArr.splice(i, 1);

//     if (duplicateArr.includes(isPresent)) {
//       return [arrNum.indexOf(arrNum[i]), duplicateArr.indexOf(isPresent) + 1];
//       //   return [arrNum[i], arrNum[arrNum.indexOf(isPresent)]];
//     }
//   }
// }
