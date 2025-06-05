---
title: SELinux
---

**SELinux** - мандатная, система контроля доступа, обеспечивающий расширенный контроль доступа. Например: SELinux способен ограничивать доступ к определённым файлам, для определённых программ

Настройка SELinux в NixOS:

```nix
boot.kernelParams = [ "security=selinux" ];
 # Сборка ядра с поддержкой SELinux
 boot.kernelPatches = [ {
        name = "selinux-config";
        patch = null;
        extraConfig = ''
                SECURITY_SELINUX y
                SECURITY_SELINUX_BOOTPARAM n
                SECURITY_SELINUX_DISABLE n
                SECURITY_SELINUX_DEVELOP y
                SECURITY_SELINUX_AVC_STATS y
                SECURITY_SELINUX_CHECKREQPROT_VALUE 0
                DEFAULT_SECURITY_SELINUX n
              '';
        } ];
 # policycoreutils для управления SELinux
 environment.systemPackages = with pkgs; [ policycoreutils ];
 # Сборка системы для работы с SELinux
 systemd.package = pkgs.systemd.override { withSelinux = true; };
```
