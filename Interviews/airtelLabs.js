// Types of var declartaion and differnece between them with example
// Arrow vs normal
// this
// binding in class based compoennt - show an example
// call apply bind
// --------------------------------------------------------------------------------------
// const object1 = {
//   _name: "test",
//   getNewFunction: () => {
//     console.log("hello", _name);
//   },
// };

// how can you access this _name in getNewFunction()
// const tryFunc = object1.getNewFunction;
// console.log(tryFunc());
// console.log(object1.getNewFunction());

// --------------------------------------------------------------------------------------
// callback vs HOF

// function callBackFunc(func2) {
//   return anotherCall(func2){
//     return ...
//   }
// }

// callBackFunc(func2);

//  or

// function callToAction(age) {
//   console.label("age", age);
// }

// function callBackFirst(age1, age2) {
//   let combineAge = age1 + age2;
//   return combineAge;
// }

// const result = callBackFirst(10, 20);
// callToAction(result);

// --------------------------------------------------------------------------------------
