module.exports = {
  base: '/',
  dest: 'dist',
  title: 'ZOOlanders Documentation',
  description: 'Documentation for the ZOOlanders products',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'ZOO',
        items: [
          { text: 'ZOOessentials', link: '/zooessentials/' },
          { text: 'ZOOcart', link: '/zoocart/' },
          { text: 'ZOOfilter', link: '/zoofilter/' },
          { text: 'ZOOlingual', link: '/zoolingual/' },
          { text: 'ZOOevents', link: '/zooevents/' },
          { text: 'ZOOcompare', link: '/zoocompare/' }
        ]
      },
      { text: 'Contribute', link: 'https://github.com/joolanders/documentation' },
      { text: 'ZOOlanders', link: 'https://zoolanders.com' }
    ],
    sidebar: {
      '/zooessentials/': require('../zooessentials/sidebar.js'),
      '/zoocart/': require('../zoocart/sidebar.js'),
      '/zoolingual/': require('../zoolingual/sidebar.js'),
      '/zoofilter/': require('../zoofilter/sidebar.js'),
      '/zooevents/': require('../zooevents/sidebar.js'),
      '/zoocompare/': require('../zoocompare/sidebar.js')
    }
  }
}
