const _ = {};

// This method returns the first argument it receives.

_.identity = (x) => {
  return x;
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
  // for elements in array:
  //   if element = value[0]:
  //       for element in value:
  //           if( value[element index + valueindex] != value[valueindex]:
  //                 break
  //       return true
};

// for (let i = 0; i < collection.length; i++) {
//   if (collection[i] === value) {
//     return true;
//   }
// }
// return false;

// Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. 
// The order of result values is determined by the order they occur in the array.

_.uniq = (arr) => {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(unique, arr[i])) {
      unique.push(arr[i]);
    } 
  }
  return unique;
};

// Creates an array of values by running each element in collection through iteratee. 
// Iteratee is invoked with 3 arguments: value, index/key, collection

// _.map = (collection, iteratee) => {
//   let value, key, mapped;
//   mapped = [];
//   for (key in collection) {
//     value = collection[key];
//     mapped[key] = iteratee(value);
//   }
//   return mapped;
// };

// Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, 
// where each successive invocation is supplied the return value of the previous. 
// If accumulator is not given, the first element of collection is used as the initial value. 
// The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).

// _.reduce = (arr, func, acc) => {
//   return 0;
// }

module.exports = _ ; 