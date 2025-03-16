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

const div = document.querySelector('.wrapp');

div.onclick = () => {
    console.log('it work');
};