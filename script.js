const cityData = {
  "Bursa": [
    "Osmangazi","Nilüfer","Yıldırım","İnegöl","Gemlik","Mudanya",
    "Mustafakemalpasa","Karacabey","Orhangazi","Kestel","Gürsu"
  ]
};

const citySelect = document.getElementById("citySelect");
const districtSelect = document.getElementById("districtSelect");
const loader = document.getElementById("loader");
const result = document.getElementById("result");

function onCityChange() {
  districtSelect.innerHTML = "<option value=''>İlçe seçiniz</option>";
  const districts = cityData[citySelect.value];

  if (!districts) return;

  districtSelect.disabled = false;

  districts.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    districtSelect.appendChild(opt);
  });
}

async function fetchWeather() {
  const city = citySelect.value;
  const district = districtSelect.value;

  if (!city || !district) {
    alert("Lütfen il ve ilçe seçiniz.");
    return;
  }

  loader.style.display = "block";
  result.innerHTML = "";

  try {
    const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${district},${city}&count=1`);
    const geoData = await geo.json();

    if (!geoData.results) throw "Konum bulunamadı";

    const { latitude, longitude } = geoData.results[0];

    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const data = await weather.json();

    loader.style.display = "none";

    result.innerHTML = `
      <h2>${district}, ${city}</h2>
      🌡️ Sıcaklık: ${data.current.temperature_2m} °C<br>
      💧 Nem: ${data.current.relative_humidity_2m}%<br>
      💨 Rüzgar: ${data.current.wind_speed_10m} km/h
    `;
  } catch (e) {
    loader.style.display = "none";
    result.innerHTML = "Veri alınırken hata oluştu.";
  }
}
