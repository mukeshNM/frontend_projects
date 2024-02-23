let displayValue = '';

function appendToDisplay(value) {
  // Prevent adding multiple leading zeros
  if (value === '0' && displayValue === '0') {
    return;
  }

  // Prevent adding multiple consecutive decimal points
  if (value === '.' && displayValue.includes('.')) {
    return;
  }
  
  // Prevent adding multiple leading decimal points
  if (value === '.' && displayValue === '') {
    displayValue = '0';
  }
  
  // Prevent adding operator as the first input
  if (isOperator(value) && displayValue === '') {
    return;
  }
  
  // Prevent adding multiple consecutive arithmetic operators
  if (isOperator(value) && isOperator(displayValue.slice(-1))) {
    return;
  }
  
  // Allow adding zero after an operator
  if (isOperator(displayValue.slice(-1)) && value === '0') {
    displayValue += value;
    document.getElementById('display').value = displayValue;
    return;
  }

  // Check for consecutive operators
  if (!(isOperator(displayValue.slice(-1)) && isOperator(value) && value === '/')) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

