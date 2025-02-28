// Write a function removeElement(array, item) that removes a specific element from an array.

// 📌 What to do?
// 1️⃣ Create a function removeElement(array, item) that:
//    •    Takes an array and a specific item as arguments.
//    •    Removes the given item from the array.
//    •    Does not modify the original array structure (no empty spaces).

// 2️⃣ The function should work correctly for any array and any item inside it.

// 3️⃣ Call the function and log the result using console.log().

// 📌 Example Usage:
// const array = [1, 2, 3, 4, 5, 6, 7]; 
// removeElement(array, 5); 
// console.log(array); 
// // Expected output: [1, 2, 3, 4, 6, 7]

// 📌 Requirements:
// ✔️ Use array methods (such as .splice(), .filter(), or others).
// ✔️ Ensure the function does not leave empty spaces in the array.
// ✔️ Display the final result using console.log().
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

function removeElement(randomArray, element) {
    const index = randomArray.indexOf(element);
    if (index > -1) {
        randomArray.splice(index, 1);
    }
}
const randomArray = [1, 12, 45, 56, 676, 5432, 31233];
removeElement(randomArray, 5432)
console.log(randomArray);
