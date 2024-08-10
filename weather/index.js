var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "1c2f214e181982d1a37ec22b4014562b";

function convertion(val) {
    return (val - 273.15).toFixed(2); // Convert from Kelvin to Celsius
}

btn.addEventListener('click', function() {
    var cityname = inputvalue.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var description = data['weather'][0]['description']; // Renamed to avoid conflict
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature : <span>${convertion(temperature)} °C</span>`;
            descrip.innerHTML = `Sky condition: <span>${description}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
