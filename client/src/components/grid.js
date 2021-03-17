import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Login from "../components/Login";
import Logout from "../components/Logout";
import "./App.css";

const columns = [
  { field: "category", headerName: "Category", width: 400 },
  { field: "amount", headerName: "Amount", width: 300 },
];

export default function grid({ answer, id }) {
  var sumIncome = 0;
  var sumSpending = 0;
  answer.map(function (answer) {
    if (answer.type === "income") {
      sumIncome = sumIncome + answer.amount;
    } else {
      sumSpending = sumSpending + answer.amount;
    }
  });
  const result = sumIncome - sumSpending;
  //   console.log(result);

  const rows = [];
  answer.map((data) =>
    rows.push({
      id: data.category,
      category: data.category,
      amount: data.amount,
    })
  );

  //   console.log(rows);
  return (
    <div style={{ height: 550, width: 740 }}>
      <h2>{answer && result}</h2>
      <DataGrid rows={rows} columns={columns} pageSize={15} />
      <Login id={id} />
      <Logout />
    </div>
  );
}
