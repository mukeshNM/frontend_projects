const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let currentLetter;
let timer;
let startTime;
let score = 0;

function startGame() {
  document.getElementById('result').textContent = '';
  document.getElementById('input').value = '';
  currentLetter = 0;
  showNextLetter();
  startTime = Date.now();
  timer = setInterval(checkTime, 1000);
  score = 0;
}

function showNextLetter() {
  if (currentLetter < letters.length) {
    document.getElementById('letter').textContent = letters[currentLetter];
  } else {
    endGame();
  }
}

function checkTime() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  if (elapsedTime >= 20) {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  document.getElementById('letter').textContent = '';
  document.getElementById('input').value = '';
  if (currentLetter === letters.length) {
    document.getElementById('result').textContent = 'Congratulations! you are the winner ';
    document.getElementById('score').textContent = '';
  } else {
    document.getElementById('result').textContent = 'You are failed! Try again.';
    document.getElementById('score').textContent = 'Your score: ' + score;
  }
}

document.getElementById('input').addEventListener('input', function(event) {
  const input = event.target.value.toUpperCase();
  const expectedLetter = letters[currentLetter];
  if (input === expectedLetter) {
    currentLetter++;
    score++;
    event.target.value = '';
    showNextLetter();
  }
});
