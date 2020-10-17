import React from "react";
import DataTable from "react-data-table-component";
import "./table.css";

const columns = [
  {
    name: "WEEK ENDING",
    selector: "weekEnding",
    sortable: true,
  },
  {
    name: "RETAIL SALES",
    selector: "retailSales",
    sortable: true,
    right: true,
  },
  {
    name: "WHOLESALE SALES",
    selector: "wholesaleSales",
    sortable: true,
    right: true,
  },
  {
    name: "UNITS SOLD",
    selector: "unitsSold",
    sortable: true,
    right: true,
  },
  {
    name: "RETAILER MARGIN",
    selector: "retailerMargin",
    sortable: true,
    right: true,
  },
];

export const Table = React.memo(({ sales }) => (
  <div className="table-container">
    <DataTable
      title=""
      columns={columns}
      data={sales}
      pagination={true}
    />
  </div>
));