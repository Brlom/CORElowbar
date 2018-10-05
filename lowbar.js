const _ = {};

// This method returns the first argument it receives.

_.identity = (x) => {
  return x;
};

// Squares a number when passed in.

_.square = x => {
  return x * x;
};

// Creates a slice of array with n elements taken from the beginning.

_.take = (arr, n = 1) => {
  if (arr.length === 0) return [];
  const box = [];
  if (n === undefined) {
    n = 1;
  } 
  for (let i = 0; i < n; i++) {
    box.push(arr[i]);
  }
  return box;
};

// Checks if value is in collection. If collection is a string, it's checked for a substring of value. 
// If fromIndex is negative, it's used as the offset from the end of collection.

_.includes = (collection, value) => {
  if (collection.isArray) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) {
        return true;
      }
    }
    return false;
  }
  if (typeof collection === 'object') {
    for (let key in collection) {
      if (collection[key] == value) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === value[0]) {
      for (let j = 0; j < value.length; j++) {
        if (collection[i + j] !== value[j]) {
          break;
        }
        return true;
      }
    }
  }  
  return false;
};

// Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. 
// The order of result values is determined by the order they occur in the array.

_.uniq = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!_.includes(unique, arr[i])) {
      unique.push(arr[i]);
    } 
  }
  return unique;
};

// Creates an array of values by running each element in collection through iteratee. 
// Iteratee is invoked with 3 arguments: value, index/key, collection

// _.map = (collection, iteratee) => {
  // let res = [];
  // for(let i in collection) {
  //   res.push(iteratee(collection[i], i, collection));
  // }
  // return res;
// };

// return iteratee(value, index, collection[i]);
// let value, index, mapped;
// mapped = [];
// for (let index in collection) {
//   value = collection[index];
//   mapped[index] = iteratee(value);
// }
// return mapped;

// Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, 
// where each successive invocation is supplied the return value of the previous. 
// If accumulator is not given, the first element of collection is used as the initial value. 
// The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).

// _.reduce = (arr, func, acc) => {
//   if (acc === []) {
//     return 0;
//   }
//   return acc;
// }

module.exports = _ ; 