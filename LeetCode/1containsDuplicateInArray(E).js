//https://leetcode.com/problems/contains-duplicate/

const nums = [8, 5, 1, 7, 1, 2];

var containsDuplicate = function (nums) {
  const d = nums.map((val, index, arr) => {
    if (arr.indexOf(val) === index) {
      return true;
    }
    return false;
  });

  if (d.includes(false)) {
    return false;
  } else {
    return true;
  }
};

console.log(containsDuplicate(nums));
