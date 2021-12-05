import React, { useContext, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import Context from "../Context";

export const Chart = React.memo(
  ({ options }) => {
    const rootEl = useRef(null);
    const { chartsData } = useContext(Context);

    console.log(chartsData["production"]);

    useEffect(() => {
      try {
        functionPlot(
          Object.assign({}, options, {
            title: "y = x * x",
            target: rootEl.current,
            width: 400,
            height: 300,
            disableZoom: true,
            xAxis: {
              label: "x - axis",
              domain: [0, 6],
            },
            yAxis: {
              label: "y - axis",
              domain: [0, 6],
            },
            data: [
              {
                fn: `x^2+${chartsData["production"]}`,
              },
            ],
          })
        );
      } catch (e) {}
    });

    return <div ref={rootEl} />;
  },
  () => false
);
