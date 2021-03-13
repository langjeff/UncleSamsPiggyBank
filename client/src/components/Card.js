import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Login from "../components/Login/index";
import History from "../utils/history";
import API from "../utils/API";

function Card({ question }) {
  const [answers, setAnswers] = ([]);
  const [value, setValue] = useState();
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  // **OnAnswer function called on button click

  const onAnswer = () => {
    if (index <= 14) {
      setIndex(index + 1);
      console.log(index);
      // setAnswers = answers.push({onclick data coming back})

    } else {
      console.log("done");
      // API.post(answers: answers)
      // History.push(results page);
    }
  };
  useEffect(() => {
    setCurrentQuestion(question[index]);
  }, [question, index]);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    newValue = event.currentTarget.value;
    console.log(newValue);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="question" align="center">
          {/* ! put in ternary for question.type eval. */}
          <p className="returns">
            Tax Bracket: {currentQuestion && currentQuestion.category}
          </p>

          <p className="returns">
            # of Tax Returns: {currentQuestion && currentQuestion.returns}
          </p>
          <p className="returns">
            Average Tax Paid:{" "}
            {currentQuestion && currentQuestion.rate
              ? `${parseInt(Math.floor(currentQuestion.rate * 100))}%`
              : console.log("not available")}
          </p>
          <p className="taxes-paid">
            Amount of taxes: {currentQuestion && currentQuestion.amount}
          </p>
          <p className="taxes-paid">What should there tax rate be?</p>
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
          <button id="next" onClick={onAnswer}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
