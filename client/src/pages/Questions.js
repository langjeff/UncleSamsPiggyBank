import React, { useEffect, useState } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Card from "../components/Card";
import "./App.css";
import API from "../utils/API";

function Question() {
  //reamember to make index hook
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[index]);
  }, [questions, index]);

  const loadQuestions = () => {
    API.getAllTax()
      .then((res) => {
        setQuestions(res.data);
        console.log(questions);
        // setIndex(0);
        // console.log(index);
      })

      // .then()
      .catch((err) => console.log(err));
  };

  // **OnAnswer function called on button click
  const onAnswer = () => {
    setIndex(index + 1);
  };
  // ! call that post route with data

  // useEffect(() => {
  //   API.getAllTax().then(function (taxdata) {
  //     setTaxInfo(taxdata.data);
  //     console.log(res.data);
  //   });
  // }, []);
  // console.log(questions);
  // console.log(index);
  return (
    <div className="container">
      <div className="logo">
        <img
          src={USPB_LOGO}
          className="Qlogo"
          alt="Uncle Sam's Piggy Bank Logo"
          align="center"
        />
      </div>
      {/* {questions.map((questions, index) => ( */}
      <div key={index}>
        <Card question={currentQuestion} onAnswer={onAnswer} />
      </div>
    </div>
  );
}

export default Question;
