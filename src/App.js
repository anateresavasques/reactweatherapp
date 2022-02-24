import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://portfolio-atcv.netlify.app/" target="_blank" id="link">
          Ana Teresa
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/anateresavasques/reactweatherapp"
          target="_blank"
          id="link"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
