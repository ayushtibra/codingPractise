//leetcode.com/problems/count-items-matching-a-rule/
// items[i] = [typei, colori, namei]

var countMatches = function (items, ruleKey, ruleValue) {
  const mapObj = { type: 0, color: 1, name: 2 };
  let count = 0;
  const index = mapObj[ruleKey];

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] == ruleValue) {
      count++;
    }
  }

  return count;
};

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ],
  "type",
  "phone"
);
