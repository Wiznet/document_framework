// /** @format */

// import React from 'react';

// function Contact() {
// 	return (
// 		<div>
// 			<div className="container"> WIZNET INDIA PVT. LTD, INDIA, BANGALORE </div>
// 		</div>
// 	);
// }

// export default Contact;


import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [

  {
    title: <div className="container">
    <br/>
    Contact Information</div>,
    description: (
        
      <div className = 'col-5'>
       WIZNET INDIA PVT. LTD,
       3RD FLOOR, NO. 410, 5TH MAIN ROAD, 2ND BLOCK, HRBR LAYOUT, 
       KALYAN NAGAR BANGALORE KA, INDIA.
       PINCODE: 560043. 
      </div>
    ),
  },
 
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    
    <div>
    <img src="img/cropped-wiznet-logo.png" alt="WIZnet LOGO" width="900" height="336"></img>
        
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Contact() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Contact Info: ${siteConfig.title}`}
      description="WIZnet Contact">
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
    </Layout>
  );
}

export default Contact;
