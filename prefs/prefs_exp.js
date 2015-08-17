// Отключает замеры производительности аддонов каждые 15 секунд. Эти замеры сами могут являться
// причиной тормозов браузера. Включено по умолчанию пока только на Nightly. Результаты показываются
// в Add-on Manager в виде: “[Add-on Name] might be making [Firefox version] run slowly”.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1071880#c8
// https://bugzilla.mozilla.org/show_bug.cgi?id=1071880#c67
// https://hg.mozilla.org/mozilla-central/file/ca96c76db6a2/toolkit/components/perfmonitoring/AddonWatcher.jsm#l82
user_pref("browser.addon-watch.interval", -1);

// Отключает автообновления и редиректы страниц, происходящие через <meta http-equiv="refresh">
// (редиректы через HTTP 3xx не отключает) -- http://kb.mozillazine.org/Accessibility.blockautorefresh
user_pref("accessibility.blockautorefresh", true);

// https://github.com/The-OP/Fox/issues/8
user_pref("dom.max_chrome_script_run_time", 600);

user_pref("dom.max_script_run_time", 30);

// Активное использование Куклоскрипта вместе с недельными аптаймами может вызывать переполнение
// дефолтного пятимегабайтного session storage.
// https://github.com/SthephanShinkufag/Dollchan-Extension-Tools/issues/748
user_pref("dom.storage.default_quota", 10240);

// Для сверхбольших сессий.
user_pref("browser.sessionstore.interval", 300000);

// Объем RAM-кэша в килобайтах. Полезно увеличить, если много памяти.
user_pref("browser.cache.memory.capacity", 524288);
// Максимальный объем одного элемента.
user_pref("browser.cache.memory.max_entry_size", 52428);
// При этом лучше будет отключить дисковый кэш, иначе Firefox почему-то начнет писать в него еще до
// заполнения RAM-кэша.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk_cache_ssl", false);
