mousewheel.min_line_scroll_amount установить 40
– чтобы страницы прокручивались колёсиком мыши на большее расстояние

general.smoothScroll.mouseWheel.durationMinMS установить 67
general.smoothScroll.mouseWheel.durationMaxMS установить 133
– чтобы уменьшить в 3 раза время анимации плавной прокрутки

middlemouse.scrollbarPosition установить true
– чтобы моментально центрировать полосу прокрутки в месте щелчка средней кнопкой мыши

dom.popup_allowed_events установить mouseup
– чтобы всплывающие окна могли открываться только по щелчку мыши

browser.link.open_newwindow установить 1
browser.link.open_newwindow.restriction установить 0
– чтобы всплывающие окна открывались во вкладке, из которой были запущены, без исключений

security.dialog_enable_delay установить 0
– чтобы в диалоге скачивания файла или в диалоге установки расширения не было секундной задержки до того, как кнопка “Сохранить файл” или “Установить расширение” станет доступна
full-screen-api.transition-duration.enter установить 0 0
full-screen-api.transition-duration.leave установить 0 0
– чтобы отключить анимацию перехода в полноэкранный режим и выхода из него для HTML5-видео

Создать новую настройку: щёлкнуть правой кнопкой мыши по пустому месту в about:config, выбрать Создать → Логическое, ввести имя и значение ниже:
browser.download.lastDir.savePerSite установить false
– чтобы по команде “Сохранить [изображение] как …” открывалась последняя папка, в которую что-либо было сохранено из Firefox, а не последняя папка, в которую что-либо было сохранено из Firefox с текущего сайта (т.е. не запоминать последнюю папку сохранения посайтово)
