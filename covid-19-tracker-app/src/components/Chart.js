import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () => {
  const chart = useSelector((state) => state.covid.covidInfo);

  const state = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: `Current state in ${chart.deaths?.detail.slice(41, 43)}`,
        backgroundColor: ["#818BFD", "#C9DE00", "#FD8288", "#F5F290"],
        data: [
          parseInt(chart.confirmed?.value),
          parseInt(chart.recovered?.value),
          parseInt(chart.deaths?.value),
          parseInt(chart.confirmed?.value) - parseInt(chart.deaths?.value),
        ],
      },
    ],
  };
  return (
    <div className="chart">
      <Bar data={state}  />
    </div>
  );
};

export default Chart;
