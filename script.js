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
// Handle the image upload
document.getElementById('uploadBtn').addEventListener('click', () => {
  document.getElementById('imageInput').click(); // Trigger the file input
});

// Listen for the file selection
document.getElementById('imageInput').addEventListener('change', (e) => {
  const file = e.target.files[0]; // Get the file
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imgElement = document.createElement('img');
      imgElement.src = event.target.result; // Set the image source
      imgElement.style.width = '200px'; // Set a default width for the image
      imgElement.style.height = 'auto';
      imgElement.classList.add('uploaded-image'); // Optional: add class for styling

      // Add the image to the design area
      document.getElementById('dropArea').appendChild(imgElement);
    };
    reader.readAsDataURL(file); // Read the image as a data URL
  }
});
