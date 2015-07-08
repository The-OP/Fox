// Отключает Speed Dial, потребляющий процессорное время и замедляющий открытие новых вкладок.
user_pref("browser.newtabpage.enabled", false);

// Отключает угадывание доменного имени при помощи подстановки www и разных TLD.
user_pref("browser.fixup.alternate.enabled", false);

// Отключает автодетект изменения состояния сетевого подключения и связанную с ним самодеятельность
// вроде рефреша DNS-кэша.
user_pref("network.notify.changed", false);

// Отключает сбор статистики производительности декодирования HTML5-видео.
user_pref("media.video_stats.enabled", false);

// Отключает Social API и новую кнопку для перепостов в соцсети.
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.directories", "");
user_pref("social.whitelist", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");

// Отключает Reading List, портированный с версии для Android.
// https://wiki.mozilla.org/CloudServices/Reading_List
user_pref("browser.readinglist.enabled", false);
user_pref("browser.readinglist.sidebarEverOpened", false);
user_pref("readinglist.scheduler.enabled", false);
user_pref("readinglist.server", "");
// Отключает Reader View
// https://wiki.mozilla.org/QA/Reader_view
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);

// Отключает геолокацию через Гугл с присвоением уникального идентификатора и передачей им
// информации о близлежащих точках доступа Wi-Fi.
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.timeout", 0);
user_pref("browser.search.geoip.url", "");

// Отключает Clipboard Events, которые позволяют страницам узнавать какая их часть была скопирована в буфер
// обмена, подменять скопированное, перехватывать вставку из буфера и реагировать на нее особым образом
// (например загружать находящуюся в буфере обмена картинку в сообщение почты или чата).
// https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces
user_pref("dom.event.clipboardevents.enabled", false);
// Отключает событие beforeunload, на которое некоторые страницы ставят сообщения
// вроде: "Эта страница просит вас подтвердить, что вы хотите уйти"
user_pref("dom.disable_beforeunload", true);
// Отключает Network Information API, которым можно узнать информацию о типе подключения к Интернету.
user_pref("dom.netinfo.enabled", false);
// Отключает передачу браузером информации о времени начала и окончания загрузки страницы.
user_pref("dom.enable_performance", false);
// Запрещает отслеживать состояние батареи.
user_pref("dom.battery.enabled", false);
// Отключает ImageCapture API для снятия изображения с веб-камеры.
user_pref("dom.imagecapture.enabled", false);
// Отключает Resource Timing API (получение информации о том, с какой скоростью обрабатываются
// элементы сайта).
user_pref("dom.enable_resource_timing", false);
// Отключает Vibration API.
user_pref("dom.vibrator.enabled", false);
// Отключает события от акселерометра и других сенсоров.
user_pref("device.sensors.enabled", false);

// Отключает User Timing API - доступ к высокочастотному таймеру, при помощи которого может быть
// осуществлено прослушивание процессорного кэша из непривилегированного JS-кода.
// http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
// https://www.linux.org.ru/news/security/11541326
// http://arxiv.org/pdf/1502.07373v2.pdf
user_pref("dom.enable_user_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);

// Отключает Web Speech API, использующееся для распознавания и синтеза речи.
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

// Запрещает поддержку протокола WebRTC, текущая реализация которого позволяет незаметно для
// пользователя получить список IP-адресов в его локальной сети. А также узнать ваш реальный IP
// за прокси/Tor/VPN. Ломает Firefox Hello.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.default_iceservers", "");
user_pref("media.peerconnection.use_document_iceservers", false);

// Отключает getUserMedia API, который используется для записи звука с микрофона, изображения с
// вебкамеры и screen sharing (доступ другого компьютера к порции экрана). Ломает Firefox Hello.
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.navigator.permission.disabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.enabled", false);

// Отключает Firefox Hello.
user_pref("loop.enabled", false);
user_pref("loop.screenshare.enabled", false);
user_pref("loop.rooms.enabled", false);
user_pref("loop.server", "");
// Обнулять этот параметр нельзя, иначе отвалится восстановление сессии и некоторые другие функции.
// UPD: Этот параметр и код, который от него зависел, убрали в Fx36 --
// https://bugzilla.mozilla.org/show_bug.cgi?id=1073218
// user_pref("loop.soft_start_hostname", "127.0.0.1");
user_pref("loop.feedback.baseUrl", "");
user_pref("loop.debug.twoWayMediaTelemetry", false);

// Отключает поддержку Encrypted Media Extensions (DRM для HTML5-видео).
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
user_pref("media.gmp-eme-adobe.enabled", false);

// Отключает загрузку бинарника H264-кодека от Cisco (будет использоваться GStreamer).
user_pref("media.gmp-gmpopenh264.provider.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");

// Полностью отключает WebIDE, убирает его кнопку и из меню Developer Tools.
user_pref("devtools.webide.enabled", false);
user_pref("devtools.appmanager.enabled", false);
user_pref("devtools.webide.enableLocalRuntime", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1056923
user_pref("devtools.webide.widget.autoinstall", false);
user_pref("devtools.webide.widget.enabled", false);
user_pref("devtools.webide.widget.inNavbarByDefault", false);
user_pref("devtools.webide.adaptersAddonURL", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.addonsURL", "");
user_pref("devtools.webide.addonsURL_cache", "");
user_pref("devtools.webide.simulatorAddonsURL", "");
user_pref("devtools.webide.templatesURL", "");
user_pref("devtools.webide.templatesURL_cache", "");

// Отключает распространенные плагины. Рекомендуется их вообще удалять, т.к., как показывает практика,
// плагины - самые дырявые компоненты браузера.
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
// Отключает все плагины (только для Windows-билдов) -- http://kb.mozillazine.org/Plugin_scanning
user_pref("plugin.scan.plid.all", false);
// http://kb.mozillazine.org/Issues_related_to_plugins#Plugin_location
user_pref("plugins.load_appdir_plugins", false);
// https://support.mozilla.org/en-US/questions/833109
user_pref("plugins.update.url", "");
// http://kb.mozillazine.org/Pfs.datasource.url
user_pref("pfs.datasource.url", "");
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

// Отключает автоматическое обновление браузера.
// https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=885641#c61
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.url", "");
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1080406
user_pref("app.update.badge", false);
