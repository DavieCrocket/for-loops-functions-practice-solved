
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] }, 
];

export function getClientWithGreatestBalance(array) {
  let maxBalance = 0;
  let output = [];

  for (let account of array) {
    let currBalance = account.balance;
    console.log({maxBalance})
    if (currBalance > 0 && currBalance > maxBalance || maxBalance == 0) {
      output 
      = [];
      output.push(account); 
      maxBalance = currBalance;
    }
    if (array.length == 0) {
      return output;
    }
  }

  if (output[1] === 0) {
    console.log("hit")
    output = []
  }
  console.log(output)
  return output;
}


;
// document.getElementById("demo").innerHTML = result;

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
