import React from "react";
import ReactDOM from "react-dom";

import Provider from "./Provider";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
