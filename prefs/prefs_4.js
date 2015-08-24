// Полное отключение кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since
// и If-None-Match (https://en.wikipedia.org/wiki/HTTP_ETag), которые также могут быть использованы
// и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
// http://kb.mozillazine.org/Network.http.use-cache
user_pref("network.http.use-cache", false);
// http://kb.mozillazine.org/Browser.cache.memory.enable
user_pref("browser.cache.memory.enable", false);
// http://kb.mozillazine.org/Browser.cache.memory.capacity
user_pref("browser.cache.memory.capacity", 0);
user_pref("media.cache_size", 0);
user_pref("image.cache.size", 0);

// Полностью отключает WebGL.
// http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
user_pref("webgl.disabled", true);
user_pref("webgl.force-enabled", false);

// Отключает применение к посещенным ссылкам стилей с селектором :visited, что предотвращает
// возможность выяснить, какие URL есть у пользователя в истории браузера. Главную уязвимость с
// использованием для этого getComputedStyle() закрыли, однако есть и некоторые другие способы
// (см. последние комментарии в багзилле), хоть и сложные в эксплуатации, но в принципе возможные.
// https://bugzilla.mozilla.org/show_bug.cgi?id=147777
// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// http://dbaron.org/mozilla/visited-privacy
user_pref("layout.css.visited_links_enabled", false);

// Отключает автоматическое копирование выделенного текста в буфер обмена (только для Linux-билдов).
// http://kb.mozillazine.org/Clipboard.autocopy
user_pref("clipboard.autocopy", false);

// Отключает загружаемые сайтами шрифты. Несколько повышает безопасность за счет исключения
// уязвимостей в парсере шрифтов. Ломает кнопки uBlock. В качестве не ломающей кнопки замены
// можно добавить правило "no-remote-fonts: * true" (без кавычек) в My rules самого uBlock.
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

// Отключает использование указанных сайтами шрифтов (Preferences -> Content -> Advanced ->
// Allow pages to choose their own fonts, instead of my selections above). Будут использоваться
// указанные пользователем в Preferences -> Content. Предотвращает фингерпринтинг через
// анализ установленных шрифтов: https://www.browserleaks.com/fonts
user_pref("browser.display.use_document_fonts", 0);

// Отключает попытки страниц развернуть себя на весь экран и соответствующую кнопку в HTML5-плеерах.
// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.pointer-lock.enabled", false);

// Отключает декодирование мультимедиа через GStreamer.
user_pref("media.gstreamer.enabled", false);

// Маскировка браузера под версию 38 LTS и самую распространённую платформу. Не забываем обновлять
// по мере выхода очередных LTS.
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.platform.override", "Win32");
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0");
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// Кроме того, на основе анализа истории уязвимостей в Firefox, разработчиками Tor Browser был
// сформирован список возможностей, в реализации которых всплывает больше всего уязвимостей.
// Для повышения безопасности предлагается реализовать средство для выборочного отключения
// проблемных возможностей путем предоставления пользователю кнопки для выбора уровня
// безопасности.
// Первый уровень подразумевает отключение opentype в коде отображения шрифтов.
// https://wiki.mozilla.org/SVGOpenTypeFonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// Второй уровень - отключение WebAudio и asm.js.
user_pref("javascript.options.ion", false);
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);
// Настройки media.webaudio.enabled больше не существует, поэтому только так.
user_pref("noscript.forbidMedia", true);
// Третий уровень - отключение JIT-компилятора, SVG и обработку JavaScript только для HTTPS.
user_pref("javascript.options.baselinejit", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
// Наивысший уровень - отключение внешних шрифтов, JavaScript и всех кодеков.
// Отключение внешних шрифтов. На выбор одна из настроек:
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("noscript.forbidFonts", true);
// Полное отключение JavaScript
user_pref("noscript.global", false);
// Отключает поддержку соответствующих форматов/кодеков.
user_pref("media.format-reader.mp4", false);
user_pref("media.fragmented-mp4.enabled", false);
user_pref("media.fragmented-mp4.exposed", false);
user_pref("media.fragmented-mp4.ffmpeg.enabled", false);
user_pref("media.ogg.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.webm.enabled", false);
user_pref("media.raw.enabled", false);
user_pref("media.wave.enabled", false);
user_pref("media.apple.mp3.enabled", false);
user_pref("media.apple.mp4.enabled", false);
user_pref("media.windows-media-foundation.enabled", false);
user_pref("media.windows-media-foundation.use-dxva", false);
user_pref("media.directshow.enabled", false);

// Отключает проверку на отзыв сертификата через OCSP-сервер при установке шифрованного соединения.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_secure-website-certificates
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);

// Отключает автоматическое обновление тем оформления.
user_pref("lightweightThemes.update.enabled", false);

// Отключает автоматическую установку обновлений аддонов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=701987
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("extensions.update.autoUpdateDefault", false);
// Отключает периодическую проверку обновлений аддонов.
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.url", "");
user_pref("extensions.update.background.url", "");
