/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../Views/Landing';
import Navbar from '../Components/Navbar';
import Products from '../Views/Products';
import test from '../Views/test';
import Download from '../Views/Download';
import Pagenotfound from '../Views/Pagenotfound';
//import Contact_support from '../Views/Contact_support';
const Routes = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				
				<Route path="/products" component={Products} />

				<Route path="/test" component={test} />

				<Route path="/download" component={Download} />
		
				<Route path="/*" component={Pagenotfound} />

				{/* <Route path="/Contact" component={Contact_support} /> */}

			</Switch>
		</div>
	);
};

export default Routes;
