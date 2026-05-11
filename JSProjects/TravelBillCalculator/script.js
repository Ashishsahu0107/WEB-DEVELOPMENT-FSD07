(() => {
  const form = document.getElementById('travelForm');
  const kmInput = document.getElementById('km');
  const kmError = document.getElementById('kmError');
  const resultCard = document.getElementById('resultCard');
  const totalBillEl = document.getElementById('totalBill');
  const breakdownEl = document.getElementById('breakdown');

  // Slabs (as shown in this project's UI note):
  // 0–10 @ 11, 10–30 @ 10, 30+ @ 8
  const slabs = [
    { from: 0, to: 10, rate: 11 },
    { from: 10, to: 30, rate: 10 },
    { from: 30, to: Infinity, rate: 8 }
  ];

  const formatINR = (value) => {
    const num = Number(value);
    if (!Number.isFinite(num)) return '0';
    return num.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const parseKm = () => {
    const raw = kmInput.value.trim();
    if (raw === '') return { ok: false, error: 'Please enter a non-negative number of kilometres' };

    const n = Number(raw);
    if (!Number.isFinite(n)) return { ok: false, error: 'Please enter a non-negative number of kilometres' };
    if (n < 0) return { ok: false, error: 'Please enter a non-negative number of kilometres' };

    return { ok: true, value: n };
  };

  const clearValidation = () => {
    kmInput.classList.remove('is-invalid');
    kmError.textContent = '';
    kmError.classList.remove('text-danger');
  };

  const setValidationError = (msg) => {
    kmInput.classList.add('is-invalid');
    kmError.textContent = msg;
    kmError.classList.add('text-danger');
  };

  const clampForSlab = (km, slab) => {
    // compute billed distance within [slab.from, slab.to)
    const start = slab.from;
    const end = slab.to;

    if (km <= start) return 0;
    if (km >= end) return end - start;
    return km - start;
  };

  const calcFare = (km) => {
    let total = 0;
    const breakdown = [];

    for (const slab of slabs) {
      const billedKm = clampForSlab(km, slab);
      const slabCost = billedKm * slab.rate;
      if (billedKm !== 0 || slab.to === 10 || slab.to === 30 || slab.from === 30) {
        breakdown.push({ billedKm, rate: slab.rate, cost: slabCost, from: slab.from, to: slab.to });
      }
      total += slabCost;
    }

    return { total, breakdown };
  };

  const fmtKm = (km) => {
    // show decimals when provided, but avoid trailing .0
    const rounded = Math.round(km * 100) / 100;
    if (Number.isInteger(rounded)) return String(rounded);
    return String(rounded).replace(/\.0+$/, '');
  };

  const renderBreakdown = (breakdown) => {
    breakdownEl.innerHTML = '';

    // Always render 3 slabs for consistent UI (including zeros)
    // breakdown passed already includes each slab.
    const frag = document.createDocumentFragment();

    for (const item of breakdown) {
      const labelRange = item.to === Infinity
        ? `${item.from}+ km`
        : `${item.from}–${item.to} km`;

      const billedStr = fmtKm(item.billedKm);
      const costStr = Math.round(item.cost * 100) / 100;

      const div = document.createElement('div');
      div.className = 'breakdown-item breakdown-item';
      div.innerHTML = `
        <div class="left">
          <span class="badge badge-slab me-2">${labelRange}</span>
          <span>${billedStr} km × Rs.${item.rate}</span>
        </div>
        <div class="fw-bold">Rs.${formatINR(costStr)}</div>
      `;

      frag.appendChild(div);
    }

    breakdownEl.appendChild(frag);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearValidation();

    const parsed = parseKm();
    if (!parsed.ok) {
      setValidationError(parsed.error);
      resultCard.classList.add('d-none');
      return;
    }

    const { total, breakdown } = calcFare(parsed.value);

    totalBillEl.textContent = `Rs. ${formatINR(Math.round(total * 100) / 100)}`;
    renderBreakdown(breakdown);

    resultCard.classList.remove('d-none');
  });

  // UX: re-validate while typing
  kmInput.addEventListener('input', () => {
    if (kmInput.value.trim() === '') {
      clearValidation();
      resultCard.classList.add('d-none');
      return;
    }
    // Don't show errors until submit; keep this light.
    // If value is negative, show quick inline warning.
    const n = Number(kmInput.value);
    if (Number.isFinite(n) && n < 0) {
      setValidationError('Please enter a non-negative number of kilometres');
    } else {
      kmInput.classList.remove('is-invalid');
      kmError.textContent = '';
    }
  });
})();

