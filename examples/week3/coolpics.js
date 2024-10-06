// Select the button by its ID and the navigation by its class
const menuButton = document.querySelector('#menu'); // Changed to '#menu' since it's an ID
const navigation = document.querySelector('.navigation');

// Add click event listener to the button
menuButton.addEventListener('click', () => {
  // Toggle the display property
  if (navigation.style.display === 'none' || navigation.style.display === '') {
    navigation.style.display = 'block'; // Show the navigation
  } else {
    navigation.style.display = 'none'; // Hide the navigation
  }
});