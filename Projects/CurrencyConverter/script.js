const country1Select = document.getElementById('country1');
const country2Select = document.getElementById('country2');
const flag1 = document.getElementById('flag1');
const flag2 = document.getElementById('flag2');
const orgAmount = document.getElementById('orgAmount');
const convertBtn = document.getElementById('convertBtn');
const swapBtn = document.getElementById('swapBtn');
const newAmount = document.getElementById('newAmount');
const rateText = document.getElementById('rateText');
const messageEl = document.getElementById('message');
const errorFrom = document.getElementById('errorFrom');
const errorTo = document.getElementById('errorTo');
const errorAmount = document.getElementById('errorAmount');
const resultCard = document.getElementById('resultCard');

const FLAG_PLACEHOLDER =
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 fill=%22%23e9ecef%22/%3E%3Ctext x=%2232%22 y=%2238%22 font-size=%2228%22 text-anchor=%22middle%22 fill=%22%23676f79%22%3E%3F%3C/text%3E%3C/svg%3E';

const FALLBACK_COUNTRIES = [
    { country_name: 'United States', currency_name: 'United States dollar', currency_code: 'usd', country_code: 'US' },
    { country_name: 'India', currency_name: 'Indian rupee', currency_code: 'inr', country_code: 'IN' },
    { country_name: 'European Union', currency_name: 'Euro', currency_code: 'eur', country_code: 'EU' },
    { country_name: 'United Kingdom', currency_name: 'Pound sterling', currency_code: 'gbp', country_code: 'GB' },
    { country_name: 'Japan', currency_name: 'Japanese yen', currency_code: 'jpy', country_code: 'JP' },
    { country_name: 'Canada', currency_name: 'Canadian dollar', currency_code: 'cad', country_code: 'CA' },
    { country_name: 'Australia', currency_name: 'Australian dollar', currency_code: 'aud', country_code: 'AU' },
    { country_name: 'Switzerland', currency_name: 'Swiss franc', currency_code: 'chf', country_code: 'CH' },
    { country_name: 'China', currency_name: 'Chinese yuan', currency_code: 'cny', country_code: 'CN' },
    { country_name: 'Singapore', currency_name: 'Singapore dollar', currency_code: 'sgd', country_code: 'SG' }
];

const apiBaseUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

function normalizeCountry(item) {
    return {
        country_name: String(item.country_name || '').trim(),
        currency_name: String(item.currency_name || '').trim(),
        currency_code: String(item.currency_code || '').trim().toLowerCase(),
        country_code: String(item.country_code || '').trim().toUpperCase()
    };
}

