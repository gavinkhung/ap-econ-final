import React, { useContext, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import Context from "../Context";

export const SupplyAndDemandCurve = React.memo(
  ({ options }) => {
    const rootEl = useRef(null);
    const { chartsData } = useContext(Context);

    useEffect(() => {
      try {
        functionPlot(
          Object.assign({}, options, {
            title: "Aggregate Supply and Demand",
            target: rootEl.current,
            width: 400,
            height: 300,
            disableZoom: true,
            xAxis: {
              label: "Real GDP",
              domain: [0, 10],
            },
            yAxis: {
              label: "Price Level",
              domain: [0, 10],
            },
            data: [
              {
                fn: `-x+${6 + chartsData["ad"]}`,
              },
              {
                fn: `x+${chartsData["sras"]}`,
              },
              {
                points: [
                  [5 + chartsData["lras"], 0],
                  [5 + chartsData["lras"], 1],
                  [5 + chartsData["lras"], 2],
                  [5 + chartsData["lras"], 3],
                  [5 + chartsData["lras"], 4],
                  [5 + chartsData["lras"], 5],
                  [5 + chartsData["lras"], 6],
                ],
                fnType: "points",
                graphType: "polyline",
              },
            ],
          })
        );
      } catch (e) {}
    }, [chartsData]);

    return <div ref={rootEl} />;
  },
  () => false
);
