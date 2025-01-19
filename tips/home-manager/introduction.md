# Введение в Home Manager

**Home Manager** (далее: **HM**) - это система для управления пользовательской средой с помощью менеджера пакетов *Nix*. Простыми словами, HM позволяет:
 - устанавливать программы и настраивать что-либо без прав администратора (также, все что вы установите или настроите не будет доступно для учетной записи администратора)
 - управлять вашей конфигурацией в каталогах пользователя, а не администратора

На первый взгляд может показаться, что **HM** - сборник сложных параметров, но на самом деле большинство из этих опций отвечает лишь за установку опции в конфигурации чего либо.
Для примера возьмем опцию
```nix
programs.git = {
    enable = true;
    extraConfig = {
        credential.helper = "store";
    };
};
```
Этот код включает **Git** и настраивает его на сохранение введенного пароля при подтверждении пуша, например. При обычной, императивной настройке мы бы написали это в `.gitconfig`:
```conf
[credential]
    helper = store
```

Приведу пример конфигурации абстрактного пакета:
```nix
{ pkgs, config, lib, ... }: {
    programs.<name> = {
        enable = true; # Почти у всех программ есть такая опция
        package = pkgs.<name>-with-patches; # Эта опция также есть у большинства программ, позволяет указать какой пакет использовать, если у программы есть вариации (например sway и swayfx)

        settings = { # Одна из вариаций настройки программы
            someopt1.enable = false;
            someopt2 = lib.mkForce "somevalue"; # Заставляем HM установить эту опцию, даже если она где либо переобределяется
            someopt3 = {
                somesubopt1 = true;
                somesubopt2 = config.programs.someprogram.someopt; # Берем какой-либо параметр из уже определенных в HM
            };
        };

        extraConfig = /* <programming language> */ ''
            someopt1 { enable: false }
            someopt2: "somevalue"

            [someopt3]
            somesubopt1: true
            somesubopt2: 314
        ''; # Другой вариант настройки (зависит от того, как это реализовано в home manager)
    };
}
```

А что делать, если в HM нет опций для настройки чего-либо? Тогда на помощь на приходят `home.file` и `xdg.configFile`:
```nix
xdg.configFile."<путь к файлу конфига>".text = /* <programming language> */ ''
    someopt1 = true

    [somesection]
    someopt2 = "yes"
''; # Записывает содержимое в файл, который вы указали, относительно директории ~/.config

home.file."<путь к файлу>".text = /* <programming language> */ ''
    from some import something

    API_KEY=asd9896d8sd87asd87sad8asd6as6dsd
    something.set_api_key(API_KEY)
''; # То же, что и предыдущая, но работает относительно домашней директории

home.file."<путь к файлу>".text = builtins.readFile ./config; # Чтение файла из папки с конфигом на Nix
```

Разберем стандартную, почти минимальную конфигурацию HM:
```nix
{ config, pkgs, ... }: {
    home = {
        username = "<your username>"; # Имя пользователяS
        homeDirectory = "/path/to/your/home/directory"; # Путь к ~, обычно /home/<username>
        stateVersion = "25.05"; # Ваша версия NixOS

        packages = with pkgs; [ # Эти пакеты будут установлены только для текущего пользователя
            vim
            python
            firefox
        ];

        sessionVariables = { # Эти переменные среды будут установлены только для текущего пользователя
            EDITOR = "vim";
            FLAKE = "${config.home.homeDirectory}/nix/flake.nix";
        };
    };
}
```

Вы спросите: я написал себе конфиг, но как теперь его обновить? Ведь он не применится после сохранения файлов. На самом деле все очень просто:
```shell
# Короткая версия
$ home-manager switch

# Длинная версия, нужна только если у вас несколько конфигураций HM или же путь до флейка не указан где-либо еще
$ home-manager switch --flake ~/path/to/your/nix/directory#<your username>
```
