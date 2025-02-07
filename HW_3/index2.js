
// Part 1:
//    1.    Ask the user for their year of birth.
//    2.    Ask the user for the city they live in.
//    3.    Ask the user for their favorite sport.
// After collecting this information, show an alert() with:
//    •    The user’s age (calculated based on the current year).
//    •    If the city is Kyiv, Washington, or London, display:
//    •    "You live in the capital of [Country]", where [Country] is the country of the entered city.
//    •    If the city is not a capital, display:
//    •    "You live in [City]", where [City] is the user’s input.

// Part 2:
//    1.    Predefine three sports and their famous champions.
//    2.    If the user enters one of these sports, display:
//    •    "Cool! Do you want to become like [Champion Name]?", where [Champion Name] is a well-known athlete in that sport.
// Handling User Cancellations:
//    •    If the user presses Cancel at any prompt, display:
//    •    "Too bad you didn't want to enter your [missing data]", specifying what they skipped (year of birth, city, or sport).
// 📌 Requirements:
//    •    Convert the year input into a number and correctly calculate the user’s age.
//    •    Use conditional statements (if/else) to check and display the correct messages.
//    •    Ensure that the script works correctly for different inputs.
//    •    Submit your work as a pull request (PR) on GitHub.
//    •    A successfully completed assignment is an approved PR.

userBirthDate = prompt('Please enter your year of birth');
userAge = 2025 - parseInt(userBirthDate);
alert(`You are ${userAge} years old`);

userCity = prompt('Please enter your city');
 countriesCapitals = {
    'Kyiv': 'Ukraine',
    'London': 'Great Britain',
    'Tallinn': 'Estonia'
};

if (countriesCapitals[userCity]) {
    alert(`Your city is the capital of ${countriesCapitals[userCity]}`);
} else {
    alert(`Your city is ${userCity}`);
}


userFavSport = prompt('Please enter your favorite sport');
sportChampions = {
    'Football' : 'Cristiano Ronaldo',
    'Baskerball' : 'Michael Jordan',
    'Box' : 'Oleksandr Usyk'
}

if (sportChampions[userFavSport]) {
    alert(`Cool! Do you want to become like ${sportChampions[userFavSport]} ?`)
} else {
    alert(`Too bad you didn't want to enter your favorite sport`);
}
