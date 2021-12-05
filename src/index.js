import React from "react";
import ReactDOM from "react-dom";

import Provider from "./Provider";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <Provider>
    <div className="bg-gray-100 p-4 w-screen h-screen space-y-4 overflow-hidden">
      <div className="space-y-12 mb-6">
        <div className="space-y-4">
          <h1 className="text-black text-5xl font-extrabold ">
            Creative Economic Assignment
          </h1>
          <p className="text-gray-800 text-3xl">Gavin Hung Period: 1</p>
        </div>
      </div>
      <App />
    </div>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
