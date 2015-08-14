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

// Отключает периодическую загрузку списка вредоносных расширений с AMO.
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

// Отключает Media Source Extensions. Ломает некоторые кодеки на YouTube.
user_pref("media.mediasource.enabled", false);
user_pref("media.mediasource.mp4.enabled", false);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.mediasource.format-reader", false);
user_pref("media.mediasource.format-reader.mp4", false);

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

// Отключает Offline App Cache.
// Демо можно посмотреть тут: http://appcache.offline.technology/demo/index.html мониторя
// использование через about:cache -> appcache и меняя настройки.
// http://www.w3.org/TR/offline-webapps/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.capacity", 0);
// Запрос разрешения на использование бесполезен при отключенном Offline App Cache, но все равно
// будет появляться, если его не отключить этой настройкой.
// https://mxr.mozilla.org/mozilla-esr38/source/browser/base/content/browser.js?rev=ae7fbd79941b#6020
user_pref("browser.offline-apps.notify", false);
// Эта настройка тоже нужна тут, иначе у всех сайтов по умолчанию будет permission "offline-app", и при
// попытке воспользоваться Offline App Cache, они будут появляться в списке Preferences -> Advanced ->
// Network -> Offline Web Content and User Data, хоть и не смогут ничего хранить в выключенном кэше.
// https://mxr.mozilla.org/mozilla-esr38/source/uriloader/prefetch/nsOfflineCacheUpdateService.cpp?rev=dd257f17530c#649
// https://mxr.mozilla.org/mozilla-esr38/source/dom/base/nsContentSink.cpp?rev=dd257f17530c#1056
// https://mxr.mozilla.org/mozilla-esr38/source/dom/base/nsContentUtils.cpp?rev=5be76431120a#1709
// https://mxr.mozilla.org/mozilla-esr38/source/uriloader/prefetch/nsOfflineCacheUpdateService.cpp?rev=dd257f17530c#744
user_pref("offline-apps.allow_by_default", false);

// Отключение дискового кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since
// и If-None-Match (https://en.wikipedia.org/wiki/HTTP_ETag), которые также могут быть использованы
// и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Настройки для HTTP-заголовка Referer (а также DOM-свойства document.referrer), содержащего URL,
// с которого пользователь перешел по ссылке или запросил ресурс. Используется некоторыми сайтами
// для защиты от хотлинкинга, поэтому полностью его лучше не запрещать.
// Реферер удобнее контролировать при помощи аддона RefControl, однако в Firefox есть и довольно
// продвинутые встроенные настройки для управления реферерами, которые могут быть использованы,
// если установка лишнего аддона нежелательна.
// Оптимально будет включить spoofSource и выставить trimmingPolicy в 2, а остальное не трогать - тогда
// любому сайту в качестве реферера будет посылаться его корень, и защита от хотлинкинга не сломается.
// Альтернатива - выставление XOriginPolicy в 1, оставляя все остальное по умочанию, но это ломает
// некоторые защиты от хотлинкинга.
// PS: Здесь нет опечаток в словах, обозначающих реферер. Заголовок - Referer с тремя "r", свойство
// DOM - с четырьмя "r", настройки Firefox кроме одной - с тремя "r", одна - с четырьмя.
// https://en.wikipedia.org/wiki/HTTP_referer
// https://en.wikipedia.org/wiki/Hotlinking
// https://mxr.mozilla.org/mozilla-esr38/source/modules/libpref/init/all.js?rev=0f8338121472#1216
// https://mxr.mozilla.org/mozilla-esr38/source/netwerk/protocol/http/HttpBaseChannel.cpp?rev=7bc0140f0bfe#921
// "false=real referer, true=spoof referer (use target URI as referer)"
user_pref("network.http.referer.spoofSource", true);
// "0=full URI, 1=scheme+host+port+path, 2=scheme+host+port"
user_pref("network.http.referer.trimmingPolicy", 2);
// "0=don't send any, 1=send only on clicks, 2=send on image requests as well"
user_pref("network.http.sendRefererHeader", 2);
// "0=always send, 1=send iff base domains match, 2=send iff hosts match"
user_pref("network.http.referer.XOriginPolicy", 0);
// "Controls whether we send HTTPS referres to other HTTPS sites. By default this is enabled for
// compatibility (see bug 141641)"
user_pref("network.http.sendSecureXSiteReferrer", true);
