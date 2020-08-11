/** @format */

import React from 'react';
import testData from '../Components/imagesJosn';

const Test = () => {
	let d = testData.testData;

	const on_click = () => {};

	return (
		<div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<div className="row">
				{d.map((li) => (
					<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
						<div onClick={() => on_click}>{li.name}</div>
					</div>
				))}
			</div>

			<br></br>

			<div className="row">
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<div onClick={() => on_click}>Parent 1</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<div onClick={() => on_click}>Parent 2</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<div onClick={() => on_click}>Parent 3</div>
					<hr></hr>
					<p>child1</p>
					<p>child2</p>
					<p>child3</p>
				</div>
			</div>
		</div>
	);
};

export default Test;
