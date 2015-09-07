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

// Отключает предзагрузку ссылок, на которые по мнению браузера вы собираетесь кликнуть.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_link-prefetching
user_pref("network.prefetch-next", false);
// И предварительный резолвинг их доменов тоже.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_dns-prefetching
user_pref("network.dns.disablePrefetch", true);
// https://hg.mozilla.org/releases/mozilla-esr38/file/96e6f9392598/dom/html/nsHTMLDNSPrefetch.cpp#l64
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
user_pref("browser.urlbar.suggest.searches", false);
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

// Запрещает сайтам установку соединений на критически важные порты, занятые I2P и Tor.
user_pref("network.security.ports.banned", "4444,9050,9051");

// Отключает Google Safebrowsing. Раньше можно было еще не отключать, пока они только отдавали базу
// хэшей малварных URL и браузер сверялся с локальной копией. Но сейчас Гугл заставляет посылать хэш
// каждого загружаемого пользователем файла (якобы для проверки на вирусы), что уже совершенно
// неприемлемо. Желающие могут установить себе подписку Malware Domains для uBlock Origin, которая
// включает в себя URL из Safebrowsing и не следит за пользователем.
// Обращения к Safebrowsing могли создать специальную куку PREF для домена google.com, которая
// _не удаляется_ через менеджер кук браузера из-за бага и содержит идентификатор пользователя.
// Поэтому, если Safebrowsing ранее был включен в этом профиле, после его отключения необходимо
// вручную удалить cookies.sqlite из профиля, или подчистить эту БД каким-либо SQLite-редактором.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1008706
// https://bugzilla.mozilla.org/show_bug.cgi?id=1026538
// https://bugzilla.mozilla.org/show_bug.cgi?id=1186772
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
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");

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
// https://hg.mozilla.org/releases/mozilla-release/file/6f3151d4ff03/toolkit/components/url-classifier/SafeBrowsing.jsm
// https://hg.mozilla.org/releases/mozilla-release/file/326bab27cc3c/toolkit/components/url-classifier/nsIUrlListManager.idl#l29
// https://hg.mozilla.org/releases/mozilla-release/file/76c0924aea88/toolkit/components/url-classifier/content/listmanager.js#l88
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

// Отключает добавление в New Tab Page Tiles сайтов спонсоров Mozilla и сбор статистики кликов по ним.
// После отключения следует удалить directoryLinks.json в about:cache -> <директория на уровень выше cache2>,
// чтобы уже загруженная реклама не показывалась -- https://support.mozilla.org/en-US/questions/1030849
// https://wiki.mozilla.org/Tiles
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_tiles
user_pref("browser.newtabpage.directory.ping", "");
// Firefox не проверяет эту опцию на пустую строку и XHR начинает ругаться в консоль, если она пустая.
user_pref("browser.newtabpage.directory.source", "data:application/json,{}");
user_pref("browser.newtabpage.enhanced", false);
// Отключает предупреждение о вышеописанной рекламе при первом открытии New Tab Page.
user_pref("browser.newtabpage.introShown", true);
// Отключает загрузку рекламы сервисов от самой Mozilla (Sync, Hello, версий для Android) в about:home.
// https://wiki.mozilla.org/Websites/Snippets
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Отключает проверку при запуске, является ли Firefox браузером по умолчанию.
// Preferences -> General -> Startup -> Always check if Firefox is your default browser
user_pref("browser.shell.checkDefaultBrowser", false);
// Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
// http://kb.mozillazine.org/Browser.startup.homepage_override.mstone
// https://hg.mozilla.org/releases/mozilla-esr38/file/29eac8276b62/browser/components/nsBrowserContentHandler.js#l565
// https://hg.mozilla.org/releases/mozilla-esr38/file/29eac8276b62/browser/components/nsBrowserContentHandler.js#l102
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_whats-new-page
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "");
// Отключает приветственную страницу при первом запуске браузера с новым профилем.
user_pref("startup.homepage_welcome_url", "");
// Отключает замеры времени запуска браузера и уведомление о слишком долгом по его мнению старте.
// https://hg.mozilla.org/releases/mozilla-esr38/file/f9441895096d/browser/components/nsBrowserGlue.js#l687
user_pref("browser.slowStartup.notificationDisabled", true);
// Отключает показ URL с описанием функций, связанных с Windows 10, у пользователей последней.
// https://hg.mozilla.org/releases/mozilla-beta/file/883275447631/browser/components/nsBrowserContentHandler.js#l546
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
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_diagnostics
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.about.reportUrlUnified", "");
user_pref("datareporting.healthreport.documentServerURI", "");
// https://www.mozilla.org/en-US/privacy/firefox/#telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://wiki.mozilla.org/Telemetry/Testing#Browser_Prefs
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
// https://wiki.mozilla.org/Unified_Telemetry
user_pref("toolkit.telemetry.unified", false);
// Это должно быть true.
// https://hg.mozilla.org/releases/mozilla-beta/file/0f8e1375f717/toolkit/components/telemetry/TelemetryController.jsm#l669
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
// https://hg.mozilla.org/releases/mozilla-beta/file/0f8e1375f717/browser/app/profile/firefox.js#l1904
// https://hg.mozilla.org/releases/mozilla-beta/file/0f8e1375f717/toolkit/components/telemetry/TelemetryController.jsm#l628
user_pref("toolkit.telemetry.optoutSample", false);
// Отключает отправку информации о падениях браузера в Mozilla (about:crashes).
user_pref("breakpad.reportURL", "");
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Отключает предложения оценить работу Firefox и отправить пожертвования Mozilla.
// https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url", "");

