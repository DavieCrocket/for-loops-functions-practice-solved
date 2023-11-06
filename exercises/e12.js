// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

/* export function getAllDepositsGreaterThanOneHundred(array) {
  // create array of account deposits
  let accDeposits = [];
  let depositList = [];
  let depositsOver100 = [];
  for ( let account of array ) {
    if ( account[ 'deposits' ] ) {
      accDeposits.push( account[ 'deposits' ]);
    } else {
      accDeposits.push( [0] );
    }
  }

  // search array of arrays for deposits greater than 100 and store in new array
  for ( let i = 0; i < accDeposits.length; i++ ) {
    depositList = accDeposits[i];
    for ( let j = 0; j < depositList.length; j++) {
      if ( depositList[j] > 100 ) {
        depositsOver100.push( depositList[j] )
      }
    }
    
  }
  return depositsOver100;
} */

//* Nicolas Feedback */
//********************************************************************************** */
export function getAllDepositsGreaterThanOneHundred(array) {
  let depositsOver100 = [];
  for (let user of array) {
    if (user.deposits) {
      for (let amount of user.deposits) {
        if (amount > 100) {
          depositsOver100.push( amount );
        }
      }
    }
  }
  return depositsOver100;
}

//********************************************************************************** */


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
