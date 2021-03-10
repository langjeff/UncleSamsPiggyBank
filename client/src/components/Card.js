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

  const [value, setValue] = useState(
    0
    // // parseInt(question && Math.floor(
    // defaultValue
    // //   ))
    // // 5
  );

  useEffect(() => {
    setValue(4);
  }, []);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    newValue = event.currentTarget.value;
    // console.log(newValue);
    setValue(newValue);
  };

  // const defaultValue = question && parseInt(Math.floor(question.rate * 100));
  // console.log(defaultValue);

  // const inject = [question[index]];
  // console.log(inject);
  // const percent = question.rate * 100;

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
            {!value ? (
              <h2>no data</h2>
            ) : (
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                label="Percentage Paid"
                variant="outlined"
                value={value.toString()}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
              />
            )}
          </form>

          {/* <h5 id="discrete-slider-always" gutterBottom>
            Percent Paid
          </h5> */}
          {/* <Typography id="continuous-slider" gutterBottom>
            Tax Percentage Paid
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="on"
              />
            </Grid>
          </Grid> */}

          {/* <Slider
            value={question && percent}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="on"
          /> */}

          {/* <Slider
            value={question && percent}
            aria-labelledby="continous-slider"
          /> */}

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
