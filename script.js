async function getWeather() {
  const district = document.getElementById("districtSelect").value;
  if (!district) return;

  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  loader.style.display = "block";
  result.innerHTML = "";

  try {
    const geo = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${district},Bursa,Turkey&count=1`,
      { cache: "no-store" }
    );
    const geoData = await geo.json();

    const { latitude, longitude } = geoData.results[0];

    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      { cache: "no-store" }
    );
    const data = await weather.json();

    loader.style.display = "none";

    result.innerHTML = `
      <h2>${district}, Bursa</h2>
      🌡️ ${data.current.temperature_2m} °C<br>
      💧 Nem: ${data.current.relative_humidity_2m}%<br>
      💨 Rüzgar: ${data.current.wind_speed_10m} km/h
    `;
  } catch {
    loader.style.display = "none";
    result.innerHTML = "Veri alınamadı. Tekrar deneyin.";
  }
}
