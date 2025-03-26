# Systemd-nspawn

Это как chroot, но на стероидах. systemd-nspawn может использоваться, чтобы запустить команду или дистрибутив в лёгком namespace контейнере.

## Пример
```nix
containers.nextcloud = {
  autoStart = true;
  privateNetwork = true;
  hostAddress = "192.168.100.10";
  localAddress = "192.168.100.11";
  hostAddress6 = "fc00::1"; # Опционально
  localAddress6 = "fc00::2"; # Опционально
  config = { config, pkgs, lib, ... }: {

    services.nextcloud = {
      enable = true;
      package = pkgs.nextcloud28;
      hostName = "localhost";
      config.adminpassFile = "${pkgs.writeText "adminpass" "test123"}"; # НЕ ИСПОЛЬЗОВАТЬ В PRODUCTION !!!
    };

    system.stateVersion = "24.11";

    networking = {
      firewall = {
        enable = true;
        allowedTCPPorts = [ 80 ];
      };
    };
  };
};
```

Для контейнера доступны все возможности конфигурации, что доступны и для NixOS

