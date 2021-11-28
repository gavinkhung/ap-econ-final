import React, { useState } from "react";

import Context from "./Context";

const Provider = (props) => {
  const [chartsData, setChartsData] = useState({
    production: 1,
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
