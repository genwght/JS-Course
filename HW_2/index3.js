// Create a script that converts hours into seconds.
// Task Description:
//    •    Ask the user to enter a number of hours using prompt().
//    •    Calculate how many seconds are in that number of hours.
//    •    Store the calculated value in a variable.
//    •    Display the result to the user using alert().
// Example:
// If the user enters 2, the output should be:
// 2 hours contain 7200 seconds.
// 📌 Requirements:
//    •    Convert the user input to a number before performing calculations.
//    •    Test your script to ensure it works correctly.
//    •    Submit your work as a pull request (PR) on GitHub.
//    •    A successfully completed assignment is an approved PR.
// Good luck! 🚀

userHours = prompt('Please enter the number of hours!');
hoursToSecond = 3600;
userSecond = parseInt(userHours) * hoursToSecond;
alert(userSecond);