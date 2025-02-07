userInput = prompt("Enter a value:");

// if (userInput === null) {
//     console.log("Input was canceled.");
// } else if (userInput.trim() === "") {
//     console.log("You entered an empty string.");
// } else if (isNaN(+userInput)) {
//     console.log("This is not a number.");
// } else {
//     console.log("Valid number entered!");
// }

switch (userInput) {
    case null :
        newUserInput = 'Input was canceled.' ;
        break;
    case "" :
        newUserInput = 'You entered an empty string.' ;
        break;
    case isNaN(userInput) :  
        newUserInput = 'This is not a number.' ;
        break;
    default :
        newUserInput = 'Valid number entered!' ;

}

console.log(newUserInput);