// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

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
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
    }
  ),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
