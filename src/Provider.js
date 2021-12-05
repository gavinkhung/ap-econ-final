import React, { useState } from "react";

import Context from "./Context";

const Provider = (props) => {
  const [chartsData, setChartsData] = useState({
    md: 0,
    ms: 0,
    srpc: 0,
    lrpc: 0,
    production: 100,
    ad: 0,
    as: 0,
  });

  return (
    <Context.Provider
      value={{
        chartsData: chartsData,
        setChartsData: setChartsData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
