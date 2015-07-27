# Шапка официального лисотреда /s/

* **Шапка**
  * [FAQ](header.md#faq)
  * [Аддоны](header.md#Аддоны)
* [Приложение](addendum.md)
  * [Настройки about:config](addendum.md#Настройки-aboutconfig)
  * [Продвинутые аддоны](addendum.md#Продвинутые-аддоны)
  * [Интересные ссылки](addendum.md#Интересные-ссылки)
	
## FAQ
* **Q:** Проблемы с отрисовкой интерфейса, изображений или видео. <br>
**A:** Пробуйте по очереди: <br>
1) `about:config -> layers.offmainthreadcomposition.enabled -> false` <br>
2) `about:config -> layers.acceleration.disabled -> true` <br>
3) 1 и 2 вместе.  <br>
Также проблему может решить обновление видеодрайверов либо возврат к более старой версии. Или обновление самого Firefox до беты/откат к ESR.

* **Q:** Проблемы с видео и аудио в HTML5 на YouTube, VK и других сайтах; включение 1080p, H.264, VP9. <br>
**A:** Должны быть включены нижеприведенные настройки в about:config. В Linux-билдах MSE по умолчанию отключены, но работают, начиная с Firefox 38, если их вручную включить и установить GStreamer с плагинами (-good и -bad, точные названия пакетов зависят от дистрибутива). <br>
`media.mediasource.enabled -> true` <br>
`media.mediasource.mp4.enabled -> true` <br>
`media.mediasource.webm.enabled -> true` <br>
`media.fragmented-mp4.enabled -> true`  <br>
`media.fragmented-mp4.exposed -> true` <br>
`media.fragmented-mp4.ffmpeg.enabled -> true # Для Linux-билдов` <br>
`media.gstreamer.enabled -> true # Для Linux-билдов`

* **Q:** Как искать в разных поисковиках через адресную строку? <br>
**A:** Используя префиксы-кейворды (g Google, w Wikipedia, etc), настраивающиеся в Preferences -> Search или в пункте Manage Search Engines выпадающего меню старой поисковой строки.

* **Q:** Как отключить беспрефиксный поиск в поисковике по умолчанию через адресную строку? <br>
**A:** `about:config -> keyword.enabled -> false`

* **Q:** Что за специальная тема для разработчиков? <br>
**A:** Тема, использующаяся в Firefox Developer Edition. Поприятнее чем дефолтный Australis. Включить ее можно так: `about:config -> browser.devedition.theme.enabled -> true`

* **Q:** Как копировать ссылки c кириллическим текстом в исходном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** `about:config -> network.standard-url.escape-utf8 -> false`

* **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `about:config -> mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается по вкусу. Другие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

* **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать кнопку скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее в about:config: `devtools.command-button-screenshot.enabled -> true`. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

* **Q:** Как вернуть старую поисковую строку? <br>
**A:** `about:config -> browser.search.showOneOffButtons -> false` <br>
Применяется только после перезапуска Firefox, в отличие от большинства настроек about:config.

* **Q:** Как вернуть старый диалог настроек браузера? <br>
**A:** `about:config -> browser.preferences.inContent -> false`

#### Профили
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи [`-no-remote -P`](https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options). Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

#### Сессии
Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки. Хранится в профиле в файле `sessionstore.js` и папке `sessionstore-backups`, в которой находится текущая и предыдущая сессии, а также автобэкапы, сделанные при апгрейде браузера. <br>
<sub>Если вы все же потеряли вкладки и забыли про бэкап, можно попробовать их восстановить, копируя при выключенном браузере каждый файл из `sessionstore-backups` (сначала те, что новее, начиная с `previous.js`) в `sessionstore.js` в профиле, запуская и проверяя.</sub>

## Аддоны
* [uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/). Быстрая и легковесная баннерорезка. Поддерживает подписки ABP, но потребляет значительно меньше процессорного времени и памяти. Подписки включаются в настройках (обычно достаточно EasyList и RU AdList). Element picker, облегчающий создание своих фильтров, уже встроен.

	* <sub>Согласно [исследованию Стэнфорда](http://cyberlaw.stanford.edu/node/6730), баннерорезка с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>uBlock Origin - это и есть uBlock от первоначального автора. То, что сейчас называется uBlock - его форк. Для пропустивших драму - кратко [тут](http://www.opennet.ru/opennews/art.shtml?num=42107). Кроме того, с момента разветвления (версии 0.9.3) разработка Origin идет значительно [активнее](https://github.com/gorhill/uBlock/releases) чем у [форка](https://github.com/chrisaljoudi/uBlock/releases).</sub>
	* <sub>ABP был заменен на Adblock Edge не из-за отключаемых acceptable ads, а за то что ABP содержит [зонд](https://raw.githubusercontent.com/The-OP/Fox/master/abp_notification.png), постоянно стучащий на его офсайт. Подробнее [здесь](https://adblockplus.org/development-builds/notifications-in-adblock-plus) и [здесь](https://adblockplus.org/en/privacy). [Список](https://raw.githubusercontent.com/The-OP/Fox/master/abe_diffs.png) других нежелательных фич, которые авторы ABP уж слишком часто добавляют.</sub>
		* <sub> Разработчик Adblock Edge закрыл проект и [рекомендует пользователям uBlock Origin](https://addons.mozilla.org/firefox/addon/adblock-edge/#addon-description) как более совершенную альтернативу.</sub>

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

* [Tab Counter](https://addons.mozilla.org/firefox/addon/tab-counter/). Показывает количество открытых вкладок.

* [Tree Style Tab](https://addons.mozilla.org/firefox/addon/tree-style-tab/). Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на широкоформатных мониторах. Для тех, кто хочет открывать больше 3.5 вкладок и удобно управлять ими. Рекомендуется использовать вместе с [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

* [Vertical Toolbar](https://addons.mozilla.org/firefox/addon/vertical-toolbar/). Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/firefox/addon/yet-another-smooth-scrolling/). Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

* [Русский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/russian-spellchecking-dic-3703/)

* [Английский словарь для проверки правописания](https://addons.mozilla.org/firefox/addon/united-states-english-spellche/)

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером чтобы понять, чего именно вам будет не хватать, и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то, вероятно, вы установили кучу сторонних аддонов, стилей, скриптов, и некоторые из них друг с другом конфликтуют. Отключайте по очереди, чтобы найти виновника.

[**Список потенциально проблемных аддонов**](http://kb.mozillazine.org/Problematic_extensions)
