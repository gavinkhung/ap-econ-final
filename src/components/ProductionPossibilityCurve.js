import React, { useContext, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import Context from "../Context";

export const ProductionPossibilityCurve = React.memo(
  ({ options }) => {
    const rootEl = useRef(null);
    const { chartsData } = useContext(Context);

    useEffect(() => {
      try {
        functionPlot(
          Object.assign({}, options, {
            title: "Production Possibility Curve",
            target: rootEl.current,
            width: 400,
            height: 300,
            disableZoom: true,
            xAxis: {
              label: "x - axis",
              domain: [0, 120],
            },
            yAxis: {
              label: "y - axis",
              domain: [0, 120],
            },
            data: [
              {
                fn: `sqrt(${chartsData["production"]}^2 - x * x)`,
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
