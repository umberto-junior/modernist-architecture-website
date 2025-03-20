const menuLinks = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');

let currentSectionId = '';

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 20 && window.scrollY < sectionTop + sectionHeight - 20) {
            currentSectionId = section.id;
        }
    });

    menuLinks.forEach(link => {
        const sectionId = link.getAttribute('href').replace('#', '');
        if (sectionId === currentSectionId) {
            link.style.color = 'hsl(0, 0%, 0%)';
        } else {
            link.style.color = 'hsl(0, 0%, 50%)';
        }
    });
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        const section = document.getElementById(sectionId);
        window.scrollTo({ top: section.offsetTop - 20, behavior: 'smooth' });
    });
});