//www.interviewbit.com/javascript-interview-questions/#coding-problems

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);

//   //   function x1() {
//   //     console.log(x);
//   //     console.log(y);
//   //   }
//   var x = 2;
//   let y = 12;
//   //   x1();
// }

// func1();

// ------------------------------------------------------------------------------------

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }

// func2();

// ------------------------------------------------------------------------------------

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

// ------------------------------------------------------------------------------------

// let x = {},
//   y = { name: 'Ronny' },
//   z = { name: 'John' };

// x[y] = { name: 'Vivek' };
// x[z] = { name: 'Akki' };

// console.log(x[y]);

// Adding objects as properties of another object should be done carefully.
// Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,
// While setting a property of an object, javascript coerces the parameter into a string.
// Therefore, since y is an object, it will be converted to ‘object Object’.
// Both x[y] and x[z] are referencing the same property.

// ------------------------------------------------------------------------------------

// function runFunc() {
//   console.log('1' + 1);
//   console.log('A' - 1);
//   console.log(2 + '-2' + '2');
//   console.log('Hello' - 'World' + 78);
//   console.log('Hello' + '78');
// }

// runFunc();

// ------------------------------------------------------------------------------------

// https: var x = 23;

// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// ------------------------------------------------------------------------------------

// let hero = {
//   powerLevel: 99,
//   getPower() {
//     return this.powerLevel;
//   },
// };

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(getPower.apply(hero2));

// The first output is undefined since when the function is invoked, it is invoked referencing the global object:

// ------------------------------------------------------------------------------------

// const a = function () {
//   console.log('11', this);

//   const b = {
//     func1: function () {
//       console.log('12', this);
//     },
//   };

//   const c = {
//     func2: () => {
//       console.log('13', this);
//     },
//   };

//   b.func1();
//   c.func2();
// };

// a();

// Since we are using arrow function inside func2, this keyword refers to the global object.

// ------------------------------------------------------------------------------------

// const b = {
//   name: 'Vivek',
//   f: function () {
//     var self = this;
//     console.log(this.name);
//     (function () {
//       console.log(this.name);
//       console.log(self.name);
//     })();
//   },
// };

// b.f();

//Only in the IIFE inside the function f , the this keyword refers to the global/window object. (same as arrow function)

// ------------------------------------------------------------------------------------

// (function (a) {
//   return (function () {
//     console.log(a);
//     a = 23;
//   })();
// })(45);

// ------------------------------------------------------------------------------------
// function name1(a, arr) {}

// let arr = [1, 2, 3];
// // 6
// let a = 1;
// let b = 2;

// name1(..arr);

function doReverse(p1) {
  return p1.split("").reverse().join("");
}

function someFunction(p1, p2, p3) {
  p1 = doReverse(p1);
  p2 = ["1", "2", "3"];
  p3.push("9999");
}

let a = "xyz";
let b = ["123", "567"];
let c = ["abc", "def"];

someFunction(a, b, c);

console.log(a);
console.log(b);
console.log(c);

// ------------------------------------------------------------------------------------

var number = 10;
var display = function () {
  console.log(number);
  var number = 20;
};

display();

// ------------------------------------------------------------------------------------

async function callMe() {
  console.log(1);
  await crazyFunction();
  console.log(3);
}

function crazyFunction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(2);
    }, 1000);
  });
}

callMe();

// ------------------------------------------------------------------------------------
