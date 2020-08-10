/** @format */

import React, { useState, useEffect } from 'react';
import { Fade } from 'react-bootstrap';

const Link = (name) => {
	switch (name) {
		case 'W7500':
			return window.open(
				'https://doc.wiznet.io/docs/Product/iMCU/W7500/overview',
				'_self'
			);
		case 'W7500p':
			return window.open(
				'/docs/doc2',
				// 'https://doc.wiznet.io/docs/Product/iMCU/W7500p/overview',
				'_self'
			);
		case 'W7100A':
			return window.open(
				'https://doc.wiznet.io/docs/Product/iMCU/W7100A/overview',
				'_self'
			);
		case 'W7500(P)-S2E':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-[EN]',
				'_self'
			);
		case 'W6100':
			return window.open(
				'https://doc.wiznet.io/docs/Product/iEthernet/W6100/overview',
				'_self'
			);
		case 'W5100S':
			return window.open(
				'https://doc.wiznet.io/docs/Product/iEthernet/W5100S/overview',
				'_self'
			);
		case 'W5500':
			return window.open(
				'https://doc.wiznet.io/docs/Product/iEthernet/W5500/overview',
				'_self'
			);
		case 'W5300':
			return window.open('https://www.wiznet.io/product-item/w5300/', '_self');
		case 'W5100':
			return window.open('https://www.wiznet.io/product-item/w5100/', '_self');
		case 'W3150A':
			return window.open(
				'https://www.wiznet.io/product-item/w3150a+/',
				'_self'
			);
		case 'W7500S2E-R1':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/W7500S2E-R1/w7500s2e_r1',
				'_self'
			);
		case 'W7500S2E-S1':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/W5500S2E-S1/w5500s2e_s1',
				'_self'
			);
		case 'W7500S2E-S1':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/W5500S2E-Z1/w5500s2e_z1',
				'_self'
			);
		case 'WIZ750SR':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ750SR/wiz750sr',
				'_self'
			);
		case 'WIZ550SR':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ550SR/wiz550sr',
				'_self'
			);
		case 'WIZ550S2E':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ550S2E/wiz550s2e',
				'_self'
			);
		case 'WIZ107SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz107sr/',
				'_self'
			);
		case 'WIZ108SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz108sr/',
				'_self'
			);
		case 'WIZ100SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz100sr/',
				'_self'
			);
		case 'WIZ105SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz105sr/',
				'_self'
			);
		case 'WIZ110SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz110sr/',
				'_self'
			);
		case 'WIZ120SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz120sr/',
				'_self'
			);
		case 'WIZ125SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz125sr/',
				'_self'
			);
		case 'WIZ140SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz140sr/',
				'_self'
			);
		case 'WIZ145SR':
			return window.open(
				'https://www.wiznet.io/product-item/wiz145sr/',
				'_self'
			);
		case 'WIZ610io':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ610io/wiz610io',
				'_self'
			);
		case 'WIZ610MJ':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ610MJ/wiz610mj',
				'_self'
			);
		case 'WIZ810Sio':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ810Sio/wiz810sio',
				'_self'
			);
		case 'WIZ810SMJ':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ810SMJ/wiz810smj',
				'_self'
			);
		case 'WIZ850io':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ850io/wiz850io',
				'_self'
			);
		case 'WIZ550io':
			return window.open(
				'https://doc.wiznet.io/docs/Product/ioModule/WIZ550io/overview',
				'_self'
			);
		case 'WIZ820io':
			return window.open(
				'https://www.wiznet.io/product-item/wiz820io/',
				'_self'
			);
		case 'WIZ810MJ':
			return window.open(
				'https://www.wiznet.io/product-item/wiz810mj/',
				'_self'
			);
		case 'WIZ811MJ':
			return window.open(
				'https://www.wiznet.io/product-item/wiz811mj/',
				'_self'
			);
		case 'WIZ812MJ':
			return window.open(
				'https://www.wiznet.io/product-item/wiz812mj/',
				'_self'
			);
		case 'WIZ830MJ':
			return window.open(
				'https://www.wiznet.io/product-item/wiz830mj/',
				'_self'
			);
		case 'NM7010B+':
			return window.open(
				'https://www.wiznet.io/product-item/nm7010b+/',
				'_self'
			);
		case 'WIZ550web':
			return window.open(
				'https://doc.wiznet.io/docs/Product/App-Module/WIZ550web/wiz550web',
				'_self'
			);
		case 'WizFi360':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Wi-Fi-Module/WizFi360/wizfi360',
				'_self'
			);
		case 'WizFi250':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Wi-Fi-Module/WizFi250/wizfi250',
				'_self'
			);
		case 'WizFi310':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Wi-Fi-Module/WizFi310/wizfi310',
				'_self'
			);
		case 'WizFi630S':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Wi-Fi-Module/WizFi630S/wizfi630s',
				'_self'
			);
		case 'WizFi630A':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Wi-Fi-Module/WizFi630A/wizfi630a',
				'_self'
			);

		case 'WIZwiki-W7500':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/overview',
				'_self'
			);
		case 'WIZwiki-W7500P':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/overview',
				'_self'
			);
		case 'WIZwiki-W7500ECO':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/overview',
				'_self'
			);
		case 'WIZwiki-W7500 Mbed Starter Kit':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit',
				'_self'
			);
		case 'W5100S (MKR-)Ethernet Shield':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield',
				'_self'
			);
		case 'W6100 (MKR-)Ethernet Shield':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/w6100_mkr_ethernet_shield',
				'_self'
			);
		case 'WizArduino M0 ETH':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/wizarduino_m0_eth',
				'_self'
			);
		case 'WizArduino MEGA WIFI':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/wizarduino_mega_wifi',
				'_self'
			);
		case 'WizFi310 Shield':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/wizfi310_shield',
				'_self'
			);
		case 'W5500 Ethernet Shield':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/w5500_ethernet_shield',
				'_self'
			);
		case 'ioShield-A':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/ioshield_a',
				'_self'
			);
		case 'ioShield-K':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/ioshield_k',
				'_self'
			);
		case 'ioShield-L':
			return window.open(
				'https://doc.wiznet.io/docs/Product/Open-Source-Hardware/ioshield_l',
				'_self'
			);
		case 'WIZ750SR-100':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-100/wiz750sr_100',
				'_self'
			);
		case 'WIZ750SR-105':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-105/wiz750sr_105',
				'_self'
			);
		case 'WIZ750SR--110':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ750SR-1xx-Series/WIZ750SR-110/wiz750sr_110',
				'_self'
			);
		case 'WIZ752SR-120':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr_120',
				'_self'
			);

		case 'WIZ752SR-125':
			return window.open(
				'https://doc.wiznet.io/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/wiz752sr_125',
				'_self'
			);
		default:
			return null;
	}
};

