/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import product_img from '../../Images/Home/Products.png';
import Design_guid from '../../Images/Home/Design Guide.png';
import Var from '../../Images/Home/VAR.png';

const Home_middle1 = () => {
	const history = useHistory();
	const product_click = () => {
		history.push('/products');
	};
	const Design_guid_click = () => {
		window.open(
			'https://doc.wiznet.io/docs/Design-Guide/design_guide',
			'_self'
		);
	};
	const Var_click = () => {
		window.open(
			'https://doc.wiznet.io/docs/VAR-Products-using-WIZnet/var_products_using_wiznet',
			'_self'
		);
	};
	return (
		<div>
			<div className="row home_1">
				<div className="home1_div" onClick={product_click}>
					<img className="home1_img" src={product_img} alt="Product"></img>

					<h3 className="text-center img_heading">Products</h3>
				</div>

				<div className="home1_div" onClick={Design_guid_click}>
					<img className="home1_img" src={Design_guid} alt="Design Guide"></img>

					<h3 className="text-center img_heading">Design Guide</h3>
				</div>
				<div className="home1_div" onClick={Var_click}>
					<img className="home1_img" src={Var} alt="VAR"></img>

					<h3 className="text-center img_heading">VAR Products</h3>
				</div>
			</div>
		</div>
	);
};

export default Home_middle1;
