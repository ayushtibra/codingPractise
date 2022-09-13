//leetcode.com/problems/truncate-sentence/
var truncateSentence = function (s, k) {
  const result = s.split(" ").slice(0, k).join(" ");

  return result;
};

truncateSentence("Hello how are you Contestant", 4);
