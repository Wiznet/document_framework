/** @format */

import React from 'react';

const Nested_level1 = (props) => {
	return (
		<div>
			{props.nested_data && (
				<div className="row">
					<div className="col">
						{props.nested_data.map((li, index) => (
							<div key={index}>
								<img
									src={li.img_url}
									alt={li.name}
									className="nested_img"></img>
								<div className="nested_img_label">{li.name}</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Nested_level1;
