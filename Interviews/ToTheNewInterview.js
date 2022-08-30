//FindIndex vs indexOf

// Inhertiance syntax or OOP concepts
// function Car() {
//   this.color = 'red';
//   this.tyre = 4;

//   this.display = function () {
//     console.log('Hi you bought a new car');
//   };
// }

// const make1 = new Car();
// const make2 = new Car();

// primitive data types vs non-primitive data types

// const arr = ['a', 'b', 'a', 'b', 'e', 'f', 'c', 'a', 'b', 'a'];
// //  'a': 4, 'b': 3, 'e': 1, 'f': 1, 'c': 1

// function freqString(arr) {
//   const count = {};
//   arr.forEach((element) => {
//     count[element] = count[element] ? count[element] + 1 : 1;
//   });

//   console.log(count);
// }

// const result = freqString(arr);
// // console.log(result);

// ---------------------------------------------------------------------

// let lowerUpper = 'I Am WoRkING In tTN';
// // i aM w....

// const UpperCaseAlpha = ['A',... 'Z'];
// const LowerCaseAlpa = ['a', 'z']

// function convertString(lowerUpper) {
//   const arr = lowerUpper.split(''); // ['I' 'A' 'm' 'W' 'o'...]
//   for(let i =0; i<arr.length;i++){
//     if(arr[i])
//   }
// }

// const result = convertString(lowerUpper);

// -----------------------------------------------------------------------

// const obj = {
//   a: 'a',
//   b: 'b',
//   obj1: {
//     c: 'c',
//     obj2: { d: 'ayush' } },
// };

// const {a,b,obj1: {c, obj2 : { d}}} = obj;

// -----------------------------------------------------------------------

// var const let

// -----------------------------------------------------------------------

// const prmosie = new Promise((resolve, reject) => {
//   console.log('Hi');
//   reject();
//   // resolve();
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .then(() => {})
//   .catch(() => {
//     console.log('error');
//   });

// -----------------------------------------------------------------------

// Promise.all[ap1,ap2,ap3...].then(() => {

// })
// Promise.race[ap1,ap2...]

// -----------------------------------------------------------------------

// Immutable Object
// const obj = {
//   name: 'ayush',
//   age: 12,
// };

// Object.freeze(obj);
// obj.name = 'tibra';

// -----------------------------------------------------------------------

//HOC
// const clause = {
//   section1: <Section1 />,
//   section2: <Section2 />,
//   section3: <Section3 />,
//   section4: <Section4 />,
// };

// const MultipleComponent = (props) => {
//   if (clause[props]) {
//     return clause[props];
//   }
// };

// --------------------------------------------------------------------------

// Redux;

// --------------------------------------------------------------------------

// custom hook
// const fetchQuery = (url) => {
//   const [result, setResult] = useState('');

//   useEffect(() => {
//     const data = fetch(url).then((resp) => resp.json());
//     setResult(data);
//   }, [url]);

//   return result;
// };

// export default fetchQuery;

// const fincalData = fetchQuery(url);

// --------------------------------------------------------------------------

// controlled vs uncontrolled
// const [data, setData] = useState('ayush')
// <form>
//   <input type='text' value={data} onChange={}/>
//   <button type='submit'></button>
// </form>;

// --------------------------------------------------------------------------
// Routing structure
// isAuthenticated = boolen;

// if(state.isAuthenticated){

// }else{
//   <openLogin />
// }

// --------------------------------------------------------------------------
//authorised routing
{
  /* <Switch>
  <Route path='' />
</Switch> */
}

// --------------------------------------------------------------------------
// why nextjs
// Caching
// SSR
// <Image>
// <Head>
// <link>

// --------------------------------------------------------------------------
// localstorage vs sessionstorage

// --------------------------------------------------------------------------

// HTML5 new
{
  /* <dataList>

</dataList>

<progress>

</progress>

<abbr></abbr>

<img lazy={} /> */
}

// --------------------------------------------------------------------------

// transition l to R

//Bootstrap media
// sm, m, xs lg,
// xs, s, m , lg
// 565, 768, 1024

// --------------------------------------------------------------------------
// let lowerUpper = 'I Am WoRkING In tTN';
// 'i aM wOrKing iN Ttn'

// function convertString(lowerUpper) {
//   const arr = lowerUpper.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       arr[i] =
//         arr[i] == arr[i].toUpperCase()
//           ? arr[i].toLowerCase()
//           : arr[i].toUpperCase();
//     }
//   }
//   return arr.join('');
// }

// const result = convertString(lowerUpper);
// console.log(result);

// --------------------------------------------------------------------------
