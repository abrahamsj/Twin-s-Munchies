// Get references to HTML elements
let food1s = document.getElementById('food1'); // Reference to element with id 'food1'
let food2s = document.getElementById('food2'); // Reference to element with id 'food2'
let foods = document.getElementById('food');   // Reference to element with id 'food'

// Event listener for clicking on food1 element
food1s.addEventListener('click', () => {
    // Change the background image of 'food' element to 'food1.png'
    foods.style.backgroundImage = "url('food1.png')";
});

// Event listener for clicking on food2 element
food2s.addEventListener('click', () => {
    // Change the background image of 'food' element to 'food.png'
    foods.style.backgroundImage = "url('food.png')";
});
