import React from "react";

import { SupplyAndDemandCurve } from "./components/SupplyAndDemandCurve";
import { PhilipsCurve } from "./components/PhilipsCurve";
import { ProductionPossibilityCurve } from "./components/ProductionPossibilityCurve";
import Cards from "./components/Cards";

const Keynesian = ({ policy }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <SupplyAndDemandCurve />
        </div>
      </div>
      <Cards policy={policy} />
    </>
  );
};

export default Keynesian;
