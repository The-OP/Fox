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
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/toolkit/components/places/UnifiedComplete.js#l959
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/toolkit/components/places/UnifiedComplete.js#l1011
user_pref("browser.urlbar.maxCharsForSearchSuggestions", 0);
// Отключает предложение включить поисковые подсказки. Должно быть true.
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/toolkit/components/telemetry/docs/environment.rst#l301
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/base/content/urlbarBindings.xml#l953
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/base/content/urlbarBindings.xml#l1201
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/browser/base/content/urlbarBindings.xml#l957
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/browser/base/content/urlbarBindings.xml#l1310
user_pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 0);
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
// https://hg.mozilla.org/releases/mozilla-esr45/file/87a22e023b10fc3116f333e313934d38cd533ce0/netwerk/base/Predictor.cpp#l73
user_pref("network.predictor.enabled", false);
// https://hg.mozilla.org/releases/mozilla-esr45/file/87a22e023b10fc3116f333e313934d38cd533ce0/netwerk/base/Predictor.cpp#l972
user_pref("network.predictor.enable-hover-on-ssl", false);
// Начиная с Firefox 48, Predictor умеет не только предконнекты, но и префетч.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1016628
// https://bugzilla.mozilla.org/show_bug.cgi?id=1271944
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/netwerk/base/Predictor.cpp#l1301
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.prefetch-rolling-load-count", 0);
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/netwerk/base/Predictor.cpp#l1132
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/netwerk/test/unit/test_predictor.js#l405
user_pref("network.predictor.prefetch-min-confidence", 101);
user_pref("network.predictor.preconnect-min-confidence", 101);
user_pref("network.predictor.preresolve-min-confidence", 101);

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
user_pref("browser.safebrowsing.downloads.remote.url", "");
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_anti-malware-list-updating
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.updateURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1025965
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");

// Отключает мозилловский анти-трекинговый список, который дублирует функции uBlock с соответствующими
// подписками и является менее эффективным (т.к. основан на списке от Disconnect).
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// https://wiki.mozilla.org/Polaris
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/base/content/browser-trackingprotection.js
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("browser.polaris.enabled", false);
user_pref("privacy.trackingprotection.introURL", "");
// https://hg.mozilla.org/releases/mozilla-release/file/970d0cf1c5d9/browser/components/preferences/in-content/privacy.js#l19
user_pref("privacy.trackingprotection.ui.enabled", false);
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/base/content/browser-trackingprotection.js#l6
//user_pref("privacy.trackingprotection.introCount", 1);
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");

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
user_pref("urlclassifier.trackingWhitelistTable", "");
user_pref("urlclassifier.disallow_completions", "");
// https://bugzilla.mozilla.org/show_bug.cgi?id=1307604
// https://hg.mozilla.org/releases/mozilla-release/file/175e28ba58fcd249fc2db68dcaa800da2ebc506d/toolkit/components/url-classifier/flash-block-lists.rst
// https://hg.mozilla.org/releases/mozilla-release/rev/81b9af9143f3
user_pref("urlclassifier.flashAllowTable", "");
user_pref("urlclassifier.flashAllowExceptTable", "");
user_pref("urlclassifier.flashTable", "");
user_pref("urlclassifier.flashExceptTable", "");
user_pref("urlclassifier.flashSubDocTable", "");
user_pref("urlclassifier.flashSubDocExceptTable", "");

// Отключает список сайтов, запрещенных в режиме ограниченного профиля / родительского контроля.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1216723
// https://bugzilla.mozilla.org/show_bug.cgi?id=1222377
user_pref("browser.safebrowsing.forbiddenURIs.enabled", false);
user_pref("urlclassifier.forbiddenTable", "");

// Отключает список Tracking Protection, содержащий адреса тех SWF с популярных сайтов, которые были
// замечены в попытках получить список шрифтов или совершить другие подозрительные действия.
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/modules/libpref/init/all.js#l4965
// https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
// https://bugzilla.mozilla.org/show_bug.cgi?id=1248813
// https://github.com/mozilla-services/shavar-plugin-blocklist
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("urlclassifier.blockedTable", "");

// Отключает <a ping>, которые отправляют запрос по отдельному указанному адресу (с целью трекинга)
// при нажатии на ссылку. -- http://kb.mozillazine.org/Browser.send_pings
// https://hg.mozilla.org/releases/mozilla-esr45/file/87a22e023b10fc3116f333e313934d38cd533ce0/docshell/base/nsDocShell.cpp#l294
// https://hg.mozilla.org/releases/mozilla-esr45/file/87a22e023b10fc3116f333e313934d38cd533ce0/docshell/base/nsDocShell.cpp#l635
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.max_per_link", 0);
user_pref("browser.send_pings.require_same_host", true);
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

