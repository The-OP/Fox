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

Часто спрашивают, чем плох Ghostery. Во-первых, он принадлежит маркетинговой компании, собирающей [статистику](https://addons.mozilla.org/firefox/addon/ghostery/privacy/) с wannabe-анонимусов. Во-вторых - распространяется под [проприетарной лицензией](https://addons.mozilla.org/firefox/addon/ghostery/license/5.4.1).

При всем этом он бесполезен, если уже используется баннерорезка с анти-трекерными подписками и какой-нибудь аддон для контроля/очистки кук. См. [исследование Стэнфорда](http://cyberlaw.stanford.edu/node/6730), сравнивающее баннерорезки с Ghostery по эффективности. Если уж вам очень сильно хочется автоматического все-в-одном комбайна, подобного Ghostery - используйте Privacy Badger от Electronic Frontier Foundation, распространяющийся под свободной лицензией.


#### uBlock

uBlock **Origin** - это и есть настоящий uBlock от первоначального автора. То, что сейчас называется uBlock - его форк. Для пропустивших драму - кратко [тут](https://www.opennet.ru/opennews/art.shtml?num=42107). Кроме того, с момента разветвления (версии 0.9.3) разработка Origin идет значительно [активнее](https://github.com/gorhill/uBlock/releases) чем у [форка](https://github.com/chrisaljoudi/uBlock/releases). **UPD:** Форк уже больше года не обновлялся, но на AMO все еще зачем-то присутствует.
