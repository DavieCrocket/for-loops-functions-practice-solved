// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

// export const bankAccounts = [
const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    // balance: 100.32,
    balance: 0,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  // { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  { id: 2, name: "Morgan", balance: 0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    // balance: 18456.57,
    balance: 0,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  // { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] }, 
  { id: 5, name: "Phil", balance: 0, deposits: [100, 18], withdrawals: [100] }, 
];

// import { bankAccounts } from '../data/data.js';

// export function getClientWithLeastPositiveBalance(array) {
function getClientWithLeastPositiveBalance(array) {
  let i = 0;
  let acc = 0;
  let balance = 0;
  let output = [];
  

  for (i in array) {
    acc = array[i].balance;
    if (acc > 0 && acc < balance || balance === 0) {
      output = [];
      output.push(array[i].name); 
      output.push(array[i].balance);
      balance = acc;
    }
    if (array.length == 0) {
  
      return  output;
    }
  }
  if (output[1] === 0) {output = []}
  return output;
}

// export function getClientWithLeastBalance(array) {
function getClientWithLeastBalance(array) {

  let i = 0;
  let acc = 0;
  let balance = 0;
  let output2 = [];

  for (i in array) {
    acc = array[i].balance;
  
    if (acc > 0 && acc < balance || balance === 0 ) {
      output2 = [];
      output2.push(array[i]); 
      balance = acc;
    }

    if (array.length == 0 || balance === 0 && i == array.length - 1) {
      output2 = [];
      return output2
    }
  }
  return output2;
}

let result = (getClientWithLeastPositiveBalance(bankAccounts));
// document.getElementById("demo").innerHTML = result;

let result2 = (getClientWithLeastBalance(bankAccounts));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function