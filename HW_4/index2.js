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



operation = ['+', '-', '*', '/'];

do {
    userSelectedOperation = prompt('Please enter operation you would like to do (+, -, *, /)');
} while (!operation.includes(userSelectedOperation));

do {
    countOperation = parseInt(prompt('Please enter count of operations from 2 to 6'));
} while (isNaN(countOperation) || countOperation < 2 || countOperation > 6);

do {
    userResult = parseInt(prompt('Please enter number 1:'));
} while (isNaN(userResult));

for (i = 1; i < countOperation; i++) {
    do {
        userNumber = parseInt(prompt(`Please enter number ${i + 1}:`));
    } while (isNaN(userNumber));

    if (userSelectedOperation === '+') {
        userResult += userNumber;
    } else if (userSelectedOperation === '-') {
        userResult -= userNumber;
    } else if (userSelectedOperation === '*') {
        userResult *= userNumber;
    } else if (userSelectedOperation === '/') {
        if (userNumber !== 0) {
            userResult /= userNumber;
        } else {
            alert('Division by zero is not allowed. Please enter another number.');
            i--; // Повторити введення числа
        }
    }
}

console.log(userResult);
alert('Result: ' + userResult);