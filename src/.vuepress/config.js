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
              { text: 'ZOOessentials', link: '/zooessentials/' },
              { text: 'ZOOcart', link: '/zoocart/' },
              { text: 'ZOOfilter', link: '/zoofilter/' },
              { text: 'ZOOlingual', link: '/zoolingual/' },
              { text: 'ZOOevents', link: '/zooevents/' },
              { text: 'ZOOcompare', link: '/zoocompare/' }
            ]
          }
        ]
      },
      {
        text: 'YOOtheme Pro',
        items: [
          {
            items: [
              { text: 'Getting Started', link: '/essentials-for-yootheme-pro/index.html' },
              { text: 'Changelog', link: 'https://www.zoolanders.com/essentials-for-yootheme-pro/changelog' }
            ]
          },
          {
            text: 'Addons',
            items: [
              { text: 'Forms', link: '/essentials-for-yootheme-pro/forms/' },
              { text: 'Access', link: '/essentials-for-yootheme-pro/access/' },
              { text: 'Icons', link: '/essentials-for-yootheme-pro/icons/' },
              { text: 'Elements', link: '/essentials-for-yootheme-pro/elements/' }
            ]
          }
        ]
      },
      { text: 'ZOOlanders', link: 'https://zoolanders.com' }
    ],
    sidebar: {
      '/zooessentials/': require('../zooessentials/sidebar.js'),
      '/zoocart/': require('../zoocart/sidebar.js'),
      '/zoolingual/': require('../zoolingual/sidebar.js'),
      '/zoofilter/': require('../zoofilter/sidebar.js'),
      '/zooevents/': require('../zooevents/sidebar.js'),
      '/zoocompare/': require('../zoocompare/sidebar.js'),
      '/essentials-for-yootheme-pro/forms/': require('../essentials-for-yootheme-pro/forms/sidebar.js'),
      '/essentials-for-yootheme-pro/access/': require('../essentials-for-yootheme-pro/access/sidebar.js'),
      '/essentials-for-yootheme-pro/icons/': require('../essentials-for-yootheme-pro/icons/sidebar.js'),
      '/essentials-for-yootheme-pro/elements/': require('../essentials-for-yootheme-pro/elements/sidebar.js'),
      '/essentials-for-yootheme-pro/': require('../essentials-for-yootheme-pro/sidebar.js')
    }
  }
}
