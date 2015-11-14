// Позволяет устанавливать неподписанные аддоны.
// https://wiki.mozilla.org/Addons/Extension_Signing
user_pref("xpinstall.signatures.required", false);

// Отключает автоматическое снятие скриншотов страниц с сохранением их на диск. Эти скриншоты
// используются в качестве превью в New Tab Page Tiles и в Ctrl+Tab (browser.ctrlTab.previews).
// При включенных New Tab Page Tiles и дефолтном значении этой опции, происходит еще и автоматическая
// закачка самых часто посещамых пользователем сайтов для генерации их превью. Если Tiles выключить,
// превью все равно сохраняются, когда пользователь сам заходит на один из часто посещаемых сайтов.
// Скриншоты пишутся на диск, даже если кэш полностью отключен. Хранятся они в каталоге thumbnails,
// расположенном на уровень выше каталога кэша, указанного в about:cache.
// Включение этой настройки решает все вышеописанные проблемы.
// https://bugzilla.mozilla.org/show_bug.cgi?id=897811#c14
// https://hg.mozilla.org/releases/mozilla-esr38/file/0e97e6bdedd8/toolkit/components/thumbnails/PageThumbs.jsm#l510
// https://hg.mozilla.org/releases/mozilla-esr38/file/0e97e6bdedd8/toolkit/components/thumbnails/PageThumbs.jsm#l350
// https://hg.mozilla.org/releases/mozilla-esr38/file/d7ca3b75c842/browser/base/content/newtab/page.js#l214
// https://hg.mozilla.org/releases/mozilla-esr38/file/d7ca3b75c842/browser/base/content/newtab/sites.js#l143
// https://hg.mozilla.org/releases/mozilla-esr38/file/54cb0b2e118b/toolkit/components/thumbnails/BackgroundPageThumbs.jsm#l34
// https://hg.mozilla.org/releases/mozilla-esr38/file/0e97e6bdedd8/browser/base/content/browser-thumbnails.js#l87
// https://hg.mozilla.org/releases/mozilla-esr38/file/3ab8c6c88f1d/browser/base/content/browser-ctrlTab.js#l49
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_tiles
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Отключает New Tab Page Tiles - изкоробочную панель быстрого набора с часто посещаемыми сайтами,
// которая потребляет процессорное время и замедляет открытие новых пустых вкладок.
// https://support.mozilla.org/en-US/kb/about-tiles-new-tab
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Отключает угадывание доменного имени при помощи подстановки www и разных TLD.
user_pref("browser.fixup.alternate.enabled", false);

// Отключает запоминание истории форм (Preferences -> Privacy -> Remember search and form history).
// Если она раньше была включена в этом профиле, следует вручную удалить файл formhistory.sqlite.
// Firefox хранит историю введенного в формы, ассоциируя текст только с атрибутом name input-элемента,
// куда этот текст был введен, без привязки к домену, на котором была форма. Из-за этого в выпадающей
// подсказке истории форм одного сайта могут появиться элементы, введенные на совершенно другом,
// если у того другого input был с таким же атрибутом name (например, распространенный "email").
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.saveHttpsForms", false);

// Отключает показ текста пароля по клику на соответствующее поле ввода в попапе, предлагающем
// сохранить введенный пароль.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1169702
// https://bugzilla.mozilla.org/show_bug.cgi?id=1183908
// https://bugzilla.mozilla.org/show_bug.cgi?id=1186123
user_pref("signon.rememberSignons.visibilityToggle", false);
// Отключает автоподстановку имени пользователя и пароля в форму логина, когда для этого сайта
// сохранена только одна их пара. Пароль будет подставлен после ввода логина.
// http://kb.mozillazine.org/Signon.autofillForms
user_pref("signon.autofillForms", false);

// Отключает автодетект изменения состояния сетевого подключения и связанную с ним самодеятельность
// вроде рефреша DNS-кэша. -- https://bugzilla.mozilla.org/show_bug.cgi?id=939318
user_pref("network.notify.changed", false);

