//working with reudce array method with some example codes

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//finding the sum of values in the array
const sumValue = (arry) => {
  let sum = 0;
  arry.forEach((num) => (sum += num));
  return sum;
};
console.log(sumValue(number));

//Using reduce array method to find the sum of values

const totals = number.reduce((acc, curr) => acc + curr, 15);
console.log(totals);

//Flatten an array

let array = [
  [0, 1],
  [2, 3],
  [4, 5],
  [5, 6],
];

let array2 = [
  ['Ken', 'James'],
  ['Kim', 'Low'],
  ['Freda', 'Kate'],
  ['Seth', 'Ben'],
];

//using the flat array method

const flatArry1 = array.flat();
console.log({ flatArry1 });
const flatArry2 = array2.flat();
console.log({ flatArry2 });

//using reduce arry method to flatten array

const flattenArray = array2.reduce((acc, curr) => acc.concat(curr), []);
console.log({ flattenArray });

//********Flatten nested array*****************

//using the flat array method
let nestedArray = [
  [1, [2, 3]],
  [4, 5],
  [
    [6, 7],
    [8, 9],
  ],
];

const flattenNesetedArray = nestedArray.flat(2);

console.log({ flattenNesetedArray });

//using reduce arry method to flatten nested  array

const flattenNesetedArray2 = nestedArray.reduce((acc, curr) => {
  return Array.isArray(curr)
    ? curr.reduce((acc2, curr2) => acc2.concat(curr2), acc)
    : acc.concat(curr);
}, []);

console.log({ flattenNesetedArray2 });

// using reduce arry method to flatten nested  array {this works just like the above}
// function flattenArray_(nestedArray) {
//   return nestedArray.reduce(
//     (accumulator, currentValue) =>
//       accumulator.concat(
//         Array.isArray(currentValue) ? flattenArray_(currentValue) : currentValue
//       ),
//     []);
// }

// let flattenedArray = flattenArray_(nestedArray);
// console.log({flattenedArray})

//Grouping an array of objects by a property

let countries = [
  { name: 'Germany', continent: 'Europe' },
  { name: 'Brazil', continent: 'South America' },
  { name: 'India', continent: 'Asia' },
  { name: 'France', continent: 'Europe' },
  { name: 'South Korea', continent: 'Asia' },
];

//Exapale 1 - using map
let obj = {};
countries.map(
  (x, i, a) =>
    (obj[x['continent']] = a.filter((y) => y.continent === x.continent))
);
console.log({ obj });

let groupedCountries = countries.reduce((groupedCountries, country) => {
  if (!groupedCountries[country.continent]) {
    groupedCountries[country.continent] = [];
  }
  groupedCountries[country.continent].push(country);
  return groupedCountries;
}, {});

console.log({ groupedCountries });
