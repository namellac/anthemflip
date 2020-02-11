import React from "react";
import { render } from "react-dom";

import Anthem from "./Anthem.jsx";
import Greeting from "./Greeting.jsx";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
    console.log(fontFamily);
};

const App = () => (
  <div >

    <Greeting />
    <Anthem />
  </div>
);

render(<App />, document.getElementById("root"));
