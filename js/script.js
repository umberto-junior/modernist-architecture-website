const menuLinks = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');
const offset = 20; // Define the offset as a constant

const setActiveLink = (activeId) => {
    menuLinks.forEach(link => {
        const sectionId = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', sectionId === activeId);
    });
};

const handleScroll = () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
            currentSectionId = section.id;
        }
    });

    setActiveLink(currentSectionId);
};

const handleClick = (e) => {
    e.preventDefault();
    const sectionId = e.currentTarget.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    window.scrollTo({ top: section.offsetTop - offset, behavior: 'smooth' });
};

// Event listeners
window.addEventListener('scroll', handleScroll);
menuLinks.forEach(link => link.addEventListener('click', handleClick));