//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

ReactDOM.render(<App />, document.querySelector("#app"));
