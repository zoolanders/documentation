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
    // activeHeaderLinks: false,
    // displayAllHeaders: true,
    nav: [
      {
        text: 'ZOO',
        link: '/essentials-for-zoo/'
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
              { text: 'Core Concepts', link: '/essentials-for-yootheme-pro/developers/core/' },
            ]
          }
        ]
      },
      { text: 'ZOOlanders', link: 'https://zoolanders.com' }
    ],
    sidebar: {
      '/essentials-for-zoo/archive/events/': require('../essentials-for-zoo/archive/events/sidebar.js'),
      '/essentials-for-zoo/archive/zoocart/': require('../essentials-for-zoo/archive/zoocart/sidebar.js'),
      '/essentials-for-zoo/archive/zoocompare/': require('../essentials-for-zoo/archive/zoocompare/sidebar.js'),
      '/essentials-for-zoo/': require('../essentials-for-zoo/sidebar.js'),
      '/essentials-for-yootheme-pro/sources/': require('../essentials-for-yootheme-pro/sources/sidebar.js'),
      '/essentials-for-yootheme-pro/forms/': require('../essentials-for-yootheme-pro/forms/sidebar.js'),
      '/essentials-for-yootheme-pro/access/': require('../essentials-for-yootheme-pro/access/sidebar.js'),
      '/essentials-for-yootheme-pro/icons/': require('../essentials-for-yootheme-pro/icons/sidebar.js'),
      '/essentials-for-yootheme-pro/elements/': require('../essentials-for-yootheme-pro/elements/sidebar.js'),
      '/essentials-for-yootheme-pro/developers/core/': require('../essentials-for-yootheme-pro/developers/core/sidebar.js'),
      '/essentials-for-yootheme-pro/': require('../essentials-for-yootheme-pro/sidebar.js'),
    }
  }
}
