import React, { useContext, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import Context from "../Context";

export const PhilipsCurve = React.memo(
  ({ options }) => {
    const rootEl = useRef(null);
    const { chartsData } = useContext(Context);

    useEffect(() => {
      try {
        functionPlot(
          Object.assign({}, options, {
            title: "Philips Curve",
            target: rootEl.current,
            width: 400,
            height: 300,
            disableZoom: true,
            xAxis: {
              label: "Unemployment Rate %",
              domain: [0, 10],
            },
            yAxis: {
              label: "Inflation Rate %",
              domain: [0, 10],
            },
            data: [
              {
                fn: `1/(x-${chartsData["srpc"]})`,
              },
              {
                points: [
                  [5 + chartsData["lrpc"], 0],
                  [5 + chartsData["lrpc"], 1],
                  [5 + chartsData["lrpc"], 2],
                  [5 + chartsData["lrpc"], 3],
                  [5 + chartsData["lrpc"], 4],
                  [5 + chartsData["lrpc"], 5],
                  [5 + chartsData["lrpc"], 6],
                  [5 + chartsData["lrpc"], 7],
                  [5 + chartsData["lrpc"], 8],
                  [5 + chartsData["lrpc"], 9],
                  [5 + chartsData["lrpc"], 10],
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
