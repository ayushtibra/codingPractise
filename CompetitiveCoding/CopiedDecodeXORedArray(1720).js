//leetcode.com/problems/decode-xored-array/
var decode = function (encoded, first) {
  let res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
};

decode([1, 2, 3], 1);
