// 📌 Given arrays:
// const hero = ['Ivan'];
// const native = ['York', 'Of'];
// const destination = ['Poltava', 'In'];

// 📌 What to do?





// 5️⃣ Use any font you like (for example, Quicksand as in the reference image).

// 📌 Requirements:
// ✔️ Use loops, if/else, or switch/case where necessary.
// ✔️ Use array methods such as .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse(), .join().
// ✔️ Render the result in HTML in a visually structured way (e.g., colored boxes).
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 1️⃣ Combine all arrays (destination, native, hero) into one common array named rainbow.

const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];
const rainbow = hero.concat(native, destination);
console.log(rainbow);

// 2️⃣ Reverse the order of elements in the rainbow array.

const rainbowReverse = rainbow.reverse();
console.log(rainbowReverse);

// 3️⃣ Modify the rainbow array by adding or replacing elements to match the final structure:
// ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']

let newHero = ['Ivan'];
newHero[0] = 'Richard';
let newNative = ['York', 'Of'].reverse();
let newDestination = ['Poltava', 'In'];
newDestination[0] = 'Battle';
newDestination.unshift('Gave');
newDestination.push('Vain');

newEditArray = newHero.concat(newNative, newDestination);
console.log(newEditArray);

// 4️⃣ Render the final array in HTML so that each word appears in a separate colored box.

const newRainbow = ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain'];
const colorOfNewRainbow = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
console.log(newRainbow.length, colorOfNewRainbow.length);


document.write('<div style = "display: flex; aling-items: center; justify-content: center; gap: 10px; flex-wrap: wrap;">');

for (i = 0; i < newRainbow.length; i++) {
    document.write(`
        <div style="
            background-color: ${colorOfNewRainbow[i]};
            height: 100px;
            width: 100px;
            padding: 10px 15px;
            font-weight: bold;
            border-radius: 100px;
            text-aling: center;
        ">
           <p style = "
             display: flex;
             justify-content: center;
             color: black;
             transform: translateY(100px);
            ">
           ${newRainbow[i]}
           </p>
        </div>
    `);
}

document.write('</div>');