module.exports = [
  {
    title: 'Essentials ZOO',
    collapsable: false,
    sidebarDepth: 3,
    children: [
      '',
      'translation'
    ]
  },
  {
    title: 'Core',
    collapsable: false,
    children: [
      'core/seo',
      'core/metadata',
      'core/import-export'
    ]
  },
  {
    title: 'Plugins/Modules',
    collapsable: false,
    children: [
      'zooitempro/',
      'widgetkit/'
    ]
  },
  {
    title: 'Elements',
    collapsable: false,
    children: [
      'elements/integration',
      'elements/conditional-rendering',
      'elements/customizations',
      'elements/el-static-content',
      'elements/el-separator',
      'elements/el-datepro',
      'elements/el-downloadpro',
      'elements/el-imagepro',
      'elements/el-googlemapspro',
      'elements/el-linkpro',
      'elements/el-mediapro',
      'elements/el-relitems',
      'elements/el-relcatpro',
      'elements/el-textpro',
      'elements/el-textareapro'
    ]
  },
  {
    title: 'Advanced Search - Filter',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'filter/',
      'filter/module',
      'filter/elements',
      'filter/faq',
      'filter/advanced/custom-fields',
      'filter/advanced/customizations',
      'filter/advanced/recipes'
    ]
  },
  {
    title: 'Lingual - Multilanguage',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'lingual/',
      'lingual/translating/',
      'lingual/faq'
    ]
  },
  {
    title: 'Archive',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['archive/events/', 'Events'],
      ['archive/zoocart/', 'ZOOcart'],
      ['archive/zoocompare/', 'ZOOcompare'],
      ['archive/zoomailing/', 'ZOOmailing']
    ]
  }
]
