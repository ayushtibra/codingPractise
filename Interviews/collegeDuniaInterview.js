// function first() {
//   var name = 'Jordyn';

//   console.log(name);
// }

// function second() {
//   console.log(name);

//   let name = 'Jake';
// }

// function third() {
//   console.log(name);
//   var name = 'Rey';
//   return function () {
//     return name;
//   };
// }

// first();
// // console.log(name);
// // second();
// var name = 'Tyler';
// console.log(name);
// var fourth = third();
// name = fourth();
// console.log(name);

// // Jordyn
// // undeifned
// // Error
// // Tyler
// // Rey
// // Rey

// product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3
// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// productNumber(1, 2)(1, 1)(2, 3);

// function product(x, y) {
//   return function product1(a, b) {
//     let firstSum = x * y * a;
//     return function product2(c, d) {
//       let secondSum = c * d * b;
//       return firstSum + secondSum;
//     };
//   };
// }

// let result = product(10, 2)(5, 0)(2, 3);

// console.log(result);

// function productNumber(a, b, c, d, e, f) {
//   let x = a * b * c;
//   let y = d * e * f;

//   return x + y;
// }

// console.log(productNumber(10, 2, 5, 0, 2, 3));

// function x() {
//   for (var i = 0; i < 10; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
// }
// x();

// Event bubbling - for lakhs of li element onclick best solution
// Event loop
// immediate function invocation se we can private this -  this is fir increment and decrement wala question ki
// we cannot access the variable
// How to increase website speed
