async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '36b12f629d2110b060a858ce7d84b36c' 
    const countryCode = 'IN';  // Country code for India

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`);
    const data = await response.json();
    if (response.ok) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Description: ${data.weather[0].description}</p>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        alert('City not found. Please try again.');
    }
}

