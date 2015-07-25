#ifndef FX
// Это метафайл. Он не предназначен для копирования в user.js напрямую - отсюда генерируются файлы
// с настройками для соотвествующей версии Firefox.
#endif

// Минимальный интервал в миллисекундах для записи изменений в сессии на диск. Дефолтные 15 секунд -
// маловато, особенно для мегабайтных сессий.
user_pref("browser.sessionstore.interval", 60000);

// Использовать HTTP/1.1 для передачи нескольких файлов, не реконнектясь после каждого.
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.ssl", true);

// Если указан SOCKS5-прокси, делать DNS-запросы через него, а не напрямую со своего IP.
// http://kb.mozillazine.org/Network.proxy.socks_remote_dns
user_pref("network.proxy.socks_remote_dns", true);

// Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Количество страниц, которые держатся в памяти уже в виде DOM для быстрого перехода по
// back/forward. Уменьшение снизит потребление памяти.
user_pref("browser.sessionhistory.max_total_viewers", 2);
// Также немного уменьшает потребление памяти.
// https://bugzilla.mozilla.org/show_bug.cgi?id=805855
// https://bugzilla.mozilla.org/show_bug.cgi?id=850607
user_pref("memory.free_dirty_pages", true);

// Использовать локаль из general.useragent.locale, а не установленную в ОС.
user_pref("intl.locale.matchOS", false);

// Отключает предзагрузку ссылок, на которые по мнению браузера вы собираетесь кликнуть.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_link-prefetching
user_pref("network.prefetch-next", false);
// И предварительный резолвинг их доменов тоже.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_dns-prefetching
user_pref("network.dns.disablePrefetch", true);
// https://mxr.mozilla.org/mozilla-esr38/source/dom/html/nsHTMLDNSPrefetch.cpp?rev=96e6f9392598#64
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// И предварительный коннект к хостам.
// https://bugzilla.mozilla.org/show_bug.cgi?id=814169
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
user_pref("network.http.speculative-parallel-limit", 0);

// Отключает загрузку URL из буфера обмена по нажатию на колесо в Linux, которая мешает при
// промахах мимо ссылок и случайных кликах по колесу.
user_pref("middlemouse.contentLoadURL", false);

// Отключает переход назад в истории по бэкспейсу.
// http://kb.mozillazine.org/Browser.backspace_action
user_pref("browser.backspace_action", 2);

// Отключает полупрозрачную превьюшку таба, болтающуюся при его перетаскивании около курсора, и
// мешающую перетащить его в нужное место.
user_pref("nglayout.enable_drag_images", false);

// Отключает притормаживающую на окнах с многими вкладками анимацию открытия и закрытия табов. 
user_pref("browser.tabs.animate", false);

// Отключает автоматическую отправку поисковику недопечатанного запроса по мере его набора,
// используемую для формирования поисковых подсказок.
user_pref("browser.search.suggest.enabled", false);
// Отключает поиск через адресную строку без заданных поисковикам префиксов-кейвордов.
// http://kb.mozillazine.org/Keyword.enabled
user_pref("keyword.enabled", false);

// Отключает автоматическое обновление поисковых движков.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
user_pref("browser.search.update", false);

// Отключает Predictor (бывший Seer) - механизм, запоминающий связи между хостами, с которых
// запрашивается контент для того или иного URL (например, основным хостом и хостом со статикой),
// и при следующем подключении заранее соединяющийся со всеми хостами, которые понадобятся.
// https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled", false);
// network.predictor.max-db-size нужно устанавливать в 0, иначе в профиле появляется БД посещенных
// сайтов, несмотря на отключенный network.predictor.enabled.
user_pref("network.predictor.max-db-size", 0);

// Запрещает сайтам установку соединений на критически важные порты, занятые I2P и Tor.
user_pref("network.security.ports.banned", "4444,9050,9051");

// Отключает Google Safebrowsing. Раньше можно было еще не отключать, пока они только отдавали базу
// хэшей малварных URL и браузер сверялся с локальной копией. Но сейчас Гугл заставляет посылать хэш 
// каждого загружаемого пользователем файла (якобы для проверки на вирусы), что уже совершенно
// неприемлемо. Желающие могут установить себе подписку Malware Domains для uBlock Origin, которая
// включает в себя URL из Safebrowsing и не следит за пользователем.
// https://blog.mozilla.org/security/2014/07/23/improving-malware-detection-in-firefox/
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_anti-phishing-list-updating
user_pref("browser.safebrowsing.enabled", false);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_anti-malware-list-updating
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_anti-malware-list-updating
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.reportErrorURL", "");
user_pref("browser.safebrowsing.reportGenericURL", "");
user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
user_pref("browser.safebrowsing.reportMalwareURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportURL", "");
user_pref("browser.safebrowsing.updateURL", "");

