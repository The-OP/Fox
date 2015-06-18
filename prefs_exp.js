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
