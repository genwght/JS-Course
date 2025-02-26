// Work with a given array and perform various operations using loops and array methods.

// 📌 Given array:
// numbers = [12, -45, 67, -3, 89, -90, 23, 5, -22, 56, 43, -78, 91, -10, 38, 62, -41, 7, -99, 34, 55, -60, 14, 80];

// 📌 What to do?










// 📌 Requirements:
// ✔️ Use loops to solve each task.
// ✔️ Ensure the program handles any array of numbers.
// ✔️ Display all results using console.log() or document.write().
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// Good luck! 🚀

// 1️⃣ Calculate the total sum and count of all positive numbers in the array.

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

// 2️⃣ Find the smallest value in the array and determine its index position.

let minNum = Infinity;
let minIndex = 1;
for (i = 0; i < numbers.length; i++) 
    if (numbers[i] < minNum) { 
        minNum = numbers[i]; 
        minIndex = i + 1;
}
console.log(minNum)
console.log(minIndex);

// 3️⃣ Find the largest value in the array and determine its index position.

let maxNum = 0;
let index = 1;
for (i = 0; i < numbers.length; i++) 
    if (numbers[i] > maxNum) { 
        maxNum = numbers[i]; 
        index = i + 1;
}
console.log(maxNum);
console.log(index);

// 4️⃣ Count how many negative numbers exist in the array.

let countOfNegative = 0;
for (i = 0; i < numbers.length; i++) 
    if (numbers[i] < 0) {
        countOfNegative = countOfNegative + 1;
}
console.log(countOfNegative);

// 5️⃣ Count the number of odd positive numbers in the array.

let countOfOddPositive = 0;
for (i = 0; i < numbers.length; i++) 
    if (numbers[i] % 2 !== 0) {
        countOfOddPositive = countOfOddPositive + 1;
    }
console.log(countOfOddPositive);

// 6️⃣ Count the number of even positive numbers in the array.

let countOfEvenNum = 0;
for (i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0){
        countOfEvenNum = countOfEvenNum +1;
    }
console.log(countOfEvenNum);

// 7️⃣ Find the sum of all even positive numbers.

let sumOfEven = 0;
for (i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0) {
        sumOfEven = sumOfEven + numbers[i];
    }
console.log(sumOfEven);

// 8️⃣ Find the sum of all odd positive numbers.

let sumOfOdd = 0;
for (i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 !== 0) {
        sumOfOdd = sumOfOdd + numbers[i];
    }
console.log(sumOfOdd);

// 9️⃣ Multiply all positive numbers together and display the result.

let positiveMultipling = 1;
for (i =0; i < numbers.length; i++)
    if (numbers[i] > 0) {
        positiveMultipling = positiveMultipling * numbers[i];
    }
console.log(positiveMultipling);

// 🔟 Replace all numbers in the array with 0, except for the highest number.

let maxValue = 0;
for (i = 0; i < numbers.length; i++) 
    if (numbers[i] > maxValue) { 
        maxValue = numbers[i]; 
}
console.log(maxValue);

for (j = 0; j < numbers.length; j++)
    if (maxValue > numbers[j]) {
        numbers[j] = 0;
    }
console.log(numbers.join(', '));