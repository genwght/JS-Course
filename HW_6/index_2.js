// Work with a given array and perform various operations using loops and array methods.

// 📌 Given array:
// numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];

// 📌 What to do?
// 1️⃣ Calculate the total sum and count of all positive numbers in the array.
// 2️⃣ Find the smallest value in the array and determine its index position.
// 3️⃣ Find the largest value in the array and determine its index position.
// 4️⃣ Count how many negative numbers exist in the array.
// 5️⃣ Count the number of odd positive numbers in the array.
// 6️⃣ Count the number of even positive numbers in the array.
// 7️⃣ Find the sum of all even positive numbers.
// 8️⃣ Find the sum of all odd positive numbers.
// 9️⃣ Multiply all positive numbers together and display the result.
// 🔟 Replace all numbers in the array with 0, except for the highest number.

// 📌 Requirements:
// ✔️ Use loops to solve each task.
// ✔️ Ensure the program handles any array of numbers.
// ✔️ Display all results using console.log() or document.write().
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// Good luck! 🚀

numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];
sum = 0;
count = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) { 
        sum = sum + numbers[i];
    }
} 
console.log(sum);

for (j = 0; j < numbers.length; j++) {
    if (numbers[j] > 0) {
        count = j++
    }
}
console.log(count);