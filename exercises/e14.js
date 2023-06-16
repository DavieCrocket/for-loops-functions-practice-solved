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

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
