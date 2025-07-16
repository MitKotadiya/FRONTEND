document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();

  let search = document.getElementById("cityInput").value;

  if (search === "") {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=04899d1312c30db086d3f6378eb78ac1&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        alert("City not found. Please enter a valid city name.");
        return;
      }
      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText = `${Math.floor(data.main.temp)}°C`;
      document.getElementById("temp_max").innerText = `${Math.floor(data.main.temp_max)}° 🌡️`;
      document.getElementById("temp_min").innerText = `${Math.floor(data.main.temp_min)}° ❄️`;
      document.getElementById("huminity").innerText = `${data.main.humidity}% 💧`;
      document.getElementById("cloud").innerText = `${data.clouds.all}% ☁️`;
      document.getElementById("Wind").innerText = `${data.wind.speed} km/h 🌬️`;
      document.getElementById("date").innerText = new Date().toDateString();

      document.getElementById("cityInput").value = "";

    })
    .catch(err => console.log(err.message));
});

  