// Отключает сбор статистики производительности декодирования HTML5-видео (посмотреть их можно в
// Show Statistics контекстного меню плеера). -- https://bugzilla.mozilla.org/show_bug.cgi?id=654550
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
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/modules/libpref/init/all.js#l4997
user_pref("reader.errors.includeURLs", false);
// При каждом изменении window.location значение сравнивается с этой настройкой, чтобы начать UI-тур
// по режиму чтения. Значение этого параметра используется как регэксп без проверки на пустую строку,
// поэтому обнулять его нельзя. Вместо этого используем регэксп, возвращающий для любой строки false.
// https://hg.mozilla.org/releases/mozilla-release/file/e5d6dc48f6de/browser/components/uitour/UITour.jsm#l348
// https://hg.mozilla.org/releases/mozilla-release/file/cebe7cad65a2/browser/base/content/browser.js#l4224
user_pref("browser.uitour.readerViewTrigger", ".^");

// Отключает UI-тур по возможностям Australis, Hello и т.п. Эти настроки влияют на UITour.onPageEvent()
// и не действуют на тур по Reader View, который вызывается напрямую через UITour.onLocationChange().
// https://www.mozilla.org/en-US/firefox/39.0/tour/
// https://wiki.mozilla.org/Ui_tour/Test_Plan
// https://hg.mozilla.org/releases/mozilla-release/file/aee871513001/browser/components/uitour/content-UITour.js#l12
// https://hg.mozilla.org/releases/mozilla-release/file/5e03a12dd57e/browser/components/nsBrowserGlue.js#l2943
// https://hg.mozilla.org/releases/mozilla-release/file/e5d6dc48f6de/browser/components/uitour/UITour.jsm#l364
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.uitour.themeOrigin", "");

// Отключает геолокацию через сервисы Гугла с присвоением клиентскому компьютеру уникального
// идентификатора и передачей в Гугл информации о близлежащих точках доступа Wi-Fi.
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/system/NetworkGeolocationProvider.js#l488
user_pref("geo.wifi.uri", "");
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/system/NetworkGeolocationProvider.js#l21
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/system/NetworkGeolocationProvider.js#l233
user_pref("geo.wifi.scan", false);
user_pref("geo.cell.scan", false);
user_pref("geo.wifi.timeToWaitBeforeSending", 630720000); // 20 лет.

// Отключает геолокацию для применения региональных настроек поиска. Геолокация запрашивается один раз,
// после чего код страны сохранится в browser.search.countryCode в виде строки "US", "RU", etc. Она не будет
// производиться, если код страны уже в browser.search.countryCode или если очищен необходимый для нее URL.
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/components/search/nsSearchService.js#l520
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/components/search/nsSearchService.js#l593
user_pref("browser.search.countryCode", "US");
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/components/search/nsSearchService.js#l425
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.timeout", 0);
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.geoip.url", "");
// Эта настройка не отключает XHR геолокации, а только применение региональных настроек.
user_pref("browser.search.geoSpecificDefaults", false);
// Нужно очищать вместе с browser.search.geoip.url.
// https://hg.mozilla.org/releases/mozilla-beta/file/5657e76d4ee5/toolkit/components/search/nsSearchService.js#l746
user_pref("browser.search.geoSpecificDefaults.url", "");

// Отключает Clipboard Events, которые позволяют страницам узнавать, какая их часть была скопирована в буфер
// обмена, подменять скопированное, перехватывать вставку из буфера и реагировать на нее особым образом
// (например загружать находящуюся в буфере обмена картинку в сообщение почты или чата).
// https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces
user_pref("dom.event.clipboardevents.enabled", false);
// Отключает событие beforeunload, на которое некоторые страницы ставят сообщения
// вроде: "Эта страница просит вас подтвердить, что вы хотите уйти."
user_pref("dom.disable_beforeunload", true);
// Отключает Network Information API, которым можно узнать информацию о типе подключения к Интернету.
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
user_pref("dom.netinfo.enabled", false);
// Отключает передачу браузером информации о времени начала и окончания загрузки страницы.
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance", false);
// Запрещает отслеживать состояние батареи.
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.battery.enabled", false);
// Отключает ImageCapture API для снятия изображения с веб-камеры.
// https://bugzilla.mozilla.org/show_bug.cgi?id=888177
// https://bugzilla.mozilla.org/show_bug.cgi?id=916643
user_pref("dom.imagecapture.enabled", false);
// Отключает Resource Timing API (получение информации о том, с какой скоростью обрабатываются
// элементы сайта). -- https://bugzilla.mozilla.org/show_bug.cgi?id=1002855
user_pref("dom.enable_resource_timing", false);
// Отключает Vibration API. -- https://developer.mozilla.org/en-US/docs/Web/Guide/API/Vibration
user_pref("dom.vibrator.enabled", false);
// Отключает события от акселерометра и других сенсоров.
// https://bugzilla.mozilla.org/show_bug.cgi?id=740473
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled", false);
// Отключает Gamepad API, которое может быть использовано для получения идентификаторов
// производителя и модели подключенных к компьютеру геймпадов.
// https://trac.torproject.org/projects/tor/ticket/13023
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/Gamepad
// http://www.w3.org/TR/gamepad/#methods
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.non_standard_events.enabled", false);
// Отключает поддержку устройств виртуальной реальности.
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.cardboard.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
// Отключает API для телефонных звонков, использующийся в Firefox OS.
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);
// Отключает Presentation API, использующийся для взаимодействия веб-страниц с проектором.
// https://w3c.github.io/presentation-api/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1080474
// https://bugzilla.mozilla.org/show_bug.cgi?id=1148149
// https://bugzilla.mozilla.org/show_bug.cgi?id=1158029
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.tcp_server.debug", false);
// Отключает обнаружение устройств для презентации в локальной сети.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1080474
// https://bugzilla.mozilla.org/show_bug.cgi?id=1115480
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/presentation/provider/MulticastDNSDeviceProvider.cpp#l18
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.discoverable", false);

