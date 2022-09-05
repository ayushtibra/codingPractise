//leetcode.com/problems/concatenation-of-array/

var getConcatenation = function (nums) {
  const ans = [...nums, ...nums];
  return ans;
};

getConcatenation([1, 2, 1]);