// Отключает установку дефолтных пермишнов (resource://app/defaults/permissions) в Permission Manager.
// Среди которых есть пермишн install для AMO, из-за чего браузер в AMO -> Themes (со включенным JS)
// скачивает и применяет темы по mouseover, без подтверждения установки.
// Еще в том списке есть пермишн remote-troubleshooting, позволяющий скриптам на сайтах, которым он задан
// (support.mozilla.org и input.mozilla.org), читать часть информации, перечисленной в about:support,
// когда пользователь заходит на эти сайты (со включенным JS). Причем пермишны remote-troubleshooting,
// в отличие от install, не видны через UI браузера (Page Info -> Permissions). Протестировать этот
// механизм и узнать, какая именно информация доступна, можно здесь[1], задав hg.mozilla.org пермишн
// remote-troubleshooting путем присвоения этой настройке строки[2] (без кавычек) и перезапуска браузера.
// Отключение установки пермишнов из дефолтного списка решает обе вышеописанные проблемы.
// [1]: https://hg.mozilla.org/releases/mozilla-esr38/raw-file/569b611715e0/browser/base/content/test/general/test_remoteTroubleshoot.html
// [2]: "data:text/plain,host%09remote-troubleshooting%091%09hg.mozilla.org"
// https://bugzilla.mozilla.org/show_bug.cgi?id=1079563
// https://bugzilla.mozilla.org/show_bug.cgi?id=1091944
// https://bugzilla.mozilla.org/show_bug.cgi?id=1091942
// https://hg.mozilla.org/releases/mozilla-esr38/file/f402bfa9a35e/browser/base/content/test/general/browser_remoteTroubleshoot.js
// https://hg.mozilla.org/releases/mozilla-esr38/file/f9441895096d/browser/components/nsBrowserGlue.js#l833
// https://hg.mozilla.org/releases/mozilla-esr38/file/56d740d0769f/toolkit/modules/WebChannel.jsm#l139
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/extensions/cookie/nsPermissionManager.cpp#l1888
user_pref("permissions.manager.defaultsUrl", "");

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

