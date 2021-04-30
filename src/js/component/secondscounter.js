import React from "react";
import PropTypes from "prop-types";
//import { useState, useEffect } from "react";

export const SecondsCounter = props => {
	/*useEffect(() => {
		//place code here which needs to be run after a state update
		if (props.data === 60) stopCounter()
	}, [props.data]);*/

	return (
		<div className="container">
			<div id="timer">
				<div className="clock">
					<div className="numbers">
						<i className="fas fa-clock"></i>
					</div>
				</div>
				<div className="t1">
					<div className="numbers">{props.year}</div>
				</div>
				<div className="t2">
					<div className="numbers">{props.mont}</div>
				</div>
				<div className="t3">
					<div className="numbers">{props.day}</div>
				</div>
				<div className="t4">
					<div className="numbers">{props.hour}</div>
				</div>
				<div className="t5">
					<div className="numbers">{props.minute}</div>
				</div>
				<div className="t6">
					<div className="numbers">{props.second}</div>
				</div>
			</div>
			<h1>Simple Counter with React</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	second: PropTypes.string,
	minute: PropTypes.string,
	hour: PropTypes.string,
	day: PropTypes.string,
	month: PropTypes.string,
	year: PropTypes.string
};
