# Systemd-nspawn

Это как `chroot`, но на стероидах. `systemd-nspawn` может использоваться, чтобы запустить команду или дистрибутив в лёгком *namespace* контейнере.

## Пример

```nix
containers.nextcloud = {
  autoStart = true;
  privateNetwork = true;
  g
  hostAddress6 = "fc00::1"; # Опционально
  localAddress6 = "fc00::2"; # Опционально
  config = { config, pkgs, lib, ... }: {j

    services.nextcloud = {
      enable = true;
      package = pkgs.nextcloud28;
      hostName = "localhost";
      config.adminpassFile = "${pkgs.writeText "adminpass" "test123"}"; # Не используйте в проде - этот файл будет доступен для чтения кому угодно
    };

    system.stateVersion = "25.05";

    networking = {
      firewall = {
        enable = true;
        allowedTCPPorts = [ 80 ];
      };
      useHostResolvConf = lib.mkForce false;
    };
    services.resolved.enable = true;
  };
};
```

Для контейнера доступны все возможности конфигурации, что доступны и для **NixOS**. Теперь, веб-сервис контейнера будет доступен по указанному адресу.

## Использование

Чтобы работать с контейнерами, существует команда `nixos-container`. Для запуска/остановки контейнера используйте:

```bash
$ nixos-container start <container-name>
$ nixos-container stop <container-name>
$ nixos-container restart <container-name>
```

Для получения сведений о контейнерах:

```bash
$ nixos-container status <container-name> # Покажет статус контейнера
$ nixos-container list # Выведет список всех контейнеров
```

Для логина в контейнер:

```bash
$ nixos-container login <container-name>
$ nixos-container root-login <container-name> # Вход от root пользователя, пароль не требуется
```

Для уничтожения контейнера со всей его файловой системой:

```bash
$ nixos-container destroy <container-name>
```