// Отключает Push API, позволяющий веб-приложениям регистрировать идентификатор на сервере Мозиллы,
// чтобы сайт приложения оставлял там уведомления, которые пользователь получит, когда выйдет онлайн.
// https://developer.mozilla.org/en-US/docs/Web/API/Push_API
// https://wiki.mozilla.org/Security/Reviews/Push_API
// https://wiki.mozilla.org/Privacy/Reviews/Push_API
// https://bugzilla.mozilla.org/show_bug.cgi?id=1038811
// https://bugzilla.mozilla.org/show_bug.cgi?id=1153499
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// https://hg.mozilla.org/releases/mozilla-beta/file/e549349b8d66/modules/libpref/init/all.js#l4237
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.adaptive.enabled", false);
user_pref("dom.push.udp.wakeupEnabled", false);
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/modules/libpref/init/all.js#l4445
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/push/PushRecord.jsm#l59
user_pref("dom.push.maxQuotaPerSubscription", 0);

// Отключает Simple Push API - нестандартную альтернативу Push API от Mozilla. В данный момент
// используется только на Firefox OS, но возможно будет портировано и на десктопную версию.
// https://wiki.mozilla.org/Security/Reviews/SimplePush
user_pref("services.push.enabled", false);
user_pref("services.push.serverURL", "");

// Отключает SystemUpdate API, использующийся в Firefox OS.
// https://wiki.mozilla.org/WebAPI/SystemUpdateAPI
// https://bugzilla.mozilla.org/show_bug.cgi?id=1037329
user_pref("dom.system_update.enabled", false);
user_pref("dom.system_update.debug", false);