// Отключает эксперименты - фоновые тесты различных отключенных пока по умолчанию функций (вроде
// HTTP Pipelining) со сбором телеметрии.
// https://hg.mozilla.org/releases/mozilla-esr38/file/008aa6494f90/netwerk/protocol/http/nsHttpHandler.cpp#l1406
user_pref("network.allow-experiments", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/91100de4f2ad/toolkit/mozapps/extensions/internal/XPIProvider.jsm#l7742
user_pref("experiments.supported", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/8bc9656cad94/browser/experiments/ExperimentsService.js
// https://hg.mozilla.org/releases/mozilla-esr38/file/8bc9656cad94/browser/experiments/Experiments.jsm
user_pref("experiments.enabled", false);
user_pref("experiments.activeExperiment", false);
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

// Запрещает сайтам использовать Offline App Cache без разрешения пользователя. Список разрешенных
// сайтов управляется через Preferences -> Advanced -> Network -> Offline Web Content and User Data.
// Демо можно посмотреть тут: http://appcache.offline.technology/demo/index.html мониторя
// использование через about:cache -> appcache и меняя настройки.
// http://www.w3.org/TR/offline-webapps/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
// https://hg.mozilla.org/releases/mozilla-esr38/file/ae7fbd79941b/browser/base/content/browser.js#l6020
user_pref("browser.offline-apps.notify", true);
// Эта настройка по умолчанию включена и дает всем сайтам permission "offline-app", так что
// без ее отключения browser.offline-apps.notify _абсолютно бесполезна_, вопреки ее названию
// ("Tell me when a website asks to store data for offline use"), а также тому, что написано про нее в
// KB MozillaZine и некоторых других источниках. С отключением offline-apps.allow_by_default, этот
// permission будет ставиться только при подтверждении пользователем (проверено в Firefox 38.2.0 и 40.0).
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l649
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/dom/base/nsContentSink.cpp#l1056
// https://hg.mozilla.org/releases/mozilla-esr38/file/5be76431120a/dom/base/nsContentUtils.cpp#l1709
// https://hg.mozilla.org/releases/mozilla-esr38/file/dd257f17530c/uriloader/prefetch/nsOfflineCacheUpdateService.cpp#l744
user_pref("offline-apps.allow_by_default", false);

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
// https://hg.mozilla.org/releases/mozilla-beta/file/ab89cbfcd3e6/toolkit/devtools/gcli/commands/screenshot.js#l382
user_pref("devtools.gcli.imgurClientID", "");
user_pref("devtools.gcli.imgurUploadURL", "");

// Отключает скачивание и показ подсказок для свойств CSS с developer.mozilla.org в Developer Tools.
// https://hg.mozilla.org/releases/mozilla-beta/file/7f005a3c9f9d/browser/devtools/styleinspector/test/browser_ruleview_context-menu-show-mdn-docs-03.js#l5
// https://hg.mozilla.org/releases/mozilla-beta/file/14b2376c96fa/browser/devtools/styleinspector/rule-view.js#l1538
// https://hg.mozilla.org/releases/mozilla-beta/file/7f005a3c9f9d/browser/devtools/shared/widgets/MdnDocsWidget.js#l5
user_pref("devtools.inspector.mdnDocsTooltip.enabled", false);

// Отключает рекламу Firefox Developer Edition в Developer Tools.
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/browser/devtools/shared/doorhanger.js#l17
user_pref("devtools.devedition.promo.enabled", false);
user_pref("devtools.devedition.promo.shown", true);
user_pref("devtools.devedition.promo.url", "");

// Отключает SSDP, нужный для обнаружения телевизоров и реализации функции Send Video To Device в
// Firefox для Android. Десктопный Firefox тоже почему-то посылал соответствующие мультикаст-запросы.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
// https://support.mozilla.org/en-US/kb/use-firefox-android-send-videos-chromecast
// https://trac.torproject.org/projects/tor/ticket/16222
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_send-video-to-device
user_pref("browser.casting.enabled", false);

// Отключает передачу по сети рисуемых браузером кадров специальному отладочному вьюверу.
// https://wiki.mozilla.org/Platform/GFX/LayerScope
// https://trac.torproject.org/projects/tor/ticket/16222#comment:8
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/gfx/thebes/gfxPrefs.h#l208
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/gfx/layers/LayerScope.cpp#l1243
user_pref("gfx.layerscope.enabled", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/gfx/thebes/gfxPrefs.h#l209
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/gfx/layers/LayerScope.cpp#l1202
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/netwerk/base/nsServerSocket.cpp#l281
user_pref("gfx.layerscope.port", 100000);

// Настройки security.ssl3.* содержат строку "ssl3" по историческим причинам, а на деле управляют
// и поведнием TLS, в чем можно убедиться здесь: https://www.ssllabs.com/ssltest/viewMyClient.html

// "As of 2015, there is speculation that some state cryptologic agencies may possess the capability
// to break RC4 even when used in the TLS protocol. Mozilla and Microsoft recommend disabling
// RC4 where possible." -- https://en.wikipedia.org/wiki/RC4
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-2566
// https://community.qualys.com/blogs/securitylabs/2013/03/19/rc4-in-tls-is-broken-now-what
// https://bugzilla.mozilla.org/show_bug.cgi?id=999544
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
user_pref("security.tls.unrestricted_rc4_fallback", false);

// 3DES, в отличие от RC4, пока вроде держится, но можно и запретить на всякий случай.
// https://wiki.mozilla.org/Security/Guidelines/Key_Management#Algorithms_by_security_levels
// https://hg.mozilla.org/releases/mozilla-esr38/file/fa67b437a89a/security/manager/ssl/src/nsNSSComponent.cpp#l666
// https://bugzilla.mozilla.org/show_bug.cgi?id=936828
// https://en.wikipedia.org/wiki/Triple_DES#Security
user_pref("security.ssl3.rsa_des_ede3_sha", false);

// Отключает встроенный белый список, разрешающий соединения с находящимися в нем сайтами,
// несмотря на использование ими устаревшего шифрования.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1128227
user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);

// Пользовательский белый список сайтов, которым разрешено устаревшее шифрование.
// Рекомендуется работать с такими не из под основного профиля.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1114816#c27
user_pref("security.tls.insecure_fallback_hosts", "");

// Отображать восклицательный знак (ранее - красный замок) в адресной строке для сайтов, не
// поддерживающих RFC 5746 (безопасное продление сессии, закрывающее возможность для MitM-атаки,
// описанной в CVE-2009-3555).
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
