import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { useParams } from "react-router-dom";

const ParticularChart = ({ location }) => {
  let { topicsId } = useParams();
  //   const [graph, setGraph] = useState(React.createElement(`${topicId}`));
  if (topicsId === "Bar") {
    return <Bar data={location.data} />;
  } else if (topicsId === "Pie") {
    return <Pie data={location.data} />;
  } else if (topicsId === "Line") {
    return <Line data={location.data} />;
  }
  return <Doughnut data={location.data} />;
  //   return <h1>{topicsId}</h1>;
};

export default ParticularChart;
