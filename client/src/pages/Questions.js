import React, { useEffect, useState } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import Card from "../components/Card";
import "./App.css";
import API from "../utils/API";

function Question() {
  //reamember to make index hook
  const [index, setIndex] = useState(0);
  const [taxInfo, setTaxInfo] = useState([]);
  useEffect(() => {
    API.getAllTax().then(function (taxdata) {
      setTaxInfo(taxdata.data);
    });
  }, []);
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
      <Card></Card>
    </div>
  );
}

export default Question;
