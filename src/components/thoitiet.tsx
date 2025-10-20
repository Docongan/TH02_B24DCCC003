import { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await axios.get(`https://wttr.in/${city}?format=j1`);
    setWeather(res.data);
  };

  return (
    <div>
      <h2>Ứng dụng thời tiết</h2>
      <input
        type="text"
        value={city}
        placeholder="Nhập tên thành phố"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Xem</button>
      {weather && (
        <div style={{ marginTop: "10px" }}>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}

export {};