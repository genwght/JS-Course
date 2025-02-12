do {
    userEmail = prompt('Plese enter your email');

    if (length.userEmail < 5) {
        console.log('Sorry, but your email is too small')
    }
}








// 1.    Ask the user to enter an email using prompt().
// 2.    Validate the email according to the following rules:
// •    It cannot be empty or null.
// •    It must contain @.
// •    @ cannot be at the beginning.
// •    @ cannot be at the end.
// •    The total length must be greater than 5 characters.
// 3.    If the email does not meet any of these conditions, display the appropriate error message using document.write().
// 4.    Keep asking the user for a valid email until they enter a correct one.

// 📌 Example Errors to Display:
// •    "Error: Email cannot be empty."
// •    "Error: Email must contain '@'."
// •    "Error: '@' cannot be at the beginning of the email."
// •    "Error: '@' cannot be at the end of the email."
// •    "Error: Email must be longer than 5 characters."

// 📌 Requirements:
// •    Use loops (while or do...while) to keep asking the user until they enter a valid email.
// •    Use conditional statements to check for errors.
// •    Display error messages using document.write().
// •    Submit your work as a pull request (PR) on GitHub.
// •    A successfully completed assignment is an approved PR.