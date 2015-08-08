Скрипты для помощи в поисках новых настроек:
* `fx-get-dist URL` <br>
	Скачивает дистрибутивы Firefox и присваивает им однообразные имена, чтобы не возникало путаницы в билдах разных версий, ОС, разрядностей и локалей. <br>
	`URL` - ссылка на дистрибутив из одного из следующих подкаталогов FTP Mozilla: (1) [релизы и беты](https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/), (2) [релиз-кадидаты, пребеты](https://ftp.mozilla.org/pub/mozilla.org/firefox/candidates/), (3) [Aurora и Nightly](https://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/2015/08/).

* `fx-unpack-prefs DIST` <br>
	Распаковывает из дистрибутивов файлы с дефолтныим настройками. <br>
	`DIST` - файл дистрибутива, скачанный `fx-get-dist`.

* `fx-diff-prefs VER1 VER2` <br>
	Сравнивает дефолтные настройки разных версий. <br>
	`VER1 VER2` - каталоги с дефолтными настройками, созданные `fx-unpack-prefs`. <br>
	Обозначения:
	* `+++ prefName: prefValue` - добавленные в `VER2` настройки. <br>
	* `--- prefName` - удаленные. <br>
	* `*** prefName: oldValue -> newValue` - измененные, со старым (в `VER1`) и новым (в `VER2`) значениями.
