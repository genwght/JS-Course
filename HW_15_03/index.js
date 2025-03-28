// 📌 Description:
// Create a button that, when clicked, changes the background color of the page every 2 seconds to a random color.

// 📌 Requirements:
// ✔ A button “Start Color Change” starts changing the background every 2 seconds (setInterval).
// ✔ A button “Stop Color Change” stops the color change (clearInterval).
// ✔ Use Math.random() to generate random colors.
// ✔ Use style.backgroundColor to apply the color change.
// ✔ Track events using addEventListener().

// 📌 Example:
// 1️⃣ Clicked “Start Color Change” → The background color changes every 2 seconds.
// 2️⃣ Clicked “Stop Color Change” → The color change stops.

const myInterval = setInterval(() => {
     setColorWithInterval(div);
}, 2000);

function getRandomNumber() {
    return Math.round(Math.random() * (255 - 0) + 0);
}

function getRandomColor() {
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

function setColorWithInterval() {
    div.style.backgroundColor = getRandomColor();
}

const btnStart = document.querySelector('.start');
const div = document.querySelector('.desktop-color');

btnStart.onclick = () => {
    console.log('it work');
    setInterval(myInterval);
};


const btnStop = document.querySelector('.stop');

btnStop.onclick = () => {
    console.log('it stop');
    clearInterval(myInterval);
};