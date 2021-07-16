import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <div className="container">
        <Search defaultCity="Mississauga" />
      </div>
      <p>
        <a
          href="https://github.com/birkanwal/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>{" "}
        by Bir Kanwal
      </p>
    </div>
  );
}

export default App;
