//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./component/secondscounter";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
ReactDOM.render(
	<SecondsCounter seconds={12} />,
	document.querySelector("#app")
);
