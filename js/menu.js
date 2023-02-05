document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuItems = document.querySelectorAll('.menu-items li');
    const sections = document.querySelectorAll('section');

    let currentActive = 0;

    const makeActive = (currentLink, className) => menuItems[currentLink].classList.add(className);
    const removeActive = (link, className) => menuItems[link].classList.remove(className);
    const removeAllActive = (className) => [...Array(sections.length).keys()].forEach(link => removeActive(link, className));

    makeActive(currentActive, 'active');
    
    const createActiveItem = (link, className) => {
        removeAllActive(className);
        makeActive(link, className);
    }
    
    menuItems.forEach(item => {
        const ref = item.dataset.anchor;
        item.addEventListener('click', () => {
            document.querySelector(ref).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    });

    document.addEventListener('scroll', () => {
        const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop) - 1;

        if (window.pageYOffset === 0) {
            removeAllActive('dark-active');
            createActiveItem(current, 'active');
            header.style.opacity = 1;
            header.style.backgroundColor = 'transparent';
            header.style.color = '#fff';
            header.style.transition = 'all .5s ease';
        } else {
            createActiveItem(current, 'dark-active');
            removeAllActive('active');
            header.style.opacity = 0;
            header.addEventListener('mouseover', () => {
                if (window.pageYOffset !== 0) {
                    createActiveItem(current, 'dark-active')
                    header.style.opacity = 1;
                    header.style.backgroundColor = '#fff';
                    header.style.color = '#333b46';
                }
            });
            header.addEventListener('mouseout', () => {
                if (window.pageYOffset !== 0) {
                    header.style.opacity = 0;
                }
            });
            createActiveItem(current, 'active');
            header.style.backgroundColor = 'transparent';
            header.style.color = '#fff';
            header.style.transition = 'all .5s ease';
        }
    });
});