export default {
  lang: "ru-RU",
  title: "Useful Nix",
  description: "Nix & NixOS tips and tricks",
  lastUpdated: true,
  cleanUrls: true,
  outDir: "./dist",
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: "/logo-light.svg" }],
    ["meta", { name: "darkreader-lock" }]
  ],
  themeConfig: {
    logo: {
      light: "/logo-dark.svg",
      dark: "/logo-light.svg"
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
      { text: "Введение и краткий обзор", link: "/introduction" },
      {
        text: "Nix Package Manager",
        collapsed: false,
        base: "/nixpm",
        items: [
          { text: "Введение", link: "/introduction" }
        ]
      },
      {
        text: "Nix Language",
        collapsed: false,
        base: "/nixlang",
        items: [
          { text: "Приоритеты", link: "/priorities" }
        ]
      },
      {
        text: "NixOS",
        collapsed: false,
        base: "/nixos",
        items: [
          { text: "Установка", link: "/installation" },
          //{ text: "Введение", link: "/introduction" },
          { text: "Флейки", link: "/flakes" },
          { text: "Настройка ядра", link: "/kernel" },
          { text: "Greetd", link: "/greetd" },
          { text: "Systemd-nspawn", link: "/systemd-nspawn" },
          { text: "Firejail", link: "/firejail" }
        ]
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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/witttccchhher/nix-conf" },
      { icon: "telegram", link: "https://t.me/nixtips_ru" }
    ]
  }
}
