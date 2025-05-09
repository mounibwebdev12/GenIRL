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
// Handle Spawn Button Click
document.getElementById('spawnBtn').addEventListener('click', () => {
  // Get the current design from the drop area (this could include the tools or image)
  const design = document.getElementById('dropArea').innerHTML;
  
  // Display the spawned design and the cables
  const spawnedDesignContainer = document.getElementById('spawnedDesign');
  const cablesContainer = document.getElementById('cables');
  
  // Show the design (you might want to customize this part depending on your design structure)
  spawnedDesignContainer.innerHTML = `<h3>Design Preview:</h3><div>${design}</div>`;
  
  // Add cable options (simulate cables for now)
  cablesContainer.innerHTML = `
    <div class="cable" data-cable="1">Cable 1</div>
    <div class="cable" data-cable="2">Cable 2</div>
    <div class="cable" data-cable="3">Cable 3</div>
  `;

  // Show the spawned design section
  spawnedDesignContainer.style.display = 'block';
});

// Cable click functionality (choosing which cable to "shoot electricity from")
document.getElementById('cables').addEventListener('click', (e) => {
  if (e.target.classList.contains('cable')) {
    const selectedCable = e.target.getAttribute('data-cable');
    alert(`You selected Cable ${selectedCable} to shoot electricity!`);
    // You can replace the alert with the actual functionality to trigger the "electricity boom"
  }
});
