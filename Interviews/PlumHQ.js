// https://leetcode.com/playground/LhwrauHo
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

// var obj = {
//   a: {
//     b: {
//       c: 12,
//       j: false,
//     },
//     k: null,
//   },
// };

// const findPath = (object, path) => {
//   const arrPath = path.split(".");
//   let loopObj = object;

//   for (let i = 0; i < arrPath.length; i++) {
//     if (loopObj[arrPath[i]] !== undefined) {
//       loopObj = loopObj[arrPath[i]];
//     } else {
//       return undefined;
//     }
//   }

//   return loopObj;
// };

// console.log(findPath(obj, "a.b.c")); // 12
// console.log(findPath(obj, "a.b")); // {c: 12, j: false}
// console.log(findPath(obj, "a.b.d")); // undefined
// console.log(findPath(obj, "a.c")); // undefined
// console.log(findPath(obj, "a.b.c.d")); // undefined
// console.log(findPath(obj, "a.b.c.d.e")); // undefined
// console.log(findPath(obj, "a.b.j")); //false
// console.log(findPath(obj, "a.b.j.k")); //undefined
// console.log(findPath(obj, "a.k")); //null

// Event loop
// console.log("hi"); // microo queue
// Promise.then(() => {
//   console.log("hello");
// }).then(); // micro queue
// setTimeoout(() => {
//   console.log("1234");
// }, 1000);
// console.log("bye"); // micro queue

// hi
// bye
// hello
// 1234

// use of flexbox and how to center a div horizontally and vertically
// display: flex;
// justify-content: center; // horizaontally
// align-item:center; //vertically
// align-content: center;

// how useEffect will work in class based like componentDidMount ..... unmount kese hoga in useEffect
// const [data,setData] = useState(false);

// useEffect(() => {
//     let timeout = setTimeout(() => {
//         setData(!data)
//     },1000)
//     return () => timeout;
// },[url_key]);

// How to optimze the code
// refactor because unrendering
// usememo
// useCallback
// React.memo()
// lazy loading with suspense
// code splitting
// tree shaking approach

// prototype

// ------------------------------------------------------------------------------------------------------------

// ROund 2

// Build a custom modal in hooks with promise - see practise project notes
