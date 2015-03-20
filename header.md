## FAQ
* **Q:** HTML5 на YouTube и все, что с ним связано (1080p, проблемы с проигрыванием, etc). <br>
**A:** Прежде чем написать об очередной ютубопроблеме, попробуйте использовать последний стабильный Firefox 36 и эти настройки about:config: <br>
`media.mediasource.enabled -> true` <br>
`media.mediasource.mp4.enabled -> true` <br>
`media.mediasource.webm.enabled -> true` <br>
`media.fragmented-mp4.enabled -> true`  <br>
`media.fragmented-mp4.exposed -> true`

* **Q:** Как вернуть старую поисковую строку с возможностью настройки поисковых префиксов-кейвордов (g Google, w Wikipedia, etc)? <br>
**A:** `about:config -> browser.search.showOneOffButtons -> false` <br>
Применяется только после перезапуска Firefox, в отличие от большинства настроек в about:config. Кейворды настраиваются в пункте Manage Search Engines выпадающей менюшки поисковой строки.

* **Q:** Как отключить беспрефиксный поиск в Гугле (Яндексе для русскоязычной локали)  через адресную строку? <br>
**A:** `about:config -> keyword.enabled -> false`

* **Q:** Как копировать ссылки c кириллическим текстом в нормальном виде, не закодированном percent-encoding (%D0%9B%D0%B8%D1%81 -> Лис)? <br>
**A:** `about:config -> network.standard-url.escape-utf8 -> false`

* **Q:** Как ускорить прокрутку колесом мыши? <br>
**A:** `about:config -> mousewheel.min_line_scroll_amount -> 35` <br>
Значение подбирается индивидуально. Я использую 35 на ноутбуке и 50 на десктопе. Более тонкие твики описаны [здесь](http://12bytes.org/articles/tech/firefox-scroll-tweak).

* **Q:** Как сделать скриншот всей страницы? <br>
**A:** Shift-F2: `screenshot --fullpage <имя файла опционально>` <br>
Также можно использовать  кнопку снятия скриншота в Developer Tools (Ctrl+Shift+I), предварительно включив ее: about:config -> devtools.command-button-screenshot.enabled -> true. Сверхдлинные страницы [не сохраняет](https://bugzilla.mozilla.org/show_bug.cgi?id=766661).

### О профилях
Firefox сохраняет вкладки, закладки, историю, аддоны, настройки и пароли в каталоге, называемом профилем. Можно иметь несколько профилей и даже использовать их одновременно, запуская две и более копии Firefox. Для входа в менеджер профилей следует указать ключи `--no-remote -P`. Подробнее [здесь](https://support.mozilla.org/ru/kb/upravlenie-profilyami).

**Важно:** Если в вашем Лисе что-то сломалось настолько, что простые общедиагностические советы (очистка кэша и отключение аддонов по очереди) не помогают, значит пришло время создать новый профиль и заново его настроить. О том, как перетащить вкладки, закладки и другие ценности из старого профиля в новый читайте [здесь](https://support.mozilla.org/ru/kb/vosstanovlenie-vazhnyh-dannyh-iz-starogo-profilya).

## Аддоны
* [uBlock](https://addons.mozilla.org/ru/firefox/addon/ublock/). Легковесная альтернатива ABP с полной поддержкой подписок последнего, но потребляющая значительно меньше процессорного времени и памяти. Подписки включаются через настройки, которые уже содержат адреса наиболее популярных. Element picker, облегчающий создание собственных фильтров, тоже встроен.

* [Add to Search Bar](https://addons.mozilla.org/ru/firefox/addon/add-to-search-bar/). Позволяет добавить в поисковую панель Firefox поисковую строку любого сайта.

* [Classic Theme Restorer](https://addons.mozilla.org/ru/firefox/addon/classicthemerestorer/). Для нелюбителей пальцетыкательного хромоинтерфейса, и для тех, кто просто хочет вернуть ТОТ внешний вид Лиса.

* [Cookie Monster](https://addons.mozilla.org/ru/firefox/addon/cookie-monster/). Режет куки для сайтов, не внесенных в белый список.

* [FireGestures](https://addons.mozilla.org/ru/firefox/addon/firegestures/). Жесты мышью, мышиными кнопками, колесом и т.п. Must have для бывших пользователей Оперы и прочих ценящих удобство людей.

* [Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey/). Всем известная запускалка UserJS. Ссылки на репозитории скриптов [здесь](http://wiki.greasespot.net/User_Script_Hosting).

	* [Dollchan Extension Tools](https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/). Полезнейший скрипт, значительно повышающий удобство двачевания.

* [NoScript](https://addons.mozilla.org/ru/firefox/addon/noscript/). Блокировщик JS с возможностью работы в режиме белого или черного списка. Поможет тем, у кого в простое вкладки с тяжелым JS отжирают ресурсы CPU.

* [Open Tabs Next to Current](https://addons.mozilla.org/ru/firefox/addon/open-tabs-next-to-current/). Небольшой аддон, позволяющий открывать новую вкладку сразу за текущей. Пригодится тем, кому не нужно более сложное расширение для управления вкладками.

* [RightToClick](https://addons.mozilla.org/ru/firefox/addon/righttoclick/). Помогает против сайтов, блокирующих контекстное меню по правой кнопке мыши.

* [Session Manager](https://addons.mozilla.org/ru/firefox/addon/session-manager/). Очень удобный менеджер сессий. Сессия - это информация об открытых вкладках и окнах. Ее рекомендуется периодически бэкапить (можно в Session Manager, можно вручную), чтобы не потерять вкладки из-за собственной криворукости или глюков Лиса.

* [Stylish](https://addons.mozilla.org/ru/firefox/addon/stylish/). Меняет внешний вид сайтов и самого Лиса согласно UserCSS. [Репозиторий](https://userstyles.org) стилей. Вот, например, полезная вещь - [затемнение](https://userstyles.org/styles/71928/dim-unloaded-tabs) незагруженных после перезапуска браузера вкладок.

* [Tab Counter](https://addons.mozilla.org/ru/firefox/addon/tab-counter/). Показывает количество открытых вкладок.

* [Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab/). Перемещает вкладки набок, в вертикальную панель и позволяет группировать их в связанные по смыслу деревья. Особенно актуально на современных широкоформатных мониторах. Для тех, кто хочет отрывать больше 3.5 вкладок, не путаться в них и удобно управлять ими. Рекомендуется к использованию вместе со скином Flat и [этим стилем](https://userstyles.org/styles/71882/tree-style-tab-compact-tabs).

* [Vertical Toolbar](https://addons.mozilla.org/ru/firefox/addon/vertical-toolbar/). Панель для кнопок аддонов и самого браузера. Экономит ценное пространство по вертикали.

* [Yet Another Smooth Scrolling](https://addons.mozilla.org/ru/firefox/addon/yet-another-smooth-scrolling/). Тонкая настройка прокрутки, включая плавность, скорость и ускорение.

**Ньюфагам на заметку**: Не старайтесь ставить все аддоны, которые видите. Попробуйте поработать с почти голым Лисом, чтобы понять, чего именно вам будет не хватать и не ныть, что **ЛИС ТАРМАЗИТ ЛАГАЕТ КРАШИ НИРАБОТАЕТ**. Если что-то не работает, то скорее всего ты, анон, наустанавливал кучу сторонних плагинов, стилей, скриптов, аддонов-комбайнов, и некоторые из них друг с другом конфликтуют. Отключай по очереди, чтобы найти виновника. 

[**Потенциально проблемные аддоны**](http://kb.mozillazine.org/Problematic_extensions)
