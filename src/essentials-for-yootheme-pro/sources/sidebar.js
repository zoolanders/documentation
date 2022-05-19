module.exports = [
  {
    collapsable: false,
    children: [
      ['../', '⬅︎ Essentials for YOOtheme Pro']
    ]
  },
  {
    title: 'Sources Addon',
    collapsable: false,
    sidebarDepth: 3,
    children: [
      ''
    ]
  },
  {
    title: 'Sources',
    collapsable: false,
    sidebarDepth: 1,
    displayAllHeaders: false,
    children: [
      'sources/database',
      'sources/csv',
      'sources/google-sheet',
      'sources/instagram',
      'sources/youtube',
      'sources/tiktok',
      'sources/vimeo',
      'sources/google-business-profile',
    ]
  },
  {
    title: 'Advanced',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'advanced/custom-source'
    ]
  }
]
