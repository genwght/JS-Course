userInput = prompt("Enter a value:");

if (userInput === null) {
     console.log("Input was canceled.");
} else if (userInput.trim() === "") {
      console.log("You entered an empty string.");
} else if (isNaN(+userInput)) {
     console.log("This is not a number.");
} else {
      console.log("Valid number entered!");
}

console.log(userInput && !!userInput.trim());
console.log(userInput, !!userInput?.trim());


switch (userInput && userInput.trim() && !!isNaN(+userInput)){
    case null :
        console.log('Input was canceled.');
        break;
    case '' :
        console.log('You entered an empty string.');
        break;
    case true :  
        console.log('This is not a number.');
        break;
    default :
        console.log('Valid number entered!');

}

