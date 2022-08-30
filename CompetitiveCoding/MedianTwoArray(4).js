//leetcode.com/problems/median-of-two-sorted-arrays/

https: function MedianTwoArray(arr1, arr2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  if (mergedArray.length % 2 != 0) {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  }

  return (
    (mergedArray[mergedArray.length / 2] +
      mergedArray[mergedArray.length / 2 - 1]) /
    2
  );
}

const result = MedianTwoArray([1, 2], [3, 4]);
console.log(result);
