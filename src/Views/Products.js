/** @format */

import React, { useState } from 'react';
import jsonData from '../Components/imagesJosn';
import Footer from '../Components/Home/footer';
import ProductBar from '../Components/Products/Product_bar';

import '../Styles/product.css';

function Products() {
	const [onhoverimg, setonhoverimg] = useState('');
	const [index_id, setindex_id] = useState('');
	const [on_click, seton_click] = useState(false);
	const [imagename, setimagename] = useState('');
	const [image_data, setimage_data] = useState(null);

	const [image_name_hover, set_image_name_hover] = useState('');
	const on_mouse_enter_img = (i) => {
		setindex_id(i);
		setonhoverimg('on_img_hover_name');
	};
	const on_mouse_leave_img = () => {
		setonhoverimg('');
	};
	const on_mouse_enter_name = (i) => {
		setindex_id(i);
		set_image_name_hover('image_on_name_hover');
	};
	const on_mouse_leave_name = () => {
		set_image_name_hover('');
	};
	const image_click = (li) => {
		seton_click(true);
		setimagename(li.name);
		setimage_data(li);
	};
	const breadCum_clicked = () => {
		seton_click(false);
		setonhoverimg('');
		setindex_id('');
		setimagename('');
		setimage_data(null);
	};
	return (
		<div>
			<div className="product_page">
				{on_click === false && (
					<div>
						<div className="product_breadcum">Products</div>
						<div className="product_heading">Products Types</div>
						<div className="product_container form-inline" align="center">
							{jsonData.jsonData.map((li, index) => (
								<div onClick={() => image_click(li)} key={index}>
									<img
										src={li.img_url}
										alt={li.img_url}
										onMouseEnter={() => on_mouse_enter_img(index)}
										onMouseLeave={on_mouse_leave_img}
										className={
											index === index_id
												? image_name_hover
													? `product_images ${image_name_hover}`
													: 'product_images'
												: 'product_images'
										}></img>
									<div
										className={
											index === index_id ? `img_name ${onhoverimg}` : 'img_name'
										}
										onMouseEnter={() => on_mouse_enter_name(index)}
										onMouseLeave={on_mouse_leave_name}>
										{li.name}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
				{on_click && (
					<div className="product_bar_right">
						<ProductBar
							clicked_img={image_data}
							triggerOnclickbreadcum={breadCum_clicked}
						/>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default Products;
