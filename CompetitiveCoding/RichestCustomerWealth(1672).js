//leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
  const result = accounts.reduce((prev, curr) => {
    let sumEl = curr.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    if (sumEl > prev) {
      prev = sumEl;
    } else {
      prev = prev;
    }

    return prev;
  }, 0);

  return result;
};

maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
