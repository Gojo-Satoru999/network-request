// script.js
window.addEventListener('load', () => {
    const apiKey = '895a288efa8f253036c87d62e95b5992'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            document.querySelector('.location').textContent = location;
            document.querySelector('.temperature').textContent = `${temperature}°C`;
            document.querySelector('.description').textContent = description;
        })
        .catch(error => console.log('Error fetching weather data:', error));
});

