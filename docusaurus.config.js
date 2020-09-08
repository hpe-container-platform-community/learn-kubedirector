module.exports = {
  title: 'Learn Kubedirector!',
  tagline: 'Education resources for learning Kubedirector',
  url: 'https://hpe-container-platform-community.github.io/',
  baseUrl: '/learn-kubedirector/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hpe-container-platform-community',
  projectName: 'learn-kubedirector',
  themeConfig: {
    navbar: {
      title: 'Learn Kubedirector!',
      logo: {
        alt: 'Learn Kubedirector!',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/kubedirector',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bluek8s',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hpe-container-platform-community/learn-kubedirector',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hewlett Packard Enterprise.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
