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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //   organizationName: 'rhysfaultless', // Usually your GitHub org/user name.
  //   projectName: 'website-personal', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rhys Faultless',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Notes',
            position: 'left',
            type: 'doc',
            docId: 'notesIndex',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: 'about',
            label: 'About',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'GitHub',
            to: 'https://github.com/rhysfaultless'
          },
          {
            label: 'LinkedIn',
            to: 'https://www.linkedin.com/in/rhysfaultless/'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rhys Faultless`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
