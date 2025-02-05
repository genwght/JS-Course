let strings = [
    prompt('Enter your favorite animal'),
    prompt('Enter your favorite fruit'),
    prompt('Enter your favorite film')
];
strings.sort(() => Math.random() - 0.5);
let result = strings.join(" ");
console.log(result);
alert(result);

userCod = prompt('Enter five-digit number');
console.log(typeof 0);
userCodResult = userCod.split(" ");
alert(userCodResult);

