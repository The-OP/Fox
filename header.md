# Tor Browser as Default

* **Шапка**
  * [FAQ](header.md#user-content-faq)
  * [Аддоны](header.md#user-content-Аддоны)
* [Приложение](addendum.md)
  * [Настройки about:config](addendum.md#user-content-Настройки-aboutconfig)
  * [Продвинутые аддоны](addendum.md#user-content-Продвинутые-аддоны)
  * [Интересные ссылки](addendum.md#user-content-Интересные-ссылки)
    * [Безопасность](addendum.md#user-content-Безопасность)
    * [Приватность](addendum.md#user-content-Приватность)
* [Серый список аддонов](greylist.md)

## Предисловие

Цель данного проекта - настройка Tor Browser для повседневного использования, когда максимальная анонимность не нужна, достаточно приватности.

## FAQ
<sub>Настройки меняются через `about:config`.</sub>

1. **Q:** Как запустить Tor Browser без Tor? <br>
**A:** Добавить в профиль (`Browser/TorBrowser/Data/Browser/profile.default`) файл `user.js` со строкой `user_pref("extensions.torlauncher.start_tor", false);`. Затем запустить TB, зайти в *Add-ons* и отключить Torbutton и Tor Launcher. После этого в *Preferences* поменять прокси.

1. **Q:** Тормозит видео на YouTube в высоких разрешениях. <br>
**A:** Кодек VP9 требует мощного процессора. Может помочь отключение `media.mediasource.webm.enabled` - тогда видео будут отдаваться в H.264. Отключение этой настройки не сломает обычные WebM.

1. **Q:** Как запретить проигрывание HTML5-медиа в фоновой вкладке? <br>
**A:** `media.block-autoplay-until-in-foreground -> true` <br>
Проигрывание начнется при первом переключении на вкладку с открытым видео или аудио.

1. **Q:** Как отключить предупреждение при переходе сайта в полноэкранный режим? <br>
**A:** `full-screen-api.warning.timeout -> 0`

1. **Q:** Как отключить анимацию затемнения при переходе сайта в полноэкранный режим? <br>
**A:** `full-screen-api.transition.timeout -> 0` <br>
`full-screen-api.transition-duration.enter -> "0 0"` (без кавычек) <br>
`full-screen-api.transition-duration.leave -> "0 0"` (без кавычек)

1. **Q:** Как искать в разных поисковиках через адресную строку? <br>
**A:** Используя префиксы-кейворды (g Google, w Wikipedia, etc), настраивающиеся в Preferences -> Search даблкликом по ячейкам второй колонки.

1. **Q:** Как отключить беспрефиксный поиск в поисковике по умолчанию через адресную строку? <br>
**A:** `keyword.enabled -> false`

1. **Q:** Как отключить кнопки поисковиков в выпадающем списке под адресной строкой? <br>
**A:** `browser.urlbar.oneOffSearches -> false`

1. **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается по вкусу. Другие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

1. **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать кнопку скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее: `devtools.command-button-screenshot.enabled -> true`. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

1. **Q:** Как уменьшить ширину вкладки, чтобы меньше их прокручивать? <br>
**A:** При помощи [UserCSS](https://www.ghacks.net/2011/02/02/change-firefoxs-minimum-maximum-tab-width/).

1. **Q:** Как вернуть старую поисковую строку/старый диалог настроек браузера? <br>
**A:** Воспользоваться [Classic Theme Restorer](https://addons.mozilla.org/en-US/firefox/addon/classicthemerestorer/) или [пользовательским стилем](https://userstyles.org/styles/122214/firefox-search-bar-show-engine-names-firefox-43).

1. **Q:** Как применять свои CSS к интерфейсу браузера? <br>
**A:** Используя [userChrome.css](http://kb.mozillazine.org/UserChrome.css). Подробнее - см. [раздел о стилях](addendum.md#user-content-Пользовательские-стили) в приложении.

1. **Q:** Как иметь отдельные наборы cookies для разных вкладок? <br>
**A:** При помощи [контейнеров](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers), включив все настройки `privacy.userContext.*`. После этого в Customize появится новая кнопка для открытия вкладки в контейнере. Опции контейнеров находятся в Preferences -> Privacy.

1. **Q:** Куда девается старая история браузинга? <br>
**A:** Удаляется для улучшения производительности. Причем история ограничена не давностью, а числом записей, так что активные пользователи браузера могут упереться в лимит раньше. Значение вычисляется, исходя из характеристик ПК, и пишется в настройку `places.history.expiration.transient_current_max_pages`. Если вы считаете, что оно слишком низкое, можно установить значение вручную, но в **другой** настройке: `places.history.expiration.max_pages`. Подробнее: [статья](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Places/Places_Expiration), [настройка](https://hg.mozilla.org/releases/mozilla-release/file/3702966a64c80e17d01f613b0a464f92695524fc/toolkit/components/places/nsPlacesExpiration.js#l44), [сам алгоритм](https://hg.mozilla.org/releases/mozilla-release/file/3702966a64c80e17d01f613b0a464f92695524fc/toolkit/components/places/nsPlacesExpiration.js#l715).

#### Профили
Tor Browser сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Tor Browser. Для этого достаточно распаковать копии TB в разные каталоги.

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

#### Сессии
Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки. Хранится в профиле в файле `sessionstore.js` и папке `sessionstore-backups`, в которой находится текущая и предыдущая сессии, а также автобэкапы, сделанные при апгрейде браузера. <br>
<sub>Если вы все же потеряли вкладки и забыли про бэкап, можно попробовать их восстановить, копируя при выключенном браузере каждый файл из `sessionstore-backups` (сначала те, что новее, начиная с `previous.js`) в `sessionstore.js` в профиле, запуская и проверяя.</sub>

## Аддоны
<sub>`E10S` - совместимые с Electrolysis расширения. <br>
<s>`E10S`</s> - не совместимые, либо работающие через прослойку для совместимости (interposition). <br>
`WE` - Web Extensions, совместимы с E10S. <br>
`WE, E10S` - есть как Web Extension, так и старая версия расширения, которую можно использовать на Tor Browser 7.
</sub>

* [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
<sup>WE, E10S</sup>
Быстрая и легковесная баннерорезка. Поддерживает подписки ABP, но потребляет значительно меньше процессорного времени и памяти. Подписки включаются в настройках (обычно достаточно EasyList и RU AdList). Element picker, облегчающий создание своих фильтров, уже встроен.

	* <sub>Согласно [исследованию Стэнфорда](https://cyberlaw.stanford.edu/blog/2011/09/tracking-trackers-self-help-tools), баннерорезка с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>[uBlock Origin vs uBlock](greylist.md#user-content-ublock)</sub>
	* <sub>[Почему не Adblock Plus?](greylist.md#user-content-adblock-plus)</sub>

* [AdNauseam](https://addons.mozilla.org/en-US/firefox/addon/adnauseam/)
<sup>WE, E10S</sup>
Форк uBlock, портящий рекламным компаниям статистику путем автоматического "кликания" по всем скрываемым баннерам. По заявлениям разработчиков, это создает помехи желающим отслеживать пользователей.

* [Add Bookmark Here 2](https://addons.mozilla.org/en-US/firefox/addon/add-bookmark-here-2/)
<sup>E10S</sup>
Решает [проблему](https://bugzilla.mozilla.org/show_bug.cgi?id=423617) с запоминанием папки для добавления закладок по умолчанию и обладает несколькими другими улучшающими работу с закладками функциями.

* [Classic Theme Restorer](https://addons.mozilla.org/en-US/firefox/addon/classicthemerestorer/)
<sup>E10S</sup>
Для нелюбителей Australis, и для тех, кто хочет вернуть старый внешний вид Лиса.

* [Enable Right Click and Copy](https://addons.mozilla.org/en-US/firefox/addon/enable-rightclick-and-copy/)
<sup>WE</sup>
Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [ff2mpv](https://addons.mozilla.org/en-US/firefox/addon/ff2mpv/)
<sup>WE</sup>
Проигрывание видео при помощи связки из [mpv](https://github.com/mpv-player/mpv/) и [youtube-dl](https://github.com/rg3/youtube-dl) вместо принадлежащего сайту HTML5/Flash-плеера. [Список поддерживаемых сайтов](https://github.com/rg3/youtube-dl/blob/master/docs/supportedsites.md).

	* Web Extensions не могут запускать приложения напрямую, поэтому требуется однократная ручная установка скрипта-хелпера для аддона. Инструкция и сам хелпер [тут](https://github.com/woodruffw/ff2mpv).

* [FireGestures](https://addons.mozilla.org/en-US/firefox/addon/firegestures/)
<sup>E10S</sup>
Жесты мышью, мышиными кнопками, колесом и т.п. На жесты можно вешать свои [XPCOM-скрипты](http://www.xuldev.org/firegestures/makescripts.php), как в Custom Buttons.

* [Foxy Gestures](https://addons.mozilla.org/en-US/firefox/addon/foxy-gestures/)
<sup>WE</sup>
Наследник FireGestures. Поддерживает установку на жесты юзерскриптов, которым дается доступ к Web Extensions API.

* [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
<sup>WE, E10S</sup>
Всем известный движок для запуска UserJS. Ссылки на репозитории скриптов [здесь](https://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

	* [Google Image Search Context Menu](https://greasyfork.org/en/scripts/20-google-image-search-context-menu). Поиск по изображениям в Google.

* [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
<sup>WE</sup>
Альтернативный движок для запуска UserJS.

* [Image Search Options](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/)
<sup>WE, E10S</sup>
Поиск картинок. Поддерживает как передачу ссылки на картинку поисковику, так и закачку туда самой картинки, что полезно для защищенных от хотлинкинга сайтов. После установки нужно импортировать обновленный список поисковиков с сайта автора (инструкция на странице аддона).

* [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
<sup>WE, E10S</sup>
Меняет содержимое новой вкладки.

* [Open Tabs Next to Current](https://addons.mozilla.org/en-US/firefox/addon/open-tabs-next-to-current/)
<sup>WE, E10S</sup>
Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей.

* [ScrapBook X](https://addons.mozilla.org/en-US/firefox/addon/scrapbook-x/)
<sup><s>E10S</s></sup>
Удобное дополнение для сохранения веб-страниц и создания заметок. Обладает значительно расширенной функциональностью по сравнению с оригинальным ScrapBook.

* [Web ScrapBook](https://addons.mozilla.org/en-US/firefox/addon/web-scrapbook/)
<sup>WE</sup>
Наследник ScrapBook X от того же автора на Web Extensions.

* [Session Manager](https://addons.mozilla.org/en-US/firefox/addon/session-manager/)
<sup>E10S</sup>
Менеджер сессий.

* [StylRRR](https://addons.mozilla.org/en-US/firefox/addon/stylrrr/)
<sup>E10S</sup>
Меняет внешний вид сайтов и самого браузера согласно UserCSS. Поддерживает установку стилей с [Userstyles.org](https://userstyles.org) (см. скриншоты на AMO), но не их автообновление. Также см. [раздел о стилях](addendum.md#user-content-Пользовательские-стили) в приложении.

	* **ВАЖНО:** Обязательно читайте стили перед установкой. Вставив запрещенное на Userstyles.org свойство **-moz-binding** в стиль, [можно выполнить JS-код на компьютере пользователя](addendum.md#user-content-Опасность-юзерстилей-с--moz-binding).

	* <sub>[Почему не Stylish?](greylist.md#user-content-stylish)</sub>

* [Tab counter](https://addons.mozilla.org/en-US/firefox/addon/tabcounter-1/)
<sup>WE</sup>
Показывает количество открытых вкладок.

* [Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/tab-groups-panorama/)
<sup>E10S</sup>
Панорама вкладок.

* [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/)
<sup>WE, E10S</sup>
Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на широкоформатных мониторах. Для тех, кто хочет открывать больше 3.5 вкладок и удобно управлять ими.

	* Полезные юзерстили к TST v2.x (WE), в том числе стиль для скрытия родных браузерных вкладок сверху, можно найти в [вики TST](https://github.com/piroor/treestyletab/wiki/Code-snippets-for-custom-style-rules). Версии 0.x рекомендуется использовать вместе с [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

* [Multiple Tab Handler](https://addons.mozilla.org/en-US/firefox/addon/multiple-tab-handler/)
<sup>WE, E10S</sup>
Позволяет выделять несколько вкладок и производить с ними разные операции: перемещать, группировать, добавлять в закладки, копировать URL, etc. Полностью совместим с TST.

* [Vertical Toolbar](https://addons.mozilla.org/en-US/firefox/addon/vertical-toolbar/)
<sup>E10S</sup>
Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/en-US/firefox/addon/yet-another-smooth-scrolling/)
<sup>E10S</sup>
Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

* [Zoom Page WE](https://addons.mozilla.org/en-US/firefox/addon/zoom-page-we/)
<sup>WE</sup>
Позволяет масштабировать страницы с произвольным шагом вместо изкоробочных ±10%, задавать масштаб по умолчанию, а также обладает другими полезными функциями.

* [Русский словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/russian-spellchecking-dic-3703/)

* [Английский словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/united-states-english-spellche/)

* [Объединенный словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/unified-russian-english-spell/). Содержит русские и английские слова, что избавляет от необходимости переключать текущий язык в спеллчекере.

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером чтобы понять, чего именно вам будет не хватать, и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то, вероятно, вы установили кучу сторонних аддонов, стилей, скриптов, и некоторые из них друг с другом конфликтуют. Отключайте по очереди, чтобы найти виновника.
