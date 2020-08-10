/** @format */

import React from 'react';
import logo from '../../Images/Home/Logo.png';
import Github from '../../Images/Home/Github.png';
import Share from '../../Images/Home/Share.png';
import Twitter from '../../Images/Home/Twitter.png';
import Youtube from '../../Images/Home/Youtube.png';

const Footer = () => {
	const git_hub = () => {
		window.open('https://github.com/Wiznet', '_self');
	};
	const twit_ter = () => {
		window.open('https://twitter.com/wiznetteam', '_self');
	};
	const yout_ube = () => {
		window.open('https://www.youtube.com/user/WIZnetTechnology', '_self');
	};
	const forum = () => {
		window.open('https://forum.wiznet.io', '_self');
	};
	return (
		<div>
			<div className="navbar_footer ">
				<div className="row container-fluid">
					<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text-left ">
						<img src={logo} alt="WIZnet" className="footer_logo"></img>
					</div>
					<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
						<div className="footer_right">
							<h3 className="social_head">Social</h3>
							<div className="form-inline">
								<img src={Share} alt="WIZnet" className="Share"></img>

								<img
									src={Github}
									alt="Git Hub"
									className="Git_Hub"
									onClick={git_hub}></img>

								<img
									src={Twitter}
									alt="Twitter"
									className="Twitter"
									onClick={twit_ter}></img>

								<img
									src={Youtube}
									alt="Youtube"
									className="Youtube"
									onClick={yout_ube}></img>
							</div>
							<div className="pt-3 contact_us_forum" onClick={forum}>
								Contact Us | Forum
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
