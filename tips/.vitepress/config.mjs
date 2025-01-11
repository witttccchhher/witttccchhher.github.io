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
      { text: "Home", link: "/" },
      { text: "Get started", link: "/introduction" }
    ],

    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/introduction" },
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
            items: []
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/witttccchhher/nix-conf" }
    ]
  }
}
