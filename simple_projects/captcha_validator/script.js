let captchaText; // Global variable to store the current CAPTCHA text
let timer; // Global variable to store the timer

// Generate a random alphanumeric string for the CAPTCHA
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Generate a new CAPTCHA
function generateCaptcha() {
  const captchaContainer = document.getElementById('captcha');
  captchaText = generateRandomString(6); // Generate a 6-character CAPTCHA
  captchaContainer.innerText = captchaText;
  startTimer();
}

// Start the timer for 20 seconds
function startTimer() {
  clearInterval(timer); // Clear previous timer if exists
  timer = setInterval(() => {
    generateCaptcha(); // Change CAPTCHA after 20 seconds
  }, 20000); // 20 seconds
}

// Validate the submitted CAPTCHA
function validateCaptcha() {
  const userInput = document.getElementById('userInput').value;
  if (userInput === captchaText) {
    clearInterval(timer); // Stop the timer
    alert('CAPTCHA verification successful!');
    generateCaptcha(); // Generate new CAPTCHA
  } else {
    alert('Wrong CAPTCHA! Please try again.');
    document.getElementById('userInput').value = ''; // Clear input field
  }
}

// Initial CAPTCHA generation when the page loads
window.onload = generateCaptcha;
