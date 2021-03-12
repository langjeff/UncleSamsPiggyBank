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

function Card({ question, onAnswer }) {
  // const value = question && Math.floor(question.rate * 100);
  const defaultValue = question && parseInt(Math.floor(question.rate * 100));
  console.log(defaultValue);
  console.log(question);

  const [value, setValue] = useState(0);

  useEffect(() => {}, []);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    newValue = event.currentTarget.value;
    // console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="question" align="center">
          <p className="category">{question && question.category}</p>

          <p className="returns">
            Amount of Tax Returns: {question && question.returns}
          </p>

          <p className="base">
            Base Taxes Collected: {question && question.base}
          </p>

          <form noValidate autoComplete="off">
            {question && question.rate ? (
              <TextField
                id="outlined-basic"
                label="Percentage Paid"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                value={parseInt(Math.floor(question.rate * 100))}
              ></TextField>
            ) : (
              console.log("not available")
            )}
          </form>

          <p className="taxes-paid">
            Amount of taxes paid: {question && question.amount}
          </p>

          <p className="caption">{question && question.caption}</p>
          <button id="next" onClick={onAnswer}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
