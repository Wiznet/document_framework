//docusaurus.config.js for Docs only Mode

module.exports = {
  title: 'WIZnet Document System',
  tagline: 'Welcome to new WIZnet Document System!',
  //url: 'https://wiznet.github.io',
  url: 'https://docs.wiznet.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'WIZnet Co., Ltd.', // Usually your GitHub org/user name.
  projectName: 'document_framework', // Usually your repo name.
  trailingSlash: 'false',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-207547783-2',
      anonymizeIP: true,
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'G-B4NBQPV6VG',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    hideableSidebar: true,
    announcementBar: {
      id: 'announcementBar-2', // Increment on change
      content: '⭐️ Meet our new products: <a target="" rel="noopener noreferrer" href="/Product/Open-Source-Hardware/wiznet_ethernet_hat">WIZnet Ethernet HAT for Raspberry Pi Pico</a> and <a target="" rel="noopener noreferrer" href="/Product/iEthernet/W5100S/w5100s-evb-pico">W5100S-EVB-Pico</a> ⭐️',
      backgroundColor: '#C51A4A',
      textColor: '#fafbfc',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{26c8}',
        lightIcon: '\u{1f324}',
      },
    },
     algolia: {
       apiKey: 'd2ede60bed9975d4b60dd5436896fe91',
       indexName: 'wiznet',
             // Optional: see doc section bellow
       contextualSearch: false,

       // Optional: Algolia search parameters
       searchParameters: {},
       //inputSelector: 'I',
       algoliaOptions: {'facetFilters': ["type:content"] },
       //... other Algolia params
     },

    navbar: {
//      hideOnScroll: true,
      //title: 'WIZnet',
      logo: {
        alt: 'Wiznet Company Logo',
        src: 'img/wiznet_logo.svg',
        srcDark: 'img/wiznet_logo-white.svg',
      },
      items: [
        {
          label: 'Documents',
          position: 'right', // or 'left'
          items: [
            {
              label: 'Introduction ➤',
              to: 'introduction',
            },
            {
              label: 'Design Guide ➤',
              to: '/Design-Guide/design_guide',
            },
            {
              label: 'VAR Products ➤',
              to: '/VAR-Products-using-WIZnet/var_products_using_wiznet',
            },
            // ... more items
          ],
        },
         // {to: 'docs/introduction', label: 'INTRODUCTION TO WIZNET DOCUMENTS ➤', position: 'right'},
         // {to: 'docs/download', label: 'Download', position: 'right'},
         {href: 'https://www.wiznet.io/', label: 'WIZnet', position: 'right'},
         {href: 'https://forum.wiznet.io/', label: 'Forum', position: 'right'},
         

        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wiznet/',
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
              to: 'introduction',
            },
            {
              label: 'Products',
              to: '/',
            },
            {
              label: 'Design Guide',
              to: '/Design-Guide/design_guide',
            },
            {
              label: 'VAR Products',
              to: '/VAR-Products-using-WIZnet/var_products_using_wiznet',
            },
          ],
        },
        {
          title: 'Buy',
          items: [
            {
              label: 'USA',
              href: 'https://eshop.wiznet.io/',
            },
            {
              label: 'EU',
              href: 'http://shop.wiznet.eu/',
            },
            {
              label: 'China',
              href: 'https://www.wiznet.hk/en/',
            },
            {
              label: 'Korea',
              href: 'http://wiznetshop.co.kr/',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'WIZnet Homepage',
              href: 'https://wiznet.io',
            },
            {
              label: 'Forum',
              href: 'https://forum.wiznet.io',
            },
            {
              label: 'Maker Community',
              href: 'http://maker.wiznet.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Wiznet/',
            },
          //  {
          //    label: 'Twitter',
          //    href: '',
          //  },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/wiznettechnology',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/wiznet/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/wiznetteam',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WIZnet Co., Ltd. Built with Docusaurus.`,
    },
    image: 'img/wiznet-logo.png',
  },
  //plugins: ['./PreventTrailingSlash/PreventTrailingSlashPlugin'],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:          
            'https://github.com/Wiznet/document_framework/tree/master/',
        },
//         sitemap:{
//         trailingSlash: false
//         },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
