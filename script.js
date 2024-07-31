document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const menuBackground = document.getElementById('menu-background');

    function checkScroll() {
        console.log(window.scrollY); // Log scrollY value to verify it is being read correctly

        if (window.scrollY > 50) { // Adjust the value as needed
            menu.classList.add('white-bg');
            menu.classList.remove('transparent-bg');
        } else {
            menu.classList.remove('white-bg');
            menu.classList.add('transparent-bg');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check scroll position on page load
});
