
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let maxBalance = 0;
  let output = [];

  for (let account of array) {
    let currBalance = account.balance;
    if (currBalance > 0 && currBalance > maxBalance || maxBalance == 0) {
      output = [];
      output.push(account); 
      maxBalance = currBalance;
    }
    if (array.length == 0) {
      return output;
    }
  }

  if (output[1] === 0) {
    output = []
  }
  console.log(output)
  return output;
}


// document.getElementById("demo").innerHTML = result;

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
