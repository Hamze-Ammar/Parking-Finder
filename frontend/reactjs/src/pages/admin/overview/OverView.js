import React, { useState } from "react";
import OverViewHeader from "./OverViewHeader";
import LineChart from "../statistics/LineChart";

const OverView = () => {
  return (
    <div>
      <div>
        <OverViewHeader />
        <div style={{ margin: "15px auto auto 150px" }}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default OverView;
