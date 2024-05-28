import { defineConfig } from 'vitepress'
import MainNav from './nav.json';
import EssentialsYtpSidebar from '../src/essentials-for-yootheme-pro/sidebar.json'
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

prependBase('/essentials-for-yootheme-pro/', EssentialsYtpSidebar.items)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Essentials Documentation',
  description: 'Guides and Documentation for Essential Addons.',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    logo: '/zoolanders-docs.svg',
    siteTitle: false,
    editLink: {
      pattern: 'https://github.com/zoolanders/documentation/edit/v3/src/:path',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: MainNav,

    sidebar: {
      '/essentials-for-yootheme-pro/': EssentialsYtpSidebar,
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

    footer: {
      message: 'Essentials for YOOtheme Pro and ZOO',
      copyright: 'Copyright © <a href="https://zoolanders.com">ZOOlanders</a>'
    }
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
  async transformPageData(pageData, { siteConfig }) {
    const filePath = pageData.filePath;

    // Forms Addon
    switch (true) {
      // actions
      case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/actions') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Action | Forms Builder for YOOtheme Pro'
        break
      case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/fields') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Field Element | Form Builder for YOOtheme Pro'
        break
      case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/captcha') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Field Element | Form Builder for YOOtheme Pro'
        break

      // fallback
      case filePath.startsWith('essentials-for-yootheme-pro/addons/forms/'):
      pageData.titleTemplate = ':title | Form Builder for YOOtheme Pro'
        break
    }

    // Sources Addon
    switch (true) {
      // sources
      case filePath.startsWith('essentials-for-yootheme-pro/addons/sources/providers') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Provider | Dynamic Content Sources for YOOtheme Pro'
        break

      // fallback
      case filePath.startsWith('essentials-for-yootheme-pro/addons/sources/'):
      pageData.titleTemplate = ':title | Dynamic Content Sources for YOOtheme Pro'
        break
    }

    // Access Addon
    switch (true) {
      // rules
      case filePath.startsWith('essentials-for-yootheme-pro/addons/access/rules') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Rule | Conditional Content for YOOtheme Pro'
        break

      // fallback
      case filePath.startsWith('essentials-for-yootheme-pro/addons/access/'):
      pageData.titleTemplate = ':title | Conditional Content for YOOtheme Pro'
        break
    }

    // Icons Addon
    switch (true) {
      // rules
      case filePath.startsWith('essentials-for-yootheme-pro/addons/icons/collections') && !filePath.endsWith('index.md'):
      pageData.titleTemplate = ':title Collection | Custom and 3rd party Icons for YOOtheme Pro'
        break

      // fallback
      case filePath.startsWith('essentials-for-yootheme-pro/addons/icons/'):
      pageData.titleTemplate = ':title | Custom and 3rd party Icons for YOOtheme Pro'
        break
    }

    // Elements Addon
    switch (true) {
      // elements
      case filePath.startsWith('essentials-for-yootheme-pro/addons/elements') && !filePath.endsWith('index.md'):
        pageData.titleTemplate = ':title Element | Free Elements for YOOtheme Pro'
          break

      case filePath.startsWith('essentials-for-yootheme-pro/addons/elements/'):
      pageData.titleTemplate = ':title | Free Elements for YOOtheme Pro'
        break
    }

    // Layout Addon
    switch (true) {
      case filePath.startsWith('essentials-for-yootheme-pro/addons/layout'):
      pageData.titleTemplate = ':title | Custom Layout Libraries for YOOtheme Pro'
        break
    }

    // Dynamic Addon
    switch (true) {
      case filePath.startsWith('essentials-for-yootheme-pro/addons/dynamic'):
      pageData.titleTemplate = ':title | Advanced Dynamic Content for YOOtheme Pro'
        break
    }
  }
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
