import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../../constant/color";
import { getSearchRequests } from "./statisticsController";
import { getAllReservations } from "./statisticsController";
import { AuthContext } from "../../../store/AuthContext";

const LineChart = () => {
  const AuthCtx = useContext(AuthContext);

  const [options, setOptions] = useState({
    plotOptions: {
      bar: {
        borderRadius: 10,
        strokeColor: "#C23829",
      },
      heatmap: {
        radius: 20,
      },
    },
    chart: {
      type: "bar",
      id: "apexchart-example",
    },
    stroke: {
      curve: "smooth",
    },
    color: Colors.accepted,
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Active Users",
      data: [10, 25, 35, 50, 49, 60, 120, 35, 50, 49, 60, 120],
    },
    {
      name: "Total Slots",
      data: [45, 40, 35, 88, 65, 87, 90, 35, 88, 65, 87, 90],
    },
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={900}
      height={500}
      // fontSize={40}
    />
  );
};

export default LineChart;
