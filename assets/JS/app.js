var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});


// Select all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation");

// Add an event listener for scrolling
window.addEventListener("scroll", () => {
    let currentSection = "";

    // Loop through each section to check if it’s currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Remove active class from all nav links
    navLinks.forEach((link) => {
        link.classList.remove("active");

        // Add active class to the current section’s nav link
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

/*const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}*/