const Nested_product_bar = (props) => {
	const [open, setOpen] = useState(null);
	const [onhoverimg, setonhoverimg] = useState('');
	const [index_id, setindex_id] = useState(null);
	const [nested, setnested] = useState('');
	const [selectedChild, selectionChild] = useState('');
	const img_click = (index, li) => {
		setnested(li.name);

		if (li.child1) {
			if (li.name === nested) {
				setnested('');
			} else setnested(li.name);
		} else {
			Link(li.name);
		}
	};
	const img_click_nested = (i, li) => {
		Link(li.name);
	};
	const on_mouse_enter_img = (index) => {
		setindex_id(index);
		setonhoverimg('on_img_hover_name');
	};
	const on_mouse_leave_img = () => {
		setonhoverimg('');
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
					<div className="box_inside mt-3">
						<div className="most_popular_product">
							THE MOST POPULAR PRODUCTS OF <div>{props.product_name}</div>
						</div>
						<div className="empty_rect"></div>
						<div>
							<img
								src={props.clicked_data.image}
								alt={props.clicked_data.img_name}
								className="popular_img"></img>
						</div>
					</div>
					{/* // caused image property issue earlier */}
					<div className="popular_product_div pt-4"> 
					{/* // caused image property issue earlier */}
					
						{props.clicked_data.img_name}
						<span className="float-right mr-4">{'➤'}</span>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
					<div className="middle_img_heading">{props.product_name}</div>
					<div className="tag_line mb-4">{props.clicked_data.tag_line}</div>
					<div className="row">
						{props &&
							props.image_data &&
							props.image_data.child.map((li, index) => (
								<div key={index}>
									<div
										//was causing trouble with docausaurus css
										 className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 container_img" 
										//was causing trouble with docausaurus css
										className="container_img"

										key={index}
										onClick={() => img_click(index, li)}
										aria-controls={index}
										aria-expanded={open === index ? true : false}>
										<img
											src={li.img_url}
											alt={li.name}
											onMouseEnter={() => on_mouse_enter_img(index)}
											onMouseLeave={on_mouse_leave_img}
											className="middle_img"></img>

										<div
											className={
												index === index_id
													? `middle_img_label ${onhoverimg}`
													: 'middle_img_label'
											}>
											{li.name}
										</div>
									</div>

									{li.child1 && (
										<div className="divnested1" align="center">
											{li.name === nested &&
												li.child1.map((li, index) => (
													<div
														key={index}
														onClick={() => img_click_nested(index, li)}
														className="">
														<img
															src={li.img_url}
															alt={li.name}
															onMouseEnter={() => on_mouse_enter_img(index)}
															onMouseLeave={on_mouse_leave_img}
															className="nested_img"></img>
														<div
															className={
																index === index_id
																	? `nested_img_label ${onhoverimg}`
																	: 'nested_img_label'
															}>
															{li.name}
														</div>
													</div>
												))}
										</div>
									)}
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nested_product_bar;
