// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let accDeposits = [ ];
  let depositList = 0;
  let accountDepositSum = 0;
  let sumsLessThan2000 = [ ];
  
  for ( let account of array ) {
    if ( account [ 'deposits' ] ) {
      accDeposits.push( account[ 'deposits' ] );
    } else {
      accDeposits.push( [0] );
    }
  }
  
  for ( let i = 0; i < accDeposits.length; i++ ) {
    depositList = accDeposits[i];
    for ( let j = 0; j < depositList.length; j++ ) {
      accountDepositSum += depositList[j];
    }
    if(accountDepositSum < 2000) {
      sumsLessThan2000.push(array[i]);
    };
    accountDepositSum = 0;
    console.log(sumsLessThan2000);
  }
  
  return sumsLessThan2000;
}
 

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
