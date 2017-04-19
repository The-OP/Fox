# Шапка официального лисотреда /s/

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

## FAQ
<sub>Настройки меняются через `about:config`.</sub>

1. **Q:** Проблемы с отрисовкой интерфейса, изображений или видео. Внезапные падения браузера.<br>
**A:** Пробуйте по очереди: <br>
(1) `layers.offmainthreadcomposition.enabled -> false` <br>
(2) `layers.acceleration.disabled -> true` <br>
(3) 1 и 2 вместе.  <br>
Также проблему может решить обновление видеодрайверов либо возврат к более старой версии. Или обновление самого Firefox до беты/откат к ESR.

1. **Q:** Когда будет мультипроцессная версия? <br>
**A**: [План релизов](https://wiki.mozilla.org/Electrolysis#Schedule_and_Status). С 50 версии должно работать из коробки, если все **установленные** (выключенные тоже считаются) расширения совместимы. Также можно попробовать включить вручную: <br>
`browser.tabs.remote.autostart -> true` <br>
`extensions.e10sBlockedByAddons -> false` <br>
`extensions.e10sBlocksEnabling -> false` <br>
Применение требует перезапуска. Проверить работу можно в `about:support -> Multiprocess Windows`. <br>
Если все еще не работает: [`browser.tabs.remote.force-enable -> true`](https://wiki.mozilla.org/Electrolysis#Force_Enable) (не рекомендуется). <br>
`dom.ipc.processCount` регулирует число процессов (высокое значение даст по процессу на вкладку).

1. **Q:** О блокировке неподписанных расширений. <br>
**A:** Начиная с Firefox 48, в официальных релизных и бета-билдах Firefox заблокирована установка не подписанных Mozilla аддонов. Ниже приведены различные решения.
	* Выпускаются специальные [сборки](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds), где требование подписей отключается настройкой `xpinstall.signatures.required -> false`. Firefox ESR тоже не имеет данной проблемы.
	* Есть [хак](addendum.md#user-content-Хак-для-отключения-требования-подписей-аддонов), позволяющий обойти это ограничение даже на официальных сборках.
	* Если вы используете Linux, вероятно, мейнтейнеры вашего дистрибутива уже собрали Firefox без флага обязательного требования подписей, и его можно отключить вышеописанной настройкой.

1. **Q:** Тормозит видео на YouTube в высоких разрешениях. <br>
**A:** Кодек VP9 требует мощного процессора. Может помочь отключение `media.mediasource.webm.enabled` - тогда видео будут отдаваться в H.264. Отключение этой настройки не сломает обычные WebM.

1. **Q:** Как запретить проигрывание HTML5-медиа в фоновой вкладке? <br>
**A:** Firefox до 51: `media.block-play-until-visible -> true` <br>
Firefox 51+: `media.block-autoplay-until-in-foreground -> true` <br>
Проигрывание начнется при первом переключении на вкладку с открытым видео или аудио.

1. **Q:** Как отключить предупреждение при переходе сайта в полноэкранный режим в Firefox 43+? <br>
**A:** `full-screen-api.warning.timeout -> 0`

1. **Q:** Как искать в разных поисковиках через адресную строку? <br>
**A:** Используя префиксы-кейворды (g Google, w Wikipedia, etc), настраивающиеся в Preferences -> Search даблкликом по ячейкам второй колонки.

1. **Q:** Как отключить беспрефиксный поиск в поисковике по умолчанию через адресную строку? <br>
**A:** `keyword.enabled -> false`

1. **Q:** Как вернуть настройку `browser.newtab.url` в Firefox 41+? <br>
**A:** [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)

1. **Q:** Что за специальная тема для разработчиков? <br>
**A:** Тема, использующаяся в Firefox Developer Edition. В Firefox 53+ включается через `about:addons`, на вкладке Appearance. [Аддон](https://addons.mozilla.org/en-US/firefox/addon/devedition-theme-enabler/), включающий ее на более ранних релизах.

1. **Q:** Как копировать ссылки c кириллическим текстом в исходном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** Firefox 45: `network.standard-url.escape-utf8 -> false` <br>
Firefox 53+: `browser.urlbar.decodeURLsOnCopy -> true`

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

#### Профили
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи [`-no-remote -P`](https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options). Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

#### Сессии
Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки. Хранится в профиле в файле `sessionstore.js` и папке `sessionstore-backups`, в которой находится текущая и предыдущая сессии, а также автобэкапы, сделанные при апгрейде браузера. <br>
<sub>Если вы все же потеряли вкладки и забыли про бэкап, можно попробовать их восстановить, копируя при выключенном браузере каждый файл из `sessionstore-backups` (сначала те, что новее, начиная с `previous.js`) в `sessionstore.js` в профиле, запуская и проверяя.</sub>

## Аддоны
<sub>`E10S` - совместимые с Electrolysis расширения, <s>`E10S`</s> - не совместимые, либо работающие через прослойку для совместимости (interposition).<br>
`WE` - Web Extensions, совместимы с E10S.</sub>

* [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
<sup><a href="https://github.com/gorhill/uBlock/blob/master/platform/firefox/install.rdf">E10S</a></sup>
Быстрая и легковесная баннерорезка. Поддерживает подписки ABP, но потребляет значительно меньше процессорного времени и памяти. Подписки включаются в настройках (обычно достаточно EasyList и RU AdList). Element picker, облегчающий создание своих фильтров, уже встроен.

	* <sub>Согласно [исследованию Стэнфорда](https://cyberlaw.stanford.edu/blog/2011/09/tracking-trackers-self-help-tools), баннерорезка с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>[uBlock Origin vs uBlock](greylist.md#user-content-ublock)</sub>
	* <sub>[Почему не Adblock Plus?](greylist.md#user-content-adblock-plus)</sub>

* [AdNauseam](https://addons.mozilla.org/en-US/firefox/addon/adnauseam/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/568407/file/install.rdf">E10S</a></sup>
Форк uBlock, портящий рекламным компаниям статистику путем автоматического "кликания" по всем скрываемым баннерам. По заявлениям разработчиков, это создает помехи желающим отслеживать пользователей.

* [Add Bookmark Here 2](https://addons.mozilla.org/en-US/firefox/addon/add-bookmark-here-2/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/461049/file/install.rdf">E10S</a></sup>
Решает [проблему](https://bugzilla.mozilla.org/show_bug.cgi?id=423617) с запоминанием папки для добавления закладок по умолчанию и обладает несколькими другими улучшающими работу с закладками функциями.

* [Add to Search Bar](https://addons.mozilla.org/en-US/firefox/addon/add-to-search-bar/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/387922/file/install.rdf">E10S</a></s></sup>
Позволяет добавить в поисковую панель Firefox поисковую строку любого сайта.

* [Classic Theme Restorer](https://addons.mozilla.org/en-US/firefox/addon/classicthemerestorer/)
<sup><a href="https://github.com/Aris-t2/ClassicThemeRestorer/blob/master/xpi/install.rdf">E10S</a></sup>
Для нелюбителей Australis, и для тех, кто хочет вернуть старый внешний вид Лиса.

* [Custom Buttons](https://addons.mozilla.org/en-US/firefox/addon/custom-buttons/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/414139/file/install.rdf">E10S</a></s></sup>
Разрешает создавать свои кнопки, исполняющие пользовательские скрипты с правами браузера. Удобно, чтобы не писать целый новый аддон для какой-либо мелкой полезности. Есть много готовых кнопок на [официальном форуме](http://custombuttons.sourceforge.net/forum/) и на [форуме Mozilla Russia](https://forum.mozilla-russia.org/viewforum.php?id=34). **UPDATE:** сломан в Firefox 51+, патчи и исправленный аддон доступны [в неофициальном репозитории](https://github.com/SicVolo/firefox-custom-buttons).
	* **ВАЖНО:** Код кнопок выполняется в контексте браузера, и могут они все то же самое что и расширения (включая полный доступ к ФС). Поэтому лучше ставить только те кнопки, чей код проверен лично вами.

* [Enable Right Click and Copy](https://addons.mozilla.org/en-US/firefox/addon/enable-rightclick-and-copy/)
<sup>WE</sup>
Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [FireGestures](https://addons.mozilla.org/en-US/firefox/addon/firegestures/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/438957/file/install.rdf">E10S</a></sup>
Жесты мышью, мышиными кнопками, колесом и т.п. На жесты можно вешать свои [XPCOM-скрипты](http://www.xuldev.org/firegestures/makescripts.php), как в Custom Buttons.

* [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
<sup><a href="https://github.com/greasemonkey/greasemonkey/blob/master/install.rdf">E10S</a></sup>
Всем известный движок для запуска UserJS. Ссылки на репозитории скриптов [здесь](https://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

	* [Google Image Search Context Menu](https://greasyfork.org/en/scripts/20-google-image-search-context-menu). Поиск по изображениям в Google.

* [Image Search Options](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/)
<sup>E10S</sup>
Поиск картинок. Поддерживает как передачу ссылки на картинку поисковику, так и закачку туда самой картинки, что полезно для защищенных от хотлинкинга сайтов. После установки нужно импортировать обновленный список поисковиков с сайта автора (инструкция на странице аддона).

* [Norwell History Tools](https://addons.mozilla.org/en-US/firefox/addon/norwell/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/298146/file/install.rdf">E10S</a></s></sup>
Аддон значительно повышающий удобство работы с историей.

* [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/541135/file/install.rdf">E10S</a></sup>
Блокировщик JS с возможностью работы в режиме белого или черного списка. Поможет тем, у кого в простое вкладки с тяжелым JS отжирают ресурсы CPU.

	* **ВАЖНО:** См. [информацию о NoScript в сером списке](greylist.md#user-content-noscript).

* [Open Tabs Next to Current](https://addons.mozilla.org/en-US/firefox/addon/open-tabs-next-to-current/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/366060/file/install.rdf">E10S</a></s></sup>
Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей.

* [ScrapBook X](https://addons.mozilla.org/en-US/firefox/addon/scrapbook-x/)
<sup><s><a href="https://github.com/danny0838/firefox-scrapbook/blob/master/install.rdf">E10S</a></s></sup>
Удобное дополнение для сохранения веб-страниц и создания заметок. Обладает значительно расширенной функциональностью по сравнению с оригинальным ScrapBook.

* [Session Manager](https://addons.mozilla.org/en-US/firefox/addon/session-manager/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/581411/file/install.rdf">E10S</a></sup>
Менеджер сессий.

* [SlyZoom](https://addons.mozilla.org/en-US/firefox/addon/slyzoom/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/392208/file/install.rdf">E10S</a></s></sup>
Позволяет масштабировать страницы с произвольным шагом вместо изкоробочных ±10%, а также задавать масштаб по умолчанию на всех страницах.

* [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish/)
<sup><a href="https://github.com/stylish-userstyles/stylish/blob/master/install.rdf">E10S</a></sup>
Меняет внешний вид сайтов и самого браузера согласно UserCSS. [Репозиторий](https://userstyles.org) стилей. Также см. [раздел о Stylish](addendum.md#user-content-stylish) в приложении.

	* **ВАЖНО:** См. [информацию о Stylish в сером списке](greylist.md#user-content-stylish).

	* **ВАЖНО:** Обязательно читайте стили перед установкой. Вставив запрещенное на Userstyles.org свойство **-moz-binding** в стиль Stylish, [можно выполнить JS-код на компьютере пользователя](addendum.md#user-content-Опасность-юзерстилей-с--moz-binding).

* [StylRRR](https://addons.mozilla.org/en-US/firefox/addon/stylrrr/)
<sup><a href="https://addons.mozilla.org/en-US/firefox/files/browse/511362/file/install.rdf">E10S</a></sup>
Альтернатива Stylish. В отличие от последнего, хранит стили в файлах, а не БД. Поддерживает установку стилей с Userstyles.org (см. скриншоты на AMO), но не их автообновление.

* [Tab counter](https://addons.mozilla.org/en-US/firefox/addon/tabcounter-1/)
<sup>WE</sup>
Новый аддон для показа количества открытых вкладок.

* [Tab Counter](https://addons.mozilla.org/en-US/firefox/addon/tab-counter/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/409212/file/install.rdf">E10S</a></s></sup>
Показывает количество открытых вкладок.

* [Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/tab-groups-panorama/)
<sup><a href="https://github.com/Quicksaver/Tab-Groups/blob/master/install.rdf">E10S</a></sup>
Панорама вкладок на замену встроенной в браузер, которую удалили в Firefox 45.

* [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/)
<sup><a href="https://github.com/piroor/treestyletab/blob/master/install.rdf">E10S</a></sup>
Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на широкоформатных мониторах. Для тех, кто хочет открывать больше 3.5 вкладок и удобно управлять ими. Рекомендуется использовать вместе с [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

	* [Multiple Tab Handler](https://addons.mozilla.org/en-US/firefox/addon/multiple-tab-handler/)
	<sup><a href="https://github.com/piroor/multipletab/blob/master/install.rdf">E10S</a></sup>
	Позволяет выделять несколько вкладок и производить с ними разные операции: перемещать, группировать, добавлять в закладки, копировать URL, etc. Полностью совместим с TST.

* [Vertical Toolbar](https://addons.mozilla.org/en-US/firefox/addon/vertical-toolbar/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/420712/file/install.rdf">E10S</a></s></sup>
Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Watch with MPV](https://addons.mozilla.org/en-US/firefox/addon/watch-with-mpv/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/368995/file/install.rdf">E10S</a></s></sup>
Проигрывание видео при помощи связки из [mpv](https://github.com/mpv-player/mpv/) и [youtube-dl](https://github.com/rg3/youtube-dl) вместо принадлежащего сайту HTML5/Flash-плеера. [Список поддерживаемых сайтов](https://github.com/rg3/youtube-dl/blob/master/docs/supportedsites.md).

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/en-US/firefox/addon/yet-another-smooth-scrolling/)
<sup><s><a href="https://addons.mozilla.org/en-US/firefox/files/browse/429884/file/install.rdf">E10S</a></s></sup>
Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

* [Русский словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/russian-spellchecking-dic-3703/)

* [Английский словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/united-states-english-spellche/)

* [Объединенный словарь для проверки правописания](https://addons.mozilla.org/en-US/firefox/addon/unified-russian-english-spell/). Содержит русские и английские слова, что избавляет от необходимости переключать текущий язык в спеллчекере.

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером чтобы понять, чего именно вам будет не хватать, и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то, вероятно, вы установили кучу сторонних аддонов, стилей, скриптов, и некоторые из них друг с другом конфликтуют. Отключайте по очереди, чтобы найти виновника.
