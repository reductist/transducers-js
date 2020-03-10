// const flatDataArray = [
//   { id: 1, name: 'obj1', bool: true },
//   { id: 2, name: 'obj2', bool: true },
//   { id: 3, name: 'obj3', bool: false },
//   { id: 4, name: 'obj4', bool: true },
//   { id: 5, name: 'obj5', bool: false }
// ];

// // const isTrue = ({ bool }) => bool;
// // const getName = ({ name }) => name;
// // const getTrueObjects = compose(
// //   filter(bool),
// //   map(getName)
// // );
// // const trueObjects = toArray(getFriendsNearMe, friends);


// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
// const map = f => step => (a, c) => step(a, f(c));
// const filter = predicate => step => (a, c) => predicate(c) ? step(a, c) : a;
// const isEven = n => n % 2 === 0;
// const double = n => n * 2;
// const isOdd = n => n % 2 === 1;
// const triple = n => n * 3;
// const doubleEvens = compose(
//   filter(isEven),
//   map(double)
// );
// const tripleOdds = compose(
//   filter(isOdd),
//   map(triple)
// )
// const arrayConcat = (a, c) => a.concat([c]);
// const xformEvens = doubleEvens(arrayConcat);
// const xformOdds = tripleOdds(arrayConcat);
// const numericArray = [1, 2, 3, 4, 5, 6];
// const resultEvens = numericArray.reduce(xformEvens, []); // [4, 8, 12]
// const resultOdds = numericArray.reduce(xformOdds, []); // [4, 8, 12]
// const logResults = (original, ...results) => {
//   console.log(`
//   ------ Array reduce result ------
//     Original array:           ${original}
//     Transformed evens array:  ${results[0]}
//     Transformed odds array:   ${results[1]}
//   ---------------------------------
//     `);
//     return [...results];
// }
// const transformedResults = logResults(numericArray, resultEvens, resultOdds);

const weblog = {
  time: "2020-03-09T21:30:00",
  log: {
    id: 1,
    user: "pvr",
    permissions: ["nerd", "admin", "pretend_dev"],
    event: {
      shorturl: "/admin/index.html",
      type: 3,
      error: true,
      error_detail: {
        type: "ise",
        message: "HTTP Error 503. The Service is unavailable.",
      },
      error_count_per_hour: [3, 10, 2]
    }
  }
};

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const map = f => step => (a, c) => step(a, f(c));
const filter = predicate => step => (a, c) => predicate(c) ? step(a, c) : a;

const isArray = n => n.__proto__.constructor.toString() === 'function Array() { [native code] }';
const isObject = n => n.__proto__.constructor.toString() === 'function Object() { [native code] }';

const keys = n => Object.keys(n);
const values = n => Object.values(n);
const entries = n => Object.entries(n);
const castArray = n => [n][0];

const getArrayValues = compose(
  filter(isObject),
  map(castArray),
  map(values)
);
const getArrayKeys = compose(
  filter(isObject),
  map(castArray),
  map(keys)
)

const arrayConcat = (a, c) => a.concat([c]);
const xformArrayValues = getArrayValues(arrayConcat);
const xformArrayKeys = getArrayKeys(arrayConcat);

const resultArrayValues = [weblog].reduce(xformArrayValues, []);
const resultArrayKeys = [weblog].reduce(xformArrayKeys, []);

console.log(resultArrayValues);
console.log(resultArrayKeys);