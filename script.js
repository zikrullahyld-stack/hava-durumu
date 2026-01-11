async function getWeather() {
  const district = document.getElementById("district").value;
  if (!district) return;

  const geo = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${district},Bursa,Turkey&count=1`
  );
  const geoData = await geo.json();

  const { latitude, longitude } = geoData.results[0];

  const weather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await weather.json();

  document.getElementById("result").innerHTML = `
    <h2>${district}, Bursa</h2>
    🌡️ ${data.current_weather.temperature} °C<br>
    💨 Rüzgar: ${data.current_weather.windspeed} km/h
  `;
}
