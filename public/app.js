const $ = document.querySelector.bind(document);
const elements = { // cache elements
  runBenchmarkButton: $(".run-benchmark-button"),
  benchmarkResultContainer: $(".benchmark-result-container"),
  uniqueTestResult: $(".unique-test-result"),
  orderTestResult: $(".order-test-result")
};
const testData = createTestData();

elements.runBenchmarkButton.addEventListener("click", runBenchmark);

// takes an array of values and returns a new array with duplicates removed
function removeDuplicates(arr) {
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

// generates an array of random email addresses (50,000 unique and 50,000 duplicates)
function createTestData() {
  const emails = [];
  const duplicates = []; // duplicate emails to be inserted randomly into emails
  for(let i = 0; i < 50; i++) {
    const email = `${i}${Math.random() * 10000}@${Math.floor(Math.random() * 10000)}.com`; // generates something like "53891.27@38910.com"
    emails.push(email);
  }
  // get random emails to insert as duplicates
  for(let i = 0; i < 50; i++) {
    duplicates.push(sample(emails));
  }

  duplicates.forEach((email) => {
    const insertIndex = randomInt(emails.length + 1); // add 1 to allow insertion at the end of the array
    emails.splice(insertIndex, 0, email);
  });

  return emails;
}

function runBenchmark() {
  const {result, elapsed} = timeFunction(() => removeDuplicates(testData));
  elements.benchmarkResultContainer.textContent = `${elapsed}ms`;
  runTests(testData, result);
}

function runTests(input, output) {
  if(isUnique(output)) {
    console.log("is unique");
  } else {
    console.log("isn't unique");
  }

  if(isInRelativeOrder(input, output)) {
    console.log("is in order");
  } else {
    console.log("isn't in order");
  }
}

// returns true if arr has no duplicate values by checking that each value is the first of its kind
function isUnique(arr) {
  return arr.every((value, i) => arr.indexOf(value) === i);
}

// returns true if uniqueArr is in the same relative order as originalArr
// In order to detect whether or not uniqueArr retains originalArr's order,
// I'm checking that each item's index is less than or equal to its first index in the original array
function isInRelativeOrder(originalArr, uniqueArr) {
  return uniqueArr.every((value, i) => i <= originalArr.indexOf(value));
}

// runs fn and returns an object containing the result and the elapsed time in milliseconds it took to execute (synchronously)
function timeFunction(fn) {
  const startTime = Date.now();
  const result = fn();
  return {
    result,
    elapsed: Date.now() - startTime
  };
}

// returns a random value in arr
function sample(arr) {
  return arr[randomInt(arr.length)];
}

// returns a random integer between 0 and max (inclusive/exclusive)
function randomInt(max) {
  return Math.floor(Math.random() * max);
}
