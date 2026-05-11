// Encapsulated calculation function (ES6 standalone)
// Signature: calculateGrossSalary(basic) -> { basic, hra, da, gross }
function calculateGrossSalary(basic) {
  const hra = basic * 0.4;
  const da = basic * 0.25;
  const gross = basic + hra + da;
  return { basic, hra, da, gross };
}

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function isValidBasic(value) {
  if (value === '' || value === null || value === undefined) return false;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0;
}

document.addEventListener('DOMContentLoaded', () => {
  const basicSalaryInput = document.getElementById('basicSalary');
  const basicError = document.getElementById('basicError');
  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const successMsg = document.getElementById('successMsg');

  const outBasic = document.getElementById('outBasic');
  const outHra = document.getElementById('outHra');
  const outDa = document.getElementById('outDa');
  const outGross = document.getElementById('outGross');

  function resetUI() {
    basicSalaryInput.value = '';
    basicSalaryInput.classList.remove('is-invalid');
    basicError.textContent = 'Please enter a valid number ≥ 0.';
    successMsg.classList.add('d-none');

    outBasic.textContent = '—';
    outHra.textContent = '—';
    outDa.textContent = '—';
    outGross.textContent = '—';

    calculateBtn.disabled = false;
    loadingSpinner.classList.add('d-none');
  }

  function setLoading(isLoading) {
    calculateBtn.disabled = isLoading;
    loadingSpinner.classList.toggle('d-none', !isLoading);
  }

  calculateBtn.addEventListener('click', async () => {
    successMsg.classList.add('d-none');

    const raw = basicSalaryInput.value.trim();

    if (raw === '') {
      basicSalaryInput.classList.add('is-invalid');
      basicError.textContent = 'Basic Salary cannot be empty.';
      return;
    }

    const basic = Number(raw);

    if (!Number.isFinite(basic)) {
      basicSalaryInput.classList.add('is-invalid');
      basicError.textContent = 'Basic Salary must be a valid number.';
      return;
    }

    if (basic < 0) {
      basicSalaryInput.classList.add('is-invalid');
      basicError.textContent = 'Basic Salary cannot be negative.';
      return;
    }

    // Valid input
    basicSalaryInput.classList.remove('is-invalid');

    setLoading(true);

    // Simulate processing for 0.5s
    await new Promise((r) => setTimeout(r, 500));

    const { hra, da, gross } = calculateGrossSalary(basic);

    outBasic.textContent = formatINR(basic);
    outHra.textContent = formatINR(hra);
    outDa.textContent = formatINR(da);
    outGross.textContent = formatINR(gross);

    successMsg.classList.remove('d-none');

    setLoading(false);
  });

  clearBtn.addEventListener('click', () => {
    resetUI();
  });

  // Enter key support
  document.getElementById('salaryForm').addEventListener('submit', (e) => e.preventDefault());

  resetUI();
});

