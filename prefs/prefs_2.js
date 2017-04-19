// Отключает рекламу Sync при установке аддонов, сохранении паролей и редактировании закладок.
// https://hg.mozilla.org/releases/mozilla-esr45/file/cd64cd568d3879680838f3de32f5033fbaa409d5/browser/base/content/urlbarBindings.xml#l2705
// https://hg.mozilla.org/releases/mozilla-esr45/file/cd64cd568d3879680838f3de32f5033fbaa409d5/browser/base/content/urlbarBindings.xml#l2730
user_pref("browser.syncPromoViewsLeftMap", "{\"addons\":0,\"bookmarks\":0,\"passwords\":0}");

// Удаляет 3rd-party cookies после закрытия браузера.
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsCookieService.cpp#l117
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsCookieService.cpp#l2187
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsCookieService.cpp#l3800
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/netwerk/cookie/nsICookieService.idl#l77
user_pref("network.cookie.thirdparty.sessionOnly", true);

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
// Отключает функцию зачитывания текста при помощи синтезированной речи в Reader View.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166365
// https://wiki.mozilla.org/QA/Speak_the_article
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/toolkit/components/reader/AboutReader.jsm#l106
user_pref("narrate.enabled", false);

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
// 20 лет
user_pref("geo.wifi.timeToWaitBeforeSending", 630720000);

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

