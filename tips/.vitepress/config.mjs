export default {
  lang: "ru-RU",
  title: "Useful Nix",
  description: "Nix & NixOS tips and tricks",
  lastUpdated: true,
  themeConfig: {
    logo: {
      light: "/assets/logo-dark.svg",
      dark: "/assets/logo-light.svg"
    },
    search: {
      provider: "local",
    },

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
            items: [
              { text: "Установка", link: "/home-manager/installation" },
              { text: "Введение", link: "/home-manager/introduction" }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/witttccchhher/nix-conf" }
    ]
  }
}
