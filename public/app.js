const $ = document.querySelector.bind(document);
const elements = {
  runBenchmarkButton: $(".run-benchmark-button"),
  benchmarkResultContainer: $(".benchmark-result-container")
};
const testData = createTestData();

elements.runBenchmarkButton.addEventListener("click", runBenchmark);

// takes an array of values and returns a new array with duplicates removed
function removeDuplicates(arr) {
  const unique = [];
  const length = arr.length;
  const uniqueLookupMap = {}; // used to quickly lookup whether or not a value has been encountered

  for(let i = 0; i < length; i++) {
    if(!(arr[i] in uniqueLookupMap)) { // check if value hasn't been encounted yet
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
  for(let i = 0; i < 50000; i++) {
    const email = `${i}${Math.random() * 10000}@${Math.floor(Math.random() * 10000)}.com`; // generates something like "53891.27@38910.com"
    emails.push(email);
  }
  // get random emails to insert as duplicates
  for(let i = 0; i < 50000; i++) {
    duplicates.push(sample(emails));
  }

  duplicates.forEach((email) => {
    const insertIndex = randomInt(emails.length + 1); // add 1 to allow insertion at the end of the array
    emails.splice(insertIndex, 0, email);
  });

  return emails;
}

function runBenchmark() {
  //const emails = createTestData();
  const {result, elapsed} = time(() => removeDuplicates(testData));
  elements.benchmarkResultContainer.textContent = `${elapsed}ms`;
}

// runs fn and returns an object containing the result and the elapsed time in milliseconds it took to execute (synchronously)
function time(fn) {
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
