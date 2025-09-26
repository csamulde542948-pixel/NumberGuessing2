'use strict';

let number = Math.trunc(Math.random() * 100) + 1;
console.log(number);
let score = 20;
let highscore = 0;

const userInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  const guess = Number(userInput.value);

  // When there is no input
  if (!guess) {
    message.textContent = '⛔ No number!';

    // When player wins
  } else if (guess === number) {
    message.textContent = '🎉 Correct Number!';
    numberDisplay.textContent = number;
    body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      message.textContent = guess > number ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💀 You lost the game!';
      body.style.backgroundColor = '#ff0000';
      scoreDisplay.textContent = 0;
      numberDisplay.textContent = number;
      numberDisplay.style.width = '30rem';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  const newNumber = Math.trunc(Math.random() * 100) + 1;

  numberDisplay.textContent = '?';
  numberDisplay.style.width = '15rem';
  message.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;
  userInput.value = '';
  body.style.backgroundColor = '#222';

  // Update the secret number
  number = newNumber;
});

