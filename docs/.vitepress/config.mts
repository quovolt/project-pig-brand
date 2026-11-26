import { defineConfig } from 'vitepress'

// Local builds use /. The Pages workflow supplies its configured base path.
const base = process.env.DOCS_BASE || '/'
if (!base.startsWith('/') || !base.endsWith('/')) {
  throw new Error(
    'DOCS_BASE must start and end with a slash, for example /brand/.',
  )
}

export default defineConfig({
  lang: 'zh-CN',
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
      { text: '藏锐路径', link: '/brand/' },
      { text: '品牌工程骨架', link: '/brand/system/' },
      { text: '做到哪了', link: '/brand/system/baseline' },
    ],
    sidebar: [
      {
        text: '一 · 藏锐路径（叙事与披露范式）',
        items: [
          { text: 'L1 · 初见：品牌故事', link: '/brand/' },
          { text: 'L2 · 展开：生活与气质', link: '/brand/narrative/lifestyle' },
          { text: 'L3 · 藏锐：看不见的准备', link: '/brand/narrative/craft' },
          { text: '范式总纲：藏锐路径', link: '/brand/narrative/paradigm' },
        ],
      },
      {
        text: '二 · 品牌工程骨架（有序推导）',
        items: [
          { text: '工程骨架总览', link: '/brand/system/' },
          { text: '当前进度基线', link: '/brand/system/baseline' },
          { text: 'B1 · 品牌定义', link: '/brand/system/b1/' },
          { text: 'W3 · 创意转化', link: '/brand/system/w3/' },
          { text: 'B2 · 品牌表达', link: '/brand/system/b2/' },
          { text: 'B3 · 体验与履约', link: '/brand/system/b3/' },
          { text: 'B4 · 交付与维护', link: '/brand/system/b4/' },
        ],
      },
      {
        text: '方法与原始档案',
        collapsed: true,
        items: [
          { text: '工作方法', link: '/brand/system/workflow' },
          { text: '决定与原稿索引', link: '/brand/system/replay' },
          { text: '提交与保留范围', link: '/brand/system/retention' },
          { text: '生活主理人企划原稿', link: '/brand/life-curator-plan' },
          { text: '视觉表达速查', link: '/brand/visual-identity' },
          { text: '语言与角色速查', link: '/brand/voice-and-writing' },
          { text: '资产与产物入口', link: '/assets/' },
          { text: '本地预览', link: '/guide/getting-started' },
          { text: '如何维护', link: '/guide/contributing' },
        ],
      },
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/SebsPresso/project-pig-brand',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/SebsPresso/project-pig-brand/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Project Pig brand documentation · 藏锐路径 & 品牌工程骨架',
    },
  },
})
