module.exports = {
  base: '/',
  dest: 'dist',
  title: 'ZOOlanders Documentation',
  description: 'Documentation for ZOOlanders products',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  themeConfig: {
    nav: [
      { text: 'ZOOessentials', link: '/zooessentials/' },
      { text: 'ZOOcart', link: '/zoocart/' },
      { text: 'ZOOlingual', link: '/zoolingual/' },
      { text: 'ZOOfilter', link: '/zoofilter/' },
      { text: 'ZOOevents', link: '/zooevents/' },
      { text: 'ZOOcompare', link: '/zoocompare/' }
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
