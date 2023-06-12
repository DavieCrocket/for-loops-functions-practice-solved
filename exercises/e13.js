// export const bankAccounts = 
const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221], // 401
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] }, // 1100
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57], // 18,456.27
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] }, //118
];

// export const bankAccountsNoPositiveBalance = 
const bankAccountsNoPositiveBalance = [
  { id: 1, name: "Susan", balance: -100.32 },
  { id: 2, name: "Morgan", balance: -1100.0 },
  { id: 3, name: "Joshua", balance: -18456.57 },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: -18 },
];

// export const classSeatsFlattened = 
const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];

// export const flatArraysData = 
const flatArraysData = [
  ["Yay", "!", "this"],
  ["works", "as", "expected", "!"],
];


// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

// export function getAllAccountsWithSumsOfDepositsLess2000(array) {
export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // create list of account deposits
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
 
// console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));
getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
