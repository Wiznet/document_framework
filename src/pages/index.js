import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BG from '../../static/img/BG.png';
import Product from '../../static/img/Products.png';
import Design_guid from '../../static/img/Design Guide.png';
import Var from '../../static/img/VAR.png';
import '../css/home.css';


const features = [];

function Home() {
	
	const product_click = () => { 
		window.open(
			'/docs/Product/products', 
			'_self'
		);
	};
	const Design_guid_click = () => {
		window.open(
			'/docs/Design-Guide/design_guide',
			'_self'
		);
	};
	const Var_click = () => {
		window.open(
			'/docs/VAR-Products-using-WIZnet/var_products_using_wiznet',
			'_self'
		);
		};


  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
	  
    <Layout
      title={`${siteConfig.title}`} description="">
		  <div>
	  <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> 	
	  <div>
      
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>

{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}

            <div>
                <img src={BG} alt="Back ground image" className="bg_img"></img>
            </div>
            <div class="top-left">         
                <div className="Welcome">Welcome to WIZnet <br/> Documents </div>
                {/* <div className="Welcome">Documents </div> */}
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
        </div>
	</div>
			
    </Layout>
	
  );
};	

export default Home;