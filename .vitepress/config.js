import { defineConfig } from 'vitepress'
import AccessAddonSidebar from '../src/essentials-for-yootheme-pro/addons/access/sidebar.json'
import DynamicAddonSidebar from '../src/essentials-for-yootheme-pro/addons/dynamic/sidebar.json'
import ElementsAddonSidebar from '../src/essentials-for-yootheme-pro/addons/elements/sidebar.json'
import FormsAddonSidebar from '../src/essentials-for-yootheme-pro/addons/forms/sidebar.json'
import IconsAddonSidebar from '../src/essentials-for-yootheme-pro/addons/icons/sidebar.json'
import LayoutsAddonSidebar from '../src/essentials-for-yootheme-pro/addons/layouts/sidebar.json'
import SourcesAddonSidebar from '../src/essentials-for-yootheme-pro/addons/sources/sidebar.json'
import each from 'lodash-es/each'

const addons = {
  access: AccessAddonSidebar,
  dynamic: DynamicAddonSidebar,
  elements: ElementsAddonSidebar,
  forms: FormsAddonSidebar,
  icons: IconsAddonSidebar,
  layouts: LayoutsAddonSidebar,
  sources: SourcesAddonSidebar,
}

each(addons, (v, addon) => {
  prependBase(`/essentials-for-yootheme-pro/addons/${addon}/`, v.items)
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ZOOlanders Documentation',
  description: 'Guides and Documentation for ZOOlanders.',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    logo: '/zoolanders-docs.svg',
    siteTitle: false,
    editLink: {
      pattern: 'https://github.com/zoolanders/documentation/edit/v3/src/:path',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Addons',
        items: [
          {
            text: 'Addons for YOOtheme Pro',
            items: [
              {
                text: 'Forms',
                link: '/essentials-for-yootheme-pro/addons/forms/',
              },
              {
                text: 'Dynamic',
                link: '/essentials-for-yootheme-pro/addons/dynamic/',
              },
              {
                text: 'Sources',
                link: '/essentials-for-yootheme-pro/addons/sources/',
              },
              {
                text: 'Access',
                link: '/essentials-for-yootheme-pro/addons/access/',
              },
              {
                text: 'Icons',
                link: '/essentials-for-yootheme-pro/addons/icons/',
              },
              {
                text: 'Layouts',
                link: '/essentials-for-yootheme-pro/addons/layouts/',
              },
              {
                text: 'Elements',
                link: '/essentials-for-yootheme-pro/addons/elements/',
              },
            ],
          },
          {
            text: 'Addons for YOOtheme ZOO',
            items: [
              {
                text: 'Filter',
                link: '/essentials-for-zoo/addons/filter/',
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/essentials-for-yootheme-pro/addons/access/': AccessAddonSidebar,
      '/essentials-for-yootheme-pro/addons/dynamic/': DynamicAddonSidebar,
      '/essentials-for-yootheme-pro/addons/elements/': ElementsAddonSidebar,
      '/essentials-for-yootheme-pro/addons/forms/': FormsAddonSidebar,
      '/essentials-for-yootheme-pro/addons/icons/': IconsAddonSidebar,
      '/essentials-for-yootheme-pro/addons/layouts/': LayoutsAddonSidebar,
      '/essentials-for-yootheme-pro/addons/sources/': SourcesAddonSidebar,
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zoolanders/documentation',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/jzoolanders',
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/3BT5nHauWr',
      },
    ],
  },
  transformHead({ assets }) {
    const myFontFile = assets.find((file) => /varela-round\.\w+\.woff2/)

    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
        ],
      ]
    }
  },
})

function prependBase(basePath, items) {
  items.forEach((item) => {
    if (item.link) {
      item.link = item.link.replace('./', basePath)
    }

    if (item.items) {
      prependBase(basePath, item.items)
    }
  })
}
