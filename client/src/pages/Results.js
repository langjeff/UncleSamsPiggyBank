import React from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import DataTable from "../components/DataTable";
import "./App.css";

function Results() {
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

export default Results;
