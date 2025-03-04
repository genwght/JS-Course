// Write a function that remembers the sum of previous calls using closures.
// 📌 What to do?

// 1️⃣ Create a function sum() that:
//     •    Takes one number as an argument.
//     •    Adds it to the previous sum (starting from 0).
//     •    Returns the updated sum.

// 2️⃣ The function should store the sum between calls using a closure.

// 📌 Example Usage:
// const add = sum();

// console.log(add(3));  // Output: 3
// console.log(add(5));  // Output: 8
// console.log(add(20)); // Output: 28

// 📌 Requirements:

// ✔️ Use closures to store the sum.
// ✔️ Ensure the function remembers previous values.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

function createSum() {
    let totalSum = 0;

    return function (number) {
        totalSum += number
        return totalSum
    };
}

sum = createSum();

console.log(sum(4));
console.log(sum(31));
console.log(sum(2));