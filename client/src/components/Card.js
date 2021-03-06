import React from "react";
import Slider from "@material-ui/core/Slider";

function Card({ question, onAnswer }) {
  console.log(question);

  // const inject = [question[index]];
  // console.log(inject);
  // const percent = question.rate * 100;
  const percent = question && Math.floor(question.rate * 100);
  console.log(percent);
  function dValue(percent) {
    return percent * 100;
  }
  return (
    <div className="container">
      <div className="card">
        <div className="question" align="center">
          {/* <h4>{category}</h4>
          <h4>Number of tax returns:{returns}</h4>
          <h4>Total Income:{base}</h4> */}

          <br />
          {question && question.category}
          <br />

          <br />
          {question && question.returns}
          <br />
          <br />
          {question && question.base}
          <br />
          <h5 id="discrete-slider-always" gutterBottom>
            Slide to pick a value
          </h5>
          <Slider
            defaultValue={percent}
            getAriaValueText={question && question.rat}
            aria-labelledby="discrete-slider-always"
            step={1}
            valueLabelDisplay="on"
          />

          <br />
          <h4>Amount of taxes paid:{question && question.amount}</h4>

          <br />
          <br />
          {question && question.caption}
          <br />
          <br />
          {/* <button id="next" onclick={onAnswer}>
            Next Question
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
