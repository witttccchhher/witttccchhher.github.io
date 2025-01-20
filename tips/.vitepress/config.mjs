export default {
  lang: "ru-RU",
  title: "Useful Nix",
  description: "Nix & NixOS tips and tricks",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/assets/logo-light.svg" }]
  ],
  themeConfig: {
    logo: {
      light: "/assets/logo-dark.svg",
      dark: "/assets/logo-light.svg"
    },
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/witttccchhher/witttccchhher.github.io/edit/master/tips/:path",
      text: "Отредактируйте эту страницу на GitHub"
    },
    externalLinkIcon: true,

    nav: [
      { text: "Главная", link: "/" },
      { text: "Начать чтение", link: "/introduction" }
    ],

    sidebar: [
      {
        items: [
          { text: "Введение и краткий обзор", link: "/introduction" },
          {
            text: "Nix",
            collapsed: false,
            items: []
          },
          {
            text: "NixOS",
            collapsed: false,
            items: []
          },
          {
            text: "Home Manager",
            collapsed: false,
            base: "/home-manager",
            items: [
              { text: "Установка", link: "/installation" },
              { text: "Введение", link: "/introduction" }
            ]
          },
          { text: "Контакты", link: "/contacts" },
          { text: "Благодарности", link: "/thanks" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/witttccchhher/nix-conf" },
      { icon: "telegram", link: "https://t.me/tipsfornix" }
    ]
  }
}
