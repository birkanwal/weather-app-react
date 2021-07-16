// import React, { useState } from "react";
// import axios from "axios";

// export default function Search(props) {
//   let [cityInput, setCityInput] = useState(props.defaultCity);
//   let [message, setMessage] = useState(null);

//   function displayWeather(response) {
//     console.log(response.data);
//     setMessage(
//       <div>
//         <h1>
//           <img
//             src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
//             alt={response.data.weather[0].description}
//           />
//           <span className="temperature">
//             {Math.round(response.data.main.temp)}°C
//           </span>

//           <br />
//           <p className="feelslike">Feels Like 15</p>
//           <span className="description">
//             {response.data.weather[0].description}
//           </span>
//         </h1>
//         <h4>
//           <span>Sunday 00:00</span>
//         </h4>
//         <h1>
//           {response.data.name}, {response.data.sys.country}
//         </h1>
//         <hr />
//         <div className="row current-extra">
//           <div className="col-3">
//             <strong>Pressure</strong>
//             <br />
//             <span id="pressure">10</span>
//           </div>
//           <div className="col-3">
//             <strong>Wind</strong>
//             <br />
//             <span id="wind-speed">{response.data.wind.speed}m/s</span>
//           </div>
//           <div className="col-3">
//             <strong>Max</strong>
//             <br />
//             <span id="max-temp">21</span>
//           </div>
//           <div className="col-3">
//             <strong>Min</strong>
//             <br />
//             <span id="min-temp">10</span>
//           </div>
//         </div>
//         <br />
//         <div className="row current-extra">
//           <div className="col-3">
//             <strong>Sunrise</strong>
//             <br />
//             <span>Time</span>
//           </div>
//           <div className="col-3">
//             <strong>Sunset</strong>
//             <br />
//             <span>Time</span>
//           </div>
//           <div className="col-3">
//             <strong>Humidity</strong>
//             <br />
//             <span>{response.data.main.humidity}%</span>
//           </div>
//           <div className="col-3">
//             <strong>Visibility</strong>
//             <br />
//             <span>km</span>
//           </div>
//         </div>
//         <hr />
//       </div>
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=fc0a1c92e0473f3c314dae218cdd219d&units=metric`;
//     axios.get(apiUrl).then(displayWeather);
//   }

//   function updateCity(event) {
//     setCityInput(event.target.value);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="row justify-content-around">
//           <div className="col-8">
//             <input
//               type="text"
//               placeholder="Enter City"
//               onChange={updateCity}
//               className="form-control"
//             />
//           </div>
//           <div className="col-2">
//             <button type="button" className="btn btn-primary">
//               Current
//             </button>
//           </div>

//           <div className="col-2">
//             <button type="button" className="btn btn-primary">
//               Search
//             </button>
//           </div>
//         </div>
//       </form>
//       <div>{message}</div>
//       <p>
//         <a
//           href="https://github.com/birkanwal/weather-app-react"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Open Source Code
//         </a>{" "}
//         by Bir Kanwal
//       </p>
//     </div>
//   );
// }
