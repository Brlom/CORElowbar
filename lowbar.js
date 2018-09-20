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
}


module.exports = _; 
