const form = document.getElementById("submitRegistrationform");

const STORAGE_KEY = "coaching_registrations";

function setFieldError(el, message) {
  if (!el) return;
  el.classList.add("is-invalid");


  // Create/update error element
  const existing = document.getElementById(`${el.id}-error`);
  if (existing) {
    existing.textContent = message;
    return;
  }

  const err = document.createElement("div");
  err.className = "field-error";
  err.id = `${el.id}-error`;
  err.textContent = message;

  // Prefer inserting after the element
  el.insertAdjacentElement("afterend", err);
}

function clearFieldError(el) {
  if (!el) return;
  el.classList.remove("is-invalid");
  const existing = document.getElementById(`${el.id}-error`);
  if (existing) existing.remove();
}

function isValidEmail(email) {
  // Simple email validation (good enough for form UI)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllLettersSpaces(str) {
  return /^[A-Za-z\s.'-]{2,}$/.test(str.trim());
}

function digitsOnly(str) {
  return String(str).replace(/\D/g, "");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Grab fields
  const fullnameEl = document.getElementById("fullname");
  const emailEl = document.getElementById("email");
  const mobileEl = document.getElementById("mobilenumber");
  const dobEl = document.getElementById("dob");

  const personalEl = document.getElementById("personal");
  const gradeEl = document.getElementById("grade");
  const courseEl = document.getElementById("course");

  const addressEl = document.getElementById("address");
  const cityEl = document.getElementById("city");
  const pincodeEl = document.getElementById("pincode");

  const guardianNameEl = document.getElementById("guardianFullName");
  const guardianNumberEl = document.getElementById("guardianContactNumber");

  const genderChecked = document.querySelector("input[name='gender']:checked");
  const timingsChecked = document.querySelectorAll("input[name='timings']:checked");

  // Clear previous errors
  [
    fullnameEl,
    emailEl,
    mobileEl,
    dobEl,
    personalEl,
    gradeEl,
    courseEl,
    addressEl,
    cityEl,
    pincodeEl,
    guardianNameEl,
    guardianNumberEl,
  ].forEach(clearFieldError);

  let hasError = false;

  const fullname = fullnameEl.value;
  const email = emailEl.value;
  const mobile = digitsOnly(mobileEl.value);
  const dob = dobEl.value;

  const personal = personalEl.value;
  const grade = gradeEl ? gradeEl.value : "";
  const course = courseEl ? courseEl.value : "";

  const address = addressEl.value;
  const city = cityEl.value;
  const pincode = digitsOnly(pincodeEl.value);

  const guardianName = guardianNameEl.value;
  const guardianNumber = digitsOnly(guardianNumberEl.value);

  // Validate
  if (!isAllLettersSpaces(fullname)) {
    setFieldError(fullnameEl, "Enter a valid full name (letters only). ");
    hasError = true;
  }

  if (!isValidEmail(email)) {
    setFieldError(emailEl, "Enter a valid email address.");
    hasError = true;
  }

  if (mobile.length !== 10) {
    setFieldError(mobileEl, "Enter 10 digit mobile number.");
    hasError = true;
  }

  if (!dob) {
    setFieldError(dobEl, "Select your date of birth.");
    hasError = true;
  } else {
    const selected = new Date(dob);
    const now = new Date();
    // prevent future dob
    if (selected > now) {
      setFieldError(dobEl, "DOB cannot be in the future.");
      hasError = true;
    }
  }

  if (!genderChecked) {
    // Use fullnameEl insertion point? better: mark radios container via first radio
    const maleEl = document.getElementById("male");
    if (maleEl) setFieldError(maleEl, "Select Gender.");
    hasError = true;
  }

  if (timingsChecked.length === 0) {
    const firstTiming = document.getElementById("morning");
    if (firstTiming) setFieldError(firstTiming, "Select at least one batch timing.");
    hasError = true;
  }

  if (!personal) {
    setFieldError(personalEl, "Select your last qualification.");
    hasError = true;
  }

  if (!grade) {
    setFieldError(gradeEl, "Select your grade/percentage.");
    hasError = true;
  }

  if (!course) {
    setFieldError(courseEl, "Select your course.");
    hasError = true;
  }

  if (!address || address.trim().length < 10) {
    setFieldError(addressEl, "Enter your residential address (min 10 characters).");
    hasError = true;
  }

  if (!city || city.trim().length < 2) {
    setFieldError(cityEl, "Enter a valid city.");
    hasError = true;
  }

  if (pincode.length !== 6) {
    setFieldError(pincodeEl, "Enter 6 digit pin code.");
    hasError = true;
  }

  if (!isAllLettersSpaces(guardianName)) {
    setFieldError(guardianNameEl, "Enter a valid guardian full name.");
    hasError = true;
  }

  if (guardianNumber.length !== 10) {
    setFieldError(guardianNumberEl, "Enter 10 digit guardian contact number.");
    hasError = true;
  }

  if (hasError) return;

  // Success
  const payload = {
    fullname,
    email,
    mobile,
    dob,
    gender: genderChecked ? genderChecked.value : null,
    timings: Array.from(timingsChecked).map((t) => t.value),
    personal,
    grade,
    course,
    address,
    city,
    pincode,
    guardianName,
    guardianNumber,
  };

  console.log("Form Submitted Successfully:", payload);

  // Save into localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    // Optional: keep latest submission
    localStorage.setItem("latest_coaching_registration", JSON.stringify(payload));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }

  console.log("Form Submitted Successfully");
});


