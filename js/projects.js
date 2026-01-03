document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filter-item');
    const projectCards = document.querySelectorAll('.project-card');

    function applyFilter(filter) {
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');


            if (filter === 'all') {
                card.style.display = 'block';
                return;
            }


            if (category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }


    filterItems.forEach(item => {
        item.addEventListener('click', function () {

            filterItems.forEach(i => i.classList.remove('active'));


            this.classList.add('active');


            const filter = this.getAttribute('data-filter');


            applyFilter(filter);
        });
    });


    applyFilter('all');
});
