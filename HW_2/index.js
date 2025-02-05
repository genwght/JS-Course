firstElement = prompt('Enter your favorite animal');
secondElement = prompt('Enter your favorite fruit');
thirdElement = prompt('Enter your favorite film');
let strings = [firstElement, secondElement, thirdElement]; 
strings.sort(() => Math.random() - 0.5);
resultOfUrAnswer = alert(`${firstElement}, ${secondElement}, ${thirdElement}`);
