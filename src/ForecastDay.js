import React from "react";

export default function ForecastDay(props) {
  let iconCode = props.data.weather[0].icon;
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  console.log(props);
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let now = new Date(props.data.dt * 1000);
    let day = now.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h3 className="forecastDay">{day()}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={`weather icon`}
        className="forecastIcon"
      />
      <h4>
        <span className="maxTemp">{maxTemp()}</span>
        <span className="minTemp">{minTemp()}</span>
      </h4>
    </div>
  );
}
