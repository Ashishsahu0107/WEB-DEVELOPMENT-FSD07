const API_Key = "`";

async function getWheather() {
  const cityName = document.getElementById("cityName").value.trim();
  const searchBtn = document.getElementById("searchBtn");
  const weatherSection = document.getElementById("weatherSection");

  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  searchBtn.disabled = true;
  searchBtn.textContent = "Loading...";

  try {
    const { latitude, longitude } = await getGeoLocation(cityName);

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_Key}`;
    const response = await fetch(weatherApi);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to fetch weather data.");
    }

    document.getElementById("cityOutput").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("descOutput").innerText = data.weather[0].description;
    document.getElementById("tempOutput").innerText = `${data.main.temp.toFixed(1)}°C`;
    document.getElementById("feelsLikeOutput").innerText = `${data.main.feels_like.toFixed(1)}°C`;
    document.getElementById("humidityOutput").innerText = `${data.main.humidity}%`;
    document.getElementById("windOutput").innerText = `${data.wind.speed} m/s`;
    document.getElementById("pressureOutput").innerText = `${data.main.pressure} hPa`;
    document.getElementById("countryOutput").innerText = data.sys.country;
    document.getElementById("dateOutput").innerText = new Date().toLocaleString();

    weatherSection.classList.remove("d-none");
  } catch (error) {
    alert(error.message || "Could not load weather information.");
  } finally {
    searchBtn.disabled = false;
    searchBtn.textContent = "Check";
  }
}

async function getGeoLocation(city) {
  const geoLocApi = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_Key}`;
  const response = await fetch(geoLocApi);
  const data = await response.json();

  if (!response.ok || !data.length) {
    throw new Error("City not found. Please try another name.");
  }

  return {
    latitude: data[0].lat,
    longitude: data[0].lon,
  };
}
