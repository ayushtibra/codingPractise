//leetcode.com/problems/count-the-number-of-consistent-strings/
var countConsistentStrings = function (allowed, words) {
  const mapObj = {};
  const allowedArr = allowed.split("");

  allowedArr.forEach((element) => {
    mapObj[element] = 1;
  });

  let count = 0;
  words.forEach((element) => {
    const elementResult = [];
    const singleElementArr = element.split("");
    for (let i = 0; i < singleElementArr.length; i++) {
      if (mapObj[singleElementArr[i]]) {
        elementResult.push(1);
      } else {
        elementResult.push(0);
      }
    }
    if (!elementResult.includes(0)) {
      count++;
    }
  });

  return count;
};

countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);
