const billAmountEl = document.getElementById('billAmount');
const servicePercentEl = document.getElementById('servicePercent');
const peopleCountEl = document.getElementById('peopleCount');
const calculateBtn = document.getElementById('calculateBtn');
const resultTextEl = document.getElementById('resultText');

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

function formatMoney(n) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showError(message) {
  resultTextEl.textContent = message;
}

calculateBtn.addEventListener('click', () => {
  const bill = toNumber(billAmountEl.value);
  const people = toNumber(peopleCountEl.value);
  const percent = toNumber(servicePercentEl.value);

  if (!Number.isFinite(bill) || bill < 0) {
    showError('Please enter a valid bill amount (0 or greater).');
    return;
  }

  if (!Number.isFinite(people) || people <= 0) {
    showError('Please enter a valid number of people (greater than 0).');
    return;
  }

  if (!Number.isFinite(percent) || percent < 0) {
    showError('Please select a valid service option.');
    return;
  }

  const tip = bill * (percent / 100);
  const total = bill + tip;
  const perPerson = total / people;

  resultTextEl.textContent = `Each person should pay: $${formatMoney(perPerson)}`;
});

