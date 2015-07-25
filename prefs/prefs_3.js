// Отключает API для системных уведомлений из веб-приложений.
// https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications
user_pref("dom.webnotifications.enabled", false);
// Не дает страницам перехватывать и блокировать обращения к контекстному меню. Ломает Google Docs.
user_pref("dom.event.contextmenu.enabled", false);

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

// Разрешить запрос HTTP-аунтефикации при загрузке только самого документа, но не его ресурсов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=647010
// https://mxr.mozilla.org/mozilla-beta/source/modules/libpref/init/all.js?rev=e549349b8d66#1717
user_pref("network.auth.allow-subresource-auth", 0);

// Отключает периодическую загрузку списка вредоносных разрешений с AMO.
// https://addons.mozilla.org/firefox/blocked/
// http://kb.mozillazine.org/Extensions.blocklist.enabled
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_blocklist-updating
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.url", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");

// Отключает переход по URL при нажатии на соответствующие элементы управления:
// Preferences -> Search -> Add more search engines...
user_pref("browser.search.searchEnginesURL", "");
// Edit Control -> Context Menu -> Languages -> Add dictionaries...
user_pref("browser.dictionaries.download.url", "");
// Customize -> Themes -> Get More Themes
user_pref("lightweightThemes.getMoreURL", "");

// Отключает проигрывание в браузере не эмбеднутых аудио и видео при переходе по прямой ссылке
// на .webm/.mp3/etc. Вместо проигрывания вызовется сохранение файла.
user_pref("media.play-stand-alone", false);

// Отключает Web Video Text Tracks (субтитры для тега video).
user_pref("media.webvtt.enabled", false);

// Запрещает передачу сайтам подробной информации о графических возможностях системы.
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);

// Отключает встроенный просмотрщик PDF.
user_pref("pdfjs.disabled", true);

// Отключает Media Source Extensions. Ломает некоторые кодеки на YouTube.
user_pref("media.mediasource.enabled", false);
user_pref("media.mediasource.mp4.enabled", false);
user_pref("media.mediasource.webm.enabled", false);

// Отключает Audio Data API (от которого уже отказались в пользу Web Audio API).
// https://wiki.mozilla.org/Audio_Data_API
user_pref("media.audio_data.enabled", false);

// Отключает загружаемые сайтами шрифты. Ломает кнопки uBlock.
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

// SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3", false);
user_pref("network.http.spdy.enabled.v3-1", false);

// Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых
// портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
// Возможны проблемы при обращении на адреса типа ​http://127.0.0.1:631, используемые для конфигурации
// принтеров через CUPS и прочих устройств
user_pref("network.proxy.no_proxies_on", "");

// Отключение дискового кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// https://en.wikipedia.org/wiki/HTTP_ETag
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.capacity", 0);
user_pref("browser.cache.offline.enable", false);
