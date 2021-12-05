import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Context from "../Context";

const original = [
  {
    cars: 0,
    uv: 1,
  },
  {
    cars: 0.259,
    uv: 0.966,
  },
  {
    cars: 0.5,
    uv: 0.866,
  },
  {
    cars: 0.707,
    uv: 0.707,
  },
  {
    cars: 0.866,
    uv: 0.5,
  },

  {
    cars: 1,
    uv: 0,
  },
];

const Chart = () => {
  const { chartsData } = useContext(Context);
  const [data, setData] = useState([
    {
      cars: 0,
      uv: 1,
    },
    {
      cars: 0.259,
      uv: 0.966,
    },
    {
      cars: 0.5,
      uv: 0.866,
    },
    {
      cars: 0.707,
      uv: 0.707,
    },
    {
      cars: 0.866,
      uv: 0.5,
    },
    {
      cars: 1,
      uv: 0,
    },
  ]);

  useEffect(() => {
    let stored = JSON.parse(JSON.stringify(original)); //[...original];
    for (let i = 0; i < stored.length; i++) {
      stored[i]["cars"] = original[i]["cars"]; // + chartsData["production"];
      stored[i]["uv"] = original[i]["uv"] * chartsData["production"];
    }
    setData([...stored]);
  }, [chartsData]);

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis scale="linear" domain={[0, 1]} />
        <YAxis scale="linear" type="number" domain={[0, 1]} />

        <Legend />

        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default Chart;
