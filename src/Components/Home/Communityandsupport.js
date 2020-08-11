/** @format */

import React from 'react';
import forun_img from '../../Images/Home/Forum.png';
import Support_img from '../../Images/Home/Support.png';
import { useHistory } from 'react-router-dom';

import '../../Styles/home.css';

const Communityandsupport = () => {
	const history = useHistory();
	const forum_on_click = () => {
		window.open('https://forum.wiznet.io', '_self');
	};
	const Contact_on_click = () => {
		window.open('/Contact', '_self');
		// history.push('');
	};
	return (
		<div className="container-fluid community_support_box">
			<div className="form-inline ">
				<div className="status_color mr-5"></div>
				<h3 className="heading_community ml-3">Community and Support</h3>
			</div>
			<div className="row row_class">
				<div
					className="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-6 form-inline community_support"
					onClick={forum_on_click}>
					<div>
						<img src={forun_img} alt="Forum"></img>
					</div>
					<div>
						<div className="forum">Forum</div>
					</div>
				</div>
				<div
					className="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-6 form-inline community_support"
					onClick={Contact_on_click}>
					<div>
						<img src={Support_img} alt="Support_img"></img>
					</div>
					<div className="contact_tech">Contact Tech Support</div>
				</div>
			</div>
		</div>
	);
};

export default Communityandsupport;
