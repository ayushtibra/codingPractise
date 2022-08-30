const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height1 = [7, 8, 6, 2, 5, 4, 8, 3, 7];

// TLE
// function findSmallest(maxFirst, maxSecond) {
//   if (maxSecond <= maxFirst) {
//     return maxSecond;
//   }
//   return maxFirst;
// }

// var maxArea = function (height) {
//   let maxWaterFinal = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = height.length - 1; j >= i; j--) {
//       let differnce = j - i;
//       maxWaterInit = differnce * findSmallest(height[i], height[j]);
//       if (maxWaterFinal < maxWaterInit) {
//         maxWaterFinal = maxWaterInit;
//       }
//     }
//   }
//   return maxWaterFinal;
// };

// const result = maxArea(height);
// console.log(result);

// --------------------------------------------------------------

// var maxArea = function (height) {
//   let maxValue = 0;
//   let leftIndex = 0;
//   let rightIndex = height.length - 1;
//   let area;

//   while (rightIndex > leftIndex) {
//     area =
//       Math.min(height[leftIndex], height[rightIndex]) *
//       (rightIndex - leftIndex);
//     if (area > maxValue) maxValue = area;
//     height[leftIndex] > height[rightIndex] ? rightIndex-- : leftIndex++;
//   }

//   return maxValue;
// };

// const result = maxArea(height);
// console.log(result);

// -----------------------------------------------------------------

// var maxArea = function (height) {
//   let area = 0;
//   let leftP1 = 0;
//   let rightP2 = height.length - 1;

//   while (leftP1 < rightP2) {
//     area = Math.max(
//       (rightP2 - leftP1) * Math.min(height[leftP1], height[rightP2]),
//       area
//     );

//     height[leftP1] > height[rightP2] ? rightP2-- : leftP1++;
//   }

//   return area;
// };

// const result = maxArea(height);
// console.log(result);
