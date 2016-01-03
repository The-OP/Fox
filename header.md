# Шапка официального лисотреда /s/

* **Шапка**
  * [FAQ](header.md#faq)
  * [Аддоны](header.md#Обязательные-аддоны)
* [Приложение](addendum.md)
  * [Настройки about:config](addendum.md#Настройки-aboutconfig)
  * [Продвинутые аддоны](addendum.md#Продвинутые-аддоны)
  * [Интересные ссылки](addendum.md#Интересные-ссылки)
	
## FAQ
* **Q:** Проблемы с отрисовкой интерфейса, изображений или видео. Внезапные падения браузера.<br>
**A:** Пробуйте по очереди: <br>
1) `about:config -> layers.offmainthreadcomposition.enabled -> false` <br>
2) `about:config -> layers.acceleration.disabled -> true` <br>
3) 1 и 2 вместе.  <br>
Также проблему может решить обновление видеодрайверов либо возврат к более старой версии. Или обновление самого Firefox до беты/откат к ESR.

* **Q:** О блокировке неподписанных расширений. <br>
**A:** В Firefox 43 установку не подписанных Mozilla аддонов можно включить в `about:config -> xpinstall.signatures.required -> false`. Начиная с 44 версии, из стандартных релизов и бет эта опция исчезнет, однако будут выпускаться специальные сборки (по аналогии с EME-free), где она [сохранится](https://wiki.mozilla.org/Addons/Extension_Signing).

* **Q:** Проблемы с видео и аудио в HTML5 на YouTube, VK и других сайтах; включение 1080p, H.264, VP9. <br>
**A:** Должны быть включены нижеприведенные настройки в about:config. В Linux-билдах MSE по умолчанию отключены, но работают, начиная с Firefox 38, если их вручную включить и установить GStreamer с gstreamer-plugins (-good, -bad, -ugly, -libav, точные названия пакетов зависят от дистрибутива). <br>
`media.mediasource.enabled -> true` <br>
`media.mediasource.mp4.enabled -> true` <br>
`media.mediasource.webm.enabled -> true` <br>
`media.fragmented-mp4.enabled -> true`  <br>
`media.fragmented-mp4.exposed -> true` <br>
`media.fragmented-mp4.ffmpeg.enabled -> true # Для Linux-билдов` <br>
`media.gstreamer.enabled -> true # Для Linux-билдов`

* **Q:** Тормозит видео на YouTube в высоких разрешениях. <br>
**A:** Кодек VP9 требует мощного процессора. Может помочь отключение `media.mediasource.webm.enabled` - тогда видео будут отдаваться в H.264. Отключение этой настройки не сломает обычные WebM.

* **Q:** Как отключить предупреждение при переходе сайта в полноэкранный режим в Firefox 43+? <br>
**A:** `about:config -> full-screen-api.warning.timeout -> 0`

* **Q:** Как искать в разных поисковиках через адресную строку? <br>
**A:** Используя префиксы-кейворды (g Google, w Wikipedia, etc), настраивающиеся в Preferences -> Search (даблкликом по ячейкам второй колонки) или в пункте Manage Search Engines выпадающего меню старой поисковой строки.

* **Q:** Как отключить беспрефиксный поиск в поисковике по умолчанию через адресную строку? <br>
**A:** `about:config -> keyword.enabled -> false`

* **Q:** Как вернуть настройку `browser.newtab.url` в Firefox 41+? <br>
**A:** [New Tab Override](https://addons.mozilla.org/firefox/addon/new-tab-override/)

* **Q:** Что за специальная тема для разработчиков? <br>
**A:** Тема, использующаяся в Firefox Developer Edition. В 38 ESR включается так: `about:config -> browser.devedition.theme.enabled -> true`. Для Firefox 40+ придется воспользоваться [аддоном](https://addons.mozilla.org/firefox/addon/devedition-theme-enabler/).

* **Q:** Как копировать ссылки c кириллическим текстом в исходном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** `about:config -> network.standard-url.escape-utf8 -> false`

* **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `about:config -> mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается по вкусу. Другие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

* **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать кнопку скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее в about:config: `devtools.command-button-screenshot.enabled -> true`. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

* **Q:** Как уменьшить ширину вкладки, чтобы меньше их прокручивать? <br>
**A:** Можно воспользоваться [UserCSS](http://www.ghacks.net/2011/02/02/change-firefoxs-minimum-maximum-tab-width/) или [аддоном](https://addons.mozilla.org/firefox/addon/custom-tab-width/).

* **Q:** Как вернуть старую поисковую строку? <br>
**A:** `about:config -> browser.search.showOneOffButtons -> false` (применяется после перезапуска Firefox) <br>
В Firefox 43+ этой опции уже нет, придется воспользоваться Classic Theme Restorer.

* **Q:** Как вернуть старый диалог настроек браузера? <br>
**A:** `about:config -> browser.preferences.inContent -> false`

#### Профили
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи [`-no-remote -P`](https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options). Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

#### Сессии
Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки. Хранится в профиле в файле `sessionstore.js` и папке `sessionstore-backups`, в которой находится текущая и предыдущая сессии, а также автобэкапы, сделанные при апгрейде браузера. <br>
<sub>Если вы все же потеряли вкладки и забыли про бэкап, можно попробовать их восстановить, копируя при выключенном браузере каждый файл из `sessionstore-backups` (сначала те, что новее, начиная с `previous.js`) в `sessionstore.js` в профиле, запуская и проверяя.</sub>
## Обязательные аддоны
* ВКонтакте.ру Downloader – кнопка на странице превью фотографии для скачивания её в оригинальном размере, скачивание музыки и видео на vk.com.

* Менеджер сессий – более функциональный менеджер сессий, чем в Tab Mix Plus.

* Auto-Sort Bookmarks – автосортировка закладок.

* Black background and white text – переключение фона страниц на чёрный, с белым текстом, только на требуемых сайтах. Для этого нужно в настройках расширения установить Default method of changing page colours: Disabled, а на требуемом сайте нажать кнопку этого расширения и в выпадающем меню выбрать JS mutation observer (этот вариант более производительный). Выбор для этого сайта запомнится.

* Browsec – бесплатный прокси для обхода блокировок Роскомнадзора. Включается/выключается кнопкой на панели инструментов. Внимание: разработчик собирает различную информацию о пользователе.

* Context Highlight – подсвечивание всех вхождений выделенного текста на странице.

* Context Search X – поиск из контекстного меню выделенного текста в любой из установленных поисковых систем.

* FindBar Tweak – улучшенный поиск текста на страницах.

* FxIF – просмотр EXIF-метаданных изображений.

* Grab and Drag – прокрутка крупных изображений (и страниц) правой кнопкой мыши.

* InlineDisposition – чтобы *.torrent-файлы сразу, без диалогового окна, скачивались и открывались.

* Keyword Search – использование в поле адреса поиска Google I’m Feeling Lucky (или другого).

* PrefBar – вынесение настроек Firefox на панель инструментов, в частности, флажка включения фокуса на новой вкладке. Для добавления этого флажка, после установки PrefBar, нужно вызвать на панели PrefBar контекстное меню → Customize PrefBar… → вызвать контекстное меню в списке Enabled Items → Import → выбрать файл tabfocuscheckbox.btn в этой папке. Затем можно удалить все остальные элементы из PrefBar, выделив их все в списке Enabled Items с помощью клавиши Shift и перетащив в панель Available Items. Затем можно сократить надпись флажка “Focus New Tabs”, например, до “Ф”, вызвав контекстное меню этого флажка, выбрав Edit button “Focus New Tabs” и отредактировав поле Label. Затем можно переместить панель PrefBar в основную панель инструментов, нажав кнопку “Гамбургер” (самую правую) → Изменить, и перетащив PrefBar Toolbar Items в нужное место. После этого PrefBar останется пустым, поэтому нужно его скрыть, вызвав на нём контекстное меню и сняв флажок PrefBar Toolbar.

* Select like a Boss – чтобы ссылки не перетаскивались при выделении текста в них.

* Space Next – кнопка на панели инструментов для перехода на следующую страницу.

* Tab Mix Plus – тонкая настройка вкладок.

* UsableHomeButton – переход на главную страницу сайта щелчком левой кнопкой мыши по кнопке “Домой” (а если страница уже главная, прокрутка её в начало), возможность перейти на любой из адресов выше в меню по щелчку правой кнопкой мыши по кнопке “Домой”.

* YouTube High Definition – воспроизведение видео с Youtube всегда в максимальном доступном качестве и отключение аннотаций. А также увеличение размера видео в оконном режиме, управление автовоспроизведением следующего видео и задание громкости по умолчанию.

* Zoom Page – возможность увеличения до размера окна даже маленьких изображений щелчком мыши

## Необязательные аддоны
* [Bazzacuda Image Saver Plus](https://addons.mozilla.org/ru/firefox/addon/bazzacuda-image-saver-plus/) – автосохранение всех изображений, открытых в отдельных вкладках, без диалога сохранения, в указанную в настройках папку, или при Alt+Click по значку расширения в любую другую папку разово (сохранение происходит сразу после выбора папки).

	* Вариант настройки Rename pattern в Bazzacuda Image Saver Plus:
	* `&MM;-&DD;_&hh;.&mm;.&ss;,&ms;_&filename;&[;(&dupnum;)&];`

* [DoubleClick Save Picture](https://addons.mozilla.org/ru/firefox/addon/doubleclick-save-picture/) – сохранение изображений двойным щелчком по ним, с диалогом сохранения.

* [Save Image in Folder](https://addons.mozilla.org/ru/firefox/addon/save-image-in-folder/) – сохранение изображений в одну из заранее указанных в настройках плагина папок, выбираемую в контекстном меню изображения, как с диалогом сохранения, так и без него.

* [iMacros](https://addons.mozilla.org/ru/firefox/addon/imacros-for-firefox/) – автоматизация повторяющихся действий на сайте.

* [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/). Быстрая и легковесная баннерорезка. Поддерживает подписки ABP, но потребляет значительно меньше процессорного времени и памяти. Подписки включаются в настройках (обычно достаточно EasyList и RU AdList). Element picker, облегчающий создание своих фильтров, уже встроен.

	* <sub>Согласно [исследованию Стэнфорда](http://cyberlaw.stanford.edu/node/6730), баннерорезка с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>uBlock Origin - это и есть uBlock от первоначального автора. То, что сейчас называется uBlock - его форк. Для пропустивших драму - кратко [тут](http://www.opennet.ru/opennews/art.shtml?num=42107). Кроме того, с момента разветвления (версии 0.9.3) разработка Origin идет значительно [активнее](https://github.com/gorhill/uBlock/releases) чем у [форка](https://github.com/chrisaljoudi/uBlock/releases).</sub>
	* <sub>ABP был заменен на Adblock Edge не из-за отключаемых acceptable ads, а за то что ABP содержит [зонд](https://raw.githubusercontent.com/The-OP/Fox/master/abp_notification.png), постоянно стучащий на его офсайт. Подробнее [здесь](https://adblockplus.org/development-builds/notifications-in-adblock-plus) и [здесь](https://adblockplus.org/en/privacy). [Список](https://raw.githubusercontent.com/The-OP/Fox/master/abe_diffs.png) других нежелательных фич, которые авторы ABP уж слишком часто добавляют.</sub>
		* <sub> Разработчик Adblock Edge закрыл проект и [рекомендует пользователям uBlock Origin](https://addons.mozilla.org/firefox/addon/adblock-edge/#addon-description) как более совершенную альтернативу.</sub>

* [Add Bookmark Here 2](https://addons.mozilla.org/firefox/addon/add-bookmark-here-2/). Решает [проблему](https://bugzilla.mozilla.org/show_bug.cgi?id=423617) с запоминанием папки для добавления закладок по умолчанию и обладает несколькими другими улучшающими работу с закладками функциями.

* [Add to Search Bar](https://addons.mozilla.org/firefox/addon/add-to-search-bar/). Позволяет добавить в поисковую панель Firefox поисковую строку любого сайта.

* [Classic Theme Restorer](https://addons.mozilla.org/firefox/addon/classicthemerestorer/). Для нелюбителей Australis, и для тех, кто хочет вернуть старый внешний вид Лиса.

* [Cookie Monster](https://addons.mozilla.org/firefox/addon/cookie-monster/). Режет cookies и DOM Storage для сайтов, не внесенных в белый список.

* [FireGestures](https://addons.mozilla.org/firefox/addon/firegestures/). Жесты мышью, мышиными кнопками, колесом и т.п.

* [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/). Всем известный движок для запуска UserJS. Ссылки на репозитории скриптов [здесь](http://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

* [Image Search Options](https://addons.mozilla.org/firefox/addon/image-search-options/). Поиск картинок. Поддерживает как передачу ссылки на картинку поисковику, так и закачку туда самой картинки, что полезно для защищенных от хотлинкинга сайтов. После установки нужно импортировать обновленный список поисковиков с сайта автора (инструкция на странице аддона).

* [NoScript](https://addons.mozilla.org/firefox/addon/noscript/). Блокировщик JS с возможностью работы в режиме белого или черного списка. Поможет тем, у кого в простое вкладки с тяжелым JS отжирают ресурсы CPU.

* [Open Tabs Next to Current](https://addons.mozilla.org/firefox/addon/open-tabs-next-to-current/). Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей.

* [RightToClick](https://addons.mozilla.org/firefox/addon/righttoclick/). Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [Session Manager](https://addons.mozilla.org/firefox/addon/session-manager/). Менеджер сессий.

* [SlyZoom](https://addons.mozilla.org/firefox/addon/slyzoom/). Позволяет масштабировать страницы с произвольным шагом вместо изкоробочных ±10%, а также задавать масштаб по умолчанию на всех страницах.

* [Stylish](https://addons.mozilla.org/firefox/addon/stylish/). Меняет внешний вид сайтов и самого Лиса согласно UserCSS. [Репозиторий](https://userstyles.org) стилей. Вот, например, полезная вещь - [затемнение](https://userstyles.org/styles/71928/dim-unloaded-tabs) незагруженных после перезапуска браузера вкладок.

	* **ВАЖНО:** Обязательно читайте стили перед установкой. Вставив запрещенное на Userstyles.org свойство **-moz-binding** в стиль Stylish, [можно выполнить JS-код на компьютере пользователя](addendum.md#Опасность-юзерстилей-с--moz-binding).

* [Tab Counter](https://addons.mozilla.org/firefox/addon/tab-counter/). Показывает количество открытых вкладок.

* [Tab Groups](https://addons.mozilla.org/firefox/addon/tab-groups-panorama/). Панорама вкладок на замену встроенной в браузер, которую удалят в Firefox 45.

* [Tree Style Tab](https://addons.mozilla.org/firefox/addon/tree-style-tab/). Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на широкоформатных мониторах. Для тех, кто хочет открывать больше 3.5 вкладок и удобно управлять ими. Рекомендуется использовать вместе с [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

	* [Multiple Tab Handler](https://addons.mozilla.org/firefox/addon/multiple-tab-handler/). Позволяет выделять несколько вкладок и производить с ними разные операции: перемещать, группировать, добавлять в закладки, копировать URL, etc. Полностью совместим с TST.

* [Vertical Toolbar](https://addons.mozilla.org/firefox/addon/vertical-toolbar/). Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/firefox/addon/yet-another-smooth-scrolling/). Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

* [Русский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/russian-spellchecking-dic-3703/)

* [Английский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/united-states-english-spellche/)

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером чтобы понять, чего именно вам будет не хватать, и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то, вероятно, вы установили кучу сторонних аддонов, стилей, скриптов, и некоторые из них друг с другом конфликтуют. Отключайте по очереди, чтобы найти виновника.

[**Список потенциально проблемных аддонов**](http://kb.mozillazine.org/Problematic_extensions)