function getUniqueCountries(list) {
    const seen = new Set();
    return list
        .map(normalizeCountry)
        .filter((item) => item.country_name && item.currency_code && item.country_code)
        .filter((item) => {
            const key = `${item.country_name}|${item.currency_code}|${item.country_code}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
}

function sortCountries(list) {
    return list.slice().sort((a, b) => a.country_name.localeCompare(b.country_name));
}

function buildOption(item) {
    const label = `${item.country_name} (${item.currency_code.toUpperCase()})`;
    const option = document.createElement('option');
    option.value = `${item.currency_code},${item.country_code}`;
    option.textContent = label;
    return option;
}

function setPlaceholderFlag(img) {
    img.src = FLAG_PLACEHOLDER;
    img.alt = 'Flag placeholder';
}

function updateFlag(selectElement, flagElement) {
    const selectedValue = selectElement.value;
    if (!selectedValue) {
        setPlaceholderFlag(flagElement);
        return;
    }

    const [currencyCode, countryCode] = selectedValue.split(',');
    if (!countryCode) {
        setPlaceholderFlag(flagElement);
        return;
    }

    const url = `https://flagsapi.com/${countryCode}/flat/64.png`;
    flagElement.src = url;
    flagElement.alt = `${countryCode} flag`;
    flagElement.onerror = () => setPlaceholderFlag(flagElement);
}

function clearMessage() {
    messageEl.textContent = '';
    messageEl.classList.add('d-none');
}

function showMessage(text) {
    messageEl.textContent = text;
    messageEl.classList.remove('d-none');
}

function clearErrors() {
    errorFrom.textContent = '';
    errorTo.textContent = '';
    errorAmount.textContent = '';
    clearMessage();
}

function showError(target, text) {
    target.textContent = text;
}

function validateInputs() {
    let isValid = true;
    clearErrors();

    if (!country1Select.value) {
        showError(errorFrom, "Please select a 'From' country.");
        isValid = false;
    }

    if (!country2Select.value) {
        showError(errorTo, "Please select a 'To' country.");
        isValid = false;
    }

    const amountValue = Number(orgAmount.value);
    if (orgAmount.value.trim() === '') {
        showError(errorAmount, 'Please enter an amount.');
        isValid = false;
    } else if (Number.isNaN(amountValue)) {
        showError(errorAmount, 'Please enter a valid number.');
        isValid = false;
    } else if (amountValue <= 0) {
        showError(errorAmount, 'Amount must be greater than zero.');
        isValid = false;
    }

    return isValid;
}

function setLoading(isLoading) {
    convertBtn.disabled = isLoading;
    swapBtn.disabled = isLoading;
    convertBtn.textContent = isLoading ? 'Loading…' : 'Convert';
    if (isLoading) {
        resultCard.classList.add('d-none');
    }
}

function displayResult(value, targetCurrency, rate) {
    newAmount.textContent = `${value.toFixed(2)} ${targetCurrency.toUpperCase()}`;
    if (typeof rate === 'number') {
        rateText.textContent = `1 ${country1Select.value.split(',')[0].toUpperCase()} = ${rate.toFixed(4)} ${targetCurrency.toUpperCase()}`;
    } else {
        rateText.textContent = '';
    }
    resultCard.classList.remove('d-none');
}

function clearResult() {
    newAmount.textContent = '';
    rateText.textContent = '';
    resultCard.classList.add('d-none');
}

async function fetchCodesFile() {
    try {
        const response = await fetch('codes.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        return Array.isArray(data) ? data : FALLBACK_COUNTRIES;
    } catch (error) {
        console.warn('Could not load codes.json, using fallback list.', error);
        return FALLBACK_COUNTRIES;
    }
}

function populateDropdowns(countryList) {
    const normalized = getUniqueCountries(countryList);
    const sorted = sortCountries(normalized);
    country1Select.innerHTML = '';
    country2Select.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select Country';
    country1Select.appendChild(placeholder.cloneNode(true));
    country2Select.appendChild(placeholder.cloneNode(true));

    sorted.forEach((item) => {
        country1Select.appendChild(buildOption(item));
        country2Select.appendChild(buildOption(item));
    });
}

function setDefaultCountries() {
    const usdOption = Array.from(country1Select.options).find((option) => option.value === 'usd,US');
    const inrOption = Array.from(country2Select.options).find((option) => option.value === 'inr,IN');
    const eurOption = Array.from(country2Select.options).find((option) => option.value === 'eur,EU');

    if (usdOption) country1Select.value = usdOption.value;
    if (inrOption) {
        country2Select.value = inrOption.value;
    } else if (eurOption) {
        country2Select.value = eurOption.value;
    }
}

async function convertCurrency() {
    clearMessage();
    clearResult();

    if (!validateInputs()) {
        return;
    }

    const amountValue = Number(orgAmount.value.trim());
    const [fromCurrency] = country1Select.value.split(',');
    const [toCurrency] = country2Select.value.split(',');

    if (fromCurrency === toCurrency) {
        displayResult(amountValue, toCurrency, 1);
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(`${apiBaseUrl}/${fromCurrency}.json`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const rate = data?.[fromCurrency]?.[toCurrency];
        if (typeof rate !== 'number') {
            throw new Error('Exchange rate unavailable');
        }

        const converted = amountValue * rate;
        displayResult(converted, toCurrency, rate);
    } catch (error) {
        console.error(error);
        showMessage('Could not fetch exchange rates. Please check your internet connection.');
    } finally {
        setLoading(false);
    }
}

function swapCountries() {
    const firstValue = country1Select.value;
    const secondValue = country2Select.value;

    country1Select.value = secondValue;
    country2Select.value = firstValue;
    updateFlag(country1Select, flag1);
    updateFlag(country2Select, flag2);
    clearErrors();
    clearMessage();

    if (orgAmount.value.trim() && Number(orgAmount.value) > 0) {
        convertCurrency();
    }
}

async function initializeApp() {
    const countryList = await fetchCodesFile();
    populateDropdowns(countryList);
    setDefaultCountries();
    updateFlag(country1Select, flag1);
    updateFlag(country2Select, flag2);
}

country1Select.addEventListener('change', () => {
    updateFlag(country1Select, flag1);
    clearErrors();
});

country2Select.addEventListener('change', () => {
    updateFlag(country2Select, flag2);
    clearErrors();
});

orgAmount.addEventListener('input', () => {
    errorAmount.textContent = '';
    clearMessage();
});

convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCountries);

initializeApp();
