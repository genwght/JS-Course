let strings = [prompt('Enter your favorite animal'), prompt('Enter your favorite fruit'), prompt('Enter your favorite film')];

// Перемішуємо масив
strings.sort(() => Math.random() - 0.5);

// Об'єднуємо у рядок
let result = strings.join(" ");
console.log(result);
alert(result);

