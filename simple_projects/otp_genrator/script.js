// Generate a random numeric OTP of given length
function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return otp;
  }
  function sendOTP() {
    const otp = generateOTP(6); 
    alert('Your OTP is: ' + otp);
  }
  
  function validateOTP() {
    const userInput = document.getElementById('otpInput').value;
    const otp = document.getElementById('otp').innerText;
    if (userInput === otp) {
      alert('OTP verification successful!');
      generateNewOTP();
    } else {
      alert('Wrong OTP! Please try again.');
      document.getElementById('otpInput').value = '';
    }
  }

  function generateNewOTP() {
    const otpContainer = document.getElementById('otp');
    const otp = generateOTP(4); 
    otpContainer.innerText = otp;
  }
  
  window.onload = function() {
    generateNewOTP();
  };
  