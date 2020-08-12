import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BG_img from '../../static/img/BG.png';
import '../css/home.css';
import product_img from '../../static/img/Products.png';
import Design_guid from '../../static/img/Design Guide.png';
import Var from '../../static/img/VAR.png';

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
		<div className='back_groundimg'>
		<img src={BG_img}  alt="back_groundimg"></img>
		</div>
		<div className="over_image">
			<div className="container-fluid">
				<h3 className="welcome_text">Welcome to WIZnet </h3>
				<h3 className="welcome_text">Documents</h3>

				<div className="below_heading">
					A perfect place to find everything about WIZnet Products

					{/* MIDDLE1 */}
					<div align="center">
			<div className="row home_1">
				<div className="home1_div" onClick={product_click}>
					<img className="home1_img" src={product_img} alt="Product"></img>

					<h3 className="text-center img_heading">Products</h3>
				</div>

				<div className="home1_div" onClick={Design_guid_click}>
					<img className="home1_img" src={Design_guid} alt="Design Guide"></img>

					<h3 className="text-center img_heading">Design Guide</h3>
				</div>
				<div className="home1_div" onClick={Var_click}>
					<img className="home1_img" src={Var} alt="VAR"></img>

					<h3 className="text-center img_heading">VAR Products</h3>
				</div>
			</div>
		</div>	
					{/* MIDDLE1 */}
				</div>
				
				</div>
			</div>
		</div>
		</div>
    </Layout>
	
  );
};	

export default Home;