![](RackMultipart20200824-4-dr4oqv_html_1dcb9ecd3264016f.png)

# **HOW TO USE NODE JS / REACT JS IN DOCUSAURUS v2 FOR DOCUMENTATION SYSTEM**

**Creating a React page:-**

To add or create a react code as a page in Docusaurus v2, head to your project root folder and navigate to the pages folder.

Eg:-Suppose &#39;website&#39; is your project folder then navigate to website \&gt; src \&gt; pages and create the code file with the file name same as the one you want to reflect on the URL (Routing path)

**website # Root directory of your site**

└── **src**

└── **pages**

└── **helloReact.js**

&#39; **import React from &#39;react&#39;;**

**import Layout from &#39;@theme/Layout&#39;;**

**function Hello() {**

**return (**

**\&lt;Layout title=&quot;Hello&quot;\&gt;**

**\&lt;div**

**style={{**

**display: &#39;flex&#39;,**

**justifyContent: &#39;center&#39;,**

**alignItems: &#39;center&#39;,**

**height: &#39;50vh&#39;,**

**fontSize: &#39;20px&#39;,**

**}}\&gt;**

**\&lt;p\&gt;**

**Edit \&lt;code\&gt;pages/hello.js\&lt;/code\&gt; and save to reload.**

**\&lt;/p\&gt;**

**\&lt;/div\&gt;**

**\&lt;/Layout\&gt;**

**);**

**}**

**export default Hello;&#39;**

[https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page](https://v2.docusaurus.io/docs/creating-pages/#add-a-react-page)
