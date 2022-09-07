//leetcode.com/problems/decompress-run-length-encoded-list/submissions/

var decompressRLElist = function (nums) {
  const output = [];
  let i = 0;
  while (i < nums.length) {
    for (let j = 0; j < nums[2 * i]; j++) {
      output.push(nums[2 * i + 1]);
    }
    i++;
  }

  return output;
};

decompressRLElist([1, 1, 2, 3]);
