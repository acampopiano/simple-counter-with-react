import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const SecondsCounter = props => {
	const [t6, setT6] = useState(0);
	const [t5, setT5] = useState(0);
	const [t4, setT4] = useState(0);
	const [t3, setT3] = useState(0);
	const [t2, setT2] = useState(0);
	const [t1, setT1] = useState(0);

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
					<div className="numbers">{t1}</div>
				</div>
				<div className="t2">
					<div className="numbers">{t2}</div>
				</div>
				<div className="t3">
					<div className="numbers">{t3}</div>
				</div>
				<div className="t4">
					<div className="numbers">{t4}</div>
				</div>
				<div className="t5">
					<div className="numbers">{t5}</div>
				</div>
				<div className="t6">
					<div className="numbers">{t6}</div>
				</div>
			</div>
			<h1>Simple Counter with React</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	data: PropTypes.number
};
