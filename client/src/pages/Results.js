import React from "react";
<<<<<<< HEAD:client/src/pages/Results.js
=======
// import "./App.css";
>>>>>>> 736392a24cbbaeb3c0b37fdf7388eb7bb4e1c398:client/src/components/Results.js
import USPB_LOGO from "../images/USPB_LOGO.png";
import DataTable from "../components/DataTable";
import PiggyBankBtn from "../images/PiggyBankBtn.png";
import "./App.css";

function Results() {
  return (
    <div className="container">
      <div className="logo">
        <img src={USPB_LOGO} alt="Uncle Sam's Piggy Bank Logo" />
      </div>
      <div className="data-container">
        <h4 align="center">Compare your results to others</h4>
        <DataTable />
      </div>
      <button id="play">
        <img src={PiggyBankBtn} />
      </button>
    </div>
  );
}

export default Results;
