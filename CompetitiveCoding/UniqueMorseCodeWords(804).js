//leetcode.com/problems/unique-morse-code-words/
var uniqueMorseRepresentations = function (words) {
  const morseCodeArray = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const mapObj = {};
  const alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphaArray.length; i++) {
    if (!mapObj[alphaArray[i]]) {
      mapObj[alphaArray[i]] = morseCodeArray[i];
    }
  }

  const result = [];
  words.forEach((element) => {
    const wordArray = element.split("");
    let string = "";
    wordArray.forEach((element) => {
      string = string + mapObj[element];
    });
    result.push(string);
  });

  return [...new Set(result)].length;
};

const result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);
