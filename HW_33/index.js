// Goal:
// Implement an interactive ATM logic that allows the user to either check their balance or withdraw cash, using Promise, resolve, reject, and basic prompt/confirm.

// 🧾 Provided data:


// 📌 Task:

// Implement a function getMoney(userData, bankData) that does the following:

// ✅ Step 1: Ask if the user wants to check their balance
//    •    Use confirm('View card balance?')
//    •    If Yes:
//    •    resolve(userData)
//    •    Prompt the user to enter a currency.
//    •    If the currency is valid (present in userData), log the balance:
//    •    'Balance is: 1000 USD'
//    •    If the currency is invalid, keep asking until valid input.
//    •    If No:
//    •    reject({ userData, bankData })
//    •    Prompt the user to withdraw cash:
//    •    Ask for a currency (must exist in both userData and bankData and bankData[currency].max > 0)
//    •    Ask for amount.

// 🛑 Validate the input:
//    •    If currency is invalid → repeat prompt.
//    •    If amount > bankData[currency].max → log:
//    •    'The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ...'
//    •    If amount < bankData[currency].min → log:
//    •    'The entered amount is less than the allowed minimum. Minimum withdrawal amount: ...'

// 💸 If everything is valid:
//    •    Log: 'Here are your cash 200 USD 💵' (emoji based on selected currency)

// 🎉 Final message:
// Regardless of the path, always display at the end:
// Thank you, have a nice day 😊

let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
};

let bankData = {
    'USD': { max: 3000, min: 100, img: '💵' },
    'EUR': { max: 1000, min: 50, img: '💶' },
    'UAH': { max: 0, min: 0, img: '💴' },
    'GBP': { max: 10000, min: 100, img: '💷' }
};

function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
        let answer = confirm('View card balance?');
        
        if (answer) {
            // Balance check
            let currency;
            do {
                currency = prompt('Please enter currency (USD, EUR, UAH, BIF, AOA):').toUpperCase();
            } while (!(currency in userData));

            console.log(`Balance is: ${userData[currency]} ${currency}`);
            alert(`Balance is: ${userData[currency]} ${currency}`);
            resolve(userData); // Resolve after checking balance

        } else {
            // Withdraw money
            let currency;
            let amount;
            do {
                currency = prompt('Enter currency to withdraw (USD, EUR, UAH, GBP):').toUpperCase();
            } while (!(currency in userData) || !(currency in bankData) || bankData[currency].max <= 0);

            do {
                amount = prompt(`Enter amount to withdraw in ${currency}:`);
                amount = parseFloat(amount);
            } while (isNaN(amount) || amount < bankData[currency].min || amount > bankData[currency].max);

            if (amount <= userData[currency]) {
                console.log(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
                alert(`Here are your cash ${amount} ${currency} ${bankData[currency].img}`);
                userData[currency] -= amount; // Deduct amount from user balance
                resolve(userData);
            } else {
                console.log('Insufficient balance.');
                alert('Insufficient balance.');
                reject({ userData, bankData });
            }
        }

        // Final message
        alert('Thank you, have a nice day 😊');
    });
}

function startATM() {
    getMoney(userData, bankData)
        .then(result => {
            console.log('Operation successful', result);
        })
        .catch(error => {
            console.log('Error occurred:', error);
        });
}

console.log('dsadas')
console.log(getMoney)