//1) FIND SUM OF AN ARRAY

// const arr = [1, 3, 2, 5, 6, 4, 6, 8, 9];

// const result = arr.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// console.log(result);

//ANOTHER WAY
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }

// console.log(result);

// --------------------------------------------------------------------------------------------------------
//2) ITERATION/LOOP

// const arr = [1, 2, 3, 4, 5, 6];
// const string = 'Hello World';
// const data = { name: 'ayush', age: 23, city: 'jaipur' };

// - for...of - Use to loop over strings and arrays.
// - for...in - Use to loop over objects.

// for (key of arr) {
//   console.log(key);
// }

// for (key of string) {
//   console.log(key);
// }

// for (key in data) {
//   console.log(key, data[key]);
// }

//ANOTHER WAY
// const result = arr.map((v) => console.log(v));
// const result = string.split('').map((v) => console.log(v));
// const result = Object.entries(data).map(([k, v]) => console.log(k, v));

// --------------------------------------------------------------------------------------------------------
//3) New features in ECMA

// let down = '';
// let up = undefined;
// let right = 0;
// let left = null;
// let value = 11;

// let result = value && 100;
// let result2 = (left &&= 100);
// let result2 = left || 100;
// let result2 = (left ||= 100);
// let result2 = left ?? 100;
// let result2 = (left ??= 100);

// console.log(result);

//-----------------------------------------------------------------------------------------------------
// Create a Promise.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('The first promise has been resolved.'), 2000);
// });

// // Create a Promise.
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('The second promise has been resolved.'), 4000);
// });

// // Create a Promise.
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('The third promise has been resolved.'), 3000);
// });

// (async function () {
//   const data = await Promise.any([promise1, promise2, promise3]);
//   //   const data = await promise2;
//   console.log(data);
// })();

//-----------------------------------------------------------------------------------------------------
// Create a Promise using async-await

// const asyncTask = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done');
//     }, 1000);
//   });
// };

// const foo = async () => {
//   const res = await asyncTask();
//   console.log(res);
// };

// console.log('Before Foo Call');
// foo();
// console.log('After Foo Call');

//-----------------------------------------------------------------------------------------------------
// COMPARE TWO ARRAY

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr1.toString() == arr2.toString());
// console.log(arr1 + '' == arr2 + '');
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2));
// console.log(arr1.join() == arr2.join());
// console.log(arr1.join(' ') == arr2.join(' '));
// console.log(arr1.find((v, i) => v != arr2[i]) === undefined);

//-----------------------------------------------------------------------------------------------------
// Remove Duplicate from Array

// const arr = [4, 2, 1, 3, 4, 1];

// const result = arr.filter((value, index, array) => {
//   console.log(value, index, array);
//   return array.indexOf(value) === index;
// });
// console.log(uniqueValue);

// // ANOTHER WAY

// const uniqueValue = [...new Set([...arr])];
// console.log(uniqueValue);

// Print duplicates element in array
// const result = arr.filter((value, index, array) => {
//   console.log(value, index, array);
//   return array.indexOf(value) !== index;
// });
// console.log(uniqueValue);

//-----------------------------------------------------------------------------------------------------

// Remove Falsy values

// const array = [
//   0,
//   1,
//   null,
//   2,
//   '',
//   3,
//   undefined,
//   3,
//   ,
//   ,
//   ,
//   ,
//   ,
//   4,
//   ,
//   4,
//   ,
//   5,
//   ,
//   6,
//   ,
//   ,
//   ,
// ];

// let result = array.filter((v) => v);
// console.log(result);

//-----------------------------------------------------------------------------------------------------

// CLONE/ DUPLICATE AN ARRAY
// const arr = [1, 2, 3, 4, 5, [2, 3], 5, 6, 7, 8];
// const arr1 = [...arr];
// let arr1 = arr;
// let arr1 = arr.map((a) => a);
// let arr1 = arr.concat([]);
// let arr1 = arr.slice();
// console.log(arr1);

//-----------------------------------------------------------------------------------------------------

// Remove last element from an array
// const arr = [1, 2, 3, 4, 7, 8];
// // arr.length = 5;
// // arr.splice(5);
// // arr.pop();
// //arr.slice(5);
// // console.log(arr.length - 1);
// const newArr = arr.filter((num, index) => index < arr.length - 1);
// console.log(arr);
// console.log(newArr);

//-----------------------------------------------------------------------------------------------------

