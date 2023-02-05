document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");

    // element selectors
    const imgAll = document.querySelectorAll(".grid-item");

    // buttons
    const filterButtonsGroupe = document.querySelector(".filter-button-group");
    const filterButtons = filterButtonsGroupe.children;

    const msnry = new Masonry(grid, {
        //options
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
    });
    msnry.layout();

    //element & class name
    function toggleClass(parentElem, childElems, className) {
        for (let i = 0; i < childElems.length; i++) {
            if (childElems[i] === parentElem) {
                childElems[i].classList.add(className);
            } else {
                childElems[i].classList.remove(className);
            }
        }
    }

    filterButtonsGroupe.addEventListener("click", e => {
        if (e.target.classList.contains('filter-button')) {
            let filter = e.target.dataset.filter;
            toggleClass(e.target, filterButtons, "is-active");

            // show all images
            if (filter === "*") {
                imgAll.forEach((img) => {
                    img.style.display = "block";
                });
            } else {
                imgAll.forEach((img) => {
                    if (img.classList.contains(filter)) {
                        img.style.display = "block";
                    } else {
                        img.style.display = "none";
                    }
                });
            }
            msnry.layout();
        }
    });
});
