import React, { useContext, useState } from "react";

import Context from "./Context";

import { Chart } from "./components/Chart";
import ProductionPossibilityCurve from "./components/ProductionPossibilityCurve";

const Home = () => {
  console.log("a");
  const { chartsData, setChartsData } = useContext(Context);
  return (
    <div className="bg-gray-100 p-4 w-full h-full space-y-4">
      <div className="space-y-2 mb-4">
        <h1 className="text-5xl font-extrabold ">
          Creative Economic Assignment
        </h1>
        <p className="text-3xl">Gavin Hung Period: 1</p>
      </div>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <Chart />
        </div>
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <ProductionPossibilityCurve />
        </div>
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <Chart />
        </div>
      </div>
      <button
        onClick={() => {
          setChartsData({
            ...setChartsData,
            production:
              chartsData["production"] < 5
                ? chartsData["production"] + Math.floor(Math.random() * 4)
                : chartsData["production"],
          });
        }}
      >
        click
      </button>
    </div>
  );
};

export default Home;
