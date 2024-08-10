function toggleMenu() {
    const navMenu = document.querySelector('nav');
    if (navMenu.style.left === "0px") {
        navMenu.style.left = "-250px";
    } else {
        navMenu.style.left = "0px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    navigateTo('home'); // Default to home section
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(this.getAttribute('href').substring(1));
            toggleMenu(); // Close menu after selection
        });
    });
});

function navigateTo(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}