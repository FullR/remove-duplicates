
// takes an array of values and returns a new array with duplicates removed
module.exports = function filterDuplicate(arr) {
  const unique = [];
  const length = arr.length;
  const uniqueLookupMap = {}; // used to quickly determine if a value has been encountered yet

  for(let i = 0; i < length; i++) {
    const value = arr[i];
    if(!(value in uniqueLookupMap)) { // check if value is unique
      uniqueLookupMap[value] = true;
      unique.push(value);
    }
  }

  return unique;
}
