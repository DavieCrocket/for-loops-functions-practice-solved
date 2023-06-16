// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals( array ) {
  let accWithdrawals = [];
  let account = 0;
  let withdrawalSums = [];
  let acctSum = [];
  
  // get widthdrawals from accounts and put into a new array.
  for (let account of array) {
    if (account['withdrawals']) {
      accWithdrawals.push(account['withdrawals']);
    } else {
      accWithdrawals.push([0]);
    }
  }
  
  // sum the widthdrawal amounts for each account and put into new array.
  for ( let i = 0; i < accWithdrawals.length; i++ ) {
    withdrawalSums = accWithdrawals[i];
    for ( let j = 0; j < withdrawalSums.length; j++ ) {
      account += accWithdrawals[i][j];
    }
    acctSum.push(account);
    account = 0;
  }
    
  return acctSum;
}
  


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
