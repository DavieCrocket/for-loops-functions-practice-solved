
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

// function getAllClientNames(array) {
// import { classSeatsFlattened } from '..data/data.js';
export function getAllClientNames(array) {
  let allNames = [];
  for (var i in array) {
    allNames.push(accountHolders[i]);
  }
return allNames;
}

export const accountHolders = [
  "Susan",
  "Morgan",
  "Joshua",
  "Candy",
  "Phil",
];

let array = accountHolders;
console.log(getAllClientNames(array));




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
