// 📌 Given Object:
// const obj = {
// x: 10,
// y: 20,
// inner: { x: 20, z: 30 },
// foo2: { k: 23, p: 13 }
// };

// 📌 What to do?

// 1️⃣ Create a function convert(obj), which:
//    •    Accepts an object with nested properties.
//    •    Extracts all properties (including nested ones).
//    •    Returns a new flat object.

// 2️⃣ The resulting object should look like this:
// const newObj = {
// x: 20,
// y: 20,
// z: 30,
// k: 23,
// p: 13
// };

// 3️⃣ Ensure that nested objects are handled correctly.
// 📌 Requirements:
// ✔️ Use recursion or Object.entries() to extract properties.
// ✔️ Do not modify the original object.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

const obj = {
    x: 10,
    y: 20,
    inner: { x: 20, z: 30 },
    foo2: { k: 23, p: 13 }
    };

const newFlatObj = Object.entries(obj).flatMap(([key, value]) =>
    typeof value === 'Object' ? Object.entries(value) : [[key, value]]
);

console.log(newFlatObj);

const newObj = {};

for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let innerKey in obj[key]) {
      newObj[innerKey] = obj[key][innerKey];
    }
  } else {
    newObj[key] = obj[key];
  }
}
console.log(newObj);