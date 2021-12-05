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
              domain: [0, 6],
            },
            yAxis: {
              label: "Price Level",
              domain: [0, 6],
            },
            data: [
              {
                fn: `-x+${6 + chartsData["ad"]}`,
              },
              {
                fn: `x+${chartsData["as"]}`,
              },
              {
                points: [
                  [3, 0],
                  [3, 1],
                  [3, 2],
                  [3, 3],
                  [3, 4],
                  [3, 5],
                  [3, 6],
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
