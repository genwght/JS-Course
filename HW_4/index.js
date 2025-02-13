do {
    userEmail = prompt('Please enter your email');

    if (userEmail.length <= 5) {
        document.write (`<h1>Sorry! Youre email is too short.</h1>`);
    } else if (userEmail.indexOf('@') === -1) {
        document.write(`<h1>Your email should contain '@.'</h1>`);
    } else if (userEmail[0] === '@') {
        document.write(`<h1>@ cannot be on the start of string. </h1>`);
    } else if (userEmail[userEmail.length -1] === '@') {
        document.write(`<h1>@ cannot be on the end of string</h1>`);
    } else if (userEmail === null) {
        document.write(`<h1>Sorry! You not enter your email.</h1>`);
    } else {
        document.write(`<h1>Your email: ${userEmail} saved!</h1>`); 
    }

} while (userEmail.length <= 5 || userEmail.indexOf('@') === -1 || userEmail[0] === '@'|| userEmail[userEmail.length -1] === '@' || userEmail === null);



// document.write(<h1></h1>)

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

