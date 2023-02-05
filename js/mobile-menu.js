document.addEventListener('DOMContentLoaded', () => {
    const mobileHeader = document.querySelector('.mobile-header');
    const mobileMenuItems = mobileHeader.querySelector('.mobile-menu-items');
    const sections = document.querySelectorAll('section');

    const heightMainSlider = document.querySelector('.main-slider-background').clientHeight;
    const heightMobileHeader = mobileHeader.clientHeight;

    let currentActive = 0;

    const makeActive = (currentLink, className) => mobileMenuItems.querySelectorAll('li')[currentLink].classList.add(className);
    const removeActive = (link, className) => mobileMenuItems.querySelectorAll('li')[link].classList.remove(className);
    const removeAllActive = (className) => [...Array(sections.length).keys()].forEach(link => removeActive(link, className));

    makeActive(currentActive, 'mobile-active');
    
    const createActiveItem = (link, className) => {
        removeAllActive(className);
        makeActive(link, className);
    }
    
    mobileMenuItems.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const ref = e.target.dataset.anchor;
            let item = document.querySelector(ref);
            let wrapper = document.querySelector('html');
            let count = item.offsetTop - wrapper.scrollTop - heightMobileHeader;
            console.log(item.offsetTop - wrapper.scrollTop)
            wrapper.scrollBy({top: count, behavior: 'smooth'})
        }
    });

    document.addEventListener('scroll', () => {
        const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - heightMobileHeader) - 1;
        createActiveItem(current, 'mobile-active');
        if (window.pageYOffset > heightMainSlider - heightMobileHeader) {
            mobileHeader.classList.add('light')
        }
        if (window.pageYOffset < heightMainSlider - heightMobileHeader) {
            mobileHeader.classList.remove('light')
        }
    });
});