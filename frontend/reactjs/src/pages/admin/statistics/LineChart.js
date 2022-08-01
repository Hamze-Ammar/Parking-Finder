import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../../../constant/color";
import { AuthContext } from "../../../store/AuthContext";
import { getAllUsersAndSlots } from "./statisticsController";

const LineChart = () => {
  const authCtx = useContext(AuthContext);

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

  // Some dummy data to display onloading for a second
  // while waiting for the real data to be fetched
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

  useEffect(() => {
    const fetchInfo = async (token) => {
      const info = await getAllUsersAndSlots(token);

      setSeries([
        {
          name: "Active Users",
          data: info?.usersYearly,
        },
        {
          name: "Total Slots",
          data: info?.slotsYearly,
        },
      ]);
    };
    fetchInfo(authCtx.token);
  }, []);

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={900}
      height={500}
    />
  );
};

export default LineChart;
