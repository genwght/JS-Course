// Write a function that creates a deep copy of a nested array, ensuring that all levels of the array are copied correctly.

// 📌 What to do?

// 1️⃣ Create a function deepClone(array) that:
//    •    Takes a nested array as an argument.
//    •    Creates a new array where all elements (including nested arrays) are copied.
//    •    Uses recursion to go through all levels of the array.

// 2️⃣ Ensure that the function does not modify the original array.
// 📌 Example Usage:

// const array = [
//   [
//     ['some text', true, [1, 2, 3, 4, [10, 20]]],
//   ],
//   [
//     [1, 2, 3, [100, 200]],
//     ['name', 'age']
//   ],
// ];

// const clonedArray = deepClone(array);

// console.log(clonedArray); // Should return a full deep copy of `array`
// console.log(clonedArray === array); // Should be false (ensuring a new copy is created)
// 📌 Requirements:

// ✔️ Use recursion to clone all levels of the array.
// ✔️ Ensure that nested arrays are fully copied, not just referenced.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

function deepClone(array) {

}

const array = [
    [
        ['lorem', true, [232, 434, 654, 3234, [2123, 86765]]],
    ],
    [
        [-123, 2312, 32143, [100, 213]],
        ['Vlad', '18']
    ],
];
const clonedArray = deepClone(array);
console.log(clonedArray);
console.log(clonedArray === array);