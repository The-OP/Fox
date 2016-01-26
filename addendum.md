# Приложение

* [Шапка](header.md)
  * [FAQ](header.md#user-content-faq)
  * [Аддоны](header.md#user-content-Аддоны)
* **Приложение**
  * [Настройки about:config](addendum.md#user-content-Настройки-aboutconfig)
  * [Продвинутые аддоны](addendum.md#user-content-Продвинутые-аддоны)
  * [Интересные ссылки](addendum.md#user-content-Интересные-ссылки)

Эта часть для тех, кто хочет настроить свой браузер еще больше. Настройки для повышения удобства, производительности, безопасности и отключения различных зондов, полезные аддоны, интересные ссылки и т.п.

**Важное замечание**: Это памятка с интересными настройками и аддонами. Здесь пока (?) нет готового рецепта для максимальной анонимности. Если вы пришли за этим, проследуйте [сюда](https://anonymous-proxy-servers.net/en/jondofox.html) или [сюда](https://www.torproject.org/).

<sub>Стандартный дисклеймер раз: я включил краткие пояснения к каждой настройке и аддону, но если вы четко не понимаете за что они отвечают и что у вас может отвалиться в результате их установки, лучше не трогайте.</sub>

<sub>Стандартный дисклеймер два: следует помнить, что меры для достижения анонимности и безопасности зачастую противоположны друг другу, ибо чем больше вы меняете дефолтное поведение браузера и отключаете включенных по умолчанию механизмов, тем уникальнее становится его отпечаток. Если в приоритете именно анонимность, а не безопасность с анонимностью по остаточному принципу, многие зонды лучше не выключать, а скармливать им ложную информацию, маскирующую вас под типичного юзера. Думайте сами, что вам нужнее.</sub>

## Настройки about:config
Поддерживаемые на данный момент версии Firefox: **38.2.0 - 44**. <br>
<sub>Присутствуют некоторые настройки и для следующих версий, но далеко не все.</sub>

Приведенные здесь настройки условно разделены на следующие категории:

1. [Настройки](prefs/prefs_1.js) относительно безопасные - меняя их, ничего нужного не отвалится, и кое-что улучшится.
2. [Настройки](prefs/prefs_2.js), ломающие не особо нужную функциональность.
3. [Настройки](prefs/prefs_3.js), ломающие нужную некоторым функциональность.
4. [Настройки](prefs/prefs_4.js), еще больше ломающие функциональность. Их отключают либо для повышения безопасности, либо для повышения анонимности. А также все, что не подошло в первые три категории.
5. [Настройки](prefs/prefs_exp.js) для энтузиастов. Ничего особо не ломают, но рассчитаны на тех, кто использует браузер нетривиальными способами.

**Не следует** бездумно копировать себе все целиком из четвертой категории. Внимательно посмотрите и решите, что именно вам нужно. Из второй - можно, но все же рекомендуется прочитать перед этим.

Применить эти настройки можно, дописав их в конец находящегося в профиле `prefs.js`, либо создав там же файл `user.js` и записав их в него. Но не забудьте, что вы это сделали, потому что записанные в `user.js` настройки будут откатываться на указанные там значения при каждом перезапуске браузера, даже если вы меняли их другими способами (about:config, Preferences, etc). Подробнее [здесь](http://kb.mozillazine.org/User.js_file).

Кроме того, `user.js` можно (и нужно) создавать в еще ни разу не запускавшемся профиле. Т.е.: создаем профиль в Profile Manager, но **не** нажимаем Start Firefox, когда профиль уже создан. Идем в пустую папку свежесозданного профиля и записываем туда `user.js` с нужными настройками. Он применится при запуске и в результате у вас с самого начала не будет никаких нежелательных соединений и загрузок вроде БД Safebrowsing, OpenH264-кодека и т.п.

##### Список ломающихся от применения настроек сайтов

* Спуфинг реферера -- Avito.ru (показ телефонов).
* `dom.event.clipboardevents.enabled` -- GitHub (копирование текста из редактора).
* `security.ssl.require_safe_negotiation` -- Instagram, многие другие.
* `dom.indexedDB.enabled` -- Twitter.

## Продвинутые аддоны
* [HTTPS Everywhere](https://addons.mozilla.org/en-us/firefox/addon/https-everywhere/). Содержит список сайтов, поддерживающих как HTTP, так HTTPS, и автоматически меняет все HTTP-ссылки, ведущие к этим сайтам, на HTTPS. Аддон вернули на AMO, но на всякий случай - [ссылка](https://www.eff.org/https-everywhere/) на официальный сайт. Правила обновляются редко, актуальную версию правил можно получить [на GitHub](https://github.com/EFForg/https-everywhere), там же можно отправить новое правило.

* [SSleuth](https://addons.mozilla.org/en-US/firefox/addon/ssleuth/) ([GitHub](https://github.com/sibiantony/ssleuth)). Показывает информацию об используемых криптопримитивах и фичах TLS/SSL в шифрованных соединениях.

* [RefControl](https://addons.mozilla.org/firefox/addon/refcontrol/). Резалка [рефереров](https://en.wikipedia.org/wiki/HTTP_Referer). Можно тонко тюнить, а можно рубить только рефереры при переходе на другой домен (Block (3rd party)), оставляя внутридоменные, что просто, эффективно для 99% случаев и не ломает так много сайтов как полный запрет.

* [CleanLinks](https://addons.mozilla.org/firefox/addon/clean-links/). Чистит ссылки от редирект-префиксов Гугла и т.п. Имеет белый список как доменов, так и рэгэкспов, чтобы пропускать ссылки со всякими нужными префиксами вроде auth, ServiceLogin и т.п.

* [Google search link fix](https://addons.mozilla.org/en-US/firefox/addon/google-search-link-fix/). Более простая альтернатива CleanLinks для тех, кого он по каким-то причинам не устраивает. Работает только на Google, Yandex и Yahoo.

* [Cookie Controller](https://addons.mozilla.org/firefox/addon/cookie-controller/). Менее удобная чем Cookie Monster штука, но можно использовать на случай длительного затишья в поддержке первого (такое уже бывало).

* [Self-Destructing Cookies](https://addons.mozilla.org/firefox/addon/self-destructing-cookies/). Самоуничтожение кук после закрытия всех вкладок с соответствующим сайтом. Может быть удобнее чем полная блокировка.

* [BetterPrivacy](https://addons.mozilla.org/firefox/addon/betterprivacy/). Менее актуально с понижением числа пользователей Flash, но все же. Уничтожает [LSO](https://en.wikipedia.org/wiki/Local_shared_object), которые не может заблокировать или уничтожить сам браузер.

* [RequestPolicy](https://addons.mozilla.org/firefox/addon/requestpolicy/). Резалка кросс-доменных запросов. Более надежная, но уже не обновляющаяся. Можно (и рекомендуется самим автором) использовать в связке с NoScript.

	* [RequestPolicy Continued](https://requestpolicycontinued.github.io). Форк проекта, в котором идет дальнейшее развитие.

* [Policeman](https://addons.mozilla.org/firefox/addon/policeman/). Еще одна резалка кросс-доменных запросов. Более удобная, более фичастая и активно развивающаяся. Но пока есть некоторые шероховатости, например с file -> file и file -> web. Из фич, которые есть в RequestPolicy, тут нет Request Log (решается сторонними аддонами вроде HttpFox) и блокировки редиректов с домена на домен, если они не в белом списке (решается NoRedirect в некотором роде, но менее удобно). **UPD:** Блокировку редиректов запилили в 0.19 версии, ждем на AMO. **UPD:** К сожалению, похоже что аддон прекратил развиваться.

* [uMatrix](https://addons.mozilla.org/firefox/addon/umatrix/). Самая многофункциональная из резалок кросс-доменных запросов. Как и Policeman может блокировать запросы в зависимости от типа контента, но обладает более удобным интерфейсом. Также умеет блокировать XHR (отдельно от обычных запросов), скрипты, куки, рефереры, плагины, медиа (HTML5 аудио и видео) и вебсокеты ([только на Firefox](https://code.google.com/p/chromium/issues/detail?id=129353)). Документацию еще не перенесли целиком из старого проекта, на котором основан uMatrix, так что если что непонятно, смотреть не только [здесь](https://github.com/gorhill/uMatrix/wiki), но и [здесь](https://github.com/gorhill/httpswitchboard/wiki).

	* <sub>Алгоритм блокирования кук несколько отличается от того, что у Cookie Monster и Cookie Controller - первые два не дают сайтам устанавливать куки, а uMatrix дает ставить, но не дает читать, убирая из всех HTTP-запросов заголовок Cookie (но при этом через document.cookie установленные куки все еще видны), а через некоторое время - подчищает. Также в отличие от CM/CC, uMatrix не умеет запрещать писать в DOM Storage, а может только периодически его очищать.</sub>

* [NoRedirect](https://addons.mozilla.org/firefox/addon/noredirect/). Рубит редиректы по рэгэкспам исходного или целевого URL.

* [HttpFox](https://addons.mozilla.org/firefox/addon/httpfox/). Мониторит все HTTP-запросы браузера. Показывает заголовки, параметры GET/POST и статус запроса (в т.ч. был ли он выполнен, взят из кэша, или отменен (NS_BINDING_ABORTED) самим браузером/другим аддоном).

* [User Agent Switcher](https://addons.mozilla.org/firefox/addon/user-agent-switcher/) и [списки к нему](http://techpatterns.com/downloads/firefox/useragentswitcher.xml).

* [Random Agent Spoofer](https://addons.mozilla.org/firefox/addon/random-agent-spoofer/). Меняет юзер-агенты по таймеру и с дополнительными фичами, препятствующими фингерпринтингу. Версия с GitHub имеет расширенную функциональность по сравнению с версией с AMO (см. описание на AMO).

* [HTTP UserAgent Cleaner](http://fxprivacy.8vs.ru/). Еще один продвинутый аддон для противодействия фингерпринтингу. Позволяет не только менять юзер-агент, но и заблокировать другие каналы утечки опознавательной информации. Аддон убрали с AMO.

* [Privacy Badger](https://addons.mozilla.org/firefox/addon/privacy-badger-firefox/). Аналог Ghostery от EFF. Актуально для тех, кто хочет поставить и забыть, чтоб оно там автоматом боролось с трекингом.

	* <sub>Часто спрашивают, чем плох Ghostery. Во-первых, он принадлежит маркетинговой компании, собирающей [статистику](https://addons.mozilla.org/en-US/firefox/addon/ghostery/privacy/) с wannabe-анонимусов. Во-вторых - распространяется под [проприетарной лицензией](https://addons.mozilla.org/en-US/firefox/addon/ghostery/license/5.4.1). Но самое главное то, что он бесполезен, если уже используется баннерорезка с анти-трекерными подписками и какой-нибудь аддон для контроля/очистки кук. См. [исследование Стэнфорда](http://cyberlaw.stanford.edu/node/6730), сравнивающее баннерорезки с Ghostery по эффективности. Если уж вам очень сильно хочется автоматического все-в-одном комбайна, подобного Ghostery - используйте Privacy Badger от Electronic Frontier Foundation, распространяющийся под свободной лицензией.</sub>

* [Yet Another Remove It Permanently](https://addons.mozilla.org/firefox/addon/yarip/). Баннерорезка с поддержкой XPath. Для тех случаев, когда CSS-селекторов не хватает.

## Разное

### Stylish

#### Полезные стили

* [Dim Unloaded Tabs](https://userstyles.org/styles/71928/dim-unloaded-tabs). Затемнение незагруженных после перезапуска браузера вкладок.

#### О написании собственных стилей
Некоторая пригождающаяся информация есть в [Stylish Wiki](https://github.com/JasonBarnabe/stylish/wiki).

Инспектировать элементы интерфейса самого браузера удобно при помощи [Browser Toolbox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Toolbox).

Также, в качестве менее функцональной, но изкоробочной альтернативы Stylish, можно использовать файл [userChome.css](http://kb.mozillazine.org/UserChrome.css).

#### Опасность юзерстилей с -moz-binding
В мозилловском CSS есть специальное предназначенное для использования с XUL свойство [-moz-binding](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-binding), при помощи которого можно привязать к элементу обработчики различных событий. Для CSS веб-страниц вытекающие из этого уязвимости давно закрыли: [bug 324253](https://bugzilla.mozilla.org/show_bug.cgi?id=324253), [bug 379959](https://bugzilla.mozilla.org/show_bug.cgi?id=379959).

Однако стили Stylish могут модифицировать не только страницы сайтов, но и интерфейс Firefox. Поэтому они обладают всеми возможностями стилей самого браузера и аддонов, соответственно, встроенные в них через -moz-binding обработчики выполнятся уже с правами chrome, а не content. При этом код обработчика, который обычно находится по адресу chrome:// для стилей самого браузера, может быть задан и в самом стиле в виде Data URI, так что проверку на same-origin он пройдет успешно. В результате подобные стили представляют из себя не меньшую опасность чем непроверенные аддоны.

Вот, например, самое простое, что можно сделать - поменять настройки прокси в браузере. Биндинг в нижеприведенном стиле меняет их на 127.0.0.1:8888. Работает с указанием namespace XUL и без него (с namespace HTML - не работает).

```
@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);

#main-window {
  -moz-binding: url("data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxiaW5kaW5ncyB4bWxucz0iaHR0cDovL3d3dy5tb3ppbGxhLm9yZy94YmwiCiAgICB4bWxuczp4dWw9Imh0dHA6Ly93d3cubW96aWxsYS5vcmcva2V5bWFzdGVyL2dhdGVrZWVwZXIvdGhlcmUuaXMub25seS54dWwiCiAgICB4bWxuczp4Ymw9Imh0dHA6Ly93d3cubW96aWxsYS5vcmcveGJsIj4KICAgIDxiaW5kaW5nIGlkPSJleHBsb2l0Ij4KICAgICAgICA8aW1wbGVtZW50YXRpb24+CiAgICAgICAgICAgIDxjb25zdHJ1Y3Rvcj4KICAgICAgICAgICAgICAgIC8vIDwhW0NEQVRBWwogICAgICAgICAgICAgICB2YXIgcHJlZnMgPSBDb21wb25lbnRzLmNsYXNzZXNbIkBtb3ppbGxhLm9yZy9wcmVmZXJlbmNlcy1zZXJ2aWNlOzEiXS5nZXRTZXJ2aWNlKENvbXBvbmVudHMuaW50ZXJmYWNlcy5uc0lQcmVmU2VydmljZSkuZ2V0QnJhbmNoKCJuZXR3b3JrLnByb3h5LiIpOwogICAgICAgICAgICAgICBwcmVmcy5zZXRJbnRQcmVmKCJ0eXBlIiwgMSk7CiAgICAgICAgICAgICAgIHByZWZzLnNldENoYXJQcmVmKCJzb2NrcyIsICIxMjcuMC4wLjEiKTsKCSAgICAgICBwcmVmcy5zZXRJbnRQcmVmKCJzb2Nrc19wb3J0IiwgODg4OCk7CiAgICAgICAgICAgICAgICAvLyBdXT4KICAgICAgICAgICAgPC9jb25zdHJ1Y3Rvcj4KICAgICAgICA8L2ltcGxlbWVudGF0aW9uPgogICAgPC9iaW5kaW5nPgo8L2JpbmRpbmdzPgo=");
}
```

Userstyles.org [не пропускает](https://github.com/JasonBarnabe/stylish/issues/159) стили, содержащие свойство -moz-binding, поэтому внимательно проверять нужно только стили, устанавливаемые из  других источников.

## Интересные ссылки
* [Release Notes](https://www.mozilla.org/firefox/notes) и [Developer Release Notes](https://developer.mozilla.org/en-US/Firefox/Releases).
* [Список исправленных уязвимостей](https://www.mozilla.org/en-US/security/known-vulnerabilities/firefox/)
* [Ghacks](http://www.ghacks.net/category/firefox/) - сайт, на котором попадаются неплохие статьи и обзоры грядущих нововведений в Firefox.
* [Здесь](http://kb.mozillazine.org/About:config_entries) и [здесь](http://kb.mozillazine.org/Category:Preferences) приведены подробные описания настроек, жаль, не всех.
* [Описание](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews) процедуры ревью аддонов на AMO.
* [Неплохой обзор от Mozilla](https://support.mozilla.org/en-US/kb/how-stop-firefox-automatically-making-connections) с описаниями механизмов, из-за которых Firefox может инициировать соединения без прямого приказа пользователя. Еще: [соединения](http://kb.mozillazine.org/Connections_established_on_startup_-_Firefox), устанавливающиеся при запуске браузера. Настройки для отключения подобной самодеятельности есть здесь, в разделе "Настройки".
* [user.js -- Firefox hardening stuff](https://github.com/pyllyukko/user.js) - репозиторий настроек вроде этого, но с несколько другим подходом к организации.
* [Блог](https://cat-in-136.github.io/tags.html#tag_pref%20diff) автора аддона Configuration Mania, который выкладывает разницу между дефолтными конфигами предыдущей и новой версии Firefox. **UPD:** Настройки могут меняться и в более поздних бетах, чем там сравниваются, поэтому целиком полагаться на него не стоит.
* [PrivacyTools.io](https://www.privacytools.io) - сайт, посвященный инструментам для обеспечения приватности. Можно предлагать дополнения и улучшения в их [репозитории на GitHub](https://github.com/privacytoolsIO/privacytools.io).
* [Evercookie](http://samy.pl/evercookie/). Собирательное название для техник помещения трекинг-идентификаторов в разные труднодоступные места помимо cookies, LSO и DOM Storage.
* Фингерпринтинг
  * Такие методы обнаружения, для которых не требуется запись уникального идентификатора на машину пользователя.
  * [Обзор](https://wiki.mozilla.org/Fingerprinting) методов фингерпринтинга в Mozilla Wiki и [предложения](https://wiki.mozilla.org/Security/Anonymous_Browsing) по улучшению анонимности браузера.
  * Проверить себя на уникальность отпечатка можно на следующих ресурсах:
    * https://panopticlick.eff.org/
    * http://ip-check.info/
    * https://amiunique.org/
    * http://whoer.net/
    * https://www.browserleaks.com/
    * http://www.browserspy.dk/
  * Статьи по теме:
    * [Как Tor Project борется с фингерпринтингом](https://geektimes.ru/post/244484/) (более свежая [английская версия статьи](https://www.sharelatex.com/github/repos/KOLANICH/Article-2015-Dull-captaincy-or-the-way-Tor-Project-fights-browser-fingerprinting/builds/44e474be624ca3bb65d1b1fbeb95abd1de8c5d13/raw/output.pdf)).
    * [Флаги HSTS и их использование для фингерпринтинга](https://geektimes.ru/post/244065/)
