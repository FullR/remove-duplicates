// runs fn and returns an object containing the result and the elapsed time in milliseconds it took to execute (synchronously)
function timeFunction(fn) {
  const startTime = Date.now();
  const result = fn();
  const elapsed = Date.now() - startTime;
  return {result, elapsed};
}

// returns a random integer between 0 and max (inclusive/exclusive)
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

// returns a random value in arr
function sample(arr) {
  return arr[randomInt(arr.length)];
}

module.exports = {
  timeFunction,
  sample,
  randomInt
};
