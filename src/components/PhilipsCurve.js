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
              domain: [0, 6],
            },
            yAxis: {
              label: "Inflation Rate %",
              domain: [0, 6],
            },
            data: [
              {
                fn: `1/x+${chartsData["srpc"]}`,
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
