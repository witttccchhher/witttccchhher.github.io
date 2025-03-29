Firejail - это простая в использовании песочница, которая ограничивает среду выполнения ненадежных приложений

## Пример
```nix
programs.firejail = {
  enable = true;
  wrappedBinaries = {
    librewolf = {
      executable = "${pkgs.librewolf}/bin/librewolf";
      profile = "${pkgs.firejail}/etc/firejail/librewolf.profile";
      extraArgs = [
        # Включаем тёмную тему
        "--env=GTK_THEME=Adwaita:dark"
      ];
    };
  };
};
```
