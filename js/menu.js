document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы
    const burger = document.getElementById('burger');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Обработчик клика по бургеру
    burger.addEventListener('click', function (event) {
        event.stopPropagation(); // Препятствуем всплытию события
        dropdownMenu.classList.toggle('active');
    });

    // Закрываем меню при клике вне его области
    document.addEventListener('click', function (event) {
        // Проверяем, кликнули ли мы *не* по меню и *не* по бургеру
        const isClickInsideMenu = dropdownMenu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Предотвращаем закрытие меню при клике внутри него
    dropdownMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
