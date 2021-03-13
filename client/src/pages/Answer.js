import React, { useState, useEffect } from "react";
import USPB_LOGO from "../images/USPB_LOGO.png";
import DataTable from "../components/DataTable";
import API from '../utils/API';
import "./App.css";

function Answer() {
    const [user, setUser] = useState([]);
    const [userSearch, setUserSearch] = useState();

    useEffect(() => {
        checkUser()
      }, [])

    function checkUser() {
      API.getUser(userSearch)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
        console.log(user);
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
