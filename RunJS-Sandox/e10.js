const bankAccounts = [
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

// export function getAllWithdrawals( array ) {
function getAllWithdrawals( array ) {
  let sum = 0;
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
  let i = 0;
  let j = 0;
  for ( i; i < accWithdrawals.length; i++ ) {
    withdrawalSums = accWithdrawals[i];
    console.log('withdrawalSums: ' + withdrawalSums);
    for ( j; j < withdrawalSums.length; j++ ) {
      console.log('j loop');
      account += accWithdrawals[i][j];
      console.log(account);
    }
    acctSum.push(account);
    account = 0;

    
  }
    
    // for ( j of accWithdrawals[i] )
  // console.log( accWithdrawals[j] )
  return accWithdrawals;
}
  
getAllWithdrawals( bankAccounts );
  
getAllWithdrawals( bankAccounts );
// console.log(getAllWithdrawals( bankAccounts ));