const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body; // Reference to the body element

toggleBtn.addEventListener('click', () => {
  if (bulb.src.includes('bulb-off.gif')) {
    // Change to "on" bulb image
    bulb.src = './assets/image/bulb-on.gif';
    toggleBtn.textContent = 'Turn Off';
    
    // Change the background image when the bulb is on
    body.style.backgroundImage = 'url("./assets/image/bg-on.jpg")';
  } else {
    // Change to "off" bulb image
    bulb.src = './assets/image/bulb-off.gif';
    toggleBtn.textContent = 'Turn On';
    
    // Change the background color to black when the bulb is off
    body.style.backgroundImage = ''; // Clear the background image
    body.style.backgroundColor = 'black'; // Set the background to black
  }
});

