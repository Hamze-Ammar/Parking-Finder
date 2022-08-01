import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../../constant/color";
import { getSearchRequests } from "./statisticsController";
import { getAllReservations } from "./statisticsController";
import { AuthContext } from "../../../store/AuthContext";

const WeeklyChart = () => {
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
    color: Colors.accepted,
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
  });

  // Some dummy data to display onloading for a second
  // while waiting for the real data to be fetched
  const [series, setSeries] = useState([
    {
      name: "test",
      data: [10, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "Reservations",
      data: [45, 40, 35, 88, 19, 60, 70],
    },
  ]);

  useEffect(() => {
    const fetchData = async (token) => {
      const searchRequests = await getSearchRequests(token);
      const reservations = await getAllReservations(token);
      setSeries([
        {
          name: "Search Requests",
          data: searchRequests,
        },
        {
          name: "Reservations",
          data: reservations,
        },
      ]);
    };
    fetchData(AuthCtx.token);
  }, []);

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={900}
      height={500}
    />
  );
};

export default WeeklyChart;
