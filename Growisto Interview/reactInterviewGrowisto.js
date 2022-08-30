// https://onecompiler.com/javascript/

// JS -
// Variables
// Hoisting
// Curring

// -------------------------------------------------------------------------

// map();
const arr = [
  {
    id: "fname",
  },
  {
    id: "namel",
  },
  {
    id: "name",
  },
];

//SOlution
const b1 = arr.map((item, key) => {
  return { id: item.id.replace("name", "fullName") };
  return { id: `full${item.id}` };
  return { id: item.id + "fullname" };
});

console.log(b1);

// -------------------------------------------------------------------------

// reduce()
// const data = [
//   { name: "foo", type: "fizz", val: 9 },
//   { name: "boo", type: "buzz", val: 3 },
//   { name: "bar", type: "fizz", val: 4 },
//   { name: "car", type: "buzz", val: 7 },
// ];

// {
//     9: 'foo',
//     3: 'boo,
//     4: 'bar',
//     7: 'car'
// }

// Solution
// let res;
// data.forEach((v) => (res[v.val] = v.name));
// console.log(res);

// or
// res = data.reduce((prevVal, currVal) => {
//   prevVal[currVal.val] = currVal.name;
//   return prevVal;
// }, {});
// console.log(res);

// -------------------------------------------------------------------------

// Create a Simple Component
// button click render name

// componentMount - initial value set honi chaoue

// onMount render karna h -
// const getDataFromApi = ()=>new Promise((resolve)=>{
// setTimeout(()=>{
// resolve('My Data')
// }, 1000)
// })

// -------------------------------------------------------------------------
