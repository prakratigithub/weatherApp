import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/prakratigithub/weatherApp">
          GitHub Link
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Prakrati Goyal
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
