import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

import Classical from "./Classical";
import Monetary from "./Monetary";
import Keynesian from "./Keynesian";

const App = () => {
  const [policy, setPolicy] = useState("");

  if (policy === "classical") {
    return (
      <>
        <button
          className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-400 hover:bg-gray-300 font-medium md:block"
          onClick={() => {
            setPolicy("");
          }}
        >
          Select a different theory
        </button>
        <Classical policy="classical" />
      </>
    );
  } else if (policy === "monetary") {
    return (
      <>
        <button
          className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-400 hover:bg-gray-300 font-medium md:block"
          onClick={() => {
            setPolicy("");
          }}
        >
          Select a different theory
        </button>
        <Monetary policy="monetary" />
      </>
    );
  } else if (policy === "keynesian") {
    return (
      <>
        <button
          className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-400 hover:bg-gray-300 font-medium md:block"
          onClick={() => {
            setPolicy("");
          }}
        >
          Select a different theory
        </button>
        <Keynesian policy="keynesian" />
      </>
    );
  }

  return (
    <div className="flex flex-col justify-between max-w-4xl mx-auto bg-indigo-500 space-y-6 px-8 md:px-24 md:py-8 rounded">
      <p className="uppercase text-center text-2xl md:text-4xl text-white font-extrabold">
        Predict the Market Effect Game
      </p>
      <p className="text-center text-lg md:text-2xl text-gray-100 font-base">
        Participants will be given a scenario and have to predict the effect on
        the economy in different economic theories
      </p>
      <div className="pt-6 flex flex-row justify-between">
        <div className="space-y-4">
          <h2 className="text-gray-200 text-2xl pb-2">General Concepts</h2>
          <ol className="text-gray-300 list-decimal">
            <li>Aggregate Supply</li>
            <li>Long Run Aggregate Supply</li>
            <li>Aggregate Demand</li>
            <li>Say's Law</li>
            <li>Production Possibility Curve</li>
            <li>Classical Theory</li>
            <li>Keynesian Economic Theory</li>
            <li>Monetary Policy</li>
            <li>Inflation</li>
            <li>Recession</li>
            <li>Phillips Curve</li>
            <li>Money Market Curve</li>
          </ol>
        </div>
        <div className="space-y-4">
          <h2 className="text-gray-200 text-2xl pb-2">Choose a Theory</h2>
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-200 hover:bg-gray-300 hover:shadow-lg font-medium md:block"
            onClick={() => {
              setPolicy("classical");
            }}
          >
            Classical Theory
          </button>
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-200 hover:bg-gray-300 hover:shadow-lg font-medium md:block"
            onClick={() => {
              setPolicy("monetary");
            }}
          >
            Monetary Theory
          </button>
          <button
            className="hidden focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-200 hover:bg-gray-300 hover:shadow-lg font-medium md:block"
            onClick={() => {
              setPolicy("keynesian");
            }}
          >
            Keynesian Theory
          </button>
        </div>
      </div>
    </div>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/classical" component={Classical} />
    //     <Route exact path="/monetary" component={Monetary} />
    //     <Route exact path="/keynesian" component={Keynesian} />
    //   </Routes>
    // </Router>
  );
};

export default App;
