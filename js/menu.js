document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (!burger || !dropdownMenu) return;

    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!burger.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});