// Отключает мозилловский анти-трекинговый список, который дублирует функции uBlock с соответствующими
// подписками и является менее эффективным (т.к. основан на списке от Disconnect).
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// https://wiki.mozilla.org/Polaris
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("browser.trackingprotection.updateURL", "");
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.polaris.enabled", false);

// Вообще не регистрировать таблицы Safebrowsing и Tracking Protection в URL Classifier, пусть даже
// в отключенном виде и с пустыми URL для обновления.
// https://mxr.mozilla.org/mozilla-release/source/toolkit/components/url-classifier/SafeBrowsing.jsm?rev=6f3151d4ff03
// https://mxr.mozilla.org/mozilla-release/source/toolkit/components/url-classifier/nsIUrlListManager.idl?rev=326bab27cc3c#29
// https://mxr.mozilla.org/mozilla-release/source/toolkit/components/url-classifier/content/listmanager.js?rev=76c0924aea88#88
user_pref("urlclassifier.malwareTable", "");
user_pref("urlclassifier.phishTable", "");
user_pref("urlclassifier.downloadBlockTable", "");
user_pref("urlclassifier.downloadAllowTable", "");
user_pref("urlclassifier.trackingTable", "");
user_pref("urlclassifier.disallow_completions", "");

// Отключает <a ping>, которые отправляют запрос по отдельному указанному адресу (с целью трекинга)
// при нажатии на ссылку. -- http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings", false);
// Отключает sendBeacon() - API для отправки статистики перед выгрузкой страницы.
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);

// Отключает добавление в Speed Dial сайтов спонсоров Mozilla и сбор статистики кликов по ним.
// После отключения следует удалить directoryLinks.json в about:cache -> <директория на уровень выше cache2>,
// чтобы уже загруженная реклама не показывалась -- https://support.mozilla.org/en-US/questions/1030849
// https://wiki.mozilla.org/Tiles
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_tiles
user_pref("browser.newtabpage.directory.ping", "");
// Firefox не проверяет эту опцию на пустую строку и начинает ругаться в консоль, если она пустая.
user_pref("browser.newtabpage.directory.source", "data:application/json,{}");
user_pref("browser.newtabpage.enhanced", false);
// Отключает загрузку рекламы сервисов от самой Mozilla (Sync, Hello, версий для Android) в about:home.
// https://wiki.mozilla.org/Websites/Snippets
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
// http://kb.mozillazine.org/Browser.startup.homepage_override.mstone
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_whats-new-page
user_pref("browser.startup.homepage_override.mstone", "ignore");
// Отключает приветственную страницу при первом запуске браузера с новым профилем.
user_pref("startup.homepage_welcome_url", "");
// Отключает показ URL с описанием функций, связанных с Windows 10, у пользователей последней.
// https://mxr.mozilla.org/mozilla-beta/source/browser/components/nsBrowserContentHandler.js?rev=883275447631#546
user_pref("browser.usedOnWindows10", true);
user_pref("browser.usedOnWindows10.introURL", "");

// Отключает показ AMO при входе в Add-ons Manager на вкладку Get Add-ons.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_add-on-list-prefetching
user_pref("extensions.webservice.discoverURL", "");

// Отключает посылку статистики при обновлении аддонов.
// https://wiki.mozilla.org/Extension_Manager:Update_Checking
// https://bugzilla.mozilla.org/show_bug.cgi?id=635115
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_add-on-metadata-updating
user_pref("extensions.getAddons.cache.enabled", false);

// Отключает телеметрию.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_diagnostics
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAccepted", false);
user_pref("datareporting.policy.dataSubmissionPolicyBypassAcceptance", false);
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
// https://wiki.mozilla.org/Unified_Telemetry
user_pref("toolkit.telemetry.unified", false);
// Отключает отправку информации о падениях браузера в Mozilla (about:crashes).
user_pref("breakpad.reportURL", "");
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Отключает предложения оценить работу Firefox и отправить пожертвования Mozilla.
// https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url", "");

// Отключает автоматическую отправку отчетов в Mozilla об ошибках в сертификатах сайтов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=846489
user_pref("security.ssl.errorReporting.automatic", false);

// Отключает интегрированную поддержку проприетарного сервиса закладок Pocket.
// http://www.opennet.ru/opennews/art.shtml?num=42245
// https://wiki.mozilla.org/QA/Pocket_integration
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.enabledLocales", "");

