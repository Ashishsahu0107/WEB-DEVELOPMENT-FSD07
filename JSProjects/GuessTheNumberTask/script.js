const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submitBtn');
const messageEl = document.getElementById('message');

let targetNumber;

function resetGame() {
  // Hidden random number between 1 and 10
  targetNumber = Math.floor(Math.random() * 10) + 1;
  messageEl.textContent = '';
  messageEl.classList.remove('success');
  if (guessInput) guessInput.value = '';
}

function showMessage(text, isSuccess = false) {
  messageEl.textContent = text;
  messageEl.classList.toggle('success', isSuccess);
}

function handleSubmit() {
  const guessRaw = guessInput.value;
  const guess = Number(guessRaw);

  if (!guessRaw || Number.isNaN(guess)) {
    showMessage('Please enter a valid number from 1 to 10.');
    return;
  }

  if (guess < 1 || guess > 10) {
    showMessage('Please enter a number from 1 to 10.');
    return;
  }

  if (guess > targetNumber) {
    showMessage('OOPS! SORRY!!! TRY A SMALLER NUMBER.');
    return;
  }

  if (guess < targetNumber) {
    showMessage('OOPS! SORRY!!! TRY A LARGER NUMBER.');
    return;
  }

  showMessage('CONGRATULATIONS! YOU GOT IT RIGHT.', true);
}

window.addEventListener('DOMContentLoaded', () => {
  resetGame();
  submitBtn.addEventListener('click', handleSubmit);

  guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSubmit();
  });
});

