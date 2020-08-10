/** @format */

import React from 'react';
import Home1 from '../Home/home_middle1';
import BG_img from '../../Images/Home/BG.png';
import ComunitySupport from '../Home/Communityandsupport';
import Footer from '../Home/footer';
import '../../Styles/home.css';

const home_middle = () => {
	return (
		<div>
			<img src={BG_img} className="back_groundimg" alt="back_groundimg"></img>
			<div className="over_image">
				<div className="home_container">
					<h3 className="welcome_text">Welcome to WIZnet </h3>
					<h3 className="welcome_text">Documents</h3>

					<div className="below_heading">
						a place to find everything you require for WIZnet Products
					</div>
					<div className="input-group mt-5 input_search_grp">
						<input
							type="text"
							className="form-control search_home"
							placeholder="Search by product name"
						/>
						<div className="input-group-append">
							<button className="btn search_home_btn" type="submit">
								Search
							</button>
						</div>
					</div>
					<div align="center">
						<Home1 />
					</div>
				</div>
			</div>

			<ComunitySupport />
			<Footer />
		</div>
	);
};

export default home_middle;
