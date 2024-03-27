const searchForm = document.getElementsByClassName("weather__search")[0];
const searchInput = document.getElementsByClassName("weather__searchform")[0];
const weatherInfo = document.getElementsByClassName("weather__info")[0];
const weatherbody = document.getElementsByClassName("weather__body")[0];

console.log(weatherInfo)

const BASE_URL = "https://yahoo-weather5.p.rapidapi.com";

// GET request to fetch weather data

const getWeatherUpdate = async (event) => {
  event.preventDefault();

  const city = searchInput.value;

  if (!city.trim()) {
    return;
  }

  try {
    const response = await fetch(
        `${BASE_URL}/weather?location=${city}&format=json&u=c`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ae72c6270amsh81d0d0cb95a0e74p16b578jsn6951d635f21d",
          "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return alert("City not found");
    }

    console.log(data)

    

    return (weatherInfo.innerHTML = `<div class="weather__card">
    <i class="fa-solid fa-temperature-full"></i>
    <div>
        <p>Real Feel</p>
        <p class="weather__realfeel">${data?.current_observation?.condition?.temperature}&#176</p>
    </div>
</div>
<div class="weather__card">
    <i class="fa-solid fa-droplet"></i>
    <div>
        <p>Humidity</p>
        <p class="weather__humidity">${data?.current_observation?.atmosphere?.humidity} &#176</p>
    </div>
</div>
<div class="weather__card">
    <i class="fa-solid fa-wind"></i>
    <div>
        <p>Wind</p>
        <p class="weather__wind">${data?.current_observation?.wind?.chill}&#176</p>
    </div>
</div>
<div class="weather__card">
    <i class="fa-solid fa-gauge-high"></i>
    <div>
        <p>Pressure</p>
        <p class="weather__pressure"> ${data?.current_observation?.atmosphere?.pressure}&#176</p>
    </div>
</div>
`), (weatherbody.innerHTML = `  <h1 class="weather__city">${data?.location?.city}</h1>
<div class="weather__datetime">
</div>
<div class="weather__icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"; style="height:100px !important;"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l10.4 62.4c-23.3 10.8-42.9 28.4-56 50.3c-14.6-9-31.8-14.1-50.2-14.1c-53 0-96 43-96 96c0 35.5 19.3 66.6 48 83.2c.8 31.8 13.2 60.7 33.1 82.7l-56 39.2c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM208 144c13.8 0 26.7 4.4 37.1 11.9c-1.2 4.1-2.2 8.3-3 12.6c-37.9 14.6-67.2 46.6-77.8 86.4C151.8 243.1 144 226.5 144 208c0-35.3 28.7-64 64-64zm69.4 276c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm74.5-116.1c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>
</div>
<p class="weather__temperature">${data?.current_observation?.condition?.temperature}
</p>
<div class="weather__minmax">
    <p>Min: ${data?.forecasts[0].low}&#176</p>
    <p>Max: ${data?.forecasts[0].high}&#176</p>
</div>
</div>`);

  } catch (error) {}
};

searchForm.addEventListener("submit", getWeatherUpdate);