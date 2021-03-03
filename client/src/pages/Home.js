import React from "react";
import "./App.css";
import USPB_LOGO from "../images/USPB_LOGO.png";
import PiggyBankBtn from "../images/PiggyBankBtn.png";
import Guy from "../images/Guy.png";

function Home() {
  return (
    <div className="container">
      <div className="logo">
        <img src={USPB_LOGO} alt="Uncle Sam's Piggy Bank Logo" />
      </div>
      <div className="message">
        <h2 align="center">Welcome to Uncle Sam's Piggy Bank</h2>
        <p align="center">
          We will ask you some questions about how much people should pay in
          taxes,<br></br>and how much the government should spend on programs.
        </p>
        <p align="center">
          We will see how much better we are than the government at balancing
          the budget!
        </p>
        <div className="guy">
          <img src={Guy} alt="Monopoly Guy"></img>
        </div>
      </div>
      <button id="play">
        <img src={PiggyBankBtn} />
      </button>
    </div>
  );
}

export default Home;
