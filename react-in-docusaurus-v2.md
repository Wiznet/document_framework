![](RackMultipart20200824-4-dr4oqv_html_1dcb9ecd3264016f.png)

# HOW TO USE NODE JS / REACT JS IN DOCUSAURUS v2 FOR DOCUMENTATION SYSTEM

# **Creating a React page :-**

To add or create a react code as a page in Docusaurus v2, head to your project root folder and navigate to the pages folder.

Eg:-Suppose &#39;website&#39; is your project folder then navigate to website \&gt; src \&gt; pages and create the code file with the file name same as the one you want to reflect on the URL (Routing path)

**website # Root directory of your site**

└── **src**

└── **pages**

└── **helloReact.js**
 
 ```
import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
```

[https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page](https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page)
