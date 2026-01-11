async function getWeather() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("sound").play();

  const city = document.getElementById("city").value;

  const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=tr`);
  const geoData = await geo.json();

  if (!geoData.results) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = "Yer bulunamadı";
    return;
  }

  const { latitude, longitude, name, admin1 } = geoData.results[0];

  const weather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );
  const data = await weather.json();

  const temp = data.current.temperature_2m;
  const humidity = data.current.relative_humidity_2m;
  const wind = data.current.wind_speed_10m;

  document.getElementById("loading").style.display = "none";

  document.getElementById("result").innerHTML = `
    <h2>${name}, ${admin1}</h2>
    🌡️ ${temp} °C<br>
    💧 Nem: ${humidity}%<br>
    💨 Rüzgar: ${wind} km/h<br><br>
    <small>Global Meteorology Network · Live</small>
  `;
}
