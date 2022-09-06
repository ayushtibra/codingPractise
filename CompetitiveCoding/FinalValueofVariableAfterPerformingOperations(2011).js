//leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "--X":
        x = x - 1;
        break;
      case "X--":
        x = x - 1;
        break;
      case "X++":
        x = x + 1;
        break;
      case "++X":
        x = x + 1;
        break;
      default:
        x = x;
    }
  }
  //   console.log(x);
  return x;
};

finalValueAfterOperations(["X++", "++X", "--X", "X--"]);
