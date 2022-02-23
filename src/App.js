import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://portfolio-atcv.netlify.app/" target="_blank">
          Ana Teresa
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/anateresavasques/reactweatherapp"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
