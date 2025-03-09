# Установка tuigreet

**tuigreet** - это менеджер входа в систему, работающий в tty c tui.

## Установка

```nix
services.greetd = {
  enable = true;
  settings = {
    default_session = {
      command = "${pkgs.greetd.tuigreet} -c <команда для запуска WM>";
      user = "greeter";
    };
  };
};
```
