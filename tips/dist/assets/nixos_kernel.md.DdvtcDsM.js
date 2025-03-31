import{_ as a,c as n,a2 as e,o as i}from"./chunks/framework.Dz7_3PEu.js";const o=JSON.parse('{"title":"Ядро Linux","description":"","frontmatter":{},"headers":[],"relativePath":"nixos/kernel.md","filePath":"nixos/kernel.md","lastUpdated":1741491528000}'),p={name:"nixos/kernel.md"};function l(t,s,k,c,g,r){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="ядро-linux" tabindex="-1">Ядро Linux <a class="header-anchor" href="#ядро-linux" aria-label="Permalink to &quot;Ядро Linux&quot;">​</a></h1><h2 id="конфигурация" tabindex="-1">Конфигурация <a class="header-anchor" href="#конфигурация" aria-label="Permalink to &quot;Конфигурация&quot;">​</a></h2><p>Вы можете выбрать ядро, которое хотите использовать Для этого добавьте в /etc/nixos/configuration.nix:</p><div class="language-nix vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nix</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">boot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">kernelPackages</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> pkgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">linuxPackages_latest</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span></code></pre></div><p>И пересоберите систему</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo nixos-rebuild switch</span></span>
<span class="line"><span>$ sudo reboot</span></span></code></pre></div><p>Доступные ядра:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pkgs.linuxPackages                           pkgs.linuxPackages_latest</span></span>
<span class="line"><span>pkgs.linuxPackages-libre                     pkgs.linuxPackages_latest-libre</span></span>
<span class="line"><span>pkgs.linuxPackages-rt                        pkgs.linuxPackages_latest_hardened</span></span>
<span class="line"><span>pkgs.linuxPackages-rt_5_4                    pkgs.linuxPackages_latest_xen_dom0</span></span>
<span class="line"><span>pkgs.linuxPackages-rt_5_6                    pkgs.linuxPackages_latest_xen_dom0_hardened</span></span>
<span class="line"><span>pkgs.linuxPackages-rt_latest                 pkgs.linuxPackages_mptcp</span></span>
<span class="line"><span>pkgs.linuxPackagesFor                        pkgs.linuxPackages_rpi0</span></span>
<span class="line"><span>pkgs.linuxPackages_4_14                      pkgs.linuxPackages_rpi1</span></span>
<span class="line"><span>pkgs.linuxPackages_4_19                      pkgs.linuxPackages_rpi2</span></span>
<span class="line"><span>pkgs.linuxPackages_4_4                       pkgs.linuxPackages_rpi3</span></span>
<span class="line"><span>pkgs.linuxPackages_4_9                       pkgs.linuxPackages_rpi4</span></span>
<span class="line"><span>pkgs.linuxPackages_5_4                       pkgs.linuxPackages_testing</span></span>
<span class="line"><span>pkgs.linuxPackages_5_8                       pkgs.linuxPackages_testing_bcachefs</span></span>
<span class="line"><span>pkgs.linuxPackages_5_9                       pkgs.linuxPackages_testing_hardened</span></span>
<span class="line"><span>pkgs.linuxPackages_custom                    pkgs.linuxPackages_xen_dom0</span></span>
<span class="line"><span>pkgs.linuxPackages_custom_tinyconfig_kernel  pkgs.linuxPackages_xen_dom0_hardened</span></span>
<span class="line"><span>pkgs.linuxPackages_hardened                  pkgs.linuxPackages_zen</span></span>
<span class="line"><span>pkgs.linuxPackages_hardkernel_4_14</span></span>
<span class="line"><span>pkgs.linuxPackages_hardkernel_latest</span></span></code></pre></div>`,8)]))}const h=a(p,[["render",l]]);export{o as __pageData,h as default};
