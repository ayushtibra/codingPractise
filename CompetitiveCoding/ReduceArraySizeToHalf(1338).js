// https://leetcode.com/problems/reduce-array-size-to-the-half/

var minSetSize = function (arr) {
  // Target to compare
  const halfSize = arr.length / 2;
  // Create a map to store the frequency of element
  let freqMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], freqMap.get(arr[i]) ? freqMap.get(arr[i]) + 1 : 1);
  }

  // To get the frequency value and sort it in descending order
  const freqArr = [...freqMap.values()].sort((a, b) => b - a);
  let currentSum = 0;

  // Check above question to see the examples
  for (let i = 0; i < freqArr.length; i++) {
    currentSum = currentSum + freqArr[i];
    if (currentSum >= halfSize) {
      return i + 1;
    }
  }
};

const result = minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]);
console.log(result);
