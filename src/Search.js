import React, { useState } from "react";
import axios from "axios";

import WeatherData from "./WeatherData";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function recordResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(
        (response.data.sys.sunrise + response.data.timezone) * 1000
      ),
      sunset: new Date(
        (response.data.sys.sunset + response.data.timezone) * 1000
      ),

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

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    const apiKey = "7204f6e84ed2dfded277a4966a6e3490";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(recordResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-around">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
                onChange={changeCity}
              />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary">
                Current
              </button>
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    Search();

    return "Loading.....";
  }
}
