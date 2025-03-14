// 1️⃣ Extract phone numbers of users who have a balance greater than $2000.
// 2️⃣ Calculate the total sum of all user balances.
// 3️⃣ Ensure that balance values are converted from strings ("$2,226.60") into numbers (2226.60) before performing calculations.
// 4️⃣ Display the results in console.log().

const users = [
    {
      "index": 0,
      "isActive": true,
      "balance": "$2,340.50",
      "name": "Sophia Mitchell",
      "gender": "female",
      "phone": "+1 (810) 456-7890",
      "address": "112 Maple Street, Portland, Maine, 04101"
    },
    {
      "index": 1,
      "isActive": false,
      "balance": "$1,892.30",
      "name": "Liam Anderson",
      "gender": "male",
      "phone": "+1 (923) 555-1122",
      "address": "224 Ocean Drive, Miami, Florida, 33139"
    },
    {
      "index": 2,
      "isActive": true,
      "balance": "$4,102.80",
      "name": "Olivia Carter",
      "gender": "female",
      "phone": "+1 (756) 678-9901",
      "address": "345 Pine Avenue, Seattle, Washington, 98101"
    },
    {
      "index": 3,
      "isActive": true,
      "balance": "$3,475.20",
      "name": "Noah Thompson",
      "gender": "male",
      "phone": "+1 (890) 234-5678",
      "address": "786 Sunset Boulevard, Los Angeles, California, 90028"
    },
    {
      "index": 4,
      "isActive": false,
      "balance": "$2,764.15",
      "name": "Emma Brown",
      "gender": "female",
      "phone": "+1 (671) 999-4433",
      "address": "981 River Road, Austin, Texas, 73301"
    },
    {
      "index": 5,
      "isActive": true,
      "balance": "$1,523.45",
      "name": "James Wilson",
      "gender": "male",
      "phone": "+1 (345) 666-7899",
      "address": "567 Park Lane, Denver, Colorado, 80203"
    }
  ];


const correctBalance = users
  .filter(user => { 
    return parseFloat(user.balance.replace('$', '').replace(',', '')) > 2000})
  .map(user => user.phone)
console.log(correctBalance);

let totalBalance = 0;

users.forEach(user => {
    let balance = parseFloat(user.balance.replace('$', '').replace(',', ''));
    totalBalance += balance;
});

console.log(totalBalance);