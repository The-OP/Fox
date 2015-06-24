// Минимальный интервал в миллисекундах для записи изменений в сессии на диск. Дефолтные 15 секунд -
// маловато, особенно для мегабайтных сессий.
user_pref("browser.sessionstore.interval", 60000);

// Использовать HTTP/1.1 для передачи нескольких файлов, не реконнектясь после каждого.
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.ssl", true);

// Делать DNS-запросы через прокси (если указан).
user_pref("network.proxy.socks_remote_dns", true);

// Более информативная страница показа ошибок в сертификатах сайтов.
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Количество страниц, которые держатся в памяти уже в виде DOM виде для быстрого перехода по
// back/forward. Уменьшение снизит потребление памяти.
user_pref("browser.sessionhistory.max_total_viewers", 2);
// Также немного уменьшает потребление памяти.
// https://bugzilla.mozilla.org/show_bug.cgi?id=805855
// https://bugzilla.mozilla.org/show_bug.cgi?id=850607
user_pref("memory.free_dirty_pages", true);

// Использовать локаль из general.useragent.locale, а не установленную в ОС.
user_pref("intl.locale.matchOS", false);

// Отключает предзагрузку ссылок, на которые по мнению браузера вы собираетесь кликнуть.
user_pref("network.prefetch-next", false);
// И предрезолвинг их доменов тоже.
user_pref("network.dns.disablePrefetch", true);
// И предконнект к хостам.
user_pref("network.http.speculative-parallel-limit", 0);

// Отключает загрузку URL из буфера обмена по нажатию на колесо в Linux.
user_pref("middlemouse.contentLoadURL", false);

// Отключает переход назад в истории по бэкспейсу.
user_pref("browser.backspace_action", 0);

// Отключает полупрозрачную превьюшку таба, болтающуюся при его перетаскивании около курсора, и
// мешающую перетащить его в нужное место.
user_pref("nglayout.enable_drag_images", false);

// Отключает притормаживающую на окнах с многими вкладками анимацию открытия и закрытия табов. 
user_pref("browser.tabs.animate", false);

// Отключает авто-отправку недопечатанного поискового запроса для формирования поисковых подсказок.
user_pref("browser.search.suggest.enabled", false);
// Отключает поиск через адресную строку без заданных поисковикам префиксов-кейвордов.
user_pref("keyword.enabled", false);

// Отключает автоматическое обновление поисковых движков.
user_pref("browser.search.update", false);

// Отключает Predictor (быший Seer) - механизм, запоминающий связи между доменами, с которых
// запрашивается контент для того или иного URL (например основным доменом и CDN со статикой),
// и при следующем подкючении заранее коннектящийся ко всем CDN. 
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
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
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

// Отключает <a ping>, которые отправляют запрос по отдельному указанному адресу (с целью трекинга)
// при нажатии на ссылку.
user_pref("browser.send_pings", false);
// Отключает sendBeacon() - API для отправки статистики перед выгрузкой страницы.
user_pref("beacon.enabled", false);

// Отключает добавление в Speed Dial сайтов спонсоров Mozilla.
// После отключения следует удалить directoryLinks.json в about:cache -> <директория на уровень выше cache2>,
// чтобы уже загруженная реклама не показывалась -- https://support.mozilla.org/en-US/questions/1030849
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enhanced", false);
// Отключает загрузку рекламы сервисов от самой Mozilla (Sync, Hello, версий для Android) в about:home.
// https://wiki.mozilla.org/Websites/Snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
user_pref("browser.startup.homepage_override.mstone", "ignore");
// Отключает приветственную страницу при первом запуске браузера с новым профилем.
user_pref("startup.homepage_welcome_url","");

// Отключает показ AMO при входе в Add-ons Manager.
user_pref("extensions.webservice.discoverURL", "");
// Отключает посылку статистики при обновлении аддонов.
user_pref("extensions.getAddons.cache.enabled", false);

// Отключает отправку информации о падениях браузера в Mozilla.
user_pref("breakpad.reportURL", "");
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Отключает телеметрию.
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAccepted", false);
user_pref("datareporting.policy.dataSubmissionPolicyBypassAcceptance", false);
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");

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

// Открывать попапы во вкладках вместо отдельных окон.
user_pref("browser.link.open_newwindow.restriction", 0);

// Запрещает попапам отключать элементы окон браузера.
user_pref("dom.popup_maximum", 5);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);
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

// Отключает возможность соединения с устройством на Firefox OS для отладки по Wi-Fi.
// https://wiki.mozilla.org/DevTools/WiFi_Debugging
user_pref("devtools.remote.wifi.scan", false);
user_pref("devtools.remote.wifi.visible", false);

// Отключает шифры уязвимые к Logjam. Вытащено отсюда: https://addons.mozilla.org/en-US/firefox/addon/disable-dhe/
// Firefox 39 will include changes that will increase the minimum strength of keys to 1024 bits.
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);

// "As of 2015, there is speculation that some state cryptologic agencies may possess the capability
// to break RC4 even when used in the TLS protocol. Mozilla and Microsoft recommend disabling
// RC4 where possible." -- https://en.wikipedia.org/wiki/RC4
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
user_pref("security.tls.unrestricted_rc4_fallback", false);
