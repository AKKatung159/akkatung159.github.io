import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ekkrit K. | DEV",
  description: "Ekkrit K. | DEV",
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    logo: '../logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'Resume', link: '/resume/' },
    ],

    sidebar: [
      {
        text: 'Blog',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AKKatung159' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ekkrit-kanchanasiri' },
      { icon: 'facebook', link: 'https://www.facebook.com/ak.katung/' },
      { icon: 'instagram', link: 'https://www.instagram.com/ak_katung' },
    ]
  }
})