// Отключает Selection Events, позволяющие странице реагировать на выделение пользователем текста на ней.
// NB: Сам Selection API эта настройка _не_ отключает и window.getSelection() все еще будет работать.
// https://developer.mozilla.org/en-US/Firefox/Releases/43#Miscellaneous
// https://developer.mozilla.org/en-US/docs/Web/API/Selection
user_pref("dom.select_events.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/rev/4e664a1bdebd
// https://bugzilla.mozilla.org/show_bug.cgi?id=1309628
user_pref("dom.select_events.textcontrols.enabled", false);
// Отключает Clipboard Events, которые позволяют страницам узнавать, какая их часть была скопирована в буфер
// обмена, подменять скопированное, перехватывать вставку из буфера и реагировать на нее особым образом
// (например загружать находящуюся в буфере обмена картинку в сообщение почты или чата).
// Ломает копирование текста из редактора Stylish.
// https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces
user_pref("dom.event.clipboardevents.enabled", false);
// Отключает запрос подтверждений вроде: "Эта страница просит вас подтвердить, что вы хотите уйти."
// при обработке браузером события beforeunload. НЕ отключает само событие beforeunload.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1107771
// https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
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
// Отключает Touch Events, при помощи которых можно выяснить разрешение экрана.
// https://trac.torproject.org/projects/tor/ticket/10286
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/modules/libpref/init/all.js#l4579
// https://hg.mozilla.org/releases/mozilla-esr45/file/4bd5a188c4236c4d14f9e859aa0ba243480af9bc/dom/events/TouchEvent.cpp#l177
user_pref("dom.w3c_touch_events.enabled", 0);
// Отключает Gamepad API, которое может быть использовано для получения идентификаторов
// производителя и модели подключенных к компьютеру геймпадов.
// https://trac.torproject.org/projects/tor/ticket/13023
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/Gamepad
// https://www.w3.org/TR/gamepad/#methods
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.non_standard_events.enabled", false);
user_pref("dom.gamepad.test.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
// Отключает поддержку устройств виртуальной реальности.
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.cardboard.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/file/970d0cf1c5d9/modules/libpref/init/all.js#l4778
user_pref("dom.vr.add-test-devices", 0);
user_pref("dom.vr.osvr.enabled", false);
// Отключает API для телефонных звонков, использующийся в Firefox OS.
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);
// Отключает Presentation API, использующийся для взаимодействия веб-страниц с проектором.
// https://w3c.github.io/presentation-api/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1080474
// https://bugzilla.mozilla.org/show_bug.cgi?id=1148149
// https://bugzilla.mozilla.org/show_bug.cgi?id=1158029
user_pref("dom.presentation.enabled", false);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1278205
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.tcp_server.debug", false);
user_pref("dom.presentation.discovery.legacy.enabled", false);
// Отключает обнаружение устройств для презентации в локальной сети.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1080474
// https://bugzilla.mozilla.org/show_bug.cgi?id=1115480
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/presentation/provider/MulticastDNSDeviceProvider.cpp#l18
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.discoverable", false);
// Отключает встроенный mDNS-клиент, нужный для Presentation API.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1241368
// https://bugzilla.mozilla.org/show_bug.cgi?id=1239909
// https://bugzilla.mozilla.org/show_bug.cgi?id=1225736
// https://bugzilla.mozilla.org/show_bug.cgi?id=1225726
user_pref("network.mdns.use_js_fallback", false);

// Отключает File and Directory Entries API, позволяющее сайтам создавать файлы на компьютере
// пользователя.
// https://developer.mozilla.org/en-US/Firefox/Releases/50#Files_and_directories
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support
// https://bugzilla.mozilla.org/show_bug.cgi?id=1265767
user_pref("dom.webkitBlink.filesystem.enabled", false);
// Отключает нестандартный атрибут webkitdirectory элемента input, позволяющий загружать целые
// каталоги через форму.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
// https://bugzilla.mozilla.org/show_bug.cgi?id=1258489
// https://hg.mozilla.org/releases/mozilla-release/rev/133af19777be
user_pref("dom.webkitBlink.dirPicker.enabled", false);

// Отключает Directory Upload API, как и webkitdirectory позволяющий загружать целые каталоги через
// форму.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1188880
// https://bugzilla.mozilla.org/show_bug.cgi?id=907707
// https://wicg.github.io/directory-upload/proposal.html
user_pref("dom.input.dirpicker", false);

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
// https://www.html5rocks.com/en/tutorials/webperformance/usertiming/
// https://www.linux.org.ru/news/security/11541326
// https://arxiv.org/pdf/1502.07373v2.pdf
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
// https://habrahabr.ru/post/215071/
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.video.vp9_enabled", false);
user_pref("media.peerconnection.simulcast", false);
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
// https://stackoverflow.com/questions/29291275/navigator-getusermedia-mutes-partially-the-other-sounds-of-the-computer
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/media/MediaManager.cpp#l1942
user_pref("media.getusermedia.audiocapture.enabled", false);
// Отключает событие devicechange, возникающее когда к компьютеру подключают веб-камеру, микрофон,
// колонки и т.п. устройства.
// https://developer.mozilla.org/en-US/docs/Web/Events/devicechange
// https://bugzilla.mozilla.org/show_bug.cgi?id=1152383
// https://hg.mozilla.org/releases/mozilla-release/file/a67a1682be8f0327435aaa2f417154330eff0017/dom/webidl/MediaDevices.webidl#l15
user_pref("media.ondevicechange.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/rev/5022a33fd3e9
user_pref("media.ondevicechange.fakeDeviceChangeEvent.enabled", false);

// Отключает видеозахват с элемента canvas.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream
// https://www.w3.org/TR/mediacapture-fromelement/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1169126
user_pref("canvas.capturestream.enabled", false);

// Отключает Firefox Hello.
// https://wiki.mozilla.org/Loop/Data_Collection
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_firefox-hello
user_pref("loop.enabled", false);
user_pref("loop.textChat.enabled", false);
user_pref("loop.server", "");
user_pref("loop.debug.twoWayMediaTelemetry", false);
user_pref("loop.contextInConversations.enabled", false);
user_pref("loop.gettingStarted.url", "");
user_pref("loop.learnMoreUrl", "");
user_pref("loop.legal.ToS_url", "");
user_pref("loop.legal.privacy_url", "");
user_pref("loop.support_url", "");
// Отключает появляющееся раз в 6 месяцев окно с предложением оставить отзыв о работе Hello.
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/components/loop/content/js/conversationAppStore.js#l54
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/browser/components/loop/content/js/conversation.js#l47
// 2015-11-04, 00:00 UTC
user_pref("loop.feedback.dateLastSeenSec", 1446595200);
// 20 лет
user_pref("loop.feedback.periodSec", 630720000);
user_pref("loop.feedback.formURL", "");
user_pref("loop.feedback.manualFormURL", "");
// https://hg.mozilla.org/releases/mozilla-release/file/5b66df4523cf/browser/components/loop/modules/LoopRooms.jsm#l198
user_pref("loop.linkClicker.url", "");
user_pref("loop.facebook.shareUrl", "");
user_pref("loop.facebook.appId", "");
user_pref("loop.facebook.enabled", false);
user_pref("loop.facebook.fallbackUrl", "");
user_pref("loop.conversationPopOut.enabled", false);
// Отключает отправку в Google Analytics доменов тех ссылок, которые были заданы в теме дискуссии
// при создании room в Hello ("context URL"[1]). Отправляются только домены из белого списка[2].
// https://bugzilla.mozilla.org/show_bug.cgi?id=1211542
// https://bugzilla.mozilla.org/show_bug.cgi?id=1261467
// https://hg.mozilla.org/releases/mozilla-release/file/970d0cf1c5d9/browser/extensions/loop/chrome/content/modules/LoopRooms.jsm#l975
// [1]: https://wiki.mozilla.org/Loop/Architecture/Context
// [2]: https://hg.mozilla.org/releases/mozilla-release/file/4f87a2517f36/browser/extensions/loop/chrome/content/modules/DomainWhitelist.jsm#l17
user_pref("loop.logDomains", false);
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/extensions/loop/bootstrap.js#l392
user_pref("loop.copy.showLimit", 0);
user_pref("loop.copy.shown", true);
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/extensions/loop/bootstrap.js#l1226
user_pref("loop.copy.throttler", "");
// https://hg.mozilla.org/releases/mozilla-release/file/b0310cb90fd0/browser/extensions/loop/bootstrap.js#l1285
user_pref("loop.copy.ticket", 255);

// Отключает FlyWeb - новый системный аддон, предназначенный для взаимодействия с IoT-устройствами.
// (В Firefox 49 присутствуют только некоторые части дополнения.)
// https://wiki.mozilla.org/FlyWeb
// https://www.ghacks.net/2016/07/26/firefox-flyweb/
// https://www.reddit.com/r/firefox/comments/4uwd1n/flyweb_we_dont_need_no_stinking_iot_apps/
// https://hg.mozilla.org/releases/mozilla-release/rev/576019c74103
// https://hg.mozilla.org/releases/mozilla-release/file/8dc18bf5abac/browser/extensions/flyweb/bootstrap.js#l36
user_pref("dom.flyweb.enabled", false);

// Отключает поддержку Encrypted Media Extensions (DRM для HTML5-видео). Рекомендуется
// устанавливать EME-free билды Firefox, не содержащие этих модулей. Скачать их можно здесь:
// https://ftp.mozilla.org/pub/firefox/releases/
// https://wiki.mozilla.org/Media/EME
// https://hg.mozilla.org/releases/mozilla-release/file/04a6cd9d45f9/dom/media/eme/MediaKeySystemAccessManager.cpp#l100
// https://hg.mozilla.org/releases/mozilla-release/file/8634f32770f9/dom/media/MediaPrefs.h#l79
// https://hg.mozilla.org/releases/mozilla-release/file/b9fd9efbcd9b/toolkit/mozapps/extensions/internal/GMPProvider.jsm#l191
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
// Отключает предложения включить EME.
// https://hg.mozilla.org/releases/mozilla-release/file/11b64780a7f5/browser/base/content/browser-media.js#l63
// https://hg.mozilla.org/releases/mozilla-release/file/11b64780a7f5/browser/base/content/browser-media.js#l7
user_pref("browser.eme.ui.enabled", false);
// Content Decryption Modules
// https://hg.mozilla.org/releases/mozilla-release/file/8e7e1a4f3520/browser/app/profile/firefox.js#l1300
// https://hg.mozilla.org/releases/mozilla-release/file/7b8879ab0e02/dom/media/eme/MediaKeySystemAccess.cpp#l259
// https://hg.mozilla.org/releases/mozilla-release/file/f948c66393c4/toolkit/modules/GMPUtils.jsm
// https://hg.mozilla.org/releases/mozilla-release/file/b9fd9efbcd9b/toolkit/mozapps/extensions/internal/GMPProvider.jsm#l199
// https://hg.mozilla.org/releases/mozilla-release/file/11b64780a7f5/browser/base/content/browser-media.js#l63
// https://hg.mozilla.org/releases/mozilla-release/file/11b64780a7f5/browser/base/content/browser-media.js#l34
// Adobe Primetime
user_pref("media.gmp-eme-adobe.visible", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.gmp-eme-adobe.autoupdate", false);
// Google Widevine
// https://blog.mozilla.org/futurereleases/2016/04/08/mozilla-to-test-widevine-cdm-in-firefox-nightly/
// https://wiki.mozilla.org/QA/Widevine_CDM
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288580
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);

// Отключает загрузку бинарника H.264-кодека от Cisco (будет использоваться GStreamer).
// https://hg.mozilla.org/releases/mozilla-esr38/file/0f8338121472/toolkit/modules/GMPUtils.jsm#l70
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_openh264-codec
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
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
// 2015-07-24, 00:00 UTC
user_pref("media.gmp-manager.lastCheck", 1437696000);
// 20 лет
user_pref("media.gmp-manager.secondsBetweenChecks", 630720000);

// Полностью отключает WebIDE, убирает его кнопку и из меню Developer Tools.
// https://trac.torproject.org/projects/tor/ticket/16222#comment:10
user_pref("devtools.webide.enabled", false);
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
// https://hg.mozilla.org/releases/mozilla-release/file/3dcde73ca237dd579e1599f635f3cc994afc1346/modules/libpref/init/all.js#l875
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);
// Разрешает сетевую отладку только через loopback-интерфейс и только после подтверждения.
// https://hg.mozilla.org/releases/mozilla-release/file/3dcde73ca237dd579e1599f635f3cc994afc1346/modules/libpref/init/all.js#l886
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.prompt-connection", true);

// Отключает звук затвора фотоаппарата при снятии скриншота в через Developer Tools.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1257913
// https://hg.mozilla.org/releases/mozilla-release/rev/e54021050e77
// https://bugzilla.mozilla.org/show_bug.cgi?id=1325553
// https://hg.mozilla.org/releases/mozilla-release/rev/47ead489b52e
user_pref("devtools.screenshot.audio.enabled", false);

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
// http://kb.mozillazine.org/Issues_related_to_plugins#Plugin_location
user_pref("plugins.load_appdir_plugins", false);
// https://support.mozilla.org/en-US/questions/833109
user_pref("plugins.update.url", "");
// Запрещает яваскриптам обращаться к плагинам.
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

// Отключает встроенный просмотрщик PDF, в котором частенько находят уязвимости.
// https://habrahabr.ru/company/eset/blog/264619/
// https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
// https://news.ycombinator.com/item?id=10021376
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableWebGL", false);

// Отключает CSS Font Loading API, предназначенный для динамической подгрузки шрифтов из скриптов.
// https://developer.mozilla.org/en-US/docs/Web/API/CSSFontLoading_API
// https://drafts.csswg.org/css-font-loading/
user_pref("layout.css.font-loading-api.enabled", false);

// Отключает Offline App Cache.
// Демо можно посмотреть тут: http://appcache.offline.technology/demo/index.html мониторя
// использование через about:cache -> appcache и меняя настройки.
// https://www.w3.org/TR/offline-webapps/
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

// Отключает Service Worker API, позволяющее сайтам запускать скрипты, которые могут заниматься
// различной сомнительной самодеятельностью (примеры по ссылкам ниже) в фоновом режиме, даже
// если у пользователя не открыто ни одной вкладки этого сайта.
// Посмотреть и удалить установленные сайтами Service Workers можно через about:serviceworkers
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#Other_use_case_ideas
// https://github.com/slightlyoff/ServiceWorker
// https://serviceworke.rs/
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.serviceWorkers.interception.enabled", false);
user_pref("dom.serviceWorkers.interception.opaque.enabled", false);
user_pref("dom.serviceWorkers.openWindow.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/file/7eabe4d30cde/modules/libpref/init/all.js#l163
// https://hg.mozilla.org/releases/mozilla-release/file/7eabe4d30cde/dom/workers/ServiceWorkerManager.cpp#l2593
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

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
// https://www.w3.org/TR/service-workers/#cache-objects
user_pref("dom.caches.enabled", false);

// Отключает [пока еще находящийся в разработке] Device Storage API, который позволит
// веб-страницам получать доступ к ФС и самопроизвольно читать файлы пользователя или писать в них.
// https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/
// https://wiki.mozilla.org/WebAPI/DeviceStorageAPI
// https://hg.mozilla.org/releases/mozilla-release/file/5b66df4523cf/modules/libpref/init/all.js#l4342
user_pref("device.storage.enabled", false);

// Отключает File Handle API который используется совместно с Indexed DB или Device Storage и
// предоставляет доступ к более низкоуровневым файловым операциям.
// https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/
// https://wiki.mozilla.org/WebAPI/FileHandleAPI
user_pref("dom.fileHandle.enabled", false);

// Отключает Storage API - еще один способ для сайтов хранить свои данные на ПК пользователя.
// Включено пока только в Nightly: https://bugzilla.mozilla.org/show_bug.cgi?id=1304966
// https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
// https://storage.spec.whatwg.org/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1254428
// https://hg.mozilla.org/releases/mozilla-release/file/a67a1682be8f0327435aaa2f417154330eff0017/dom/quota/StorageManager.cpp#l340
// https://hg.mozilla.org/releases/mozilla-release/file/a67a1682be8f0327435aaa2f417154330eff0017/dom/workers/WorkerPrefs.h#l36
user_pref("dom.storageManager.enabled", false);
// https://hg.mozilla.org/releases/mozilla-release/rev/e2e6505f3fc0
user_pref("browser.storageManager.enabled", false);

// Запрещает расширение WebGL, позволяющее узнать модель видеокарты пользователя и ее драйвер.
// https://www.mail-archive.com/dev-platform@lists.mozilla.org/msg14121.html
// https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
// https://hg.mozilla.org/releases/mozilla-beta/file/8cf5636886f0/dom/canvas/WebGLContextState.cpp#l195
// https://hg.mozilla.org/releases/mozilla-beta/file/8cf5636886f0/dom/canvas/WebGLContextExtensions.cpp#l99
// Переменовано в Firefox 42:
// https://hg.mozilla.org/releases/mozilla-beta/file/00bcc10b3bdc/dom/canvas/WebGLContextExtensions.cpp#l99
user_pref("webgl.enable-debug-renderer-info", false);

// Отключает WebAudio API, который может быть использован для фингерпринтинга.
// https://geektimes.ru/post/284604
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
// https://hg.mozilla.org/releases/mozilla-release/rev/2e3e036ccb2a
user_pref("dom.webaudio.enabled", false);

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
// DOM - с четырьмя "r", настройки Firefox кроме двух нижних - с тремя "r", две - с четырьмя.
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
// (Firefox 52+) Позволяет контролировать trimming policy только для кросс-доменных запросов.
// Если значения trimmingPolicy и XOriginTrimmingPolicy не совпадают, будет выбираться наибольшее.
// "0=full URI, 1=scheme+host+port+path, 2=scheme+host+port"
// https://hg.mozilla.org/releases/mozilla-release/rev/f90f136b1d03
// https://bugzilla.mozilla.org/show_bug.cgi?id=1307596
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
// "Controls whether we send HTTPS referres to other HTTPS sites. By default this is enabled for
// compatibility (see bug 141641)"
user_pref("network.http.sendSecureXSiteReferrer", true);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1223838#c31
user_pref("network.http.enablePerElementReferrer", false);
// 0=no referrer, 1=same origin, 2=strict-origin-when-cross-origin,
// 3=no-referre-when-downgrade(default)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1304623
// https://hg.mozilla.org/releases/mozilla-release/rev/73d0bfecc06b
user_pref("network.http.referer.userControlPolicy", 3);

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
