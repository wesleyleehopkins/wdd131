import recipes from './recipes.mjs';

// Function to generate a random number between 0 and num-1
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

// Function to create the HTML template for a recipe
function recipeTemplate(recipe) {
    return ` <div id="hero_box">
        <div id="hero_image"> <img src="${recipe.image}" class="main_image" alt="${recipe.name}">
        </div>
        <div id='hero_information'>
            ${tagsTemplate(recipe.tags)}
            <h2 class="recipe_name">${recipe.name}</h2>
            <p class="rating">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="more_information">${recipe.description}</p>
        </div>
    </div>`;
}
console.log(recipeTemplate)

// Function to create the HTML template for tags
function tagsTemplate(tags) {
    // Initialize an empty array to hold the HTML strings
    let html = [];

    // Loop through the tags list and transform the strings to HTML
    tags.forEach(tag => {
        html.push(`<p class="recipe_title">${tag}</p>`);
    });

    // Join the array of HTML strings into a single string and return it
    return html.join('');
}
console.log(tagsTemplate)

// Function to create the HTML template for rating
function ratingTemplate(rating) {
    // Begin building an HTML string using the ratings HTML written earlier as a model.
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
>`

    // Our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // Check to see if the current index of the loop is less than or equal to our rating
        if (i <= rating) {
            // If so then output a filled star
            html += `<span aria-hidden="true" class="filled_star">★</span>`;
        } else {
            // Else output an empty star
            html += `<span aria-hidden="true" class="empty_star">☆</span>`;
        }
    }

    // After the loop, add the closing tag to our string
    html += `</span>`;
    // Return the HTML string
    return html;
}
// console.log(ratingTemplate);


// Function to initialize the application
function init() {
  // Get a random recipe
  const recipe = getRandomListEntry(recipes);
  // Render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

document.getElementById('search_recipebook').addEventListener('click', searchHandler);

function searchHandler(event) {
    event.preventDefault(); // Prevents page reload
    const query = document.getElementById('search_log').value.toLowerCase(); // Lowercase query
    const filteredRecipes = filterRecipes(query); // Get filtered recipes
    renderRecipes(filteredRecipes); // Render filtered recipes
}

function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            return recipe.name.toLowerCase().includes(query) ||
                   recipe.description.toLowerCase().includes(query) ||
                   recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
                   recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query));
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
}

function renderRecipes(recipeList) {
    const container = document.getElementById('shell'); // Output container
    container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join(''); // Generate HTML for recipes
}
