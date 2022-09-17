var firstPalindrome = function (words) {
  //   let result = "";
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i] != words[words.length - 1 - i]) {
  //       result = "Not Palindrom";
  //       break;
  //     } else {
  //       result = "Pali";
  //     }
  //   }
  // Another Way to find palindrom
  //   let second = words.split("").reverse();
  //   if (words == second.join("")) {
  //     result = "Pali";
  //   } else {
  //     result = "Not Pali";
  //   }

  function checkPalindrom(str) {
    let second = str.split("").reverse();
    if (str == second.join("")) {
      return true;
    } else {
      return false;
    }
  }

  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (checkPalindrom(words[i])) {
      result = words[i];
      break;
    } else {
      result = "";
    }
  }
  return result;
};

const result = firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
console.log(result);
