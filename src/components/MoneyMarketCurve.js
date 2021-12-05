import React, { useContext, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import Context from "../Context";

export const MoneyMarketCurve = React.memo(
  ({ options }) => {
    const rootEl = useRef(null);
    const { chartsData } = useContext(Context);

    useEffect(() => {
      try {
        functionPlot(
          Object.assign({}, options, {
            title: "Money Market Graph",
            target: rootEl.current,
            width: 400,
            height: 300,
            disableZoom: true,
            xAxis: {
              label: "Quantity of Money",
              domain: [0, 10],
            },
            yAxis: {
              label: "Nominal Interest Rate %",
              domain: [0, 10],
            },
            data: [
              {
                fn: `-x+${6 + chartsData["md"]}`,
              },
              {
                points: [
                  [5 + chartsData["ms"], 0],
                  [5 + chartsData["ms"], 1],
                  [5 + chartsData["ms"], 2],
                  [5 + chartsData["ms"], 3],
                  [5 + chartsData["ms"], 4],
                  [5 + chartsData["ms"], 5],
                  [5 + chartsData["ms"], 6],
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
