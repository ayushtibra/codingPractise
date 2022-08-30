// Code Snippet 1 for update an obj
var a = { id: 2 };
a.age = 18;
console.log(a); //
a["name"] = "abc";
console.log(a); //

const b = [1, 2];
b.pop();
console.log(b); //
b.push(3);
console.log(b); //

// ----------------------------------------------------------------------------------------------------

var time = "12:00";
let animal = "tiger";

logName(); //

function logName() {
  var name1 = "ayush";
  let age = 12;
  console.log(name1 + age);
}

console.log(time); //
console.log(animal); //
console.log(name1); //
console.log(age); //

// ----------------------------------------------------------------------------------------------------

const myFunc = async () => 10;
const data = myFunc();
console.log("data", data); //what will be in data

// ----------------------------------------------------------------------------------------------------
async function getUserData() {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response2 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response3 = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("After all promise is executed");
}
getUserData();
console.log("Hello World");

//The answer is, “Hello World” will be printed first and after execution of all the promises
//“After all promise is executed” statement will be printed.

//Though it creates a confusion, in reality async and await will not block the JavaScript main thread.
//Like mentioned above they are just syntactic sugars for promise chaining.
// ----------------------------------------------------------------------------------------------------

// Code Snippet 2 for closure
// What's the output of this function
function x() {
  var i = 0;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Welcome");
}
x();

// ----------------------------------------------------------------------------------------------------

// Now, what's the output if we move setimout in a forloop which runs for i=0 to <5 and the timeout argument for
// setTimeout will be I*1000
// If he writes the code then well and good otherwise just copy paste the code and asked hime the output
function x() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Welcome");
}

x();
//Welcome
//5,5,5,5
// ----------------------------------------------------------------------------------------------------------
// You can only change the code between // and // and you can not remove setTimeout
// You need to print 0 4

function x() {
  for (var i = 0; i < 5; i++) {
    //
    let x = i;
    setTimeout(function () {
      console.log(x);
    }, x * 1000);

    //
  }
  console.log("Welcome");
}

x();

// or another solution

function x() {
  for (var i = 0; i < 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Welcome");
}

// or another solution

// Change var to let

// What is we change the variable from var to let, then does the output changed or remains same
// THis is happening because setTimeout store that callback function and attach a timer but the reference
// for the variable i is same so when the timer expires loop will exectuted and now i will be 6
// It is because of closure and var doesn't have block scope - these are the 2 reasons
// closure - it forms a closure and rember the reference of the variable, not value, refernece
// Ans = this i will reference to the same memory location

// ----------------------------------------------------------------------------------------------------------

var x = 23;
(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21;
  })();
})();

// ----------------------------------------------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  console.log(1);
  reject(2);
  console.log(3);
  resolve(4);
});

promise.then((value) => console.log(value)).catch((e) => console.log(e));
// // So here the executor fun will run ,but resolve and reject also return promise objects .
// // -1 will be printed
// // -reject(2) will move to the queue.
// // -3 will be printed
// // -resolve(4) will move to the queue
// // reject wins over resolve,so
// // -2 will be printed .
// // promise gets settled
// // o/p is  1 3 2

// ----------------------------------------------------------------------------------------------------------

// This is a code snippet, how do you run it??
function outer() {
  var a = "Ayush";
  function inner() {
    console.log(a);
  }
  return inner;
}

//Solution
let ans = outer();
ans();

//Another Solution
outer()();

// ----------------------------------------------------------------------------------------------------------
// What if we move the variable to bottom and make it let
function outer() {
  function inner() {
    console.log(a);
  }
  let a = "Test";
  return inner;
}

//SOlution
// Same output

// ----------------------------------------------------------------------------------------------------------

function counter() {
  var count = 100;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

counter()();

// allow provision to increment and decrement and use this counter functions as a constructor
function counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

// Q: Add functionality to reset the counter to 0

// ----------------------------------------------------------------------------------------------------------

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.map((v) => v > 5);
a.filter((v) => v > 6);
a.find((v) => v > 6);

//Solution
[7, 8];
7;

// -----------------------------------------------------------------------------------------------------------

//Find total value of data key in metrics array using reduce only
var metrics = [
  { data: 2, label: "Label 2", key: "label2" },
  { data: 3, label: "Label 1", key: "label1" },
  { data: 1, label: "Label 3", key: "label3" },
  { data: 6, label: "Label 4", key: "label4" },
  { data: 3, label: "Label 5", key: "label5" },
  { data: 2, label: "Label 6", key: "label6" },
];

let ans = metrics.reduce((total, element) => {
  return total + element.data;
}, 0);

// Another Solution

let ans = metrics
  .map((value, index) => value.value)
  .reduce(function (acc, value) {
    return acc + value;
  });

//--------------------------------------------

//Get following map using reduce
var matricsMap = {
  label1: 2,
  label2: 3,
  label3: 1,
  label4: 6,
  label5: 3,
  label6: 2,
};

// -----------------------------------------------------------------------------------------------------------

var name = "Billy";
function sayHello() {
  console.log(`Hello, ${name}!`);
}
function sayBye() {
  console.log(`Goodbye, ${name}!`);
}
function delayedHello() {
  setTimeout(() => console.log(`awkward pause... Hello, ${name}!`), 1000);
}
delayedHello();
sayHello();
sayBye();

var name = "Dave";
