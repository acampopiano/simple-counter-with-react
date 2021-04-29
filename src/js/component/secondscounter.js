import React from "react";
import PropTypes from "prop-types";
export const SecondsCounter = props => {
	return (
		<div className="container">
			<div id="timer">
				<div className="clock">
					<div className="numbers">
						<i className="fas fa-clock"></i>
					</div>
				</div>
				<div className="t1">
					<div className="numbers">{props.seconds}</div>
				</div>
				<div className="t2">
					<div className="numbers">{props.seconds}</div>
				</div>
				<div className="t3">
					<div className="numbers">{props.seconds}</div>
				</div>
				<div className="t4">
					<div className="numbers">{props.seconds}</div>
				</div>
				<div className="t5">
					<div className="numbers">{props.seconds}</div>
				</div>
				<div className="t6">
					<div className="numbers">{props.seconds}</div>
				</div>
			</div>
			<h1>Simple Counter with React</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
