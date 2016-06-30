
// takes an array of values and returns a new array with duplicates removed
module.exports = function filterDuplicate(arr) {
  const unique = [];
  const length = arr.length;
  const uniqueLookupMap = {}; // used to quickly lookup whether or not a value has been encountered

  for(let i = 0; i < length; i++) {
    const value = arr[i];
    if(!(value in uniqueLookupMap)) { // check if value is unique
      uniqueLookupMap[value] = true;
      unique.push(value);
    }
  }
  return unique;
}
