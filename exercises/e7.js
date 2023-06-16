// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


// import { bankAccounts } from '../data/data.js';

export function getClientWithLeastPositiveBalance( array ) {
  let i = 0;
  let acc = 0;
  let minBalance = 0;
  let output = [];
  

  for (let account of array) {
    let currBalance = account.balance;
    
    if (currBalance > 0 && currBalance < minBalance || minBalance === 0) {
      output = [];
      output.push(account); 
      minBalance = currBalance;
      console.log(output);

    } else if ( currBalance <= 0 && currBalance < minBalance ) { 
      minBalance = currBalance;
      output = [];
      console.log( 'minBalance2 = ' + minBalance );
      console.log(output);
    }

    if (array.length == 0) {
      return  output;
    }
  }
  return output;
}

export function getClientWithLeastBalance( array ) {

  let minBalance = 0;
  let output2 = [];

  for ( let account of array ) {
    let currBalance = account.balance;
  
    if ( currBalance > 0 && currBalance < minBalance || minBalance === 0 ) {
      output2 = [];
      output2.push(array[account]); 
      minBalance = currBalance;
      console.log( 'minBalance1 = ' + minBalance );
    }
    
    if ( array.length == 0 ) {
    output2 = [];
    return output2
    }
  }
  return output2;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function