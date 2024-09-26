const greetingElement = document.getElementById("greeting");

function greetUser(name) {
  greetingElement.textContent = `Hello, ${name}!`;
}

// Get the user's name from a prompt
const userName = prompt("Please enter your name:");

// Call the greetUser function with the user's name
greetUser(userName);