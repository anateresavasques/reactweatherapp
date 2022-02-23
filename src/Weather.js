import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                />{" "}
              </div>

              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                  id="searchButton"
                />
                <button
                  className="btn btn-success w-100"
                  id="current-location-button"
                >
                  &#128204; Me
                </button>
              </div>
            </div>
          </form>
          <h1>New York</h1>
          <ul>
            <li>Wednesday 07:00 </li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"
              />
              <span className="temperature">{Math.round(temperature)}</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation:15%</li>
                <li>Humidity: 72%</li>
                <li>Wind:13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "New York";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
