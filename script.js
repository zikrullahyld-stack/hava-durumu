async function getWeather() {
  const city = document.getElementById("city").value;

  const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  const geoData = await geo.json();

  if (!geoData.results) {
    document.getElementById("result").innerHTML = "Şehir bulunamadı";
    return;
  }

  const lat = geoData.results[0].latitude;
  const lon = geoData.results[0].longitude;

  const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  const data = await weather.json();

  const temp = data.current_weather.temperature;
  const wind = data.current_weather.windspeed;

  document.getElementById("result").innerHTML = `
    <h2>${city.toUpperCase()}</h2>
    🌡️ Sıcaklık: ${temp} °C <br>
    💨 Rüzgar: ${wind} km/h
  `;
}
