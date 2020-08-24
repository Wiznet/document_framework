![](RackMultipart20200824-4-dr4oqv_html_1dcb9ecd3264016f.png)

# HOW TO USE NODE JS / REACT JS IN DOCUSAURUS v2 FOR DOCUMENTATION SYSTEM

# **Creating a React page :-**

To add or create a react code as a page in Docusaurus v2, head to your project root folder and navigate to the pages folder.

Eg:-
Suppose &#39;website&#39; is your project folder then navigate to <code> website > src > pages </code> and create the code file with its file-name same as the one you want to reflect on the URL (Routing path).

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
For more info visit the below link:- 
[https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page](https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page)

**NOTE:-**
1) Make sure to use the <code> <Layout> </code> & <code> </Layout> </code> tags inside <code> return() </code> to make use of the default navibar and footer.
2) You can use a seperate css file and import for styling.
3) As of **Docusaurus 2.0.0-alpha.61** don't import 'react-bootstrap' in the import section as <code> import 'bootstrap/dist/css/bootstrap.min.css'; </code> instead you can import the same as  <code> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> <code> inside <code> return </code> and inside the <code> Layout </code> tag just after  <Layout>. which was observed to cause issues with 'Dark Mode'.
