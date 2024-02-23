let snake = [{ x: 200, y: 200 }];
let food = { x: 0, y: 0 };
let dx = 0;
let dy = 0;
let score = 0;
let gameInterval;

function startGame() {
  resetGame();
  createSnake();
  createFood();
  gameInterval = setInterval(moveSnake, 100);
}

function resetGame() {
  snake = [{ x: 200, y: 200 }];
  dx = 0;
  dy = 0;
  score = 0;
  document.getElementById('score-card').textContent = 'Score: 0';
  document.getElementById('game-board').innerHTML = '<div id="score-card">Score: 0</div>';
  clearInterval(gameInterval);
}

function createSnake() {
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = segment.x + 'px';
    snakeElement.style.top = segment.y + 'px';
    snakeElement.classList.add('snake');
    document.getElementById('game-board').appendChild(snakeElement);
  });
}

function createFood() {
  const x = Math.floor(Math.random() * 20) * 20;
  const y = Math.floor(Math.random() * 20) * 20;
  food = { x, y };
  const foodElement = document.createElement('div');
  foodElement.style.left = x + 'px';
  foodElement.style.top = y + 'px';
  foodElement.classList.add('food');
  document.getElementById('game-board').appendChild(foodElement);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    createFood();
    document.getElementById('score-card').textContent = 'Score: ' + score;
  } else {
    snake.pop();
  }
  if (checkCollision()) {
    endGame();
  } else {
    updateGame();
  }
}

function updateGame() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = segment.x + 'px';
    snakeElement.style.top = segment.y + 'px';
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
  const foodElement = document.createElement('div');
  foodElement.style.left = food.x + 'px';
  foodElement.style.top = food.y + 'px';
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function checkCollision() {
  const head = snake[0];
  return (
    head.x < 0 ||
    head.x >= 400 ||
    head.y < 0 ||
    head.y >= 400 ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  );
}

function endGame() {
  clearInterval(gameInterval);
  alert('Game Over! Your score: ' + score);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' && dy !== 20) {
    dx = 0;
    dy = -20;
  } else if (event.key === 'ArrowDown' && dy !== -20) {
    dx = 0;
    dy = 20;
  } else if (event.key === 'ArrowLeft' && dx !== 20) {
    dx = -20;
    dy = 0;
  } else if (event.key === 'ArrowRight' && dx !== -20) {
    dx = 20;
    dy = 0;
  }
});

