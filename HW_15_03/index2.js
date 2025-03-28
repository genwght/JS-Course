// 📌 Description:
// Create a simple button that counts how many times it has been clicked.

// 📌 Requirements:
// ✔ A button “Click me!” that increases the counter on each click.
// ✔ A paragraph displaying the number of clicks.
// ✔ Use addEventListener() to track clicks.

// 📌 Example:
// 1️⃣ Clicked once → The text updates: “Clicks: 1”.
// 2️⃣ Clicked again → Updates to “Clicks: 2”.

// const btnClick = document.querySelector('.button');

// let counter = 0;

// btnClick.addEventListener('click', () => {
//     console.log(click)
// })
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Click me!';
document.body.appendChild(button);

const counterText = document.createElement('p');
counterText.classList.add('counterText')
counterText.textContent = 'Clicks: 0';
document.body.appendChild(counterText);
let counter = 0;

button.addEventListener('click', () => {
    counter++;
    counterText.textContent = `Clicks: ${counter}`;
});
