import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

import Home from "./Home";
import Classical from "./Classical";
import Monetary from "./Monetary";
import Keynesian from "./Keynesian";

const App = () => {
  const [policy, setPolicy] = useState("");

  if (policy === "classical") {
    return <Classical />;
  } else if (policy === "monetary") {
    return <Monetary />;
  } else if (policy === "keynesian") {
    return <Keynesian />;
  }
  return (
    <>
      <Home />
    </>
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
