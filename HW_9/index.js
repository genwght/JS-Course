// Work with two superhero arrays and extend the Array.prototype to create a function that dynamically generates a table with hero names and images.

// 📌 Given Data:
// const marvelHeroes = [ 
//   { name: "Thor" }, 
//   { name: "Spider Man" } 
// ]; 
// const dcHeroes = [ 
//   { name: "Superman" }, 
//   { name: "Batman" }, 
//   { name: "Deadpool" } 
// ];

// 📌 Superhero images are located in the images folder with subfolders:
//    •    images/marvel/ (Marvel heroes)
//    •    images/dc/ (DC heroes)

// 📌 What to do?

// 1️⃣ Extend Array.prototype by adding a method heroesRender() that:
//    •    Accepts a string argument indicating the folder name ('marvel' or 'dc').
//    •    Generates an HTML table displaying superhero names and their images.

// 2️⃣ Modify hero names to match image filenames:
//    •    Convert names to lowercase.
//    •    Remove spaces ("Spider Man" → "spiderman").
//    •    Use .svg as the file extension.

// 3️⃣ Render an HTML table dynamically using JavaScript.

// 4️⃣ Call the function in both arrays:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');

// 📌 Expected Table Output:

// <table>
//   <thead>
//     <tr> 
//       <th>Name</th> 
//       <th>Icon</th> 
//     </tr> 
//    </thead> 
//    <tbody>
//      <tr> 
//        <td>Thor</td> 
//        <td>
// <img src="images/marvel/thor.svg">
// </td>
//      </tr> 
//       <tr> 
//         <td>Spider Man</td> 
//         <td>
// <img src="images/marvel/spiderman.svg">
// </td> 
//       </tr> 
//    </tbody> 
// </table>/

// 📌 Requirements:
// ✔️ Extend Array.prototype and create a method heroesRender().
// ✔️ Dynamically generate table rows and images.
// ✔️ Ensure hero names are formatted correctly to match image filenames.
// ✔️ No hardcoded table structure – everything must be created via JavaScript.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// 🚀 Good luck! 😊

const marvelHeroes = [ 
      { name: "Thor" }, 
      { name: "Spider Man" } 
    ]; 
    const dcHeroes = [ 
      { name: "Superman" }, 
      { name: "Batman" }, 
      { name: "Deadpool" } 
    ];

Array.prototype.heroesRender = function (universe) {
    if (!Array.isArray(this)) {
        console.log("Помилка: this не є масивом!");
        return;
    }
        
    document.write(`
        <table class="hero-table">
            <thead class = "tabhead">
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
        <tbody>
    `);
        
    this.forEach(hero => {
        const formattedName = hero.name.toLowerCase().split(' ').join('') + ".svg";
        document.write(`
            <tr>
                <td class="hero-name">${hero.name}</td> 
                <td><img src="images/${universe}/${formattedName}" alt="${hero.name}" class = "heroimg"></td>
                </tr>
        `);
        });
        
        document.write(`
            </tbody>
            </table>
        `);
};
    
dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');
