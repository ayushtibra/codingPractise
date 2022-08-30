// Find median of two array

const nums1 = [3];
const nums2 = [-2, -1];

var findMedianSortedArrays = function (nums1, nums2) {
  const newArr = [...nums1, ...nums2].sort((a, b) => a - b); // [-2,-1,3]
  let median;
  let index;
  if (newArr.length % 2 != 0) {
    index = Math.round(newArr.length / 2) - 1;
    median = newArr[index];
    return median;
  } else {
    index = Math.round(newArr.length / 2);
    median = (newArr[index] + newArr[index - 1]) / 2;
    return median;
  }
};

const result = findMedianSortedArrays(nums1, nums2);
console.log(result);
