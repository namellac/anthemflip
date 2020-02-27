import React from "react";
import { render } from "react-dom";


import Anthem from "./Anthem.jsx";
import Greeting from "./Greeting.jsx";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"

};


const App = () => (
  <div style={styles}>
    <Greeting />
    <Anthem />
  </div>
);

render(<App />, document.getElementById("root"));
