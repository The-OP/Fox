// Отключает встроенный менеджер паролей (Preferences -> Security -> Remember passwords for sites).
// Рекомендуется использовать внешний, например, KeePass. После отключения следует удалить
// сохраненные пароли, хранящиеся в logins.json в профиле (или через Saved Passwords в GUI).
user_pref("signon.rememberSignons", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/aa2ecb8673b1/toolkit/components/passwordmgr/LoginManagerContent.jsm#l524
user_pref("signon.storeWhenAutocompleteOff", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
// https://hg.mozilla.org/releases/mozilla-release/rev/1e3c438085ec
user_pref("signon.formlessCapture.enabled", false);

// Запрещает 3rd-party cookies.
// Preferences -> Privacy -> Accept cookies from sites -> Accept third-party cookies: Never
// http://kb.mozillazine.org/Network.cookie.cookieBehavior
// https://hg.mozilla.org/releases/mozilla-esr45/file/2786beb35a3825b68651e2bf22ce06b84ff31ee3/modules/libpref/init/all.js#l1854
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsCookieService.cpp#l3800
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsICookieService.idl#l77
user_pref("network.cookie.cookieBehavior", 1);

// Запрещает сохранение данных форм, Session Storage и Session Cookies при сохранении сессии.
// С privacy_level по умолчанию и включенным восстановлением сессии, они хранятся и
// восстанавливаются независимо от числа перезапусков браузера, вплоть до закрытия соответствующей
// вкладки пользователем.
// Находятся в профиле, в файлах recovery.js/sessionstore.js (ключи windows[N].cookies,
// windows[N].tabs[N].storage, и windows[N].tabs[N].formdata для Session Cookies, Session Storage и
// данных форм соответственно).
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/browser/components/sessionstore/PrivacyLevel.jsm
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/browser/components/sessionstore/SessionCookies.jsm#l70
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/browser/components/sessionstore/PrivacyFilter.jsm#l33
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/browser/components/sessionstore/PrivacyFilter.jsm#l53
user_pref("browser.sessionstore.privacy_level", 2);

// Запрещает проигрывание HTML5-медиа в фоновой вкладке до первого переключения на нее.
user_pref("media.block-play-until-visible", true);
// Переименовано в Firefox 51.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1262053
// https://hg.mozilla.org/releases/mozilla-release/rev/ab7f9029b66a
user_pref("media.block-autoplay-until-in-foreground", true);

// Запрещает проигрывание HTML5-медиа до нажатия на кнопку play. Теперь работает и на YouTube.
// Следующие видео из плейлиста будут проигрываться автоматически после окончания первого.
// Автобуферизацию не предотвращает.
user_pref("media.autoplay.enabled", false);

// Отключает API для системных уведомлений из веб-приложений.
// https://developer.mozilla.org/en-US/docs/Web/API/Notification/Using_Web_Notifications
user_pref("dom.webnotifications.enabled", false);
// https://developer.mozilla.org/en-US/docs/Web/API/Notification/requireInteraction
// https://bugzilla.mozilla.org/show_bug.cgi?id=862395
user_pref("dom.webnotifications.requireinteraction.enabled", false);
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

// Запрещает браузеру посылать странице события online и offline в зависимости от состояния сетевого
// подключения, а также устанавливать свойство window.navigator.onLine (будет всегда true).
// https://trac.torproject.org/projects/tor/ticket/18945
// https://bugzilla.mozilla.org/show_bug.cgi?id=620472
// https://developer.mozilla.org/en-US/docs/Online_and_offline_events
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/browser/app/profile/firefox.js#l601
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/netwerk/base/nsIOService.cpp#l1224
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/netwerk/base/nsIOService.cpp#l1614
user_pref("network.manage-offline-status", false);

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

// Отключает замену <embed> на <iframe> в страницах, встраивающих видео с YouTube. Такая замена
// позволяет использовать HTML5-проигрыватель вместо Flash на видео, встроенных по старому образцу.
// https://bugzilla.mozilla.org/show_bug.cgi?id=769117
user_pref("plugins.rewrite_youtube_embeds", false);

// Отключает Web Video Text Tracks (субтитры для тега video).
user_pref("media.webvtt.enabled", false);

// Запрещает передачу сайтам подробной информации о графических возможностях системы.
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);

// SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
// https://trac.torproject.org/projects/tor/ticket/14952
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.allow-push", false);
user_pref("network.http.spdy.enabled.deps", false);

// Включает показ Internationalized Domain Names в виде Punycode вместо Unicode, что
// понижает вероятность попасться на фишинг.
// https://www.wordfence.com/blog/2017/04/chrome-firefox-unicode-phishing/
user_pref("network.IDN_show_punycode", true);

// Отключает автоматический импорт корневых сертификатов из хранилища ОС. Используется для
// всяческого MITM - корпоративные прокcи, антивирусы и т.п.
// https://geektimes.ru/post/263796/
// https://geektimes.ru/post/266262/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1265113
// https://hg.mozilla.org/releases/mozilla-release/rev/d9659c22b3c5
// https://bugzilla.mozilla.org/show_bug.cgi?id=1298883
user_pref("security.enterprise_roots.enabled", false);

// Блокировка загрузки незащищенного содержимого на HTTPS-страницах. Если какие-то ресурсы были
// заблокированы, в адресной строке отображается щит.
// https://www.ssllabs.com/ssltest/viewMyClient.html (тестировать нужно со включенным JS)
// JS, CSS, XHR, Frames
user_pref("security.mixed_content.block_active_content", true);
// Images
user_pref("security.mixed_content.block_display_content", true);

// Отключает HSTS Priming - механизм, пытающийся исправить ситуацию с mixed content путем посылки
// дополнительных запросов на 3rd-party домены, чтобы выяснить, поддерживают ли они HTTPS.
// Вещь потенциально полезная, однако пока недоделанная - в Firefox 51 по умолчанию дополнительные
// запросы посылаются (send_hsts_priming: true), но их результат не используется (use_hsts: false)
// ни для чего кроме телеметрии.
// https://wicg.github.io/hsts-priming/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1246540#c145
// https://hg.mozilla.org/releases/mozilla-release/rev/d7d42cef7968
user_pref("security.mixed_content.send_hsts_priming", false);
user_pref("security.mixed_content.use_hsts", false);

// Отключает ускоренный Zero RTT хэндшейк, введенный в TLS 1.3, который жертвует безопасностью для
// уменьшения латентности.
// https://timtaubert.de/blog/2015/11/more-privacy-less-latency-improved-handshakes-in-tls-13/
// https://tlswg.github.io/tls13-spec/#rfc.section.2.3
// https://bugzilla.mozilla.org/show_bug.cgi?id=1264578
// https://hg.mozilla.org/releases/mozilla-release/rev/a1fcbe1fc10c
user_pref("security.tls.enable_0rtt_data", false);

// Отключает посылку Session Tickets (TLS) и Session Identifiers (SSL) - уникальных идентификаторов,
// применяемых для ускорения повторной установки шифрованного соединения, которые могут быть также
// использованы и для отслеживания пользователя.
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
// https://tools.ietf.org/html/rfc5077
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/security/manager/ssl/nsNSSComponent.cpp#l723
user_pref("security.ssl.disable_session_identifiers", true);

// 3DES, в отличие от RC4, пока вроде держится, но можно и запретить на всякий случай.
// UPD: Уже плохо держится: https://www.opennet.ru/opennews/art.shtml?num=45023
// Отключение ломает https://login.skype.com/login
// https://wiki.mozilla.org/Security/Guidelines/Key_Management#Algorithms_by_security_levels
// https://hg.mozilla.org/releases/mozilla-esr38/file/fa67b437a89a/security/manager/ssl/src/nsNSSComponent.cpp#l666
// https://bugzilla.mozilla.org/show_bug.cgi?id=936828
// https://en.wikipedia.org/wiki/Triple_DES#Security
user_pref("security.ssl3.rsa_des_ede3_sha", false);

// Запрещает все сертификаты, использующие SHA1.
// https://bugzilla.mozilla.org/show_bug.cgi?id=942515#c32
// 0 = allow SHA-1; 1 = forbid SHA-1; 2 = allow SHA-1 only if notBefore < 2016-01-01
// UPD: В Firefox 51+ значение "2" этой опции обозначает то же, что и "1".
// https://bugzilla.mozilla.org/show_bug.cgi?id=1302140
// https://hg.mozilla.org/releases/mozilla-release/rev/43c724bde81c#l3.34
// https://www.scmagazine.com/mozilla-pulls-back-on-rejecting-sha-1-certs-outright/article/463913/
user_pref("security.pki.sha1_enforcement_level", 1);

// Отменять соединения с сайтами, не поддерживающими RFC 5746 (безопасное продление сессии,
// закрывающее возможность для MitM-атаки, описанной в CVE-2009-3555).
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.require_safe_negotiation", true);

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
// 	https://www.ghacks.net/2015/01/16/fix-add-ons-not-working-in-firefox-35/
// 	https://adblockplus.org/forum/viewtopic.php?t=27375&start=15
// UPD: Вышеописанный баг исправили, теперь эта настройка действует только на страницы, и браузер
// с аддонами не ломает -- https://bugzilla.mozilla.org/show_bug.cgi?id=1079355
// UPD: Но ломает WebIDE (увидеть можно если выключить Indexed DB, перезапустить браузер и
// попытаться открыть WebIDE - ошибки будут отображены как в нем самом, так и в Browser Console).
// UPD: Использование Indexed DB включили в один из популярных фреймворков и эта настройка стала
// ломать все больше и больше сайтов.
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.indexedDB.experimental", false);

// Снижает число ранее посещенных в этой же вкладке адресов, хранящихся в истории back/forward
// вкладки (на глобальную историю не влияет). Сами URL из этой истории недоступны из JS, но их
// количество видно в window.history.length, что можно использовать для фингерпринтинга.
// По умолчанию 50. Значение 1 означает хранение адреса только текущей страницы.
// http://kb.mozillazine.org/About:config_entries#Browser.
user_pref("browser.sessionhistory.max_entries", 2);

// Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых
// портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
// Возможны проблемы при обращении на адреса типа http://127.0.0.1:631, используемые для конфигурации
// принтеров через CUPS и прочих устройств
user_pref("network.proxy.no_proxies_on", "");

// Отключение дискового кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли
// пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени.
// Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since
// и If-None-Match (https://en.wikipedia.org/wiki/HTTP_ETag), которые также могут быть использованы
// и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk_cache_ssl", false);
