import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility / 1000,
      iconCode: response.data.weather[0].icon,
      country: response.data.sys.country,
      cityName: response.data.name,
      wind: Math.round(response.data.wind.speed * 3.6),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
  }

  function Search() {
    const apiKey = "fc0a1c92e0473f3c314dae218cdd219d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form>
          <div className="row justify-content-around">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary">
                Current
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        <div>
          <h1>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}
              alt={`weather icon`}
            />
            <span className="temperature">{weatherData.temperature}°C</span>
            <br />
            <p className="feelslike">Feels Like {weatherData.feelsLike}</p>
            <span className="description">{weatherData.description}</span>
          </h1>
          <h4>
            <span> Sunday 00:00 </span>
          </h4>
          <h1>
            {weatherData.cityName}, {weatherData.country}
          </h1>
          <hr />
          <div className="row current-extra">
            <div className="col-3">
              <strong>Pressure</strong>
              <br />
              <span id="pressure">10</span>
            </div>
            <div className="col-3">
              <strong>Wind</strong>
              <br />
              <span id="wind-speed">{weatherData.speed}m/s</span>
            </div>
            <div className="col-3">
              <strong>Max</strong>
              <br />
              <span id="max-temp">21</span>
            </div>
            <div className="col-3">
              <strong>Min</strong>
              <br />
              <span id="min-temp">10</span>
            </div>
          </div>
          <br />
          <div className="row current-extra">
            <div className="col-3">
              <strong>Sunrise</strong>
              <br />
              <span>Time</span>
            </div>
            <div className="col-3">
              <strong>Sunset</strong>
              <br />
              <span>Time</span>
            </div>
            <div className="col-3">
              <strong>Humidity</strong>
              <br />
              <span>{weatherData.humidity}%</span>
            </div>
            <div className="col-3">
              <strong>Visibility</strong>
              <br />
              <span>km</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  } else {
    Search();

    return "Loading";
  }
}
