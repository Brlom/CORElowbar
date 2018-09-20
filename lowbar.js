const _ = {};

_.identity = (x) => {
  return x;
};

_.take = (arr, n = 1) => {
  if (arr.length === 0) return [];
  const box = [];
  /* if (n === undefined) {
    n = 1;
  } */
  for(let i = 0; i < n; i++) {
    box.push(arr[i]);
  }
  return box;
};

_.uniq = (arr) => {
  const unique = arr.slice(0, 1);
  for (let i = 0; i < unique.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== unique[i]) {
        unique.push(arr[i]);
      }
    }
  }
  //return unique;
};

module.exports = _; 
