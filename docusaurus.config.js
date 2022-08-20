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
            to: '/docs/cm/overview_configuration_management',
            label: 'CM',
            position: 'left'
          },
          {
            to: '/docs/systems/overview_systems',
            label: 'Systems',
            position: 'left'
          },
          {
            to: '/docs/mechanical/overview_mechanical',
            label: 'Mechanical',
            position: 'left'
          },
          {
            to: '/docs/electrical/overview_electrical',
            label: 'Electrical',
            position: 'left'
          },
          {
            to: '/docs/building/overview_building',
            label: 'Build',
            position: 'left'
          },
          {
            to: '/docs/networking/overview_networking',
            label: 'Networking',
            position: 'left'
          },
          {
            to: '/docs/software/overview_software',
            label: 'Software',
            position: 'left'
          },
          {
            to: '/docs/web_development/overview_web_development',
            label: 'Web Dev',
            position: 'left'
          },
          {
            to: '/docs/tools/overview_tools',
            label: 'Tools',
            position: 'left'
          },
          {
            to: 'about',
            label: 'About',
            position: 'right'
          },
          {
            to: 'bookshelf',
            label: 'Bookshelf',
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
        copyright: `Copyright © 2022 Rhys Faultless All rights reserved.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