// Отключает сбор статистики для оценки эффективности текущих значений DNS TTL.
// Этот параметр убрали в Fx36.
// user_pref("dns.ttl-experiment.enabled", false);
// Отключает остальные эксперименты Mozilla над пользователем.
user_pref("network.allow-experiments", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.manifest.uri", "");

// Отключает автообновление стилей Stylish -- https://userstyles.org/help/stylish_firefox
user_pref("extensions.stylish.updatesEnabled", false);

// Отключает список рекомендуемых тем в Customize -> Themes.
user_pref("lightweightThemes.recommendedThemes", "");

// Открывать попапы во вкладках вместо отдельных окон.
user_pref("browser.link.open_newwindow.restriction", 0);

// Запрещает попапам отключать элементы окон браузера.
// http://kb.mozillazine.org/Dom.popup_maximum
user_pref("dom.popup_maximum", 5);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// http://kb.mozillazine.org/JavaScript#JavaScript_settings_in_Firefox_23_and_above
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);
// http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);

// Отключает автоматическое скачивание и установку ADB Helper и аддона для удаленной отладки мобильных
// браузеров при первом запуске WebIDE. Ручная установка через меню WebIDE все еще будет работать.
// https://developer.mozilla.org/en-US/docs/Tools/Valence
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
// Отключает авто-подсоединение к предыдущему отлаживаемому устройству/эмулятору при запуске WebIDE.
user_pref("devtools.webide.autoConnectRuntime", false);

// Отключает возможность соединения с устройством на Firefox OS для отладки по Wi-Fi.
// https://wiki.mozilla.org/DevTools/WiFi_Debugging
user_pref("devtools.remote.wifi.scan", false);
user_pref("devtools.remote.wifi.visible", false);

// Отключает команду screenshot --imgur, которая автоматически загружает сделанный скриншот на Imgur.
// https://bugzilla.mozilla.org/show_bug.cgi?id=992386
// https://bugzilla.mozilla.org/show_bug.cgi?id=1173158
// https://mxr.mozilla.org/mozilla-beta/source/toolkit/devtools/gcli/commands/screenshot.js?rev=ab89cbfcd3e6#382
user_pref("devtools.gcli.imgurClientID", "");
user_pref("devtools.gcli.imgurUploadURL", "");

// Отключает скачивание и показ подсказок для свойств CSS с developer.mozilla.org в Developer Tools.
// https://mxr.mozilla.org/mozilla-beta/source/browser/devtools/styleinspector/test/browser_ruleview_context-menu-show-mdn-docs-03.js?rev=7f005a3c9f9d#5
// https://mxr.mozilla.org/mozilla-beta/source/browser/devtools/styleinspector/rule-view.js?rev=14b2376c96fa#1538
// https://mxr.mozilla.org/mozilla-beta/source/browser/devtools/shared/widgets/MdnDocsWidget.js?rev=7f005a3c9f9d#5
user_pref("devtools.inspector.mdnDocsTooltip.enabled", false);

// Отключает рекламу Firefox Developer Edition в Developer Tools.
// https://mxr.mozilla.org/mozilla-esr38/source/browser/devtools/shared/doorhanger.js?rev=0f8338121472#17
user_pref("devtools.devedition.promo.enabled", false);
user_pref("devtools.devedition.promo.shown", true);
user_pref("devtools.devedition.promo.url", "");

// Отключает SSDP, нужный для обнаружения телевизоров и реализации функции Send Video To Device в
// Firefox для Android. Десктопный Firefox тоже почему-то посылал соответствующие мультикаст-запросы.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
// https://support.mozilla.org/en-US/kb/use-firefox-android-send-videos-chromecast
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_send-video-to-device
user_pref("browser.casting.enabled", false);

#if FX < 3900
	// Отключает шифры уязвимые к Logjam. Вытащено отсюда: https://addons.mozilla.org/en-US/firefox/addon/disable-dhe/
	// Firefox 39 will include changes that will increase the minimum strength of keys to 1024 bits.
	user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
	user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
	user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
	user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
	// Для Firefox 31 еще и это нужно:
	user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
	user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
	user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
	user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
	user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);
#endif

// "As of 2015, there is speculation that some state cryptologic agencies may possess the capability
// to break RC4 even when used in the TLS protocol. Mozilla and Microsoft recommend disabling
// RC4 where possible." -- https://en.wikipedia.org/wiki/RC4
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
user_pref("security.tls.unrestricted_rc4_fallback", false);