// Отключает новую версию new tab page, которая будет подгружаться с сервера Мозиллы. [Фича еще не
// готова и не включена по умолчанию.] Сделано это якобы для того, чтобы разработчики могли
// экспериментировать с функциональностью этой страницы чаще чем происходят релизы браузера.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1176429
// https://bugzilla.mozilla.org/show_bug.cgi?id=1246202
// https://wiki.mozilla.org/TPE_SecEng/Content_Signing_for_Remote_New_Tab
// https://github.com/mozilla/remote-newtab
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/components/newtab/aboutNewTabService.js#l48
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/components/newtab/aboutNewTabService.js#l108
user_pref("browser.newtabpage.remote", false);
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/components/newtab/NewTabRemoteResources.jsm
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/components/newtab/aboutNewTabService.js#l160
user_pref("browser.newtabpage.remote.mode", "dev");
// https://hg.mozilla.org/releases/mozilla-release/file/c1de04f39fa956cfce83f6065b0e709369215ed5/browser/components/newtab/aboutNewTabService.js#l182
user_pref("browser.newtabpage.remote.content-signing-test", false);

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
user_pref("startup.homepage_welcome_url.additional", "");
// Отключает замеры времени запуска браузера и уведомление о слишком долгом по его мнению старте.
// https://hg.mozilla.org/releases/mozilla-esr38/file/f9441895096d/browser/components/nsBrowserGlue.js#l687
user_pref("browser.slowStartup.notificationDisabled", true);
// Отключает показ URL с описанием функций, связанных с Windows 10, у пользователей последней.
// https://hg.mozilla.org/releases/mozilla-beta/file/883275447631/browser/components/nsBrowserContentHandler.js#l546
user_pref("browser.usedOnWindows10", true);
user_pref("browser.usedOnWindows10.introURL", "");
// Отключает модуль LaterRun, предназначенный для показа новым пользователям различной справочной
// информации при энном запуске браузера.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1200639
// https://hg.mozilla.org/releases/mozilla-release/file/970d0cf1c5d9/browser/modules/LaterRun.jsm#l106
user_pref("browser.laterrun.enabled", false);

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
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/services/datareporting/policy.jsm#l366
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1324049
// https://hg.mozilla.org/releases/mozilla-release/rev/03358dc42d00
user_pref("datareporting.policy.firstRunURL", "");
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
// about:tabcrashed
// https://bugzilla.mozilla.org/show_bug.cgi?id=1110511
// https://hg.mozilla.org/releases/mozilla-release/file/7eabe4d30cde/browser/modules/ContentCrashReporters.jsm#l141
// https://hg.mozilla.org/releases/mozilla-release/file/7eabe4d30cde/browser/base/content/aboutTabCrashed.js#l31
// https://hg.mozilla.org/releases/mozilla-release/file/7eabe4d30cde/browser/base/content/browser.js#l1159
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.includeURL", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.email", "");
// https://bugzilla.mozilla.org/show_bug.cgi?id=1287178
// https://hg.mozilla.org/releases/mozilla-release/file/a67a1682be8f0327435aaa2f417154330eff0017/browser/modules/ContentCrashHandlers.jsm#l383
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/rev/c94848691f8a
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
// https://hg.mozilla.org/releases/mozilla-release/file/a67a1682be8f0327435aaa2f417154330eff0017/browser/modules/ContentCrashHandlers.jsm#l511
user_pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 0);

// Отключает предложения оценить работу Firefox и отправить пожертвования Mozilla.
// https://wiki.mozilla.org/Advocacy/heartbeat
user_pref("browser.selfsupport.url", "");

