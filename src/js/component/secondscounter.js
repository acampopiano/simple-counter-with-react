import React from "react";
import PropTypes from "prop-types";

import stopTimer from "../App.jsx";
import active from "../App.jsx";

export const SecondsCounter = props => {
	return (
		<div className="container">
			<div id="timer">
				<div className="clock">
					<div className="numbers">
						<i className="fas fa-clock"></i>
					</div>
					Clock
				</div>
				<div className="t1">
					<div className="numbers">{props.year}</div>
					Years
				</div>
				<div className="t2">
					<div className="numbers">{props.month}</div>
					Months
				</div>
				<div className="t3">
					<div className="numbers">{props.day}</div>
					Days
				</div>
				<div className="t4">
					<div className="numbers">{props.hour}</div>
					Hours
				</div>
				<div className="t5">
					<div className="numbers">{props.minute}</div>
					Minutes
				</div>
				<div className="t6">
					<div className="numbers">{props.second}</div>
					Seconds
				</div>
			</div>
			<div className="buttons d-flex justify-content-center">
				<button onClick={active} className="start">
					{props.active ? "Pause" : "Start"}
				</button>
				<button onClick={stopTimer} className="reset">
					Reset
				</button>
			</div>
			<h1>Simple Counter with React</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	second: PropTypes.number,
	minute: PropTypes.number,
	hour: PropTypes.number,
	day: PropTypes.number,
	month: PropTypes.number,
	year: PropTypes.number,
	active: PropTypes.bool
};
