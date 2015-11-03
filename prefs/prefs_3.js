// Отключает API для системных уведомлений из веб-приложений.
// https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications
user_pref("dom.webnotifications.enabled", false);
// Не дает страницам перехватывать и блокировать обращения к контекстному меню. Ломает Google Docs.
user_pref("dom.event.contextmenu.enabled", false);

// Enforce public key pinning for all certificate authorities.
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// https://bugzilla.mozilla.org/show_bug.cgi?id=1059392
// https://bugzilla.mozilla.org/show_bug.cgi?id=1168603
user_pref("security.cert_pinning.enforcement_level", 2);

// Отключает предложения отправить в Mozilla отчеты об ошибках в сертификатах сайтов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=846489
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.url", "");

// Разрешить запрос HTTP-аунтефикации при загрузке только самого документа, но не его ресурсов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=647010
// https://hg.mozilla.org/releases/mozilla-beta/file/e549349b8d66/modules/libpref/init/all.js#l1717
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
user_pref("media.mediasource.format-reader.webm", false);

// Отключает Audio Data API (от которого уже отказались в пользу Web Audio API).
// https://wiki.mozilla.org/Audio_Data_API
user_pref("media.audio_data.enabled", false);

// SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
// https://trac.torproject.org/projects/tor/ticket/14952
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled.http2draft", false);

// Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых
// портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
// Возможны проблемы при обращении на адреса типа http://127.0.0.1:631, используемые для конфигурации
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
// https://hg.mozilla.org/releases/mozilla-esr38/file/ae7fbd79941b/browser/base/content/browser.js#l6020
user_pref("browser.offline-apps.notify", false);
// Эта настройка тоже нужна тут, иначе у всех сайтов по умолчанию будет permission "offline-app", и при
// попытке воспользоваться Offline App Cache, они будут появляться в списке Preferences -> Advanced ->
// Network -> Offline Web Content and User Data, хоть и не смогут ничего хранить в выключенном кэше.
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l649
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/dom/base/nsContentSink.cpp#l1056
// https://hg.mozilla.org/releases/mozilla-esr38/file/5be76431120a/dom/base/nsContentUtils.cpp#l1709
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l744
user_pref("offline-apps.allow_by_default", false);

// Отключает Shared Workers. Они могут стать проблемой, если загружаются с одного CDN несколькими
// разными открытыми в данный момент во вкладках у пользователя сайтами, так как такие Workers
// имеют общий контекст (т.е. доступ к данным друг друга).
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Shared_workers
user_pref("dom.workers.sharedWorkers.enabled", false);

// Отменять соединения с сайтами, не поддерживающими RFC 5746 (безопасное продление сессии,
// закрывающее возможность для MitM-атаки, описанной в CVE-2009-3555).
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.require_safe_negotiation", true);

// Снижает число ранее посещенных в этой же вкладке адресов, хранящихся в истории back/forward
// вкладки (на глобальную историю не влияет). Сами URL из этой истории недоступны из JS, но их
// количество видно в window.history.length, что можно использовать для фингерпринтинга.
// По умолчанию 50. Значение 1 означает хранение адреса только текущей страницы.
// http://kb.mozillazine.org/About:config_entries#Browser.
user_pref("browser.sessionhistory.max_entries", 2);

// Отключение дискового кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since
// и If-None-Match (https://en.wikipedia.org/wiki/HTTP_ETag), которые также могут быть использованы
// и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Отключает Indexed DB API, позволяющий скриптам хранить информацию в БД SQLite на компьютере
// пользователя. Объем Indexed DB может значительно превышать объем DOM Storage.
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
//
// "IndexedDB is completely disabled in private browsing mode." --
// 	https://wiki.mozilla.org/Security/Reviews/Firefox4/IndexedDB_Security_Review
// Проверить это  можно на примере из MDN, здесь: https://mdn.github.io/to-do-notifications/index.html
// В обычном окне пример покажет "Database initialised.", в приватном - "Error loading database.", плюс
// сообщения "TypeError: db is undefined" в консоли.
//
// Также в обычном окне использование Indexed DB сайтом можно увидеть через Page Info -> Permissions
// (но _не_ в about:permissions) -> Maintain Offline Storage и очистить там же. Block, равно как и Ask,
// почему-то не работает для отдельных сайтов (протестировано в Fx39). В about:permissions -> All Sites,
// Block _работает_ - при его выборе просто выставляется dom.indexedDB.enabled в false.
// Находится Indexed DB в профиле, по такому пути: storage/default/<домен>/idb/
//
// UPD: Начиная с Firefox 35 отключение Indexed DB может сломать многие аддоны:
// 	http://www.ghacks.net/2015/01/16/fix-add-ons-not-working-in-firefox-35/
// 	https://adblockplus.org/forum/viewtopic.php?t=27375&start=15
// UPD: Вышеописанный баг исправили, теперь эта настройка действует только на страницы, и браузер
// с аддонами не ломает -- https://bugzilla.mozilla.org/show_bug.cgi?id=1079355
// UPD: Но ломает WebIDE (увидеть можно если выключить Indexed DB, перезапустить браузер и
// попытаться открыть WebIDE - ошибки будут отображены как в нем самом, так и в Browser Console).
// UPD: Использование Indexed DB включили в один из популярных фреймворков и эта настройка стала
// ломать все больше и больше сайтов.
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.indexedDB.experimental", false);
