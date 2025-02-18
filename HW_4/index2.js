// 1️⃣ Ask the user to choose an operation (+, -, /, *) using prompt().
//    •    Keep asking until the user enters a valid operation.
// 2️⃣ Ask how many numbers (operands) they want to use.
//    •    It should be a number between 2 and 6.
//    •    Keep asking until the user enters a valid number.
// 3️⃣ Ask for each operand one by one.
//    •    Every operand must be a valid number.
//    •    Keep asking until the user enters a valid number.
// 4️⃣ Calculate and display the result using alert() or console.log().

// 📌 Example of user flow:
// User enters: +
// User enters: 3  (wants to use 3 numbers)
// User enters: 5
// User enters: 2
// User enters: 4
// Final output: "5 + 2 + 4 = 11"

// 📌 Requirements:
// ✔️ Use loops to validate inputs.
// ✔️ Use conditional statements to ensure correct values.
// ✔️ Display the final result of the calculation.

do {
    userSelectedOperation = prompt('Please enter opreation would you like to do');

    if (userSelectedOperation === '+') {
        console.log('You select to do addition');
        break;
    } else if (userSelectedOperation === '-') {
        console.log('You select to do subtraction');
        break; 
    } else if (userSelectedOperation === '*') {
        console.log('You select to do multiplication');
        break; 
    } else if (userSelectedOperation === '/') {
        console.log('You select to do division');
        break; 
    } else {
        console.log('You enter invalid opration');
    }

} while (true);


do {
    countOperation = parseInt(prompt('Please enter count of operation from 2 to 6'));
} while (!isNaN(countOperation) && countOperation >= 2 && countOperation <= 6);

do (i = 0; i < countOperation; i++) {
    userNumber = parseInt(prompt(`Please enter number ${i + 1}:`));
} while (isNaN(userNumber));


for (i = 1; i < parseInt(countOperation); i++) {
    
    if (userSelectedOperation === '+') {
        userResult +=  parseInt(userNumber[i]);
    } else if (userSelectedOperation === '-') {
        userResult -= parseInt(userNumber[i]);
    } else if (userSelectedOperation === '*') {
        userResult *= parseInt(userNumber[i]);
    } else if (userSelectedOperation === '/') {
        userResult /= parseInt(userNumber[i]);
    }
    
}


console.log(userResult);
alert(userResult);