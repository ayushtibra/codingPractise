//leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  let largest = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }

  for (let j = 0; j < candies.length; j++) {
    if (candies[j] + extraCandies >= largest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
