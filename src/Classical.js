import React from "react";

import { SupplyAndDemandCurve } from "./components/SupplyAndDemandCurve";
import { PhilipsCurve } from "./components/PhilipsCurve";
import { ProductionPossibilityCurve } from "./components/ProductionPossibilityCurve";
import Cards from "./components/Cards";

const Classical = ({ policy }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <SupplyAndDemandCurve />
        </div>
        <div className="">
          <PhilipsCurve />
        </div>
        <div className="">
          <ProductionPossibilityCurve />
        </div>
      </div>
      <Cards policy={policy} />
    </>
  );
};

export default Classical;
