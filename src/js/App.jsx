import React from "react";
import { useState, useEffect } from "react";
import { SecondsCounter } from "./component/secondscounter";

const App = () => {
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(0);
	const [hour, setHour] = useState(0);
	const [day, setDay] = useState(0);
	const [month, setMonth] = useState(0);
	const [year, setYear] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [counter, setCounter] = useState(0);

	const active = () => {
		if (isActive) setIsActive(false);
		else setIsActive(true);
	};

	const stopTimer = () => {
		setIsActive(false);
		setCounter(0);
		setSecond(0);
		setMinute(0);
		setHour(0);
		setDay(0);
		setMonth(0);
		setYear(0);
	};
	useEffect(() => {
		let intervalId;

		if (isActive) {
			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor(counter / 60);
				const hourCounter = Math.floor(counter / (60 * 60));
				const dayCounter = Math.floor(counter / (60 * 60 * 24));
				const monthCounter = Math.floor(counter / (60 * 60 * 24 * 30));
				const yearCounter = Math.floor(
					counter / (60 * 60 * 24 * 30 * 12)
				);

				setSecond(secondCounter);
				setMinute(minuteCounter);
				setHour(hourCounter);
				setDay(dayCounter);
				setMonth(monthCounter);
				setYear(yearCounter);

				setCounter(counter => counter + 1);
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isActive, counter]);

	return (
		<div>
			<SecondsCounter
				second={second}
				minute={minute}
				hour={hour}
				day={day}
				month={month}
				year={year}
				active={isActive}
			/>
		</div>
	);
};
export default App;
