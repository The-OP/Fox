// Полное отключение кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// https://en.wikipedia.org/wiki/HTTP_ETag
user_pref("network.http.use-cache", false);
user_pref("browser.cache.memory.enable", false);
user_pref("media.cache_size", 0);
user_pref("image.cache.size", 0);

// Отключает проверку на отзыв сертификата через OCSP-сервер при установке шифрованного соединения.
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);

// Полностью отключает WebGL.
user_pref("webgl.disabled", true);

// Отключает попытки страниц развернуть себя на весь экран.
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.pointer-lock.enabled", false);

// Отключает Web Audio API.
user_pref("media.webaudio.enabled", false);

// Отключает декодирование мультимедиа через GStreamer.
user_pref("media.gstreamer.enabled", false);

// UPD: Начиная с Firefox 35 отключение indexedDB может сломать многие аддоны:
// http://www.ghacks.net/2015/01/16/fix-add-ons-not-working-in-firefox-35/
// https://adblockplus.org/forum/viewtopic.php?t=27375&start=15
// user_pref("dom.indexedDB.enabled", false);

// Маскировка браузера под версию 38 LTS и самую распространённую платформу. Не забываем обновлять
// по мере выхода очередных LTS.
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.platform.override", "Win32");
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0");
user_pref("general.productSub.override", "20100101");
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// Кроме того, на основе анализа истории уязвимостей в Firefox, разработчиками Tor Browser был
// сформирован список возможностей, в реализации которых всплывает больше всего уязвимостей.
// Для повышения безопасности предлагается реализовать средство для выборочного отключения
// проблемных возможностей путем предоставления пользователю кнопки для выбора уровня
// безопасности.
// Первый уровень подразумевает отключение opentype в коде отображения шрифтов.
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// Второй уровень - отключение WebAudio и asm.js.
user_pref("javascript.options.ion.content", false);
user_pref("javascript.options.typeinference", false);
user_pref("javascript.options.asmjs", false);
user_pref("noscript.forbidMedia", true);
user_pref("media.webaudio.enabled", false );
// Третий уровень - отключение JIT-компилятора, SVG и обработку JavaScript только для HTTPS.
user_pref("javascript.options.baselinejit.content", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
// Наивысший уровень - отключение внешних шрифтов, JavaScript и всех кодеков.
// Отключение внешних шрифтов. На выбор одна из настроек:
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("noscript.forbidFonts", true);
// Полное отключение JavaScript
user_pref("noscript.global", false);
// Отключает поддержку соответствующих форматов/кодеков.
user_pref("media.fragmented-mp4.enabled", false);
user_pref("media.fragmented-mp4.exposed", false);
user_pref("media.fragmented-mp4.ffmpeg.enabled", false);
user_pref("media.ogg.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.webm.enabled", false);
user_pref("media.raw.enabled", false);
user_pref("media.wave.enabled", false);
user_pref("media.apple.mp3.enabled", false);