// Map Filter Reduce function
// const data = [
//   { name: "Anne", age: 20, colors: ["ayush1", "tibra"], sizes: ["12", "11"] },
//   { name: "Mike", age: 24, colors: ["ayush2", "tibra"], sizes: ["12", "11"] },
//   { name: "Max", age: 27, colors: ["ayush", "tibra"], sizes: ["12", "11"] },
//   { name: "Sara", age: 25, colors: ["ayush", "tibra"], sizes: ["12", "11"] },
//   { name: "George", age: 24, colors: ["ayush", "tibra"], sizes: ["12", "11"] },
// ];
// // [“Anne”, “Mike”, “Max”, “Sara”, “George”]

// // const newArr = data.map((obj) => obj.name);
// // console.log(newArr);

// // people name above 24
// const newArr = data
//   .filter((element) => element.age == 27)
//   .map((element) => {
//     return {
//       colors: element.colors,
//       sizes: element.sizes,
//     };
//   });
// console.log(newArr);

// // average of age
// // const newArr = data.reduce((prev, next) => prev + next.age, 0);
// // console.log(newArr / data.length);

//-----------------------------------------------------------------------------------------------------

// Reference of array and object

// let arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
// const anotherArrayOfLetters = arrayOfLetters;
// arrayOfLetters = [];
// console.log(anotherArrayOfLetters);

// let arrayOfLetters = { name: 'ayush', age: 12 };
// const anotherArrayOfLetters = arrayOfLetters;
// arrayOfLetters.name = 'tibra';
// console.log(anotherArrayOfLetters);

//-----------------------------------------------------------------------------------------------------

// const array = [
//   {
//     lat: 12.123,
//     lng: 13.213,
//     city: "New York",
//   },
//   {
//     lat: 3.123,
//     lng: 2.213,
//     city: "New York",
//   },
//   {
//     lat: 1.513,
//     lng: 1.113,
//     city: "London",
//   },
// ];

// const distinctArrayByCity = [
//   ...new Map(array.map((item) => [item.city, item])).values(),
// ];

// console.log(distinctArrayByCity);

// var unique = [];
// var tempArr = [];
// var newArr = [];
// array.forEach((item, index, array) => {
//   if (unique.indexOf(item.city) === -1) {
//     unique.push(item.city);
//     newArr.push(array[index]);
//   } else {
//     tempArr.push(index);
//   }
// });

// tempArr.reverse();
// tempArr.forEach((ele) => {
//   array.splice(ele, 1);
// });

// console.log(unique);
// console.log(tempArr);
// console.log(newArr);
// console.log(array);

// -----------------------------------------------------------------------------

