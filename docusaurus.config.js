module.exports = {
  title: 'WIZnet Document System',
  tagline: 'Welcome to new WIZnet Document System!',
  //url: 'https://wiznet.github.io',
  url: 'https://doc.wiznet.io',
  baseUrl: '/',
  // onBrokenLinks: 'ignore',
  // onDuplicateRoutes: 'warn',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'Wiznet', // Usually your GitHub org/user name.
  projectName: 'document_framework', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'f997035e1f482592037217527848e3fd',
      indexName: 'wiznet-cloud',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wiznet_logo.svg',
        srcDark: "img/wiznet_logo-white.svg",
      },
      items: [
        {
          label: 'Documents',
          position: 'right', // or 'left'
          items: [
            {
              label: 'HOME',
              to: '/',
            },
            {
              label: 'Introduction ➤',
              to: '/docs/introduction',
            },
            {
              label: 'Products',
              to: '/docs/Product/products',
            },
            {
              label: 'Design Guide',
              to: '/docs/Design-Guide/design_guide',
            },
            {
              label: 'VAR Products',
              to: '/docs/VAR-Products-using-WIZnet/var_products_using_wiznet',
            },
            // ... more items
          ],
        },
      
        // {to: 'docs/introduction', label: 'INTRODUCTION TO WIZNET DOCUMENTS ➤', position: 'right'},
         {to: 'docs/products', label: 'Download', position: 'right'},
         {to: 'docs/products', label: 'Forum', position: 'right'},

        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wiznet/document_framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WIZnet Forum',
              href: 'https://forum.wiznet.io',
            },
            {
              label: 'WIZnet Maker',
              href: 'http://maker.wiznet.io/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            //{
            //  label: 'Blog',
            //  to: 'blog',
            //},
            {
              label: 'GitHub',
              href: 'https://github.com/Wiznet/document_framework',
            },
          //  {
          //    label: 'Twitter',
          //    href: '',
          //  },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WIZnet Co., Ltd. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Wiznet/document_framework/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};