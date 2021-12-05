import React from "react";

import { SupplyAndDemandCurve } from "./components/SupplyAndDemandCurve";
import { MoneyMarketCurve } from "./components/MoneyMarketCurve";
import Cards from "./components/Cards";

const Monetary = ({ policy }) => {
  return (
    <>
      <div className="flex justify-around">
        <div className="">
          <SupplyAndDemandCurve />
        </div>
        <div className="">
          <MoneyMarketCurve />
        </div>
      </div>
      <Cards policy={policy} />
    </>
  );
};

export default Monetary;
