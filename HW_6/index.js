// Work with the given sports array and extract specific elements into new arrays using array methods.

// 📌 Given array:
// sports = [
// ['skier', '⛷'],
// ['snowboarder', '🏂'],
// ['apple', '🍎'],
// ['hockey', '🏒'],
// ['ice skate', '⛸'],
// ['swimmer', '🏊'],
// ['surfer', '🏄‍'],
// ['watermelon', '🍉'],
// ['lemon', '🍋'],
// ['rowboat', '🚣'],
// ['bicyclist', '🚴‍']
// ];

// 📌 What to do?
// 1️⃣ Extract all winter sports (such as skiing, snowboarding, hockey, and ice skating) into a new array winter_sports using .slice().
// 2️⃣ Extract all summer sports (such as swimming, surfing, rowing, and cycling) into a new array summer_sports using .slice().
// 3️⃣ Extract only the fruits (such as apple, watermelon, and lemon) into a new array fruits from the two extracted arrays (summer_sports and winter_sports).
// 4️⃣ Display all three arrays (winter_sports, summer_sports, fruits) in the console in a structured way, as shown in the reference image console.png.

// 📌 Requirements:
// ✔️ Use the .slice() method to extract specific elements into new arrays.
// ✔️ Ensure that the original sports array remains unchanged.
// ✔️ Use console.log() to display the extracted arrays in a structured format.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.

// Good luck! 🚀


sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
    ];


    winterSports = sports.slice(0, 5);
    summerSports = sports.slice(5);

    fruicts = winterSports.splice(2, 1).concat(summerSports.splice(2, 2));
   

    console.log('Winter sports:', winterSports);
    console.log('Summer sports:', summerSports);
    console.log(fruicts)

    
    