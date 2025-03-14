// Homework Assignment: Task Time & Cost Calculation

// Write a script that processes an array of tasks by converting time, filtering tasks, calculating costs, and rendering them in an HTML table.
// 📌 Given Data:

// const amount = 100; 
// const monday = [ 
//    ['Write a tutorial', 180], 
//    ['Some web development', 120]
//  ]; 
// const tuesday = [ 
//    ['Keep writing that tutorial', 240],
//    ['Some more web development', 360], 
//    ['A whole lot of nothing', 240] 
// ];

// 📌 What to do?

// 1️⃣ Convert task duration from minutes to hours.
// 2️⃣ Filter tasks that take more than 2 hours (tasks with duration > 120 minutes).
// 3️⃣ Calculate payment for each task:
//    •    Multiply hours by the hourly rate (amount = 100).
//    •    Add this value as the third element in the task array.
// 4️⃣ Combine Monday and Tuesday tasks into one array.
// 5️⃣ Render tasks in an HTML table with the following structure:

// <tr> 
//   <td>Task name: Write a tutorial</td> 
//   <td>Task duration: 3 hours</td>
//   <td>Task amount: $300</td> 
// </tr>

// 📌 Restrictions:

// ✔️ Use only .concat(), .forEach(), .map(), .filter(), .join() as needed.
// ✔️ No loops (for, while) – only array methods!
// ✔️ Use document.write() or innerHTML to render the table in HTML.
// 📌 Example Output:

// If executed correctly, the script should generate an HTML table displaying only tasks longer than 2 hours, with converted duration and calculated payment.
// 📌 Requirements:

// ✔️ Convert time from minutes to hours.
// ✔️ Filter out tasks shorter than 2 hours.
// ✔️ Calculate task cost (hours * amount).
// ✔️ Render a table in HTML dynamically using JavaScript.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

const amount = 100;
const monday = [
   ['Write a tutorial', 180],
   ['Some web development', 120]
];
const tuesday = [
   ['Keep writing that tutorial', 240],
   ['Some more web development', 360],
   ['A whole lot of nothing', 240]
];

const tasks = monday.concat(tuesday);
const tasksList = tasks 
  .map(function(task) {
    const minuteInHour = 60;
    const hours = task[1] / minuteInHour;
    return [task[0], hours];
  })
  .filter(function(task) {
    return task[1] > 2;
  })
  .map(function(task) {   
    return [task[0], task[1], task[1] * amount];
  })
  .map(function(task) {
    return `
      <tr>
        <td>Task name: ${task[0]}</td>
        <td>Task duration: ${task[1]} hours</td>
        <td>Task amount: $${task[2]}</td>
      </tr>
    `;
  });

document.write(`
  <table>
    ${tasksList.join('')}
  </table>
`);

const values = [1, 2, 3, 4];
const foundItem = values.find(function(item) { 
  return item > 3;
}); 
console.log(foundItem);

const filteredArray = values.filter(function(item) {
  return item > 100;
});
console.log(filteredArray);

const tuesdayTasks = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 360],
  ['A whole lot of nothing', 90]
];

const foundTask = tuesdayTasks.find(function(task) {
  return task[1] > 200;  
});
console.log(foundTask);

const foundTaskIndex = tuesdayTasks.findIndex(function(task) {
  return task[1] > 300;  
});
console.log(foundTaskIndex);

const isEveryTaskMoreThanTwoHours = tuesdayTasks.every(function(task) {
  return task[1] > 200;
});
console.log(isEveryTaskMoreThanTwoHours);

const isSomeTaskMoreThanTwoHours = tuesdayTasks.some(function(task) {
  return task[1] > 200;
});
console.log(isSomeTaskMoreThanTwoHours);

let totalDuration = 0;
tuesdayTasks.forEach(function(task) {
  totalDuration += task[1];
});
console.log(totalDuration);

const totalSum = tuesdayTasks.reduce(function(accumulator, item) {
  return accumulator + item[1];
}, 0);
console.log(totalSum);
