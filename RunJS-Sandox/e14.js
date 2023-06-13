const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32, // 100.32
    deposits: [150, 30, 221], // 401
    withdrawals: [110, 70.68, 120], // 300.68
  },

  { id: 2, name: "Morgan", 
    balance: 1100.0, // 1100
    deposits: [1100] }, // 1100
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57, // 18,556.57
    deposits: [4000, 5000, 6000, 9200, 256.57], // 24,456.57
    withdrawals: [1500, 1400, 1500, 1500], // 5900
  },

  { id: 4,
    name: "Candy",
    balance: 0.0 }, // 18

  { id: 5,
    name: "Phil",
    balance: 18, // 18
    deposits: [100, 18], // 118
    withdrawals: [100] }, //100
];



// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let depositSum = 0;
  let acctDepositSum = [];
  
  let withdrawalSum = 0;
  let acctWithdrawalSum = [];
  
  let balance = 0;
  let balanceDoesntMatch = [];
  
  for (let acct = 0; acct < array.length; acct++) {
    if (array[acct]['deposits']) {
      for (let index = 0; index < array[acct]['deposits'].length; index++) {
        depositSum += array[acct]['deposits'][index];
      }
      acctDepositSum.push(depositSum);
      depositSum = 0;
    } else {
      acctDepositSum.push(0);
    }
  }
  
  for (let acct = 0; acct < array.length; acct++) {
    if (array[acct]['withdrawals']) {
      for (let index = 0; index < array[acct]['withdrawals'].length; index++) {
        withdrawalSum += array[acct]['withdrawals'][index];
      }
      acctWithdrawalSum.push(withdrawalSum);
      withdrawalSum = 0;
    } else {
      acctWithdrawalSum.push(0);
    }
  }
  
  for (let index = 0; index < acctDepositSum.length; index++) {
    if (array[index]['balance'] !== acctDepositSum[index] - acctWithdrawalSum[index]) {
      balanceDoesntMatch.push(array[index]);
    }
  }
  return balanceDoesntMatch;
}

getClientsWithWrongBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
