/** @format */

import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-transitions/dist/animations.css';
import Routes from './Router/Routes';
import './App.css';

function App() {
	return (
		<router>
			<div className="App wrapper">
				<Routes />
			</div>
		</router>
	);
}

export default App;
