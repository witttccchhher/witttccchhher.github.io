import{_ as a,c as s,a2 as e,o as t}from"./chunks/framework.Dz7_3PEu.js";const c=JSON.parse('{"title":"Изменение приоритетов","description":"","frontmatter":{},"headers":[],"relativePath":"nixlang/priorities.md","filePath":"nixlang/priorities.md","lastUpdated":1740566773000}'),l={name:"nixlang/priorities.md"};function n(h,i,k,r,d,o){return t(),s("div",null,i[0]||(i[0]=[e('<h1 id="изменение-приоритетов" tabindex="-1">Изменение приоритетов <a class="header-anchor" href="#изменение-приоритетов" aria-label="Permalink to &quot;Изменение приоритетов&quot;">​</a></h1><p>Иногда, при изменении конфигурации, возникает конфиликт, если один и тот же параметр определяется сразу в нескольких местах. Это помогают решить две функции из стандартной библиотеки - <code>mkForce</code> и <code>mkDefault</code>. Вообще, обе эти функции происходят от одной <code>mkOverride</code>, которая принимает два аргумента - число и значение. Когда система обнаруживает конфликт в вашей конфигурации, mkOverride по переданному числу решает, какой будет приоритет у той или иной опции (чем ниже значение, тем больше приоритет). Стандартный приоритет - 100.</p><h2 id="mkforce" tabindex="-1"><code>mkForce</code> <a class="header-anchor" href="#mkforce" aria-label="Permalink to &quot;`mkForce`&quot;">​</a></h2><p>Эта функция устанавливает переданному значению приоритет 50 (почти максимальный)</p><div class="language-nix vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nix</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mkForce</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> mkOverride</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span></code></pre></div><h2 id="mkdefault" tabindex="-1"><code>mkDefault</code> <a class="header-anchor" href="#mkdefault" aria-label="Permalink to &quot;`mkDefault`&quot;">​</a></h2><p>Эта функция устанавливает приоритет в 1000 (почти минимальный)</p><div class="language-nix vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nix</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mkDefault</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> mkOverride</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span></code></pre></div><h2 id="другие-функции-приоритета" tabindex="-1">Другие функции приоритета <a class="header-anchor" href="#другие-функции-приоритета" aria-label="Permalink to &quot;Другие функции приоритета&quot;">​</a></h2><p>Помимо этих, есть еще 2 обертки над <code>mkOverride</code>: <code>mkOptionDefault</code> и <code>mkVMOverride</code>. Соответственно равны 1500 и 10.</p><h2 id="пример-использования" tabindex="-1">Пример использования <a class="header-anchor" href="#пример-использования" aria-label="Permalink to &quot;Пример использования&quot;">​</a></h2><p>Например, некоторые оконные менеджеры (<strong>sway</strong>) могут устанавливать значение <code>programs.xwayland.enable</code> на <code>true</code>. Чтобы избежать этого, вы можете использовать</p><div class="language-nix vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nix</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">programs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">xwayland</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">enable</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> lib</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">mkForce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span></code></pre></div>',13)]))}const g=a(l,[["render",n]]);export{c as __pageData,g as default};
