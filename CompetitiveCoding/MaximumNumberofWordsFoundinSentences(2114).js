//leetcode.com/problems/maximum-number-of-words-found-in-sentences/

var mostWordsFound = function (sentences) {
  const mapCount = [];
  for (let i = 0; i < sentences.length; i++) {
    mapCount.push(sentences[i].split(" ").length);
  }
  mapCount.sort((a, b) => a - b);
  return mapCount[sentences.length - 1];
};

mostWordsFound(["please wait", "continue to fight", "continue to win"]);
