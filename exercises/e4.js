// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  let x = 0;
  let minVal = null;
  for (x of array) {
    if( x < minVal || minVal == null) {
      minVal = x;
    }
  }
  return minVal;
}

export function findMaxValueInArray(array) {
  let xx = 0;
  let maxVal = null;
  for (xx of array) {
    if( xx > maxVal ) {
      maxVal = xx;
    }
  }
  return maxVal;
}
let arr = [2, 45, 32, 3, 0, 46, 12];
console.log(findMinValueInArray(arr));
console.log(findMaxValueInArray(arr));

let arr2 = [20, 24, 19, 26];
console.log(findMinValueInArray(arr2));
console.log(findMaxValueInArray(arr2));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
