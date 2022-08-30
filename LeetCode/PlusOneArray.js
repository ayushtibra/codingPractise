const digits = [
  5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2,
  5, 8, 9,
];
// const digits = [1, 2, 3];
// const digits = [9];

var plusOne = function (digits) {
  if (digits[digits.length - 1] != 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  } else {
    const integer = BigInt(digits.join('')) + 1n;
    // const new1 = Array.from(String(integer + 1n), Number);
    var digits = [...String(integer)].map(Number);
  }
  return digits;
};

const result = plusOne(digits);
console.log(result);
