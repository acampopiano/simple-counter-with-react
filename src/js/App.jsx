import React from "react";
import { useState, useEffect, useRef } from "react";
import { SecondsCounter } from "./component/secondscounter";
const App = () => {
	const [seconds, setSeconds] = useState(0);

	const interval = useRef(null);

	useEffect(() => {
		if (seconds === 60) stopCounter();
	}, [seconds]);

	const startCounter = () =>
		(interval.current = setInterval(() => {
			setSeconds(prevState => prevState + 1);
		}, 1000));

	const stopCounter = () => clearInterval(interval.current);
	startCounter();
	return (
		<div>
			<SecondsCounter data={seconds} />
		</div>
	);
};
export default App;
