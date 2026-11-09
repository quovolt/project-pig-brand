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
          {
            text: '1. Prepare group material',
            link: '/brand/the-words/01-material',
          },
          {
            text: '素材 · 生活主理人故事',
            link: '/brand/the-words/materials/life-curator-story',
          },
          {
            text: '2. Abstract the material',
            link: '/brand/the-words/02-abstraction',
          },
          {
            text: '3. Choose an inner idea and words',
            link: '/brand/the-words/03-inner-idea',
          },
          {
            text: '4. Research the audience',
            link: '/brand/the-words/04-audience',
          },
          {
            text: '5. Define positioning',
            link: '/brand/the-words/05-positioning',
          },
          {
            text: '6. Transform into outward language',
            link: '/brand/the-words/06-expression',
          },
          {
            text: '7. Apply, test and refine',
            link: '/brand/the-words/07-testing',
          },
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
