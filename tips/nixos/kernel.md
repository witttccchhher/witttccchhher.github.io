# Настройка ядра Linux
Вы можете выбрать ядро, которое хотите использовать. По умолчанию установлена последняя версия **LTS** ядра.

Для этого добавьте в cвой конфиг следующее:
```nix
boot.kernelPackages = pkgs.linuxPackages_latest;
```
И пересоберите систему.
> Список всех доступных ядер можно посмотреть, набрав в `nix repl` `pkgs.linuxPackages` и нажав `Tab`

## Конфигурация ядра
Вы можете настроить ядро следующими парметрами:
- `boot.kernelModules = [ "somemodule" ];` - список модулей ядра, которые будут загружены на втором этапе процесса загрузки.
- `boot.kernelParams = [ "someparam=value" ];` - список параметров ядра (**только для встроенных модулей**).
- `boot.extraModprobeConfig = ''options yourmodulename optionA=valueA optionB=valueB'';` - настройка модулей ядра.
- `boot.extraModulePackages = with config.boot.kernelPackages; [ somepkg ];` - список доп. пакетов, поставляющих модули ядра (например, `amneziawg`)