// Select the menu button and options
const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

// Toggle the visibility of the menu when the button is clicked
menuButton.addEventListener('click', () => {
  menuOptions.classList.toggle('show');
});

// Select buttons inside the menu
const toolsBtn = document.getElementById('toolsBtn');
const chipBtn = document.getElementById('chipBtn');
const uploadBtn = document.getElementById('uploadBtn');

// Add actions for each button (you can expand these actions later)
toolsBtn.addEventListener('click', () => {
  alert('Tools Space opened!');
});

chipBtn.addEventListener('click', () => {
  alert('Chip Setup opened!');
});

uploadBtn.addEventListener('click', () => {
  alert('Upload Image option clicked!');
});
