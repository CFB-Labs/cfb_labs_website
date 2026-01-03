document.addEventListener('DOMContentLoaded', function () {
    
    const burger = document.getElementById('burger');
    const dropdownMenu = document.getElementById('dropdownMenu');

   
    burger.addEventListener('click', function (event) {
        event.stopPropagation(); 
        dropdownMenu.classList.toggle('active');
    });

    
    document.addEventListener('click', function (event) {
      
        const isClickInsideMenu = dropdownMenu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            dropdownMenu.classList.remove('active');
        }
    });

    
    dropdownMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
