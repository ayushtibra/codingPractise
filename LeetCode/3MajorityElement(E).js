// https://leetcode.com/problems/majority-element/
let nums = [2, 2, 1, 1, 1, 2, 2];

var majorProperty = function (nums) {
  let mapsObj = {};

  nums.forEach((val) => {
    if (val in mapsObj) {
      mapsObj[val] = mapsObj[val] + 1;
    } else {
      mapsObj[val] = 1;
    }
  });

  for (const property in mapsObj) {
    if (mapsObj[property] > nums.length / 2) {
      return property;
    }
  }
};

console.log(majorProperty(nums));