// Отключает User Timing API - доступ к высокочастотному таймеру, при помощи которого может быть
// осуществлено прослушивание процессорного кэша из непривилегированного JS-кода.
// https://trac.torproject.org/projects/tor/ticket/16336
// http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
// https://www.linux.org.ru/news/security/11541326
// http://arxiv.org/pdf/1502.07373v2.pdf
user_pref("dom.enable_user_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);

// Отключает Web Speech API, использующееся для распознавания и синтеза речи.
// https://wiki.mozilla.org/HTML5_Speech_API
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

// Запрещает поддержку протокола WebRTC, текущая реализация которого позволяет незаметно для
// пользователя получить список IP-адресов в его локальной сети. А также узнать ваш реальный IP
// за прокси/Tor/VPN. Ломает Firefox Hello.
// https://bugzilla.mozilla.org/show_bug.cgi?id=959893
// http://habrahabr.ru/post/215071/
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.turn.disable", true);
// https://hg.mozilla.org/releases/mozilla-esr38/file/e7f06142f3b5/dom/media/PeerConnection.js#l330
// https://hg.mozilla.org/releases/mozilla-beta/file/b14997797205/dom/media/PeerConnection.js#l335
user_pref("media.peerconnection.default_iceservers", "[]");
user_pref("media.peerconnection.use_document_iceservers", false);
// Запрещает использование WebRTC на всех интерфейсах кроме loopback.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1189167
// https://bugzilla.mozilla.org/show_bug.cgi?id=1189040
// https://hg.mozilla.org/releases/mozilla-beta/rev/955e74958483
user_pref("media.peerconnection.ice.force_interface", "lo");

// Отключает getUserMedia API, который используется для записи звука с микрофона, изображения с
// вебкамеры и screen sharing (доступ удаленного компьютера к порции экрана). Ломает Firefox Hello.
// https://wiki.mozilla.org/Media/getUserMedia
// https://stackoverflow.com/questions/13616449/screen-sharing-with-webrtc
// https://mozilla.github.io/webrtc-landing/gum_test.html
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/media/MediaManager.cpp#l1587
user_pref("media.navigator.permission.disabled", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/media/MediaManager.cpp#l1659
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/dom/media/MediaManager.cpp#l135
user_pref("media.getusermedia.screensharing.allowed_domains", "");
// http://stackoverflow.com/questions/29291275/navigator-getusermedia-mutes-partially-the-other-sounds-of-the-computer
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/media/MediaManager.cpp#l1942
user_pref("media.getusermedia.audiocapture.enabled", false);

// Отключает видеозахват с элемента canvas.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream
// http://www.w3.org/TR/mediacapture-fromelement/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1169126
user_pref("canvas.capturestream.enabled", false);

// Отключает Firefox Hello.
// https://wiki.mozilla.org/Loop/Data_Collection
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_firefox-hello
user_pref("loop.enabled", false);
user_pref("loop.screenshare.enabled", false);
user_pref("loop.textChat.enabled", false);
user_pref("loop.server", "");
user_pref("loop.feedback.baseUrl", "");
user_pref("loop.debug.twoWayMediaTelemetry", false);
user_pref("loop.contextInConversations.enabled", false);
user_pref("loop.contacts.gravatars.promo", false);
user_pref("loop.contacts.gravatars.show", false);
user_pref("loop.gettingStarted.url", "");
user_pref("loop.learnMoreUrl", "");
user_pref("loop.legal.ToS_url", "");
user_pref("loop.legal.privacy_url", "");
user_pref("loop.oauth.google.redirect_uri", "");
user_pref("loop.oauth.google.scope", "");
user_pref("loop.seenToS", "unseen");
user_pref("loop.showPartnerLogo", false);
user_pref("loop.support_url", "");
// Отключает появляющееся раз в 6 месяцев окно с предложением оставить отзыв о работе Hello.
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/components/loop/content/js/conversationAppStore.js#l54
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/components/loop/content/js/conversation.js#l47
user_pref("loop.feedback.dateLastSeenSec", 1446595200); // 2015-11-04, 00:00 UTC
user_pref("loop.feedback.periodSec", 630720000); // 20 лет
user_pref("loop.feedback.formURL", "");

// Отключает поддержку Encrypted Media Extensions (DRM для HTML5-видео).
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
// Отключает предложения включить EME.
// https://hg.mozilla.org/releases/mozilla-esr38/file/704989f295eb/browser/base/content/browser-eme.js#l55
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.autoupdate", false);

// Отключает загрузку бинарника H.264-кодека от Cisco (будет использоваться GStreamer).
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/modules/GMPUtils.jsm#l70
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_openh264-codec
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.fragmented-mp4.gmp.enabled", false);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/modules/libpref/init/all.js#l4496
user_pref("media.gmp-manager.cert.requireBuiltIn", true);
user_pref("media.gmp-manager.cert.checkAttributes", true);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
// https://github.com/The-OP/Fox/issues/25
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/modules/GMPUtils.jsm#l84
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/modules/GMPInstallManager.jsm#l384
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/modules/GMPInstallManager.jsm#l337
user_pref("media.gmp-manager.lastCheck", 1437696000); // 2015-07-24, 00:00 UTC
user_pref("media.gmp-manager.secondsBetweenChecks", 630720000); // 20 лет.

// Полностью отключает WebIDE, убирает его кнопку и из меню Developer Tools.
// https://trac.torproject.org/projects/tor/ticket/16222#comment:10
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

// Отключает возможность отладки через сеть этого экземпляра Firefox другим и наоборот (а также
// самого себя через loopback-соединение Browser Toolbox). Включена по умолчанию на Developer Edition.
user_pref("devtools.debugger.remote-enabled", false);

// Отключает обнаружение captive portal - подмены всех запрашиваемых пользователем страниц на
// страницы провайдера. Эта техника используется в местах публичного Wi-Fi и некоторыми операторами
// для аунтефикации или показа пользователю какой-либо информации (например, о необходимости
// пополнить счет). Обнаружение происходит через периодическое скачивание файла с сервера Мозиллы.
// https://en.wikipedia.org/wiki/Captive_portal
// https://github.com/vtsatskin/FX-Captive-Portals-Design
// https://wiki.mozilla.org/Necko/CaptivePortal
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/netwerk/base/nsIOService.cpp#l1246
user_pref("network.captive-portal-service.enabled", false);
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/modules/libpref/init/all.js#l4684
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/netwerk/base/CaptivePortalService.cpp#l143
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/netwerk/base/CaptivePortalService.cpp#l76
user_pref("network.captive-portal-service.minInterval", 0);
// https://hg.mozilla.org/releases/mozilla-beta/file/380817d573cd/toolkit/components/captivedetect/captivedetect.js#l199
// https://hg.mozilla.org/releases/mozilla-beta/file/380817d573cd/toolkit/components/captivedetect/captivedetect.js#l301
// https://hg.mozilla.org/releases/mozilla-beta/file/380817d573cd/toolkit/components/captivedetect/captivedetect.js#l345
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);

// Отключает распространенные плагины. Рекомендуется их вообще удалять, ибо, как показывает практика,
// плагины - самые дырявые компоненты браузера.
user_pref("plugins.click_to_play", true);
// https://hg.mozilla.org/releases/mozilla-esr38/file/a9be9167d92b/modules/libpref/init/all.js#l2325
// https://hg.mozilla.org/releases/mozilla-esr38/file/31c202376ea8/browser/base/content/browser-plugins.js#l7
// https://hg.mozilla.org/releases/mozilla-esr38/file/31c202376ea8/browser/base/content/browser-plugins.js#l144
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/extensions/cookie/nsPermissionManager.cpp#l672
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugin.persistentPermissionAlways.intervalInDays", 0);
// https://hg.mozilla.org/releases/mozilla-esr38/file/683b45b75b40/dom/plugins/base/nsIPluginTag.idl#l11
// https://hg.mozilla.org/releases/mozilla-esr38/file/a20c7910a82f/dom/plugins/base/nsPluginTags.h#l31
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
// Отключает все плагины (только для Windows-билдов) -- http://kb.mozillazine.org/Plugin_scanning
user_pref("plugin.scan.plid.all", false);
// Плагины Acrobat, QuickTime и WMP ищутся напрямую. Содержимое этой настройки - минимальный номер
// версии плагина. Каждый из компонентов версии (major и minor) должен умещаться в WORD (16 бит).
// https://hg.mozilla.org/releases/mozilla-esr38/file/a9be9167d92b/modules/libpref/init/all.js#l2939
// https://hg.mozilla.org/releases/mozilla-esr38/file/8ba67ee6a81d/dom/plugins/base/nsPluginDirServiceProvider.h#l17
// https://hg.mozilla.org/releases/mozilla-esr38/file/6c1c7e45c902/dom/plugins/base/nsPluginDirServiceProvider.cpp
user_pref("plugin.scan.Acrobat", "30000.0");
user_pref("plugin.scan.Quicktime", "30000.0");
user_pref("plugin.scan.WindowsMediaPlayer", "30000.0");
// Отключает все плагины. Именно пробел, а не пустая строка. Пустая строка значит "разрешены все".
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/dom/plugins/base/nsPluginHost.h#l174
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/dom/plugins/base/nsPluginHost.cpp#l2505
user_pref("plugin.allowed_types", " ");
// Отключает возможность перечисления плагинов через window.navigator.plugins[].
// https://hg.mozilla.org/releases/mozilla-esr38/file/a9be9167d92b/modules/libpref/init/all.js#l2309
// https://hg.mozilla.org/releases/mozilla-esr38/file/2ae2d0f3a546/dom/base/nsPluginArray.cpp#l318
user_pref("plugins.enumerable_names", "");
// http://kb.mozillazine.org/Issues_related_to_plugins#Plugin_location
user_pref("plugins.load_appdir_plugins", false);
// https://support.mozilla.org/en-US/questions/833109
user_pref("plugins.update.url", "");
// http://kb.mozillazine.org/Pfs.datasource.url
user_pref("pfs.datasource.url", "");
// Запрещает яваскриптам обращаться к плагинам.
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

// Отключает встроенный просмотрщик PDF, в котором частенько находят уязвимости.
// http://habrahabr.ru/company/eset/blog/264619/
// https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
// https://news.ycombinator.com/item?id=10021376
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableWebGL", false);

// Отключает CSS Font Loading API, предназначенный для динамической подгрузки шрифтов из скриптов.
// https://developer.mozilla.org/en-US/docs/Web/API/CSSFontLoading_API
// https://drafts.csswg.org/css-font-loading/
user_pref("layout.css.font-loading-api.enabled", false);

// Отключает Cache API (Cache Storage), представляющее из себя еще одно хранилище на компьютере
// пользователя, куда скрипты могут складывать информацию. Оно является частью спецификации
// Service Workers, но может быть использовано и без них (через window.caches). Кроме того, писать
// туда можно не только кэшированные ответы из сети, но и произвольные данные. В отличие от
// DOM Storage, Cache Storage _не_ очищается при Clear Recent History, а его содержимое не видно в
// Developer Tools или about:cache. Через интерфейс самого браузера увидеть его использование
// можно только в Page Info -> Permissions (но _не_ в about:permissions) -> Maintain Offline Storage
// и очистить там же (пункт общий с Indexed DB, и очищает их тоже вместе).
// Находится Cache Storage в профиле, по такому пути: storage/default/<домен>/cache/
// https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
// https://bugzilla.mozilla.org/show_bug.cgi?id=940273
// http://www.w3.org/TR/service-workers/#cache-objects
user_pref("dom.caches.enabled", false);

// Запрещает расширение WebGL, позволяющее узнать модель видеокарты пользователя и ее драйвер.
// https://www.mail-archive.com/dev-platform@lists.mozilla.org/msg14121.html
// https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
// https://hg.mozilla.org/releases/mozilla-beta/file/8cf5636886f0/dom/canvas/WebGLContextState.cpp#l195
// https://hg.mozilla.org/releases/mozilla-beta/file/8cf5636886f0/dom/canvas/WebGLContextExtensions.cpp#l99
user_pref("webgl.disable-debug-renderer-info", true);
// Переменовано в Firefox 42:
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/canvas/WebGLContextExtensions.cpp#l99
user_pref("webgl.enable-debug-renderer-info", false);

// Блокировка загрузки незащищенного содержимого на HTTPS-страницах. Если какие-то ресурсы были
// заблокированы, в адресной строке отображается щит.
// https://www.ssllabs.com/ssltest/viewMyClient.html (тестировать нужно со включенным JS)
// JS, CSS, XHR, Frames
user_pref("security.mixed_content.block_active_content", true);
// Images
user_pref("security.mixed_content.block_display_content", true);

// Настройки для HTTP-заголовка Referer (а также DOM-свойства document.referrer), содержащего URL
// страницы, с которой пользователь перешел по ссылке или, находясь на которой, запросил загрузку
// нужного для ее отображения ресурса (картинки, стиля, скрипта, шрифта, etc). В частности, очень
// многие сайты (и некоторые UserJS) ссылаются на скрипты, подгружающиеся с доменов Гугла (jQuery,
// reCAPTCHA, Analytics), благодаря чему Гугл, анализируя заголовок Referer, узнает посещенные
// пользователем URL, даже если тот переходил на них не из самого Гугла.
// Используется некоторыми сайтами для защиты от хотлинкинга, поэтому целиком его лучше не запрещать.
// Реферер удобнее контролировать при помощи аддона RefControl, однако в Firefox есть и довольно
// продвинутые встроенные настройки для управления реферерами, которые могут быть использованы,
// если установка лишнего аддона нежелательна.
// Оптимально будет включить spoofSource и выставить trimmingPolicy в 2, а остальное не трогать - тогда
// при любом запросе страницы или ресурса сайтам будет посылаться в Referer их собственный корень
// вместо URL ссылающейся на них страницы. Альтернатива - запрет посылки Referer при кросс-доменных
// запросах (XOriginPolicy -> 1), но это ломает некоторые защиты от хотлинкинга.
// PS: Здесь нет опечаток в словах, обозначающих реферер. Заголовок - Referer с тремя "r", свойство
// DOM - с четырьмя "r", настройки Firefox кроме одной - с тремя "r", одна - с четырьмя.
// https://en.wikipedia.org/wiki/HTTP_referer
// https://en.wikipedia.org/wiki/Hotlinking
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/modules/libpref/init/all.js#l1216
// https://hg.mozilla.org/releases/mozilla-esr38/file/7bc0140f0bfe/netwerk/protocol/http/HttpBaseChannel.cpp#l921
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

// Отключает автоматическое обновление браузера.
// https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
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
