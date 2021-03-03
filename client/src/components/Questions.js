import React from "react";
// import "./App.css";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Slider from "@material-ui/core/Slider";

function Question() {
  return (
    <div className="container">
      <div className="logo">
        <img src={USPB_LOGO} alt="Uncle Sam's Piggy Bank Logo" />
      </div>
      <div className="card">
        <div className="question" align="center">
          People making less than $50,000
          <br />
          pay around $8,000 a year in taxes,
          <br />
          or 16% Effective Tax Rate.
          <br />
          <br />
          This makes up $800 billion
          <br />
          of the federal budget.
          <br />
          <br />
          <br />
          <h4 id="discrete-slider-always" gutterBottom>
            Slide to pick a value
          </h4>
          <Slider
            defaultValue={5}
            getAriaValueText=""
            aria-labelledby="discrete-slider-always"
            step={0.5}
            marks=""
            valueLabelDisplay="on"
          />
          <br />
          <br />
          <button id="next">Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
