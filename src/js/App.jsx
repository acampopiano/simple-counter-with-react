import React from "react";
import { useState, useEffect } from "react";
import { SecondsCounter } from "./component/secondscounter";
const App = () => {
	/*const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
    }, []);*/

	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("00");
	const [hour, setHour] = useState("00");
	const [day, setDay] = useState("00");
	const [month, setMonth] = useState("00");
	const [year, setYear] = useState("00");
	const [isActive, setIsActive] = useState(true);
	const [counter, setCounter] = useState(0);

	function stopTimer() {
		setIsActive(false);
		setCounter(0);
		setSecond("00");
		setMinute("00");
		setHour("00");
		setDay("00");
		setMonth("00");
		setYear("00");
	}
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

				const computedSecond =
					String(secondCounter).length === 1
						? `0${secondCounter}`
						: secondCounter;
				const computedMinute =
					String(minuteCounter).length === 1
						? `0${minuteCounter}`
						: minuteCounter;
				const computedHour =
					String(hourCounter).length === 1
						? `0${hourCounter}`
						: hourCounter;
				const computedDay =
					String(dayCounter).length === 1
						? `0${dayCounter}`
						: dayCounter;
				const computedMonth =
					String(monthCounter).length === 1
						? `0${monthCounter}`
						: monthCounter;
				const computedYear =
					String(yearCounter).length === 1
						? `0${yearCounter}`
						: yearCounter;

				setSecond(computedSecond);
				setMinute(computedMinute);
				setHour(computedHour);
				setDay(computedDay);
				setMonth(computedMonth);
				setYear(computedYear);

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
			/>
		</div>
	);
};
export default App;
