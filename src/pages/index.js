import React from 'react';
import Layout from '@theme/Layout';
import BG from '../../static/img/BG.png';
import Product from '../../static/img/Products.png';
import Design_guid from '../../static/img/Design Guide.png';
import Var from '../../static/img/VAR.png';
import '../css/home.css';


function Home() {
	function product_click ()  { 
		window.open(
			'/docs/Product/products', 
			'_self'
		);
  };
	function Design_guid_click ()  {
		window.open(
			'/docs/Design-Guide/design_guide',
			'_self'
		);
  };

	 function Var_click  ()  {
		window.open(
			'/docs/VAR-Products-using-WIZnet/var_products_using_wiznet',
			'_self'
		);
    };
    
  return (	  
  <Layout>    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                <img src={BG} alt="Back ground image" className="bg_img"></img>
            <div class="top-left">         
                <div className="Welcome">Welcome to WIZnet <br/> Documents </div>
                <div className="below_heading">
                    a place to find everything you require for WIZnet Products
                </div>
            </div>
            <div className="row home_1 container-fluid main_div" align="center">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="home1_div" onClick={product_click}>
                        <img
                            src={Product}
                            alt="Back ground image"
                            className="home1_img"></img>
                        <h3 className="text-center img_heading">Products</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="home1_div" onClick={Design_guid_click}>
                        <img
                            src={Design_guid}
                            alt="Back ground image"
                            className="home1_img"></img>
                        <h3 className="text-center img_heading">Design Guide</h3>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="home1_div" onClick={Var_click}>
                        <img src={Var} alt="Back ground image" className="home1_img"></img>
                        <h3 className="text-center img_heading">VAR Products</h3>
                    </div>
                </div>
            </div>	
    </Layout>
  );
};	

export default Home;