//leetcode.com/problems/shuffle-string/
var restoreString = function (s, indices) {
  const targetStrig = [];
  for (let i = 0; i < indices.length; i++) {
    targetStrig[indices[i]] = s[i];
  }

  return targetStrig;
  //------------------------------------------
  // Another Way
  // let obj = {};
  // let st = "";
  // for (let i = 0; i < s.length; i++) {
  //   if (!obj[indices[i]]) {
  //     obj[indices[i]] = s[i];
  //   }
  // }
  // for (let i = 0; i < s.length; i++) {
  //   st += obj[i];
  // }
  // console.log(obj);

  //------------------------------------------
  // Another Way

  // const result = [];
  // for (let i = 0; i < s.length; i++) {
  //   result.push(s[indices.findIndex((num) => num === i)]);
  // }
  // return result.join("");
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
