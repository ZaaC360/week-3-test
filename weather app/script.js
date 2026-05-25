let searchbtn = document.getElementsByClassName("searchbtn")
let temp = document.getElementsByClassName("temp")
let humidity = document.getElementsByClassName("humidity")
let condition = document.getElementsByClassName("condition")

async function getWeather(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=48993822ee79d3d658a13a429bb49d79`,
  );
  try {
    let data = await response.json();

    let minTempdata = data.main.temp_min;
    let maxTempdata = data.main.temp_max;
    let conditiondata = data.weather[0].description;
    let humiditydata = data.main.humidity;

    temp[0].innerHTML  = `${minTempdata}°C/${maxTempdata}°C`;
    condition[0].innerHTML = `${conditiondata}`;
    humidity[0].innerHTML = `${humiditydata}% Humidity`;

  } 
  catch (error) {
    alert("city not found")
  }
}