// Get Unique from array of objects / remove duplicate from array of objects
const variant = [
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 1200mm",
      sku: "RFS31200RG-WH",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-37.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-37.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 19.8,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3200,
          },
        },
      },
    },
    attributes: [
      {
        label: "White",
        code: "color",
        value_index: 14,
        uid: "Y29uZmlndXJhYmxlLzkzLzE0",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 1200mm",
      sku: "RFS31200RG-I",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-36.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-36.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 19.8,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3200,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory",
        code: "color",
        value_index: 34,
        uid: "Y29uZmlndXJhYmxlLzkzLzM0",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 1200mm",
      sku: "RFS31200RG-MB",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-35.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-35.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 19.8,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3200,
          },
        },
      },
    },
    attributes: [
      {
        label: "Matt Brown",
        code: "color",
        value_index: 21,
        uid: "Y29uZmlndXJhYmxlLzkzLzIx",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 1200mm",
      sku: "RFS31200RG-WH&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-34.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-34.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3990,
          },
        },
      },
    },
    attributes: [
      {
        label: "White and Black",
        code: "color",
        value_index: 39,
        uid: "Y29uZmlndXJhYmxlLzkzLzM5",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 1200mm",
      sku: "RFS31200RG-I&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-33.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-33.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 19.8,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3200,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory and Black",
        code: "color",
        value_index: 35,
        uid: "Y29uZmlndXJhYmxlLzkzLzM1",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "28",
      air_delivery: "220",
      rpm: "340",
      service_value: "7.9",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 1200mm",
      sku: "RFS31200RG-MB&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-1.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 1200mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-1.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 19.8,
          },
          regular_price: {
            value: 3990,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3200,
          },
        },
      },
    },
    attributes: [
      {
        label: "Brown and Black",
        code: "color",
        value_index: 28,
        uid: "Y29uZmlndXJhYmxlLzkzLzI4",
      },
      {
        label: "1200mm",
        code: "sweepsize",
        value_index: 56,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Ng==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 years",
      consumption_in_watts: "28",
      air_delivery: "210",
      rpm: "525",
      service_value: "7.5",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.98",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 600mm",
      sku: "RFS30600RG-BR&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-41.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 600mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-41.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 20.31,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3100,
          },
        },
      },
    },
    attributes: [
      {
        label: "Brown and Black",
        code: "color",
        value_index: 28,
        uid: "Y29uZmlndXJhYmxlLzkzLzI4",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 years",
      consumption_in_watts: "28",
      air_delivery: "210",
      rpm: "525",
      service_value: "7.5",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.98",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 600mm",
      sku: "RFP30600RG-MB",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-40.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 600mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-40.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 20.31,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3100,
          },
        },
      },
    },
    attributes: [
      {
        label: "Matt Brown",
        code: "color",
        value_index: 21,
        uid: "Y29uZmlndXJhYmxlLzkzLzIx",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 years",
      consumption_in_watts: "28",
      air_delivery: "210",
      rpm: "525",
      service_value: "7.5",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.98",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 600mm",
      sku: "RFP30600RG-W",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-42.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 600mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-42.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 20.31,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3100,
          },
        },
      },
    },
    attributes: [
      {
        label: "White",
        code: "color",
        value_index: 14,
        uid: "Y29uZmlndXJhYmxlLzkzLzE0",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: null,
      consumption_in_watts: null,
      air_delivery: null,
      rpm: null,
      service_value: null,
      input_voltage: null,
      frequency: null,
      power_factor: null,
      no_of_blades: null,
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 600mm",
      sku: "RFS30600RG-W&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/0/-/0-removebg-preview-1.png",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 600mm",
      },
      media_gallery: [
        {
          label: "",
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/0/-/0-removebg-preview-1.png",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 20.31,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3100,
          },
        },
      },
    },
    attributes: [
      {
        label: "White and Black",
        code: "color",
        value_index: 39,
        uid: "Y29uZmlndXJhYmxlLzkzLzM5",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "8.4",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 1400mm",
      sku: "RFS31400RG-BR&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-2.png",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-2.png",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 4290,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 4290,
          },
        },
      },
    },
    attributes: [
      {
        label: "Brown and Black",
        code: "color",
        value_index: 28,
        uid: "Y29uZmlndXJhYmxlLzkzLzI4",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "8.4",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 1400mm",
      sku: "RFS31400RG-BR",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-38.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Matt Brown, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-38.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 18.41,
          },
          regular_price: {
            value: 4290,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3500,
          },
        },
      },
    },
    attributes: [
      {
        label: "Matt Brown",
        code: "color",
        value_index: 21,
        uid: "Y29uZmlndXJhYmxlLzkzLzIx",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "8.4",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 1400mm",
      sku: "test-0",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-removebg-preview_1.png",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-removebg-preview_1.png",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 4290,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 4290,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory and Black",
        code: "color",
        value_index: 35,
        uid: "Y29uZmlndXJhYmxlLzkzLzM1",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 years",
      consumption_in_watts: "28",
      air_delivery: "210",
      rpm: "525",
      service_value: "7.5",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.98",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 600mm",
      sku: "test-7",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/0/-/0-removebg-preview-3.png",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 600mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/0/-/0-removebg-preview-3.png",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3890,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory",
        code: "color",
        value_index: 34,
        uid: "Y29uZmlndXJhYmxlLzkzLzM0",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 years",
      consumption_in_watts: "20",
      air_delivery: "210",
      rpm: "525",
      service_value: "7.5",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.98",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 600mm",
      sku: "test-8",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-43.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory and Black, 600mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-43.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 3890,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3890,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory and Black",
        code: "color",
        value_index: 35,
        uid: "Y29uZmlndXJhYmxlLzkzLzM1",
      },
      {
        label: "600mm",
        code: "sweepsize",
        value_index: 52,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Mg==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "8.4",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 1400mm",
      sku: "test-9",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-5_1.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Ivory, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-5_1.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 4490,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 4490,
          },
        },
      },
    },
    attributes: [
      {
        label: "Ivory",
        code: "color",
        value_index: 34,
        uid: "Y29uZmlndXJhYmxlLzkzLzM0",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "3 Years",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 1400mm",
      sku: "RFS31400RG-W",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-39.jpg",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/1/-/1-39.jpg",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 790,
            percent_off: 18.41,
          },
          regular_price: {
            value: 4290,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 3500,
          },
        },
      },
    },
    attributes: [
      {
        label: "White",
        code: "color",
        value_index: 14,
        uid: "Y29uZmlndXJhYmxlLzkzLzE0",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
  {
    product: {
      speed: null,
      steel_jars: null,
      chopper_jars: null,
      warranty: "3 Years",
      consumption_in_watts: "32",
      air_delivery: "270",
      rpm: "250",
      service_value: "8.4",
      input_voltage: "140-285",
      frequency: "48-52",
      power_factor: "0.99",
      no_of_blades: "3",
      name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 1400mm",
      sku: "RFS31400RG-W&B",
      image: {
        url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/p/e/pearl-white.png",
        label:
          "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White and Black, 1400mm",
      },
      media_gallery: [
        {
          label: null,
          url: "https://stagingm24x.atomberg.com/media/catalog/product/cache/cc2b68d89c85053778ddc50cb0b2bbd1/p/e/pearl-white.png",
        },
      ],
      price_range: {
        maximum_price: {
          discount: {
            amount_off: 0,
            percent_off: 0,
          },
          regular_price: {
            value: 4290,
            currency: "INR",
          },
          final_price: {
            currency: "INR",
            value: 4290,
          },
        },
      },
    },
    attributes: [
      {
        label: "White and Black",
        code: "color",
        value_index: 39,
        uid: "Y29uZmlndXJhYmxlLzkzLzM5",
      },
      {
        label: "1400mm",
        code: "sweepsize",
        value_index: 57,
        uid: "Y29uZmlndXJhYmxlLzEzOS81Nw==",
      },
    ],
  },
];

// var unique = [];
// var tempArr = [];
// var newArr = [];

// // To get unique from array of objects
// var tryNew = variant
//   .map(({ attributes }, index, array) => {
//     if (unique.indexOf(attributes[1].label) === -1) {
//       unique.push(attributes[1].label);
//       newArr.push(array[index]);
//       return array[index];
//     } else {
//       tempArr.push(index);
//     }
//   })
//   .filter((item) => item);

// console.log(unique);
// console.log(newArr);
// console.log(tryNew);

// ------------------------------------------------------------------------

// Modify structure according to table

// const randomObj = [
//   {
//     product: {
//       speed: null,
//       steel_jars: null,
//       chopper_jars: null,
//       warranty: "3 Years",
//       consumption_in_watts: "28",
//       air_delivery: "220",
//       rpm: "340",
//       service_value: "7.9",
//       input_voltage: "140-285",
//       frequency: "48-52",
//       power_factor: "0.99",
//       no_of_blades: "3",
//       name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - White, 1200mm",
//       sku: "RFS31200RG-WH",
//       image: [Object],
//       media_gallery: [Array],
//       price_range: [Object],
//     },
//     attributes: [[Object], [Object]],
//   },
//   {
//     product: {
//       speed: null,
//       steel_jars: null,
//       chopper_jars: null,
//       warranty: "3 years",
//       consumption_in_watts: "28",
//       air_delivery: "210",
//       rpm: "525",
//       service_value: "7.5",
//       input_voltage: "140-285",
//       frequency: "48-52",
//       power_factor: "0.98",
//       no_of_blades: "3",
//       name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 600mm",
//       sku: "RFS30600RG-BR&B",
//       image: [Object],
//       media_gallery: [Array],
//       price_range: [Object],
//     },
//     attributes: [[Object], [Object]],
//   },
//   {
//     product: {
//       speed: null,
//       steel_jars: null,
//       chopper_jars: null,
//       warranty: "3 Years",
//       consumption_in_watts: "32",
//       air_delivery: "270",
//       rpm: "250",
//       service_value: "8.4",
//       input_voltage: "140-285",
//       frequency: "48-52",
//       power_factor: "0.99",
//       no_of_blades: "3",
//       name: "Atomberg Renesa Energy Efficient Ceiling Fan with BLDC Motor and Remote - Brown and Black, 1400mm",
//       sku: "RFS31400RG-BR&B",
//       image: [Object],
//       media_gallery: [Array],
//       price_range: [Object],
//     },
//     attributes: [[Object], [Object]],
//   },
// ];

// const refactorKey = (randomArr) => {
//   let keys;

//   randomArr.map((data) => {
//     keys = Object.keys(data.product);
//   });

//   const data = keys.map((data) => {
//     return { [`${data}`]: randomArr.map((res) => res.product[`${data}`]) };
//   });
//   return data;
// };

// refactorKey(randomObj);

// -------------------------------------------------------------------------

// Remove empty object
// const obj1 = [
//   { speed: '123', mode: '121' },
//   { speed: 'qwe', mode: 'abx' },
//   { speed: '', mode: '' },
// ];

// const result = obj1.filter((item) => {
//   console.log(Object.values(item));

//   return Object.values(item).filter((value) => value);
// });

// console.log(result);

// -------------------------------------------------------------------------
// Find the frequency of elements in array

// const arr = [7, 2, 3, 4, 5, 1, 2, 1, 1, 5, 7, 8];

// const freqCount = {};

// arr.forEach((item) => {
//   if (freqCount[item]) {
//     freqCount[item] = freqCount[item] + 1;
//   } else {
//     freqCount[item] = 1;
//   }
// });

// console.log(freqCount);

// const result = arr.reduce((prevVal, currVal, index, array) => {
//   if (currVal in prevVal) {
//     prevVal[currVal]++;
//   } else {
//     prevVal[currVal] = 1;
//   }

//   return prevVal;
// }, {});

// console.log("result", result);

// -------------------------------------------------------------------------
// Find sum of elements in array

// const result = arr.reduce((prevVal, currVal, index, array) => {
//   return prevVal + currVal;
// }, 0);

// console.log("result", result);

// -------------------------------------------------------------------------
// Group items on the basis of age of given array of object
// let people = [
//   { name: "ayush", age: 24 },
//   { name: "vijay", age: 25 },
//   { name: "harshit", age: 24 },
// ];

// const check = {};

// people.forEach((item, index, array) => {
//   if (check[item.age]) {
//     check[item.age].push(item);
//   } else {
//     check[item.age] = [item];
//   }
// });

// console.log("check", check);

// -------------------------------------------------------------------------

// Find the missing number from unsorted array with O(n) complexity
// const arr = [2, 7, 8, 5, 1, 4, 6];

// let result;
// for (let i = 1; i < arr.length; i++) {
//   if (arr.includes(i)) {
//     continue;
//   } else {
//     result = i;
//   }
// }

// console.log(result);

// -------------------------------------------------------------------------

// Find the nth largest element in a sorted array

// const arr = [12, 34, 21, 14, 67, 35, 64, 25];
// const target = 4;

// function findNthLargest(arr, target) {
//   const sortedArr = arr.sort();

//   return sortedArr[arr.length - target];
// }

// const result = findNthLargest(arr, target);
// console.log("result", result);

// -------------------------------------------------------------------------

// Remove duplicates from an array and return unique values in O(n) complexity.
// const arr = [1, 2, 3, 4, 3, 6, 5, 4];
// let items = {};

// arr.forEach((item) => {
//   if (!items[item]) {
//     items[item] = item;
//   }
// });

// const result = Object.values(items);

// console.log(result);

// -------------------------------------------------------------------------

// Find odd number in array
// const arr = [2, 3, 4, 7, 9, 12, 13, 14];
// const oddArr = [];
// arr.forEach((item) => {
//   if (item % 2 != 0) {
//     oddArr.push(item);
//   }
// });

// console.log(oddArr);

// or

// const newOddArr = arr.filter((item) => item % 2 != 0);
// console.log(newOddArr);

// -------------------------------------------------------------------------

// Extract number from string
// const newString = "The number 345 has three digits";
// const arr = [];

// for (let i = 0; i < newString.length; i++) {
//   if (Number(newString[i])) {
//     arr.push(newString[i]);
//   }
// }

// const numbString = arr.join("");

// console.log(numbString);

// -------------------------------------------------------------------------

// get even number
// const arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNum = arrNumb.filter((num) => num % 2 == 0);
// console.log(evenNum);

// -------------------------------------------------------------------------

//  Get the Substring Between 2 Characters
// const str2 = "one?two!three";

// function returnString(stringName, fChar, sChar) {
//   const stringArr = stringName.split("");
//   const indexOfFChar = stringArr.indexOf(fChar);
//   const indexOfSChar = stringArr.indexOf(sChar);

//   const result = stringArr.slice(indexOfFChar + 1, indexOfSChar).join("");
//   console.log(result);
// }

// returnString(str2, "?", "!");

// or used substring method inbuilt js function

// -------------------------------------------------------------------------
