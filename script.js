document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    const links = document.querySelectorAll('.navbar a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href") === "#" ? "home" : e.currentTarget.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Highlight active section link
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
});
