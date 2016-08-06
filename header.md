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

## FAQ
1. **Q:** Проблемы с отрисовкой интерфейса, изображений или видео. Внезапные падения браузера.<br>
**A:** Пробуйте по очереди: <br>
1) `about:config -> layers.offmainthreadcomposition.enabled -> false` <br>
2) `about:config -> layers.acceleration.disabled -> true` <br>
3) 1 и 2 вместе.  <br>
Также проблему может решить обновление видеодрайверов либо возврат к более старой версии. Или обновление самого Firefox до беты/откат к ESR.

1. **Q:** Когда будет мультипроцессная версия? <br>
**A**: [Electrolysis#Schedule_and_Status](https://wiki.mozilla.org/Electrolysis#Schedule_and_Status). Также можно на свой страх и риск вручную включить E10S в релизах/бетах (работает, начиная с Firefox 45): <br>
`browser.tabs.remote.autostart -> true` <br>
`layers.async-pan-zoom.enabled -> true` <br>
`extensions.e10sBlockedByAddons -> false` <br>
`extensions.e10sBlocksEnabling -> false` <br>
Применение требует перезапуска. Проверить работу можно в `about:support -> Multiprocess Windows`. <br>
<sub>
Если все еще не работает: [`browser.tabs.remote.force-enable -> true`](https://wiki.mozilla.org/Electrolysis#Force_Enable) (не рекомендуется). Для тестирования расширений, есть способ отключить костыли, которые в ущерб производительности обеспечивают работу не совместимых с E10S аддонов: `extensions.interposition.enabled -> false` и `extensions.interposition.prefetching -> false`
</sub>

1. **Q:** О блокировке неподписанных расширений. <br>
**A:** Начиная с Firefox 48, в официальных релизных и бета-билдах Firefox заблокирована установка не подписанных Mozilla аддонов. Ниже приведены различные решения.
	* Выпускаются специальные [сборки](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds), где требование подписей отключается настройкой `about:config -> xpinstall.signatures.required -> false`. Firefox ESR тоже не имеет данной проблемы.
	* Есть [хак](addendum.md#user-content-Хак-для-отключения-требования-подписей-аддонов), позволяющий обойти это ограничение даже на официальных сборках.
	* Если вы используете Linux, вероятно, мейнтейнеры вашего дистрибутива уже собрали Firefox без флага обязательного требования подписей, и его можно отключить вышеописанной настройкой.

1. **Q:** Тормозит видео на YouTube в высоких разрешениях. <br>
**A:** Кодек VP9 требует мощного процессора. Может помочь отключение `media.mediasource.webm.enabled` - тогда видео будут отдаваться в H.264. Отключение этой настройки не сломает обычные WebM.

1. **Q:** Как запретить проигрывание HTML5-медиа в фоновой вкладке? <br>
**A:** `media.block-play-until-visible -> true` <br>
Проигрывание начнется при первом переключении на вкладку с открытым видео или аудио.

1. **Q:** Как отключить предупреждение при переходе сайта в полноэкранный режим в Firefox 43+? <br>
**A:** `about:config -> full-screen-api.warning.timeout -> 0`

1. **Q:** Как искать в разных поисковиках через адресную строку? <br>
**A:** Используя префиксы-кейворды (g Google, w Wikipedia, etc), настраивающиеся в Preferences -> Search даблкликом по ячейкам второй колонки.

1. **Q:** Как отключить беспрефиксный поиск в поисковике по умолчанию через адресную строку? <br>
**A:** `about:config -> keyword.enabled -> false`

1. **Q:** Как вернуть настройку `browser.newtab.url` в Firefox 41+? <br>
**A:** [New Tab Override](https://addons.mozilla.org/firefox/addon/new-tab-override/)

1. **Q:** Что за специальная тема для разработчиков? <br>
**A:** Тема, использующаяся в Firefox Developer Edition. [Аддон](https://addons.mozilla.org/firefox/addon/devedition-theme-enabler/), включающий ее на релизных сборках.

1. **Q:** Как копировать ссылки c кириллическим текстом в исходном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** `about:config -> network.standard-url.escape-utf8 -> false`

1. **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `about:config -> mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается по вкусу. Другие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

1. **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать кнопку скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее в about:config: `devtools.command-button-screenshot.enabled -> true`. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

1. **Q:** Как уменьшить ширину вкладки, чтобы меньше их прокручивать? <br>
**A:** Можно воспользоваться [UserCSS](http://www.ghacks.net/2011/02/02/change-firefoxs-minimum-maximum-tab-width/) или [аддоном](https://addons.mozilla.org/firefox/addon/custom-tab-width/).

1. **Q:** Как вернуть старую поисковую строку/старый диалог настроек браузера? <br>
**A:** Воспользоваться [Classic Theme Restorer](https://addons.mozilla.org/firefox/addon/classicthemerestorer/).

#### Профили
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи [`-no-remote -P`](https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options). Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

#### Сессии
Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки. Хранится в профиле в файле `sessionstore.js` и папке `sessionstore-backups`, в которой находится текущая и предыдущая сессии, а также автобэкапы, сделанные при апгрейде браузера. <br>
<sub>Если вы все же потеряли вкладки и забыли про бэкап, можно попробовать их восстановить, копируя при выключенном браузере каждый файл из `sessionstore-backups` (сначала те, что новее, начиная с `previous.js`) в `sessionstore.js` в профиле, запуская и проверяя.</sub>

## Аддоны
<sub>`E10S` - совместимые с Electrolysis расширения, <s>`E10S`</s> - не совместимые, либо работающие через прослойку для совместимости (interposition).</sub>

* [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)
<sup><a href="https://github.com/gorhill/uBlock/blob/master/platform/firefox/install.rdf">E10S</a></sup>
Быстрая и легковесная баннерорезка. Поддерживает подписки ABP, но потребляет значительно меньше процессорного времени и памяти. Подписки включаются в настройках (обычно достаточно EasyList и RU AdList). Element picker, облегчающий создание своих фильтров, уже встроен.

	* <sub>Согласно [исследованию Стэнфорда](http://cyberlaw.stanford.edu/node/6730), баннерорезка с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>uBlock Origin - это и есть uBlock от первоначального автора. То, что сейчас называется uBlock - его форк. Для пропустивших драму - кратко [тут](http://www.opennet.ru/opennews/art.shtml?num=42107). Кроме того, с момента разветвления (версии 0.9.3) разработка Origin идет значительно [активнее](https://github.com/gorhill/uBlock/releases) чем у [форка](https://github.com/chrisaljoudi/uBlock/releases).</sub>
	* <sub>ABP был заменен на Adblock Edge не из-за отключаемых acceptable ads, а за то что ABP содержит [зонд](https://raw.githubusercontent.com/The-OP/Fox/master/abp_notification.png), постоянно стучащий на его офсайт. Подробнее [здесь](https://adblockplus.org/development-builds/notifications-in-adblock-plus) и [здесь](https://adblockplus.org/en/privacy). [Список](https://raw.githubusercontent.com/The-OP/Fox/master/abe_diffs.png) других нежелательных фич, которые авторы ABP уж слишком часто добавляют.</sub>
		* <sub> Разработчик Adblock Edge закрыл проект и [рекомендует пользователям uBlock Origin](https://addons.mozilla.org/firefox/addon/adblock-edge/#addon-description) как более совершенную альтернативу.</sub>

* [Add Bookmark Here 2](https://addons.mozilla.org/firefox/addon/add-bookmark-here-2/)
<sup><a href="https://addons.mozilla.org/firefox/files/browse/461049/file/install.rdf">E10S</a></sup>
Решает [проблему](https://bugzilla.mozilla.org/show_bug.cgi?id=423617) с запоминанием папки для добавления закладок по умолчанию и обладает несколькими другими улучшающими работу с закладками функциями.

* [Add to Search Bar](https://addons.mozilla.org/firefox/addon/add-to-search-bar/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/387922/file/install.rdf">E10S</a></s></sup>
Позволяет добавить в поисковую панель Firefox поисковую строку любого сайта.

* [Classic Theme Restorer](https://addons.mozilla.org/firefox/addon/classicthemerestorer/)
<sup><a href="https://github.com/Aris-t2/ClassicThemeRestorer/blob/master/xpi/install.rdf">E10S</a></sup>
Для нелюбителей Australis, и для тех, кто хочет вернуть старый внешний вид Лиса.

* [Cookie Monster](https://addons.mozilla.org/firefox/addon/cookie-monster/)
<sup><s>E10S</s></sup>
Режет cookies и DOM Storage для сайтов, не внесенных в белый список.

* [Custom Buttons](https://addons.mozilla.org/firefox/addon/custom-buttons/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/414139/file/install.rdf">E10S</a></s></sup>
Разрешает создавать свои кнопки, исполняющие пользовательские скрипты с правами браузера. Удобно, чтобы не писать целый новый аддон для какой-либо мелкой полезности. Есть много готовых кнопок на [официальном форуме](http://custombuttons.sourceforge.net/forum/) и на [форуме Mozilla Russia](https://forum.mozilla-russia.org/viewforum.php?id=34).
	* **ВАЖНО:** Код кнопок выполняется в контексте браузера, и могут они все то же самое что и расширения (включая полный доступ к ФС). Поэтому лучше ставить только те кнопки, чей код проверен лично вами.

* [FireGestures](https://addons.mozilla.org/firefox/addon/firegestures/)
<sup><a href="https://addons.mozilla.org/firefox/files/browse/438957/file/install.rdf">E10S</a></sup>
Жесты мышью, мышиными кнопками, колесом и т.п.

* [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)
<sup><a href="https://github.com/greasemonkey/greasemonkey/blob/master/install.rdf">E10S</a></sup>
Всем известный движок для запуска UserJS. Ссылки на репозитории скриптов [здесь](http://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

* [Image Search Options](https://addons.mozilla.org/firefox/addon/image-search-options/)
<sup><s>E10S</s></sup>
Поиск картинок. Поддерживает как передачу ссылки на картинку поисковику, так и закачку туда самой картинки, что полезно для защищенных от хотлинкинга сайтов. После установки нужно импортировать обновленный список поисковиков с сайта автора (инструкция на странице аддона).

* [Norwell History Tools](https://addons.mozilla.org/firefox/addon/norwell/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/298146/file/install.rdf">E10S</a></s></sup>
Аддон значительно повышающий удобство работы с историей.

* [NoScript](https://addons.mozilla.org/firefox/addon/noscript/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/421899/file/install.rdf">E10S</a></s></sup>
Блокировщик JS с возможностью работы в режиме белого или черного списка. Поможет тем, у кого в простое вкладки с тяжелым JS отжирают ресурсы CPU.

* [Open Tabs Next to Current](https://addons.mozilla.org/firefox/addon/open-tabs-next-to-current/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/366060/file/install.rdf">E10S</a></s></sup>
Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей.

* [RightToClick](https://addons.mozilla.org/firefox/addon/righttoclick/)
<sup><s>E10S</s></sup>
Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [ScrapBook X](https://addons.mozilla.org/firefox/addon/scrapbook-x/)
<sup><s><a href="https://github.com/danny0838/firefox-scrapbook/blob/master/install.rdf">E10S</a></s></sup>
Удобное дополнение для сохранения веб-страниц и создания заметок. Обладает значительно расширенной функциональностью по сравнению с оригинальным ScrapBook.

* [Session Manager](https://addons.mozilla.org/firefox/addon/session-manager/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/413348/file/install.rdf">E10S</a></s></sup>
Менеджер сессий.

* [SlyZoom](https://addons.mozilla.org/firefox/addon/slyzoom/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/392208/file/install.rdf">E10S</a></s></sup>
Позволяет масштабировать страницы с произвольным шагом вместо изкоробочных ±10%, а также задавать масштаб по умолчанию на всех страницах.

* [Stylish](https://addons.mozilla.org/firefox/addon/stylish/)
<sup><s><a href="https://github.com/JasonBarnabe/stylish/blob/master/install.rdf">E10S</a></s></sup>
Меняет внешний вид сайтов и самого браузера согласно UserCSS. [Репозиторий](https://userstyles.org) стилей. Также см. [раздел о Stylish](addendum.md#user-content-stylish) в приложении.

	* **ВАЖНО:** Обязательно читайте стили перед установкой. Вставив запрещенное на Userstyles.org свойство **-moz-binding** в стиль Stylish, [можно выполнить JS-код на компьютере пользователя](addendum.md#user-content-Опасность-юзерстилей-с--moz-binding).

* [Tab Counter](https://addons.mozilla.org/firefox/addon/tab-counter/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/409212/file/install.rdf">E10S</a></s></sup>
Показывает количество открытых вкладок.

* [Tab Groups](https://addons.mozilla.org/firefox/addon/tab-groups-panorama/)
<sup><a href="https://github.com/Quicksaver/Tab-Groups/blob/master/install.rdf">E10S</a></sup>
Панорама вкладок на замену встроенной в браузер, которую удалили в Firefox 45.

* [Tree Style Tab](https://addons.mozilla.org/firefox/addon/tree-style-tab/)
<sup><a href="https://github.com/piroor/treestyletab/blob/master/install.rdf">E10S</a></sup>
Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на широкоформатных мониторах. Для тех, кто хочет открывать больше 3.5 вкладок и удобно управлять ими. Рекомендуется использовать вместе с [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

	* [Multiple Tab Handler](https://addons.mozilla.org/firefox/addon/multiple-tab-handler/)
	<sup><a href="https://github.com/piroor/multipletab/blob/master/install.rdf">E10S</a></sup>
	Позволяет выделять несколько вкладок и производить с ними разные операции: перемещать, группировать, добавлять в закладки, копировать URL, etc. Полностью совместим с TST.

* [Vertical Toolbar](https://addons.mozilla.org/firefox/addon/vertical-toolbar/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/420712/file/install.rdf">E10S</a></s></sup>
Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/firefox/addon/yet-another-smooth-scrolling/)
<sup><s><a href="https://addons.mozilla.org/firefox/files/browse/429884/file/install.rdf">E10S</a></s></sup>
Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

* [Русский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/russian-spellchecking-dic-3703/)

* [Английский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/united-states-english-spellche/)

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером чтобы понять, чего именно вам будет не хватать, и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то, вероятно, вы установили кучу сторонних аддонов, стилей, скриптов, и некоторые из них друг с другом конфликтуют. Отключайте по очереди, чтобы найти виновника.

[**Список потенциально проблемных аддонов**](http://kb.mozillazine.org/Problematic_extensions)
