# Greylist

* [Шапка](header.md)
  * [FAQ](header.md#user-content-faq)
  * [Аддоны](header.md#user-content-Аддоны)
* [Приложение](addendum.md)
  * [Настройки about:config](addendum.md#user-content-Настройки-aboutconfig)
  * [Продвинутые аддоны](addendum.md#user-content-Продвинутые-аддоны)
  * [Интересные ссылки](addendum.md#user-content-Интересные-ссылки)
    * [Безопасность](addendum.md#user-content-Безопасность)
    * [Приватность](addendum.md#user-content-Приватность)
* **Серый список аддонов**

Список аддонов, содержащих сомнительную и нежелательную функциональность.

Перед установкой аддона **всегда** следует читать Privacy Policy на его странице в AMO. Согласно [процедуре ревью аддонов на AMO](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews), для получения статуса Full Review (зеленая кнопка установки), аддоны  обязаны декларировать в Privacy Policy всю собираемую информацию.

#### Adblock Plus

ABP нехорош не только своими [продажными acceptable ads](https://en.wikipedia.org/wiki/Adblock_Plus#Controversy_over_ad_filtering_and_ad_whitelisting), но и тем, что содержит [зонд](https://raw.githubusercontent.com/The-OP/Fox/master/abp_notification.png), постоянно стучащий на его офсайт. Подробнее [здесь](https://adblockplus.org/development-builds/notifications-in-adblock-plus) и [здесь](https://adblockplus.org/en/privacy). [Список](https://raw.githubusercontent.com/The-OP/Fox/master/abe_diffs.png) других нежелательных фич, которые авторы ABP уж слишком часто добавляют.


#### Ghostery

Часто спрашивают, чем плох Ghostery. Во-первых, он принадлежит маркетинговой компании, собирающей [статистику](https://addons.mozilla.org/en-US/firefox/addon/ghostery/privacy/) с wannabe-анонимусов. Во-вторых - распространяется под [проприетарной лицензией](https://addons.mozilla.org/en-US/firefox/addon/ghostery/license/7.1.1.5).

При всем этом он бесполезен, если уже используется баннерорезка с анти-трекерными подписками и какой-нибудь аддон для контроля/очистки кук. См. [исследование Стэнфорда](https://cyberlaw.stanford.edu/blog/2011/09/tracking-trackers-self-help-tools), сравнивающее баннерорезки с Ghostery по эффективности. Если уж вам очень сильно хочется автоматического все-в-одном комбайна, подобного Ghostery - используйте Privacy Badger от Electronic Frontier Foundation, распространяющийся под свободной лицензией.


#### NoScript

NoScript с настройками по умолчанию периодически посылает запрос на свой сервер для определения IP компьютера пользователя с целью защиты его от DNS rebinding. Утверждается, что никакой статистики на стороне сервера при этом не ведется. Информация об этой функциональности вместе со способом ее отключения приведена в [Privacy Policy аддона](https://addons.mozilla.org/en-US/firefox/addon/noscript/privacy/).


#### Stylish

Оригинальный разработчик Stylish продал сам аддон и userstyles.org[[1]](https://www.ghacks.net/2017/01/04/major-stylish-add-on-changes-in-regards-to-privacy/). Новый владелец поспешил монетизировать проект - анонсировал партнерство с рекламной компанией[[2]](https://forum.userstyles.org/discussion/53233/announcement-to-the-community) и уже встроил зонд в Stylish для Chrome, посылающий ему посещенные пользователем URL[[3]](https://www.ghacks.net/2017/01/04/major-stylish-add-on-changes-in-regards-to-privacy/#comment-4084542)[[4]](https://forum.userstyles.org/discussion/comment/109446/#Comment_109446). Stylish для Firefox пока (?) чист, однако следует тщательно приглядывать за любыми изменениями.


#### Tab Mix Plus

Открывает свой официальный сайт и передает туда версию аддона при [установке и каждом обновлении](https://bitbucket.org/onemen/tabmixplus/src/80fa0a2b76243ce5d9350889f97fbcabce5e8549/chrome/content/tab/tab.js?at=default#tab.js-2632). Нет никаких настроек для отключения этой вредной для пользователя функциональности.


#### Tampermonkey

Tampermonkey выпускается под проприетарной лицензией, и более того - имеет обфусцированный исходный код, что очень нетипично для браузерных расширений, даже проприетарных. Поскольку анализ исходного кода нарочно затруднен, очевидно что автор что-то скрывает. Также известно, что расширение содержит несколько включенных по умолчанию [зондов](https://tampermonkey.net/privacy.php?ext=dhdg#ext-general). Так что к использованию категорически не рекомендуется.


#### uBlock

uBlock **Origin** - это и есть настоящий uBlock от первоначального автора. То, что сейчас называется uBlock - его форк. Для пропустивших драму - кратко [тут](https://www.opennet.ru/opennews/art.shtml?num=42107). Кроме того, с момента разветвления (версии 0.9.3) разработка Origin идет значительно [активнее](https://github.com/gorhill/uBlock/releases) чем у [форка](https://github.com/chrisaljoudi/uBlock/releases). **UPD:** Форк уже больше года не обновлялся, но на AMO все еще зачем-то присутствует.


#### Web of Trust, MyWOT/WOT: Website Reputation Rating

WOT был пойман на [продаже неанонимизированной истории серфинга пользователей](https://www.ghacks.net/2016/11/01/browsing-history-sold/) рекламным компаниям, после чего Mozilla удалила его с AMO. Сейчас разработчики делают вид что раскаялись и исправили это вопиющее нарушение приватности, а аддон снова присутствует на AMO, однако ни о каком доверии им речи идти уже не может абсолютно. Тем более что пункт о передаче собранной с пользователей информации третьим лицам [никуда не делся из Privacy Policy](https://addons.mozilla.org/en-US/firefox/addon/wot-safe-browsing-tool/privacy/).


#### YouTube High Definition

Открывает свой официальный сайт при [установке и каждом обновлении](https://addons.mozilla.org/firefox/files/browse/488204/file/bootstrap.js#L511) аддона. Нет никаких настроек для отключения этой навязчивой рекламы.
