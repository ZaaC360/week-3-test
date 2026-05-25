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



  } 
  catch (error) {
    alert("city not found")
  }
}

