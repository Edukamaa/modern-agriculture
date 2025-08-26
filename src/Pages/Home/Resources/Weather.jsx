// File: src/Pages/Home/Resources/Weather.jsx
import React, { useEffect, useState } from "react";

const counties = [
  { name: "Kiambu", lat: -1.1714, lon: 36.8356 },
  { name: "Murang'a", lat: 0.7833, lon: 37.0333 },
  { name: "Nyeri", lat: -0.4201, lon: 36.9476 },
  { name: "Kirinyaga", lat: -0.4989, lon: 37.2803 },
  { name: "Nairobi", lat: -1.2921, lon: 36.8219 },
];

const Weather = () => {
  const [selectedCounty, setSelectedCounty] = useState(counties[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (county) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${county.lat}&longitude=${county.lon}&current=temperature_2m,rain,weathercode&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Weather fetch failed:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(selectedCounty);
  }, [selectedCounty]);

  const giveAdvice = () => {
    if (!weather) return "";
    const rain = weather.current.rain;
    const temp = weather.current.temperature_2m;

    if (rain > 5) return "🌧 Expect rains — good for planting, delay harvesting.";
    if (rain > 0) return "☁ Light showers — prepare land, ideal for seedlings.";
    if (temp > 28) return "🔥 Hot day — irrigate crops, provide water for livestock.";
    if (temp < 15) return "❄ Cool day — protect young crops.";
    return "🌤 Good farming day — monitor your fields.";
  };

  return (
    <div className="weather-container">
      <h1>🌍 Farm Weather Guide</h1>

      <select
        value={selectedCounty.name}
        onChange={(e) =>
          setSelectedCounty(
            counties.find((c) => c.name === e.target.value)
          )
        }
      >
        {counties.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading weather...</p>
      ) : (
        weather && (
          <div className="weather-card">
            <h2>{selectedCounty.name} — Today</h2>
            <p>🌡 Temp: {weather.current.temperature_2m}°C</p>
            <p>🌧 Rain: {weather.current.rain} mm</p>
            <p>📅 High: {weather.daily.temperature_2m_max[0]}°C | Low: {weather.daily.temperature_2m_min[0]}°C</p>
            <h3 className="advice">{giveAdvice()}</h3>

            <h4>📌 3-Day Outlook</h4>
            <div className="outlook">
              {weather.daily.temperature_2m_max.slice(0, 3).map((max, i) => (
                <div key={i} className="outlook-day">
                  <p>Day {i + 1}</p>
                  <p>High: {max}°C</p>
                  <p>Low: {weather.daily.temperature_2m_min[i]}°C</p>
                  <p>Rain: {weather.daily.rain_sum[i]} mm</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
