import React from "react";
import FormattedDate from "./FormattedDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

export default function WeatherData(props) {
  return (
    <div>
      <h1>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`}
          alt={`weather icon`}
        />
        <span className="temperature">{props.data.temperature}°C</span>
        <br />
        <p className="feelslike">Feels Like {props.data.feelsLike}</p>
        <span className="text-capitalize">{props.data.description}</span>
      </h1>
      <h4>
        <span>
          <FormattedDate date={props.data.date} />
        </span>
      </h4>
      <h1>
        {props.data.cityName}, {props.data.country}
      </h1>
      <hr />
      <div className="row current-extra">
        <div className="col-3">
          <strong>Pressure</strong>
          <br />
          <span>{props.data.pressure}</span>
        </div>
        <div className="col-3">
          <strong>Wind</strong>
          <br />
          <span>{props.data.wind} km/hr</span>
        </div>
        <div className="col-3">
          <strong>Max</strong>
          <br />
          <span>{props.data.maxTemp}</span>
        </div>
        <div className="col-3">
          <strong>Min</strong>
          <br />
          <span>{props.data.minTemp}</span>
        </div>
      </div>
      <br />
      <div className="row current-extra">
        <div className="col-3">
          <strong>Sunrise</strong>
          <br />
          <span>
            <Sunrise date={props.data.sunrise} />
          </span>
        </div>
        <div className="col-3">
          <strong>Sunset</strong>
          <br />
          <span>
            <Sunset date={props.data.sunset} />
          </span>
        </div>
        <div className="col-3">
          <strong>Humidity</strong>
          <br />
          <span>{props.data.humidity}%</span>
        </div>
        <div className="col-3">
          <strong>Visibility</strong>
          <br />
          <span>{props.data.visibility} km</span>
        </div>
      </div>
      <hr />
    </div>
  );
}
