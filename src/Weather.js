import React from "react";
import "./Weather.css";

export default function Weather() {
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
            />
            6ºC
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity: 72%</li>
              <li>Wind:13 kn/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}