// Growisto problems

// let friends = [
//   { name: "anna", books: ["bible", "harrya"] },
//   { name: "tibra", books: ["harsit", "morwal"] },
//   { name: "ayush", books: ["irfan", "pathan"] },
// ];

// let result = friends.map((item) => {
//   return item.books;
// });

// console.log(result);

// let result = friends.reduce((prevItem, item) => {
//   return [...prevItem, ...item.books];
// }, []);

// console.log(result);

// -------------------------------------------------------------------------

// const storeList = [
//   {
//     id: "2",
//     address: "SWAMY & CO, TEMPLE ROAD KOTTAYAM",
//     pincode: "686001",
//     latitude: "9.590137372",
//     longitude: "76.51994114",
//   },
//   {
//     id: "3",
//     address:
//       "Suvidha Corner, Warje Malwadi Rd, Sheela Vihar Colony, Pune, Maharashtra 411038, India",
//     pincode: "411038",
//     latitude: "18.5054188",
//     longitude: "73.8230909",
//   },
//   {
//     id: "4",
//     address:
//       "Amar Apartments, Sant Gangaram Rd, Chaitanya Nagar, Kothrud, Pune, Maharashtra 411038, India",
//     pincode: "411038",
//     latitude: "18.5013246",
//     longitude: "73.8135705",
//   },
//   {
//     id: "5",
//     address:
//       "7, Sus Rd, Near Omkar Mobile Shopee, Pashan, Pune, Maharashtra 411021, India",
//     pincode: "411021",
//     latitude: "18.5424331",
//     longitude: "73.7905226",
//   },
//   {
//     id: "6",
//     address:
//       "583, Jaldhara Society, D - 28, NC Kelkar Road, Bhatancha Bol, Narayan Peth, Pune, Maharashtra 411030, India",
//     pincode: "411030",

//     latitude: "18.5163842",
//     longitude: "73.8506494",
//   },
// ];

// function getDistance(lat1, lat2, lon1, lon2) {
//   const R = 6371e3; // metres
//   const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
//   const φ2 = (lat2 * Math.PI) / 180;
//   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//   const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//   const a =
//     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   const d = R * c; // in metres

//   return Number(d.toFixed(2));
// }

// function getMinMax(storeList, pincodeSearched) {
//   const data = storeList.find((item) => item.pincode == pincodeSearched);
//   console.log(data);

//   if (data) {
//     const updateStoreListWithDistance = storeList.map((element) => {
//       const distance = getDistance(
//         element.latitude,
//         data.latitude,
//         element.longitude,
//         data.longitude
//       );

//       // element.distance = distance;

//       // return element;

//       return {
//         ...element,
//         distance: distance,
//       };
//     });

//     updateStoreListWithDistance.sort((a, b) => a.distance - b.distance);

//     // console.log(updateStoreListWithDistance);
//     console.log(updateStoreListWithDistance.slice(0, 3));
//   }
// }

// getMinMax(storeList, 411021);

// -----------------------------------------------------------

// const arr = [
//   { name: "tibra", file: [{ fileSize: 2 }, { fileSize: 4 }] },
//   { name: "ayush", file: [{ fileSize: 3 }] },
// ];

// const result = arr.reduce((prevVal, currVal, index, array) => {
//   const sumVar = currVal.file.reduce((prev, curr) => prev + curr.fileSize, 0);

//   return prevVal + sumVar;
// }, 0);

// ----------------------------------------------------------------------

// const arr = [
//   { title: "3200-3300", value: "3200_3300" },
//   { title: "3300-3400", value: "3300_3400" },
//   { title: "3400-3500", value: "3500_3600" },
// ];

// // const result = arr.map((item) => item.title)
// // console.log("result", result);

// const merge = [];

// arr.forEach((item) => {
//   merge.push(...item.title.split("-"));
// });

// console.log("merge", merge);

// ----------------------------------------------------------------------

// console.log("Hi");

// setTimeout(() => {
//   console.log("bye");
// }, 2000);

// for (let i = 0; i < 8; i++) {
//   // console.log(i);
//   setTimeout(() => {
//     console.log("shocked", i);
//   }, i * 1000);
// }

// setTimeout(() => {
//   console.log("why");
// }, 3000);

// console.log("hi again");

// ----------------------------------------------------------------------

// var func = function func() {
//   console.log(func === func);
// };

// func();

// console.log(Number("1") - 1 == 0);

// --------------------------------------------------------------------------------------
// get caotegyr from nested

const items = [
  {
    uid: "1",
    product: {
      name: "ayush",
      sku: "123",
      categories: [
        {
          uid: "MTK=",
          name: "Mixer Grinder",
        },
      ],
    },
  },
  {
    uid: "2",
    product: {
      name: "tibra",
      sku: "676",
      categories: [
        {
          uid: "KJI=",
          name: "Ceiling Fans",
        },
        {
          uid: "IQW=",
          name: "Renesa Ceiling Fans",
        },
      ],
    },
  },
];

const mergeCategory = [];
items.forEach((item) => {
  item.product.categories.forEach((cat) => {
    console.log(cat.name);
    mergeCategory.push(cat.name);
  });
});

console.log(mergeCategory);
// console.log(mergeCategory.join(","));

// ------------------------------------------------------------------------------------
