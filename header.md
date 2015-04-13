# Шапка официального лисотреда /s/

## FAQ
* **Q:** Проблемы с отрисовкой изображений (черные квадраты и т.п.). <br>
**A:** `about:config -> layers.acceleration.disabled -> true` <br>
Также проблему может решить обновление видеодрайверов либо возврат к более старой версии. Или обновление самого Firefox до беты/откат к ESR.

* **Q:** HTML5 на YouTube и все, что с ним связано (1080p, проблемы с проигрыванием, etc). <br>
**A:** Попробуйте использовать последний стабильный Firefox и эти настройки about:config: <br>
`media.mediasource.enabled -> true` <br>
`media.mediasource.mp4.enabled -> true` <br>
`media.mediasource.webm.enabled -> true` <br>
`media.fragmented-mp4.enabled -> true`  <br>
`media.fragmented-mp4.exposed -> true`

* **Q:** Как вернуть старую поисковую строку с возможностью настройки поисковых префиксов-кейвордов (g Google, w Wikipedia, etc)? <br>
**A:** `about:config -> browser.search.showOneOffButtons -> false` <br>
Применяется только после перезапуска Firefox, в отличие от большинства настроек about:config. Кейворды настраиваются в пункте Manage Search Engines выпадающего меню поисковой строки.

* **Q:** Как отключить беспрефиксный поиск в Гугле (Яндексе) через адресную строку? <br>
**A:** `about:config -> keyword.enabled -> false`

* **Q:** Как копировать ссылки c кириллическим текстом в исходном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** `about:config -> network.standard-url.escape-utf8 -> false`

* **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `about:config -> mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается по вкусу. Другие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

* **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать кнопку скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее в about:config: `devtools.command-button-screenshot.enabled -> true`. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

### О профилях
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи `--no-remote -P`. Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если у вас что-то сломалось настолько, что общие диагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и настроить его с нуля. О том, как перенести вкладки, закладки и другие данные из старого профиля в новый, читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

## Аддоны
* [Adblock Edge](https://addons.mozilla.org/ru/firefox/addon/adblock-edge/). Баннеро-счетчико-трекеро-резка. [Подписки](http://adstomper.bitbucket.org/Known_subs.html) для ABE. Обычно достаточно RuAdList+EasyList.

	* [Element Hiding Helper for Adblock Plus](https://addons.mozilla.org/ru/firefox/addon/elemhidehelper/)
	* [Adblock Plus Pop-up Addon](https://addons.mozilla.org/ru/firefox/addon/adblock-plus-pop-up-addon/)
	* Дополнительные анти-трекинговые подписки [здесь](https://secure.fanboy.co.nz/filters.html).
	* <sub>Согласно [исследованию Стэнфорда](http://cyberlaw.stanford.edu/node/6730), ABE с соответствующими подписками (EasyList + EasyPrivacy + Fanboy's Annoyances) по эффективности превосходит Ghostery.</sub>
	* <sub>ABP был заменен на ABE не из-за отключаемых acceptable ads, а за то что ABP содержит [зонд](https://raw.githubusercontent.com/The-OP/Fox/master/abp_notification.png), постоянно стучащий на его офсайт. Дальнейшая информация [здесь](https://adblockplus.org/development-builds/notifications-in-adblock-plus) и [здесь](https://adblockplus.org/en/privacy). [Cписок](https://raw.githubusercontent.com/The-OP/Fox/master/abe_diffs.png) других нежелательных фич, которые авторы ABP уж слишком часто добавляют.</sub>

* [uBlock](https://addons.mozilla.org/ru/firefox/addon/ublock/). Легковесный аналог ABE с поддержкой подписок последнего, но потребляющий значительно меньше процессорного времени и памяти. Подписки включаются через настройки, которые уже содержат адреса наиболее популярных. Element picker, облегчающий создание собственных фильтров, уже встроен.

* [Add to Search Bar](https://addons.mozilla.org/ru/firefox/addon/add-to-search-bar/). Позволяет добавить в поисковую панель Firefox поисковую строку любого сайта.

* [Classic Theme Restorer](https://addons.mozilla.org/ru/firefox/addon/classicthemerestorer/). Для нелюбителей Australis, и для тех, кто хочет вернуть старый внешний вид Лиса.

* [Cookie Monster](https://addons.mozilla.org/ru/firefox/addon/cookie-monster/). Режет куки для сайтов, не внесенных в белый список.

* [FireGestures](https://addons.mozilla.org/ru/firefox/addon/firegestures/). Жесты мышью, мышиными кнопками, колесом и т.п.

* [Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/). Всем известный движок для запуска UserJS. Ссылки на репозитории скриптов [здесь](http://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

* [NoScript](https://addons.mozilla.org/ru/firefox/addon/noscript/). Блокировщик JS с возможностью работы в режиме белого или черного списка. Поможет тем, у кого в простое вкладки с тяжелым JS отжирают ресурсы CPU.

* [Open Tabs Next to Current](https://addons.mozilla.org/ru/firefox/addon/open-tabs-next-to-current/). Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей.

* [RightToClick](https://addons.mozilla.org/ru/firefox/addon/righttoclick/). Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [Session Manager](https://addons.mozilla.org/ru/firefox/addon/session-manager/). Менеджер сессий. Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить, чтобы случайно не потерять вкладки.

* [SlyZoom](https://addons.mozilla.org/ru/firefox/addon/slyzoom/). Улучшает функциональность масштабирования страниц. Дает возможность устанавливать масштаб с произвольным шагом вместо +/- 10%, которые в Лисе из коробки. Также позволяет задать значение масштаба по умолчанию на всех страницах.

* [Stylish](https://addons.mozilla.org/ru/firefox/addon/stylish/). Меняет внешний вид сайтов и самого Лиса согласно UserCSS. [Репозиторий](https://userstyles.org) стилей. Вот, например, полезная вещь - [затемнение](https://userstyles.org/styles/71928/dim-unloaded-tabs) незагруженных после перезапуска браузера вкладок.

* [Tab Counter](https://addons.mozilla.org/ru/firefox/addon/tab-counter/). Показывает количество открытых вкладок.

* [Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab/). Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на современных широкоформатных мониторах. Для тех, кто хочет отрывать больше 3.5 вкладок, не путаться в них и удобно управлять ими. Рекомендуется к использованию вместе со скином Flat и [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

* [Vertical Toolbar](https://addons.mozilla.org/ru/firefox/addon/vertical-toolbar/). Панель для кнопок браузера и аддонов. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/ru/firefox/addon/yet-another-smooth-scrolling/). Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым браузером, чтобы понять, чего именно вам будет не хватать и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то скорее всего вы наустанавливали кучу сторонних плагинов, стилей, скриптов, аддонов-комбайнов, и некоторые из них друг с другом конфликтуют. Отключай по очереди, чтобы найти виновника. 

[**Потенциально проблемные аддоны**](http://kb.mozillazine.org/Problematic_extensions)
