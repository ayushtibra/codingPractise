var removeDuplicates = function (nums) {
  let p1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      //   console.log(i);
      //   nums[p1] = nums[i];
      p1++;
    }
  }

  //   nums.splice(p1);
  return p1;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(result);