// Отключает системный аддон Web Compat Reporter, добавляющий в гамбургер-меню кнопку для сообщений
// о проблемах с отображением сайтов. При нажатии кнопка делает скриншот открытой в текущей вкладке
// страницы и аплоадит его вместе с адресом страницы на сервер Мозиллы.
// Аддон включен по умолчанию пока только в Nightly, но, возможно, будет и в бете.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1324062
// https://hg.mozilla.org/releases/mozilla-release/file/175e28ba58fcd249fc2db68dcaa800da2ebc506d/browser/extensions/webcompat-reporter/bootstrap.js#l30
user_pref("extensions.webcompat-reporter.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/file/175e28ba58fcd249fc2db68dcaa800da2ebc506d/browser/extensions/webcompat-reporter/content/WebCompatReporter.jsm#l28
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");

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

// Отключает показ нескольких последних созданных закладок в меню закладок.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1248268
// https://hg.mozilla.org/releases/mozilla-release/rev/f98e3add979e
user_pref("browser.bookmarks.showRecentlyBookmarked", false);

// Отключает интегрированную поддержку проприетарного сервиса закладок Pocket.
// https://www.opennet.ru/opennews/art.shtml?num=42245
// https://wiki.mozilla.org/QA/Pocket_integration
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.enabledLocales", "");
// Начиная с Firefox 46 перемещено в системный аддон.
// https://hg.mozilla.org/releases/mozilla-release/file/970d0cf1c5d9/browser/extensions/pocket/bootstrap.js#l33
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

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
// Отключает эксперимент по определению оптимального времени жизни кэша, назначающий каждому
// пользователю рандомно один из четырех возможных интервалов.
// https://bugzilla.mozilla.org/show_bug.cgi?id=986728
// https://bugzilla.mozilla.org/show_bug.cgi?id=1098422
// https://trac.torproject.org/projects/tor/ticket/13575
// https://wiki.mozilla.org/User:Jesse/NewFrecency
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/browser/app/profile/firefox.js#l1530
// https://hg.mozilla.org/releases/mozilla-esr45/file/8a94f762f0a35613d967357816141f212f1b8772/netwerk/cache2/CacheObserver.cpp#l194
user_pref("browser.cache.frecency_experiment", -1);

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
// https://www.w3.org/TR/offline-webapps/
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

// Отключает автоматический импорт содержимого профилей других браузеров при первом запуске Firefox.
// По умолчанию пока выключен на релизе: https://bugzilla.mozilla.org/show_bug.cgi?id=1271800
// Импортируются закладки, история, пароли и содержимое форм (см. bug 1271774).
// https://bugzilla.mozilla.org/show_bug.cgi?id=1248077
// https://bugzilla.mozilla.org/show_bug.cgi?id=1271775
// https://bugzilla.mozilla.org/show_bug.cgi?id=1271774
// https://hg.mozilla.org/releases/mozilla-release/file/a22bfcef3c0d/browser/components/migration/AutoMigrate.jsm#l54
// https://hg.mozilla.org/releases/mozilla-release/file/ea34f05424a8/browser/components/migration/MigrationUtils.jsm#l768
user_pref("browser.migrate.automigrate.enabled", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1297479
user_pref("browser.migrate.automigrate.ui.enabled", false);

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

// Отключает посылку серии пустых UDP-пакетов шлюзу на порт 4886 перед началом соединения с сайтом,
// предназначенную для улучшения латентности при использовании Wi-Fi в режиме сбережения энергии
// (Power Save Polling mode). Включено по умолчанию пока (?) только в Firefox для Android.
// (Однако такие фичи могут случайно протекать и на десктоп - см. browser.casting.enabled.)
// https://bugzilla.mozilla.org/show_bug.cgi?id=888268
// https://bugzilla.mozilla.org/show_bug.cgi?id=1156249
// https://hg.mozilla.org/releases/mozilla-esr45/file/2786beb35a3825b68651e2bf22ce06b84ff31ee3/modules/libpref/init/all.js#l1219
// https://hg.mozilla.org/releases/mozilla-esr45/file/2786beb35a3825b68651e2bf22ce06b84ff31ee3/netwerk/base/Tickler.cpp#l159
user_pref("network.tickle-wifi.enabled", false);

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

// Пользовательский белый список сайтов, которым разрешено устаревшее шифрование.
// Рекомендуется работать с такими не из под основного профиля.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1114816#c27
user_pref("security.tls.insecure_fallback_hosts", "");

// Отображать восклицательный знак (ранее - красный замок) в адресной строке для сайтов, не
// поддерживающих RFC 5746 (безопасное продление сессии, закрывающее возможность для MitM-атаки,
// описанной в CVE-2009-3555).
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Отключает импорт используемого для MITM сертификата Family Safety от Microsoft.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1239166
// https://wiki.mozilla.org/SecurityEngineering/Untrusted_Certificates_in_Windows_Child_Mode
// https://hg.mozilla.org/releases/mozilla-release/file/ddb37c386bb2ffa180117b4d30ca3b41a8af233c/security/manager/ssl/nsNSSComponent.cpp#l782
user_pref("security.family_safety.mode", 0);

// Запрещает Firefox открывать JAR-файлы вместо скачивания, что повышает безопасность.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1173171
user_pref("network.jar.block-remote-files", true);

// Отключает передачу полных URL PAC-скрипту (будут передаваться только имена хостов), что
// отчасти исправляет уязвимость при использовании WPAD, описанную в статьях ниже.
// https://geektimes.ru/post/279472/
// https://habrahabr.ru/company/mailru/blog/259521/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1255474
// https://hg.mozilla.org/releases/mozilla-release/rev/5139b0dd7acc
user_pref("network.proxy.autoconfig_url.include_path", false);

// Запрещает работу WebRTC в режиме P2P, разрешая ее только через сервер третьей стороны, что
// предотвращает утечку IP-адресов всех сетевых интерфейсов компьютера (подробнее - см. prefs_2).
// https://wiki.mozilla.org/Media/WebRTC/Privacy
// https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/
// https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment
user_pref("media.peerconnection.ice.relay_only", true);
// Это обязательно нужно с Firefox 51+, в связке с relay_only или default_address_only.
// https://tools.ietf.org/html/draft-ietf-rtcweb-ip-handling-01
// https://bugzilla.mozilla.org/show_bug.cgi?id=1297416
// https://bugzilla.mozilla.org/show_bug.cgi?id=1304600
user_pref("media.peerconnection.ice.no_host", true);
// Разрешает работу WebRTC только на дефолтном сетевом интерфейсе, вследствие чего не
// происходит раскрытия настоящего IP пользователя, использующего VPN.
// Пока что не работает вместе с E10S: https://bugzilla.mozilla.org/show_bug.cgi?id=1194259
// https://bugzilla.mozilla.org/show_bug.cgi?id=1189041
//user_pref("media.peerconnection.ice.default_address_only", true);
