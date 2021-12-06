import React, { useContext, useEffect, useState } from "react";

import Context from "../Context";

const scenarios = {
  classical: [
    {
      description: "All scenarios have been shown. Press next to play again.",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "A new law states that every employee must be given a pack of Pepsi at every shift.",
      effect:
        "Aggregate supply shifts to the left and the Phillips Curve shifts to the right.",
      md: 0,
      ms: 0,
      srpc: 2,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: 2,
      lras: 0,
    },
    {
      description: "Personal income taxes are decreased by 5%.",
      effect:
        "Aggregate demand shifts to the right and there is a shift along the Phillips Curve ",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "A new machine comes out that can pack Pepsi at twice the rate of current machines.",
      effect:
        "Aggregate supply shifts to the right and the Phillips Curve shifts to the left. This is economic growth.",
      md: 0,
      ms: 0,
      srpc: -2,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: -2,
      lras: 0,
    },
    {
      description:
        "A report comes out that says excess sugar leads to diabetes.",
      effect:
        "Aggregate demand shifts to the left and there is a shift along the Phillips Curve. This is a recession.",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description: "What happens to aggregate supply in the long run?",
      effect:
        "After some time (18-24 months), the market should adjust itself back to equilibrium.",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: 0,
      lras: 0,
    },
  ],
  keynesian: [
    {
      description: "",
      effect: "",
      md: 0,
      ms: 0,
      srpc: -2,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: 2,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is a recession",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "In a recession, what would an expansionary fiscal policy include?",
      effect:
        "It would include decreasing taxes and increasing government spending to increase aggregate demand.",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is inflation",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During inflation, what would an contractionary fiscal policy include?",
      effect:
        "It would include increasing taxes and decreasing government spending to decrease aggregate demand.",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
  ],
  monetary: [
    {
      description: "All scenarios have been shown. Press next to play again.",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 0,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is inflation",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During inflation, what would a contractionary monetary policy do to the discount rate?",
      effect:
        "It would include raising the discount rate to discourage loans, which decreases aggregate demand and decreases the money supply.",
      md: 0,
      ms: -2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is inflation",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During inflation, what would a contractionary monetary policy do to the reserve requirement?",
      effect:
        "It would include raising the discount rate to discourage loans, which decreases aggregate demand and decreases the money supply.",
      md: 0,
      ms: -2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is inflation",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During inflation, what would a contractionary monetary policy do to bonds?",
      effect: "It would include selling bonds to decrease the money supply.",
      md: 0,
      ms: -2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    //
    {
      description: "The next scenario assumes that there is a recession",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During a recession, what would a expansionary monetary policy do to the discount rate?",
      effect:
        "It would include decreasing the discount rate to encourage loans, which increases aggregate demand and increases the money supply.",
      md: 0,
      ms: 2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is a recession",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During a recession, what would a expansionary monetary policy do to the reserve requirement?",
      effect:
        "It would include decreasing the reserve requirement to encourage loans, which increases aggregate demand and increases the money supply.",
      md: 0,
      ms: 2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
    {
      description: "The next scenario assumes that there is a recession",
      effect: "",
      md: 0,
      ms: 0,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: -2,
      sras: 0,
      lras: 0,
    },
    {
      description:
        "During a recession, what would a expansionary monetary policy do to bonds?",
      effect:
        "It would include buying bonds, which increases aggregate demand and increases the money supply.",
      md: 0,
      ms: 2,
      srpc: 0,
      lrpc: 0,
      production: 100,
      ad: 2,
      sras: 0,
      lras: 0,
    },
  ],
};

const Cards = ({ policy }) => {
  const { chartsData, setChartsData } = useContext(Context);
  const [scenario, setScenario] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [effected, setEffected] = useState(false);

  useEffect(() => {
    if (policy && scenarios[policy] !== undefined) {
      showNextCard();
    }
    resetToEquilibrium();

    return () => {
      resetToEquilibrium();
      setCurrentIndex(0);
      setEffected(false);
      setScenario({});
    };
  }, []);

  const showNextCard = () => {
    if (!effected) {
      showEffect();
    }
    if (
      policy &&
      scenarios[policy] !== undefined &&
      currentIndex < scenarios[policy].length
    ) {
      // const index = Math.floor(Math.random() * scenarios[policy].length);
      const index = (currentIndex + 1) % scenarios[policy].length;
      const scene = scenarios[policy][index];

      setScenario({ ...scene });
      setCurrentIndex(index);
      setEffected(false);
      // resetToEquilibrium();
      if (index == 0) {
        resetToEquilibrium();
      }
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
      sras: 0,
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
          production: chartsData["production"],
          ad: chartsData["ad"] + scenario["ad"],
          sras: chartsData["sras"] + scenario["sras"],
        });
        setEffected(true);
      } else {
        setChartsData({
          ...setChartsData,
          md: chartsData["md"] - scenario["md"],
          ms: chartsData["ms"] - scenario["ms"],
          srpc: chartsData["srpc"] - scenario["srpc"],
          lrpc: chartsData["lrpc"] - scenario["lrpc"],
          production: chartsData["production"],
          ad: chartsData["ad"] - scenario["ad"],
          sras: chartsData["sras"] - scenario["sras"],
        });
        setEffected(false);
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
