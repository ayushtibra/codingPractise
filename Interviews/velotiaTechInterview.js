// h1 {
//   color: yellow;
// }

// .header-class {
//   color: blue;
// }

// #header {
//   color: green;
// }

// div.App > h1.header-class {
//   color: grey;
// }

// <div class="App">
//   <h1 id="header" class="header-class">
//     Hello CodeSandbox
//   </h1>
// </div>

// -----------------------------------------------------------

// 1 div - flex: 2
// 2 div - flex: 1
// 3 div - flex: 1
// What's the width of div and order
// -----------------------------------------------------------

// var promiseVar = new Promise((resolve, reject) => {
//   resolve();
// });
// promiseVar.then(() => {
//   console.log("order 1");
// });

// setTimeout(() => {
//   console.log("order 2");
// });

// console.log("order 3");

// -----------------------------------------------------------

//Explain how Event loop works?

// --------------------------------------------------------

// What is closure

// -----------------------------------------------------------

// Find missing number without using includes or in o(n) complexity

// --------------------------------------------------------
// thriveworks florida data
// trello drag and drop

// import "./styles.css";
// import { useEffect, useState } from "react";

// export default function App() {
//   const data = [
//     {
//       id: 1,
//     },
//     {
//       id: 2,
//       children: [
//         {
//           id: 4,
//         },
//         {
//           id: 5,
//           children: [
//             {
//               id: 7,
//             },
//           ],
//         },
//         {
//           id: 6,
//         },
//       ],
//     },
//     {
//       id: 3,
//     },
//   ];
//   // 1
//   // 2
//   //   4
//   //   5
//   //     7
//   //   6
//   // 3

//   const [showChildren, setShowChildren] = useState(false);

//   const returnStructure = (arrayOfItems) => {
//     return arrayOfItems.map((item) => {
//       if (item.children) {
//         return (
//           <>
//             <div>{item.id}</div>
//             {returnStructure(item.children)}
//           </>
//         );
//       } else {
//         return <div>{item.id}</div>;
//       }
//     });
//   };

//   // useEffect(() => {
//   //   returnStructure(data);
//   // }, []);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       {/* <ul>
//         {data.map((item,key) => {
//           return(
//             <li onClick={() => {
//               item.children && setShowChildren(true);
//             }} key={key}>
//               {item.id}
//             </li>
//           )
//         })}
//       </ul> */}
//       <div>{returnStructure(data)}</div>
//     </div>
//   );
// }
