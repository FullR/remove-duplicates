const ignoreChars = /\.|\+/;

// takes an array of values and returns a new array with duplicates removed
module.exports = function filterDuplicate(arr) {
  const unique = [];
  const length = arr.length;
  const uniqueLookupMap = {}; // used to quickly lookup whether or not a value has been encountered

  for(let i = 0; i < length; i++) {
    const value = arr[i];
    const [name, domain] = value.split("@");
    const normalizedValue = `${name.toLowerCase().replace(ignoreChars, "")}@${domain || ""}`;//value.toLowerCase().replace(ignoreChars, "");
    if(!(normalizedValue in uniqueLookupMap)) { // check if value is unique
      uniqueLookupMap[normalizedValue] = true;
      unique.push(value);
    }
  }
  return unique;
}
