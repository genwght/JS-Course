// Create a script that calculates the final price of a selected product based on season, category, product type, and quantity, then displays the full purchase information in HTML.
// 📌 What to do?

// 1️⃣ Ask the user for the season (winter or summer).
//    •    If the user enters “winter”, the final price is multiplied by 2.
//    •    If the user enters “summer”, the final price is multiplied by 0.8.
//    •    Keep asking until the user correctly enters “winter” or “summer” (ignore case and spaces).

// 2️⃣ Ask the user for the category (vegetables or fruits).
//    •    Keep asking until the user correctly enters “vegetables” or “fruits” (ignore case and spaces).

// 3️⃣ Ask the user for the product based on the selected category:
//    •    If vegetables, user can choose: “cabbage”, “avocado”, “tomato”.
//    •    If fruits, user can choose: “grapes”, “raspberry”, “coconut”.
//    •    Keep asking until the user correctly enters one of the available options (ignore case and spaces).

// 4️⃣ Ask the user for the quantity of the selected product.
//    •    The number must be greater than 1.
//    •    Keep asking until the user enters a valid number.

// 5️⃣ Calculate the final price based on the selected product, its quantity, and the seasonal multiplier.

// 6️⃣ Render the purchase details in HTML, including:
//    •    An image of the product.
//    •    The selected product name.
//    •    The quantity of the product.
//    •    The selected season.
//    •    The selected category.
//    •    The final price.
// 📌 Example of Rendered HTML:

// <div class="product" align="center">
// <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
// <p>Selected product: <b>cabbage</b></p>
// <p>Count of cabbages: <b>3</b></p>
// <p>Selected period: <b>winter</b></p>
// <p>Selected category: <b>vegetables</b></p>
// <p>Final sum: <b>48 UAH</b></p>
// </div>

// 📌 Additional Materials:
//    •    card_images.zip (contains images of each product).
//    •    render.png (example of how the purchase should look).
//    •    Render_Card_Example.pdf (detailed task explanation).
// 📌 Requirements:

// ✔️ Use loops to validate user input.
// ✔️ Ensure the user cannot enter incorrect values.
// ✔️ Use mathematical operations to calculate the final price.
// ✔️ Render the final output in HTML.
// ✔️ Submit your work as a pull request (PR) on GitHub.
// ✔️ A successfully completed assignment is an approved PR.


do {
    seasonOfYear = toLowerCase(prompt('Please enter season of year. (Winter or Summer)'));

} while (seasonOfYear === 'winter' || seasonOfYear === 'summer');