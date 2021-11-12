module.exports = {
  base: '/',
  dest: 'dist',
  title: 'ZOOlanders Documentation',
  description: 'Documentation for the ZOOlanders products',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  themeConfig: {
    docsRepo: 'joolanders/documentation',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    nav: [
      {
        text: 'ZOO',
        items: [
          {
            items: [
              { text: 'Getting Started', link: '/essentials-for-zoo/' },
            ]
          },
          {
            text: 'Addons',
            items: [
              { text: 'Core', link: '/essentials-for-zoo/core/' },
              { text: 'Lingual', link: '/essentials-for-zoo/lingual/' },
              { text: 'Filter', link: '/essentials-for-zoo/filter/' },
              { text: 'Cart', link: '/essentials-for-zoo/cart/' },
              { text: 'Events', link: '/essentials-for-zoo/events/' },
              { text: 'Compare', link: '/essentials-for-zoo/compare/' }
            ]
          }
        ]
      },
      {
        text: 'YOOtheme Pro',
        items: [
          {
            items: [
              { text: 'Getting Started', link: '/essentials-for-yootheme-pro/' },
              { text: 'Changelog', link: 'https://www.zoolanders.com/essentials-for-yootheme-pro/changelog' }
            ]
          },
          {
            text: 'Addons',
            items: [
              { text: 'Sources', link: '/essentials-for-yootheme-pro/sources/' },
              { text: 'Forms', link: '/essentials-for-yootheme-pro/forms/' },
              { text: 'Access', link: '/essentials-for-yootheme-pro/access/' },
              { text: 'Icons', link: '/essentials-for-yootheme-pro/icons/' },
              { text: 'Elements', link: '/essentials-for-yootheme-pro/elements/' }
            ]
          },
          {
            text: 'Developers',
            items: [
              { text: 'Core', link: '/essentials-for-yootheme-pro/developers/core/' },
              { text: 'Builder', link: '/essentials-for-yootheme-pro/developers/builder/' },
              { text: 'Sources', link: '/essentials-for-yootheme-pro/developers/source/' },
              { text: 'Form', link: '/essentials-for-yootheme-pro/developers/form/' },
              { text: 'Access', link: '/essentials-for-yootheme-pro/developers/access/' },
            ]
          }
        ]
      },
      { text: 'ZOOlanders', link: 'https://zoolanders.com' }
    ],
    sidebar: {
      '/essentials-for-zoo/core/': require('../essentials-for-zoo/core/sidebar.js'),
      '/essentials-for-zoo/lingual/': require('../essentials-for-zoo/lingual/sidebar.js'),
      '/essentials-for-zoo/filter/': require('../essentials-for-zoo/filter/sidebar.js'),
      '/essentials-for-zoo/cart/': require('../essentials-for-zoo/cart/sidebar.js'),
      '/essentials-for-zoo/events/': require('../essentials-for-zoo/events/sidebar.js'),
      '/essentials-for-zoo/compare/': require('../essentials-for-zoo/compare/sidebar.js'),
      '/essentials-for-zoo/': require('../essentials-for-zoo/sidebar.js'),
      '/essentials-for-yootheme-pro/sources/': require('../essentials-for-yootheme-pro/sources/sidebar.js'),
      '/essentials-for-yootheme-pro/forms/': require('../essentials-for-yootheme-pro/forms/sidebar.js'),
      '/essentials-for-yootheme-pro/access/': require('../essentials-for-yootheme-pro/access/sidebar.js'),
      '/essentials-for-yootheme-pro/icons/': require('../essentials-for-yootheme-pro/icons/sidebar.js'),
      '/essentials-for-yootheme-pro/elements/': require('../essentials-for-yootheme-pro/elements/sidebar.js'),
      '/essentials-for-yootheme-pro/developers/core/': require('../essentials-for-yootheme-pro/developers/core/sidebar.js'),
      '/essentials-for-yootheme-pro/developers/access/': require('../essentials-for-yootheme-pro/developers/access/sidebar.js'),
      '/essentials-for-yootheme-pro/developers/form/': require('../essentials-for-yootheme-pro/developers/form/sidebar.js'),
      '/essentials-for-yootheme-pro/developers/source/': require('../essentials-for-yootheme-pro/developers/source/sidebar.js'),
      '/essentials-for-yootheme-pro/': require('../essentials-for-yootheme-pro/sidebar.js'),
    }
  }
}
