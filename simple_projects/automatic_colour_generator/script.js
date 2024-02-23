function generateColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('color-box').style.backgroundColor = randomColor;
}

document.querySelector('button').addEventListener('click', generateColor);
