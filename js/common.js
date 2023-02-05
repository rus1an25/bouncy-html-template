document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.projects-content');
    const mainSliderBtnBottom = document.querySelector('.main-slider-button-bottom');
    const readMoreBtn = document.querySelector('.read-more');
    const bouncy = document.querySelector('.bouncy');
    const about = document.querySelector('#about');

    grid.addEventListener('click', e => {
        let target = e.target;
        if(target.tagName === 'SPAN'){
            console.log(target.parentNode)
            switch (target.parentNode.id) {
                case '1':
                    grid.style.gridTemplateColumns = '2fr 1fr 1fr';
                    grid.querySelectorAll('.projects-content-over-layer').forEach(el => el.style.opacity = 1);
                    target.parentNode.style.opacity = 0;
                    break;
                case '2':
                    grid.style.gridTemplateColumns = '1fr 2fr 1fr';
                    grid.querySelectorAll('.projects-content-over-layer').forEach(el => el.style.opacity = 1);
                    target.parentNode.style.opacity = 0;
                    break;
                case '3':
                    grid.style.gridTemplateColumns = '1fr 1fr 2fr';
                    grid.querySelectorAll('.projects-content-over-layer').forEach(el => el.style.opacity = 1);
                    target.parentNode.style.opacity = 0;
                    break;
                default:
                    grid.style.gridTemplateColumns = '2fr 1fr 1fr';
                    grid.querySelectorAll('.projects-content-over-layer').forEach(el => el.style.opacity = 1);
            }
        }
    });

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 5,
        maxZoom: 20,
        attribution: ""
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('Our office is here')
        .openPopup();

    const addScrollTo = (element, target) => {
        element.addEventListener('click', () => {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        });
    }

    addScrollTo (mainSliderBtnBottom, bouncy);
    addScrollTo (readMoreBtn, about);
});