document.addEventListener('DOMContentLoaded', function () {
    let carousel = document.getElementById('carouselExample');
    let carouselInstance = new bootstrap.Carousel(carousel);

    setInterval(function () {
        carouselInstance.next();
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    
    let links = document.querySelectorAll('.nav_links a');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById('check').checked = false;
        });
    });
});