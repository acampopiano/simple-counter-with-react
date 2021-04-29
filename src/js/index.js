//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./component/secondscounter";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

ReactDOM.render(<SecondsCounter seconds={0} />, document.querySelector("#app"));
