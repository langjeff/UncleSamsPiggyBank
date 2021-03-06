import * as React from "react";
import Slider from "@material-ui/core/Slider";

function Card(category, returns, base, rate, amount) {
  return (
    <div className="container">
      <div className="card">
        <div className="question" align="center">
          {/* <h4>{category}</h4>
          <h4>Number of tax returns:{returns}</h4>
          <h4>Total Income:{base}</h4> */}
          <br />
          Category Title will pass in here...
          <br />
          <br />
          Number of tax returns will pass in here...
          <br />
          <br />
          Total income will pass in here...
          <br />
          <h5 id="discrete-slider-always" gutterBottom>
            Slide to pick a value
          </h5>
          <Slider
            defaultValue={5}
            getAriaValueText={rate}
            aria-labelledby="discrete-slider-always"
            step={0.5}
            marks=""
            valueLabelDisplay="on"
          />
          {/* <h4>Amount of taxes paid:{amount}</h4> */}
          <br />
          Amount of taxes paid will pass here...
          <br />
          <br />
          <button id="next">Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
