import React from "react";
import { useState, useEffect, useRef } from "react";
import { SecondsCounter } from "./component/secondscounter";
const App = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<SecondsCounter data={seconds} />
		</div>
	);
};
export default App;
