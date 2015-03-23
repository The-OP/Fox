// Минимальный интервал в миллисекундах для записи изменений в сессии на диск. Дефолтные 15 секунд -
// маловато, особенно для мегабайтных сессий.
user_pref("browser.sessionstore.interval", 60000);

// Использовать HTTP/1.1 для передачи нескольких файлов, не реконнектясь после каждого.
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.ssl", true);

// Делать DNS-запросы через прокси (если указан).
user_pref("network.proxy.socks_remote_dns", true);

// Количество страниц, которые держатся в памяти уже в виде DOM виде для быстрого перехода по
// back/forward. Уменьшение снизит потребление памяти.
user_pref("browser.sessionhistory.max_total_viewers", 2);
// Также немного уменьшает потребление памяти.
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
// неприемлемо. Желающие могут установить себе подписку Malware Domains для Adblock Plus, которая
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
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
// Отключает рекламу сервисов от самой Mozilla (Sync, Hello, версий для Android) в about:home.
// https://wiki.mozilla.org/Websites/Snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
user_pref("browser.startup.homepage_override.mstone", "ignore");

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

// Отключает сбор статистики для оценки эффективности текущих значений DNS TTL.
// Этот параметр убрали в Fx36.
// user_pref("dns.ttl-experiment.enabled", false);
// Отключает остальные эксперименты Mozilla над пользователем.
user_pref("network.allow-experiments", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.manifest.uri", "");

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
