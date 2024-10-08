// Select the body element that uses the container classes
const bodyElement = document.querySelector('body');

const logoElement = document.getElementById('logo');
// Create a function to toggle classes based on user's input
function toggleContainerClass() {
  const userChoice = prompt("Enter 'white' for light mode or 'black' for dark mode:");

  if (userChoice.toLowerCase() === 'black') {
    bodyElement.classList.remove('containerw');
    bodyElement.classList.add('containerb');
    logoElement.src = 'images/byui-logo_black.jpg';
  } else if (userChoice.toLowerCase() === 'white') {
    bodyElement.classList.remove('containerb');
    bodyElement.classList.add('containerw');
    logoElement.src = 'images/byui-logo_blue.webp';
  } else {
    alert('Invalid input! Please enter either "white" or "black".');
  }
}

// Call the function to prompt the user and toggle the class
toggleContainerClass();
