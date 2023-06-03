
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

// function getAverage(array) {
  export function getAverage(array) {
  let x = 0;
  let num = 0;
  let sum = 0;
  let divisor = array.length;
  for (x of array) {
    num = x;
    sum += num;
  }
  return sum / divisor; 
}

let arr = [22, 45, 4, 65];


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

// function getStringSum(str) {
export function getStringSum(str) {
  let y = 0;
  let num2 = 0;
  for (y of str) {
    if (y >= 0 || y <= 9) {
      num2 += (y * 1);
    }
  }
  return num2; 
}
let string = "GH2U87A";




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
