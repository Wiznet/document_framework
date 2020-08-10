/** @format */

import React, { useState } from 'react';
//import ReactTransitions from 'react-transitions';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../Images/Home/Logo.png';
import Search_icon from '../Images/Home/Search - White.png';
import cross from '../Images/Home/Cross.png';

import '../Styles/navbar.css';

export default () => {
	const history = useHistory();
	const [search_click, setsearch_click] = useState(false);
	const search_icon_click = () => {
		setsearch_click(!search_click);
	};
	const cross_click = () => {
		setsearch_click(!search_click);
	};
	const products = () => {
		history.push('/products');
	};
	const Design_guide = () => {
		window.open(
			'https://doc.wiznet.io/docs/Design-Guide/design_guide',
			'_self'
		);
	};
	const Var_products = () => {
		window.open(
			'https://doc.wiznet.io/docs/VAR-Products-using-WIZnet/var_products_using_wiznet',
			'_self'
		);
	};
	const img_wiz_click = () => {
		history.push('/');
	};
	const forum = () => {};
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="fixed-top align-content-end nav_background">
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<li className="navbar-brand">
					<Link>
						<img
							src={logo}
							alt="Logo"
							className="logo_wiznet"
							onClick={img_wiz_click}></img>
					</Link>
				</li>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto nav_menus">
						<NavDropdown title="Docs" id="collasible-nav-dropdown">
							<NavDropdown.Item onClick={products}>Products</NavDropdown.Item>
							<NavDropdown.Item onClick={Design_guide}>
								Design guide
							</NavDropdown.Item>
							<NavDropdown.Item onClick={Var_products}>
								VAR Products
							</NavDropdown.Item>
						</NavDropdown>
						<li className="nav-item">
							<NavLink
								activeClassName="active"
								className="nav-link"
								to="/download"
								id="download">
								Download
							</NavLink>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="forum"
								href="https://forum.wiznet.io"
								target="_self"
								aria-controls="responsive-navbar-nav">
								Forum
							</a>
						</li>
						<li className="nav-item">
							<a
								href="https://www.wiznet.io/"
								target="_self"
								className="nav-link menuStyle"
								id="wiznet">
								WIZnet
							</a>
						</li>
					</Nav>

					<Nav className="ml-auto">
						{search_click && (
							<div className="input-group nav_search_grp">
								<input
									type="text"
									className="form-control nav_search_input"
									placeholder="Search by product name"
								/>
								<div className="input-group-append">
									<div className="nav_search_btn">
										<img
											src={cross}
											alt="Cross"
											className="img_cross"
											on
											onClick={cross_click}></img>
									</div>
								</div>
							</div>
						)}
						{search_click === false && (
							<img
								src={Search_icon}
								alt="Search_icon"
								onClick={search_icon_click}
								className="search_icon"></img>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
