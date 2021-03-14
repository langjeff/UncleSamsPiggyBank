import React, { useState, useEffect } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import DataTable from "../components/DataTable";
import API from '../utils/API';
import "./App.css";

function Answer() {
    const [answer, setAnswer] = useState([{}]);
    presentData();

  useEffect(() => {
    getLast()
  },[])
  
    function getLast() {
      API.getLastAnswer()
        .then(res => setAnswer(res.data))
        .catch(err => console.log(err))
    };

    function presentData() {
        console.log(answer[0].answers)
    };

  return (
    <div className="container">
      <div className="logo">
        <img
          src={USPB_LOGO}
          alt="Uncle Sam's Piggy Bank Logo"
          className="Qlogo"
        />
      </div>
      <div className="data-container">
        <h4 align="center">Compare your results to others</h4>
        <DataTable />
      </div>
    </div>
  );
}

export default Answer
