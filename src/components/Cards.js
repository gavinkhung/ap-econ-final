import React, { useContext, useEffect, useState } from "react";

import Context from "../Context";

const scenarios = {
  classical: [
    {
      description: "Gain",
      effect: "a",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 4,
      ad: 0,
      as: 0,
    },
    {
      description: "lost",
      effect: "a",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: -5,
      ad: 0,
      as: 0,
    },
  ],
  keynesian: [
    {
      description: "lost",
      effect: "a",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: -5,
      ad: 0,
      as: 0,
    },
  ],
  monetary: [
    {
      description: "lost",
      effect: "a",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: -5,
      ad: 0,
      as: 0,
    },
  ],
};

const Cards = ({ policy }) => {
  const { chartsData, setChartsData } = useContext(Context);
  const [scenario, setScenario] = useState({});
  const [effected, setEffected] = useState(false);

  useEffect(() => {
    console.log("a", policy);
    if (policy && scenarios[policy] !== undefined) {
      showNextCard();
    }
    resetToEquilibrium();
  }, []);

  const showNextCard = () => {
    if (policy && scenarios[policy] !== undefined) {
      const index = Math.floor(Math.random() * scenarios[policy].length);
      const scene = scenarios[policy][index];
      console.log(scene);
      setScenario({ ...scene });
      setEffected(false);
    }
  };

  const resetToEquilibrium = () => {
    setChartsData({
      ...setChartsData,
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 0,
      as: 0,
    });
  };

  const showEffect = () => {
    if (policy && scenarios[policy] !== undefined) {
      if (!effected) {
        setChartsData({
          ...setChartsData,
          md: chartsData["md"] + scenario["md"],
          ms: chartsData["ms"] + scenario["ms"],
          srpc: chartsData["srpc"] + scenario["srpc"],
          lrpc: chartsData["lrpc"] + scenario["lrpc"],
          production: chartsData["production"] + scenario["production"],
          ad: chartsData["ad"] + scenario["ad"],
          as: chartsData["as"] + scenario["as"],
        });
        setEffected(true);
      }
    }
  };

  return (
    <div className="">
      <div className="flex flex-col justify-between max-w-4xl mx-auto bg-indigo-500 space-y-2 px-8 md:px-24 py-4 rounded">
        <p className="uppercase text-center text-2xl md:text-4xl text-white font-extrabold">
          Predict the Effect
        </p>
        <p className="text-center text-lg text-gray-300 font-base">
          {scenario["description"]}
        </p>
        <p className="text-center text-lg text-green-300 font-base">
          {effected && scenario["effect"]}
        </p>
        <div className="flex flex-row justify-center space-x-2">
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-white hover:bg-gray-200 hover:shadow-lg font-medium md:block"
            onClick={() => {
              showEffect();
            }}
          >
            {effected ? "Effect Shown" : "Show Effect"}
          </button>
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-white hover:bg-gray-200 hover:shadow-lg font-medium md:block"
            onClick={() => {
              showNextCard();
            }}
          >
            Next Card
          </button>
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-white hover:bg-gray-200 hover:shadow-lg font-medium md:block"
            onClick={() => {
              resetToEquilibrium();
            }}
          >
            Reset to Equilibrium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
