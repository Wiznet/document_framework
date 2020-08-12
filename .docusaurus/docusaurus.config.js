export default {
  "title": "WIZnet Document System",
  "tagline": "Welcome to new WIZnet Document System!",
  "url": "https://doc.wiznet.io",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "favicon": "img/wizfavicon.ico",
  "organizationName": "Wiznet",
  "projectName": "document_framework",
  "themeConfig": {
    "algolia": {
      "apiKey": "f997035e1f482592037217527848e3fd",
      "indexName": "wiznet-cloud",
      "appId": "BH4D9OD16A"
    },
    "navbar": {
      "title": "",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/wiznet_logo_110x37.png"
      },
      "items": [
        {
          "to": "docs/introduction",
          "label": "Documentation",
          "position": "left"
        },
        {
          "href": "https://github.com/Wiznet/document_framework",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/introduction"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "WIZnet Forum",
              "href": "https://forum.wiznet.io"
            },
            {
              "label": "WIZnet Maker",
              "href": "http://maker.wiznet.io/"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/Wiznet/document_framework"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 WIZnet Co., Ltd. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/albinjoseph/Documents/GitHub/document_framework/sidebars.js",
          "editUrl": "https://github.com/Wiznet/document_framework/tree/master/"
        },
        "theme": {
          "customCss": "/Users/albinjoseph/Documents/GitHub/document_framework/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};