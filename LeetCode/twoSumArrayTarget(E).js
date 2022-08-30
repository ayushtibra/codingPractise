const nums = [3, 2, 4];
const target = 6;

// function twoSum(arrNum, target) {
//   for (let i = 0; i < arrNum.length; i++) {
//     let duplicateArr = arrNum.slice(0);

//     let isPresent = target - arrNum[i];
//     duplicateArr.splice(i, 1);

//     if (duplicateArr.includes(isPresent)) {
//       return [arrNum.indexOf(arrNum[i]), duplicateArr.indexOf(isPresent) + 1];
//     }
//   }
// }

// const resultArr = twoSum(nums, target);
// console.log(resultArr);

// -----------------------------------------------------------------------------------------------

function twoSum(nums, target) {
  let clues = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(clues);
    // if a previous element needs this value
    if (nums[i] in clues) {
      return [clues[nums[i]], i];
    }

    // save the clue to check later
    clues[target - nums[i]] = i;
  }
  return [];
}

const result = twoSum(nums, target);
console.log(result);
