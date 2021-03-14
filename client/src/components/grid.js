import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./App.css";

const columns = [
    { field: "category", headerName: "Category", width: 200 },
    { field: "amount", headerName: "Amount", width: 300 }
];

export default function grid({ answer }) {
    const rows = [];
    answer.map((data) => 
        rows.push({
          id: data.category,
          category: data.category,
          amount: data.amount
        })
    );

    console.log(rows);
    return (
        <div style={{ height: 500, width: 750 }}>
            <DataGrid autoHeight rows={rows} autoWidth columns={columns} pageSize={20} />
        </div>
    )
}
