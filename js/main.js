const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageLightMode() {
    //Toggle Theme
    const themeBtn = document.querySelectorAll(".theme-btn");
    themeBtn[0].addEventListener("click", function () {
        let element = document.body;

        document
            .querySelectorAll(".main-btn")[0]
            .classList.add("no-transition");

        document
            .querySelectorAll(".email-btn-con")[0]
            .classList.add("no-transition");

        element.classList.toggle("light-mode");

        // Add a 0.3-second delay before removing the "no-transition" class
        setTimeout(function () {
            document
                .querySelectorAll(".main-btn")[0]
                .classList.remove("no-transition");
            document
                .querySelectorAll(".email-btn-con")[0]
                .classList.remove("no-transition");
        }, 300); // 300 milliseconds equals 0.3 seconds
    });
}

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            let currBtn = document.querySelectorAll(".active-btn");
            currBtn[0].classList.remove("active-btn");
            this.classList.add("active-btn");
        });
    }

    //Activate the section class
    allSections.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((section) => {
                section.classList.remove("active");
            });
            //var element =
            document.getElementById(id).classList.add("active");
        }
    });
}

let scrollTimeout;
let initialScrollState = null;

function scrollPage(direction) {
    // Find the current active element and its index
    // Check if we are at the top or bottom of the page
    const atTop = window.scrollY === 0;
    const atBottom =
        document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
            document.documentElement.clientHeight);

    if ((direction === "up" && !atTop) || (direction === "down" && !atBottom)) {
        return;
    }

    let activeIndex = -1;
    sectBtn.forEach((btn, index) => {
        if (btn.classList.contains("active-btn")) {
            activeIndex = index;
        }
    });

    if (activeIndex === -1) return;

    let newIndex = activeIndex;
    if (direction == "up" && activeIndex > 0) {
        newIndex--;
    } else if (direction == "down" && activeIndex < sectBtn.length - 1) {
        newIndex++;
    }

    // Move the active class
    if (newIndex !== activeIndex) {
        sectBtn[activeIndex].classList.remove("active-btn");
        sectBtn[newIndex].classList.add("active-btn");
    }

    // Active the new active class
    const id = sectBtn[newIndex].getAttribute("data-id");
    if (id) {
        sections.forEach((section) => {
            section.classList.remove("active");
        });
        //var element =
        document.getElementById(id).classList.add("active");
    }
}

window.addEventListener("wheel", function (e) {
    clearTimeout(scrollTimeout);

    if (initialScrollState === null) {
        const atTop = window.scrollY === 0;
        const atBottom =
            document.documentElement.clientHeight + window.scrollY >=
            (document.documentElement.scrollHeight ||
                document.documentElement.clientHeight);
        initialScrollState = { atTop, atBottom };
    }

    const direction = e.wheelDelta < 0 ? "down" : "up";

    scrollTimeout = setTimeout(function () {
        if (initialScrollState.atTop || initialScrollState.atBottom) {
            scrollPage(direction);
        }
        initialScrollState = null; // Reset the initial scroll state after handling the scroll
    }, 150); // Adjust the delay as needed
});

PageTransitions();
PageLightMode();
