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

export function getAllDepositsGreaterThanOneHundred(array) {
  // create list of account deposits
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
  for ( let i = 0; i < accDeposits.length; i++ ) {
    depositList = accDeposits[i];
    // console.log(depositList)
    // console.log('i is: ' + i);
    for ( let j = 0; j < depositList.length; j++) {
      if (depositList[j] > 100) {
        depositsOver100.push( depositList[j] )
        // console.log('j is: ' + j);
        // console.log('depositsOver100: ' + depositsOver100 )
      }
    }
    
  }
  return depositsOver100;
}
  // sum the widthdrawal amounts for each account and put into new array.
  // for ( let i = 0; i < accDeposits.length; i++ ) {
 
console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));