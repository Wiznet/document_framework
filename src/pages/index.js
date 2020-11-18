import React from 'react';
// import Layout from '@theme/Layout';
// import BG from '../../static/img/BG.png';
// import Product from '../../static/img/Products.png';
// import Design_guid from '../../static/img/Design Guide.png';
// import Var from '../../static/img/VAR.png';
// import '../css/home.css';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import Link from '@docusaurus/Link';

// function Home() {
//   return (	  
//   <Layout>    
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
//                 <img src={BG} alt="Back ground image" className="bg_img"></img>
//             <div class="top-left">         
//                 <div className="Welcome">Welcome to WIZnet <br/> Documents </div>
//                 <div className="below_heading">
//                     a place to find everything you require for WIZnet Products
//                 </div>
//             </div>
//             <div className="row home_1 container-fluid main_div" align="center">
               
//                 <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
//                 <Link to={useBaseUrl('docs/Product/products')}> 
//                     <div className="button home1_div">
                     
//                         <img
//                             src={Product}
//                             alt="Back ground image"
//                             className="home1_img"></img>
//                         <h3 className="text-center img_heading">Products</h3>
                        
//                     </div>
//                     </Link> 
//                 </div>
               
//                 <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
//                 <Link to={useBaseUrl('docs/Design-Guide/design_guide')}> 
//                     <div className="button home1_div">
//                         <img
//                             src={Design_guid}
//                             alt="Back ground image"
//                             className="home1_img"></img>
//                         <h3 className="text-center img_heading">Design Guide</h3>
//                     </div>
//                     </Link>
//                 </div>
//                 <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
//                 <Link to={useBaseUrl('docs/VAR-Products-using-WIZnet/var_products_using_wiznet')}> 
//                     <div className="button  home1_div">
//                         <img src={Var} alt="Back ground image" className="home1_img"></img>
//                         <h3 className="text-center img_heading">VAR Products</h3>
//                     </div>
//                     </Link>
//                 </div>
//             </div>	
//     </Layout>
//   );
// };	

// export default Home;

function Home () {
return(
window.open('docs/Product/products','_self')
)

}

export default Home;
