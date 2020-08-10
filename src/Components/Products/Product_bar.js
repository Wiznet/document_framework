/** @format */

import React, { useState, useEffect } from 'react';
import jsonData from '../imagesJosn';

// --------------------------- popular products ---------------------------

import iMCU_W7500 from '../../Images/Most Popular Products/iMCU - W7500.png';
import PreProgammed_MCU_w7500p from '../../Images/Most Popular Products/PreProgammed MCU - w7500p.png';
import iEthernet_W5500 from '../../Images/Most Popular Products/iEthernet - W5500-일괄.png';
import s2e_module_wiz750sr_100 from '../../Images/Most Popular Products/s2e module - wiz750sr-100.png';
import ioModule_WIZ810MJ from '../../Images/Most Popular Products/ioModule - WIZ810MJ-일괄.png';
import App_Module_wiz550web from '../../Images/Most Popular Products/App Module - wiz550web.png';
import WiFi_Module_WizFi360 from '../../Images/Most Popular Products/WiFi Module - WizFi360.png';
import mbed_WizWik_w7500 from '../../Images/Most Popular Products/mbed - WizWiki-w7500.png';
import Open_Sourced_Hardware_Wizarduino_MEGA from '../../Images/Most Popular Products/Open Sourced Hardware - Wizarduino MEGA.png';

import NestedProduct from '../Products/nested_product_bar';

const Product_bar = (props) => {
	const [imgname, setimgname] = useState(null);
	const [index_id, setindex_id] = useState('');
	const [imgData, setimgData] = useState(null);
	const [hover_class, sethover_class] = useState(null);
	const [indid, setindid] = useState(null);
	const [image_clicked, set_image_clicked] = useState({});
	const d = jsonData.jsonData;

	const PopularImg = (name) => {
		switch (name) {
			case 'iMCU':
				return set_image_clicked({
					image: iMCU_W7500,
					img_name: 'W7500',
					tag_line:
						'IOP is the Internet Offload Processor, the one-chip solution that integrates MCU and Hardwired TCP/IP cores.',
				});
			case 'Pre-programmed MCU':
				return set_image_clicked({
					image: PreProgammed_MCU_w7500p,
					img_name: 'w7500p',
					tag_line: 'WIZnet MCU products which S2E firmware is programmed on.',
				});
			case 'iEthernet':
				return set_image_clicked({
					image: iEthernet_W5500,
					img_name: 'W5500',
					tag_line:
						'iEthernet is the Ethernet controller chip that includes hardwired TCP/IP Core & MAC (&PHY).',
				});
			case 'S2E Module':
				return set_image_clicked({
					image: s2e_module_wiz750sr_100,
					img_name: 'wiz750sr_100',
					tag_line:
						'The ‘Serial to Ethernet’ (S2E) Products are the gateway that converts UART protocol into TCP/IP. It enables remote gauging, managing and control of TCP/IP devices through a UART serial interface.',
				});

			case 'ioModule':
				return set_image_clicked({
					image: ioModule_WIZ810MJ,
					img_name: 'WIZ810MJ',
					tag_line:
						'WIZnet Network IO module includes an iEthernet chip & MAG-JACK (RJ45 with X’FMR). As no effort is required to interface iEthernet chip and Transformer, Network module is the ideal option for users who want to develop their Internet enabling system rapidly.',
				});
			case 'App module':
				return set_image_clicked({
					image: App_Module_wiz550web,
					img_name: 'wiz550web',
					tag_line:
						'Application Module has a specific network application such as web server. Users can control & monitor the digital I/O and ADC inputs on module via web pages.',
				});
			case 'WI-FI Module':
				return set_image_clicked({
					image: WiFi_Module_WizFi360,
					img_name: 'WizFi360',
					tag_line:
						'WIZnet’s WizFi modules offer a quick, easy, and cost-effective way for device and appliance manufacturers to add WiFi capabilities to their products. They provide UART or SPI interfaces which enable connections to any 8/16/32-bit microcontroller via simple AT commands.',
				});
			case 'Mbeb WIZwiki Platform':
				return set_image_clicked({
					image: mbed_WizWik_w7500,
					img_name: 'w7500',
					tag_line: 'WIZnet is an official arm Mbed partner',
				});
			case 'Open Source Hardware':
				return set_image_clicked({
					image: Open_Sourced_Hardware_Wizarduino_MEGA,
					img_name: 'Wizarduino MEGA',
					tag_line:
						'Open-source hardware consists of physical artifacts of technology designed and offered by the open design movement.',
				});

			default:
				return null;
		}
	};

	useEffect(() => {
		if (props) {
			setimgname(props.clicked_img.name);
			setindex_id(props.clicked_img.name);
			setimgData(props.clicked_img);
			PopularImg(props.clicked_img.name);
		}
	}, []);
	const img_click_handler = (li) => {
		setimgname(li.name);
		setindex_id(li.name);
		setimgData(li);
		PopularImg(li.name);
	};
	const on_mouse_enter_name = (i) => {
		setindid(i);

		sethover_class('hover_product_img');
	};
	const on_mouse_leave_name = () => {
		setindid(null);
		sethover_class('null');
	};

	return (
		<div className="container-fluid">
			<div className="row product_bar">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<nav aria-label="breadcrumb" className="bread_cum">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<p
									className="prod_breadcum"
									onClick={props.triggerOnclickbreadcum}>
									Products
								</p>
							</li>

							<li className="breadcrumb-item active" aria-current="page">
								{imgname}
							</li>
						</ol>
					</nav>
				</div>
				<div
					className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 product_heading_bar"
					align="left">
					PRODUCT <div>TYPES</div>
				</div>
				<div className="col product_list_bar container-fluid">
					<div className="d-flex">
						{d.map((li, index) => (
							<div
								key={li.name}
								onClick={() => img_click_handler(li)}
								className="d-flex flex-column test1">
								<img
									src={li.img_url}
									alt={li.name}
									className="product_img_bar"
									onMouseEnter={() => on_mouse_enter_name(index)}
									onMouseLeave={on_mouse_leave_name}></img>
								<div className="product_img_bar_name text-left">{li.name}</div>
								<div className={li.name === index_id ? 'test mt-auto' : ''} />

								{/*
									<div
										className={index === indid ? `mt-auto ${hover_class}` : ''}
									/>
								*/}
							</div>
						))}
					</div>
				</div>
			</div>
			<NestedProduct
				product_name={imgname}
				image_data={imgData}
				clicked_data={image_clicked}
			/>
		</div>
	);
};

export default Product_bar;
