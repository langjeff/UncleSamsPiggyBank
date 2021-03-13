import React, { useState, useEffect } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Login from "../components/Login/index";
import History from "../utils/history";
import API from "../utils/API";
import NumberFormat from "react-number-format";

function Card({ question }) {
  const [answers, setAnswers] = useState([]);
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  // **OnAnswer function called on button click

  const onAnswer = (event) => {
    console.log(currentQuestion);

    // console.log(newAmount);
    if (index <= 14) {
      console.log(event.currentTarget);
      setIndex(index + 1);
      console.log(index);
      setAnswers([
        ...answers,
        {
          category: currentQuestion.category,
          type: currentQuestion.type,
          base: currentQuestion.base,
          rate: value,
          amount: (currentQuestion.base * value) / 100,
        },
      ]);
    } else {
      console.log("done");
      // API.post(answers: answers)
      // History.push(results page);
    }
  };
  useEffect(() => {
    setCurrentQuestion(question[index]);
  }, [question, index]);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    newValue = event.currentTarget.value;
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="question" align="center">
          {/* ! put in ternary for question.type eval. */}
          <p className="category">
            Tax Bracket: {currentQuestion && currentQuestion.category}
          </p>

          <p className="returns">
            # of Tax Returns:
            <NumberFormat
              value={currentQuestion && currentQuestion.returns}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" "}
            />
          </p>
          <p className="returns">
            Average Tax Paid:{" "}
            {currentQuestion && currentQuestion.rate
              ? `${parseInt(Math.floor(currentQuestion.rate * 100))}%`
              : console.log("not available")}
          </p>
          <p className="returns">
            Amount of taxes: $
            <NumberFormat
              value={currentQuestion && currentQuestion.amount}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p className="taxes-paid">What should their tax rate be?</p>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
              onChange={handleChange}
            ></TextField>
          </form>
          <button
            id="next"
            onClick={onAnswer}
            // category={currentQuestion && currentQuestion.category}
            // type={currentQuestion && currentQuestion.type}
            // base={currentQuestion && currentQuestion.base}
            rate={value}
            // amount={currentQuestion && currentQuestion.base * value}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
