document.addEventListener('DOMContentLoaded', () => {
    const slider = (root, btns, item, activeClass) => {
        const sliderContent = document.querySelector(root);
        const buttons = sliderContent.querySelectorAll(btns);
        const contents = sliderContent.querySelectorAll(item);
        
        const toggleItems = (items, btns) => {
            btns.forEach(btn => btn.classList.remove(activeClass));
            items.forEach(item => item.style.opacity = 0);
        };

        toggleItems(contents, buttons);
        contents[0].style.opacity = 1;
        buttons[0].classList.add(activeClass);

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                toggleItems(contents, buttons);
                contents[index].style.opacity = 1;
                e.target.classList.add(activeClass);
            })
        });
    };
    slider('#about-slider-content', '#about-slider-buttons img', '.content', 'slider-button-active');
    slider('#services-content-slider', '#services-slider-buttons img', '.services-slider-content', 'slider-button-active');
    slider('#team-slider', '.team-slider-dots li', '.team-slider-content', 'slider-button-active');
    slider('#testimonials-slider', '.testimonials-slider-dots li', '.testimonials-slider-content', 'slider-button-active');
    slider('#blog-slider', '.blog-slider-dots li', '.blog-slider-content', 'slider-button-active');
});