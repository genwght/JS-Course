firstElement = prompt('Enter your favorite animal');
secondElement = prompt('Enter your favorite fruit');
thirdElement = prompt('Enter your favorite film');
let resultOfUrAnswer = [firstElement, secondElement, thirdElement]; 
//resultOfUrAnswer = alert(`${firstElement}, ${secondElement}, ${thirdElement}`);
console.log(firstElement.concat(' ', secondElement, ' ', thirdElement));
console.log(secondElement.concat(' ', firstElement, ' ', thirdElement));
console.log(thirdElement.concat(' ', firstElement, ' ', secondElement ));
