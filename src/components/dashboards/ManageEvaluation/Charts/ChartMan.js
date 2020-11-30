import React from "react";
import BarCharts from "./BarCharts";
import Doughnut from "./Doughnut";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const ChartMan = ({ doughnut, barChart }) => {
  return (
    <div className="d-flex">
      <div>
        <Doughnut data={doughnut} />
      </div>
      <div>
        <BarCharts data={barChart} />
      </div>
    </div>
  );
};

export default ChartMan;