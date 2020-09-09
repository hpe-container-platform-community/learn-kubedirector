module.exports = {
  title: 'Learn KubeDirector!',
  tagline: 'Education resources for learning KubeDirector',
  url: 'https://hpe-container-platform-community.github.io/',
  baseUrl: '/learn-kubedirector/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hpe-container-platform-community',
  projectName: 'learn-kubedirector',
  themeConfig: {
    navbar: {
      title: 'Learn KubeDirector!',
      logo: {
        alt: 'Learn KubeDirector!',
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
              label: 'Learn KubeDirector on GitHub',
              href: 'https://github.com/hpe-container-platform-community/learn-kubedirector',
            },
            {
              label: 'KubeDirector Lab on GitHub',
              href: 'https://github.com/hpe-container-platform-community/kubedirector-lab',
            },
            {
              label: 'KubeDirector on GitHub',
              href: 'https://github.com/bluek8s/kubedirector',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hewlett Packard Enterprise.`,
    },
    colorMode: {
          defaultMode: 'light',
    }
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
