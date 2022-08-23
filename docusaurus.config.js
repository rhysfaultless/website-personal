// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rhys Faultless',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Rhys Faultless',
        logo: {
          alt: 'Rhys Faultless',
          src: 'img/favicon.png',
        },
        items: [
          {
            to: '/docs/configuration_management',
            label: 'CM',
            position: 'left'
          },
          {
            to: '/docs/systems',
            label: 'Systems',
            position: 'left'
          },
          {
            to: '/docs/mechanical',
            label: 'Mechanical',
            position: 'left'
          },
          {
            to: '/docs/electrical',
            label: 'Electrical',
            position: 'left'
          },
          {
            to: '/docs/building',
            label: 'Build',
            position: 'left'
          },
          {
            to: '/docs/networking',
            label: 'Networking',
            position: 'left'
          },
          {
            to: '/docs/software',
            label: 'Software',
            position: 'left'
          },
          {
            to: '/docs/web_development',
            label: 'Web Dev',
            position: 'left'
          },
          {
            to: '/docs/tools',
            label: 'Tools',
            position: 'left'
          },
          {
            to: '/docs/reference',
            label: 'Reference',
            position: 'left'
          },
          {
            to: 'about',
            label: 'About',
            position: 'right'
          },
          {
            to: 'https://github.com/rhysfaultless',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://www.linkedin.com/in/rhysfaultless/',
            label: 'LinkedIn',
            position: 'right'
          }
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        },
      },
      footer: {
        copyright: `Copyright © 2022 Rhys Faultless. All rights reserved.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
