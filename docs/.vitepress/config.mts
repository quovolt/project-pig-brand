import { defineConfig } from 'vitepress'

// Local builds use /. The Pages workflow supplies its configured base path.
const base = process.env.DOCS_BASE || '/'
if (!base.startsWith('/') || !base.endsWith('/')) {
  throw new Error(
    'DOCS_BASE must start and end with a slash, for example /brand/.',
  )
}

export default defineConfig({
  lang: 'en-US',
  title: 'Project Pig Brand',
  description: 'A shared home for Project Pig brand documentation.',
  base,
  lastUpdated: true,
  cleanUrls: false,
  // Discourage indexing, but never treat this tag as access control.
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    siteTitle: 'Project Pig Brand',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Brand', link: '/brand/' },
      { text: 'Assets', link: '/assets/' },
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Contributing', link: '/guide/contributing' },
        ],
      },
      {
        text: 'Brand',
        items: [
          { text: 'Overview', link: '/brand/' },
          { text: 'Visual identity', link: '/brand/visual-identity' },
          { text: 'Voice and writing', link: '/brand/voice-and-writing' },
        ],
      },
      {
        text: 'The Words',
        items: [
          { text: 'README · Our workflow', link: '/brand/the-words/README' },
        ],
      },
      {
        text: 'Resources',
        items: [{ text: 'Asset library', link: '/assets/' }],
      },
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/quovolt/project-pig-brand' },
    ],
    editLink: {
      pattern:
        'https://github.com/quovolt/project-pig-brand/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Project Pig brand documentation · Foundation in progress',
    },
  },
})
