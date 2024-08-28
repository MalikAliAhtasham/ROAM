document.addEventListener('DOMContentLoaded', function() {
    var spinner = document.getElementById('spinner');
    var content = document.querySelector('.content');

    console.log("Page loaded, showing spinner.");

    content.classList.add('hide-content');
    spinner.classList.add('show');
    
    setTimeout(function() {
        console.log("Timeout reached, hiding spinner.");
        spinner.classList.remove('show');
        content.classList.remove('hide-content');
    }, 1000);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});




