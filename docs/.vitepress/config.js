//https://github.com/vuejs/vitepress/tree/master/docs
module.exports = {
  title: "MetaStock Dev Docs",
  description: "What in the What?",
  base: "/docs",
  lang: "en-US",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/MS-logo-sm.png",
    docsDir: "docs",
    // editLinks: true,
    editLinkText: "Edit this page on GitHub",

    lastUpdated: "Last Updated",
    // repo: 'vuejs/vitepress',
    displayAllHeaders: true, // Default: false
    activeHeaderLinks: false, // Default: true
    nav: [
      { text: "Landing Pages", link: "/conference/speakers" },
      { text: "Components", link: "/conference/Saturday" },
      { text: "How To ...", link: "/conference/Venue" },
      // { text: "Home", link: "/" },
      // { text: "Guide", link: "/guide/" },
      // { text: "API", link: "/api/" },
      // {
      //   text: "External",
      //   link: "https://google.com",
      //   target: "_self",
      //   rel: false,
      // },
      // {
      //   text: "Settings",
      //   ariaLabel: "Settings Menu",
      //   items: [
      //     { text: "Chinese", link: "/guide/" },
      //     { text: "Japanese", link: "/guide/one" },
      //   ],
      // },
    ],
    sidebar: {
      // sidebar: "auto",
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'One', link: '/guide/one' },
        { text: 'Two', link: '/guide/two' },
        { text: 'API', link: '/api/' },
      ]
    },
    {
      text: 'Introduction',
      children: [
        { text: 'How do I use these docs?', link: '/guide/how-do-i-use' },
        // { text: 'Getting Started', link: '/guide/getting-started' },
        // { text: 'Configuration', link: '/guide/configuration' },
        // { text: 'Asset Handling', link: '/guide/assets' },
        // { text: 'Markdown Extensions', link: '/guide/markdown' },
        // { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        // { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Github', link: '/guide/github' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        // {
        //   text: 'Differences from Vuepress',
        //   link: '/guide/differences-from-vuepress'
        // }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}