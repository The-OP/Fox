// Отключает API для системных уведомлений из веб-приложений.
user_pref("dom.webnotifications.enabled", false);
// Не дает страницам перехватывать и блокировать обращения к контекстному меню. Ломает Google Docs.
user_pref("dom.event.contextmenu.enabled", false);

// Отключает периодическую загрузку списка вредоносных разрешений с AMO.
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");

// Enforce public key pinning for all certificate authorities.
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
user_pref("security.cert_pinning.enforcement_level", 2);

// Отключает предложения отправить в Mozilla отчеты об ошибках в сертификатах сайтов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=846489
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.url", "");

// Блокировка загрузки незащищенного содержимого на HTTPS-страницах.
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);

// Отключает проверку на отзыв сертификата через OCSP-сервер при установке шифрованного соединения.
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);

// Отключает проигрывание в браузере не эмбеднутых аудио и видео при переходе по ссылке
// на .webm/.mp3/etc
user_pref("media.play-stand-alone", false);

// Отключает Web Video Text Tracks (субтитры для тега video).
user_pref("media.webvtt.enabled", false);

// Отключает попытки страниц развернуть себя на весь экран.
user_pref("full-screen-api.enabled", false);
user_pref("full-screen-api.pointer-lock.enabled", false);

// Запрещает передачу сайтам подробной информации о графических возможностях системы.
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);
// Полностью отключает WebGL.
user_pref("webgl.disabled", true);

// Отключает встроенный просмотрщик PDF.
user_pref("pdfjs.disabled", true);

// Отключает Media Source Extensions. Ломает некоторые кодеки на YouTube.
user_pref("media.mediasource.enabled", false);
user_pref("media.mediasource.mp4.enabled", false);
user_pref("media.mediasource.webm.enabled", false);

// Отключает поддержку соответствующих форматов/кодеков.
user_pref("media.fragmented-mp4.enabled", false);
user_pref("media.fragmented-mp4.exposed", false);
user_pref("media.fragmented-mp4.ffmpeg.enabled", false);
user_pref("media.ogg.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.webm.enabled", false);
user_pref("media.raw.enabled", false);
user_pref("media.wave.enabled", false);

// Отключает декодирование через GStreamer.
user_pref("media.gstreamer.enabled", false);

// Отключает Audio Data API (от которого уже отказались в пользу Web Audio API).
user_pref("media.audio_data.enabled", false);
// Отключает Web Audio API.
user_pref("media.webaudio.enabled", false);

// Отключает загружаемые сайтами шрифты.
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

// "As of 2015, there is speculation that some state cryptologic agencies may possess the capability
// to break RC4 even when used in the TLS protocol. Mozilla and Microsoft recommend disabling
// RC4 where possible." -- https://en.wikipedia.org/wiki/RC4
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);

// SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3", false);
user_pref("network.http.spdy.enabled.v3-1", false);

// Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых
// портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
// Возможны проблемы при обращении на адреса типа ​http://127.0.0.1:631, используемые для конфигурации
// принтеров через CUPS и прочих устройств
user_pref("network.proxy.no_proxies_on", "");

// Полное отключения кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.capacity", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("media.cache_size", 0);
user_pref("network.http.use-cache", false);
// UPD: Начиная с Firefox 35 отключение indexedDB может сломать многие аддоны:
// http://www.ghacks.net/2015/01/16/fix-add-ons-not-working-in-firefox-35/
// https://adblockplus.org/forum/viewtopic.php?t=27375&start=15
user_pref("dom.indexedDB.enabled", false);

// Маскировка браузера под версию 31 LTS и самую распространённую платформу. Не забываем обновлять
// по мере выхода очередных LTS.
user_pref("general.appname.override", "Netscape");
user_pref("general.appversion.override", "5.0 (Windows)");
user_pref("general.oscpu.override", "Windows NT 6.1");
user_pref("general.platform.override", "Win32");
user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:31.0) Gecko/20100101 Firefox/31.0");
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
// Наивысший уровень - отключение внешних шрифтов, JavaScript и всех кодеков за исключением
// WebM, который останется доступным только после нажатия.
// Отключение внешних шрифтов. На выбор одна из настроек:
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("noscript.forbidFonts", true);
// Полное отключение JavaScript
user_pref("noscript.global", false);
// Отключение поддержки кодеков, кроме WebM (он будет воспроизводиться при нажатии).
user_pref("media.ogg.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.wave.enabled", false);
user_pref("media.apple.mp3.enabled", false);
