/* =========================================================
   VADDE PAVAN PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================================================
   1. SELECT ELEMENTS
   ========================================================= */

const header = document.getElementById("header");

const menuButton = document.getElementById("menu-button");

const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll(".nav-link");

const backToTop = document.querySelector(".back-to-top");


/* =========================================================
   2. MOBILE MENU
   ========================================================= */

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("open");

        menuButton.classList.toggle("active");

    });

}


/* =========================================================
   3. CLOSE MOBILE MENU
      When a navigation link is clicked
   ========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuButton.classList.remove("active");

    });

});


/* =========================================================
   4. HEADER SCROLL EFFECT
   ========================================================= */

function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =========================================================
   5. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = sectionId;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        const linkTarget = link.getAttribute("href");


        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================================
   6. SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {

            return;

        }


        const targetElement =
            document.querySelector(targetId);


        if (!targetElement) {

            return;

        }


        event.preventDefault();


        targetElement.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =========================================================
   7. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".about-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".experience-card, " +
    ".activity-card, " +
    ".contact-content, " +
    ".contact-item"
);


/* Initial state */

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/* Intersection Observer */

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {

                return;

            }


            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";


            observer.unobserve(entry.target);

        });

    },

    {

        threshold: 0.12,

        rootMargin: "0px 0px -50px 0px"

    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   8. STAGGER ANIMATION FOR SKILLS
   ========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 70}ms`;

});


/* =========================================================
   9. STAGGER ANIMATION FOR ACTIVITIES
   ========================================================= */

const activityCards =
    document.querySelectorAll(".activity-card");


activityCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});


/* =========================================================
   10. PROJECT TECHNOLOGY HOVER
   ========================================================= */

const technologyTags =
    document.querySelectorAll(".project-technologies span");


technologyTags.forEach((tag) => {

    tag.addEventListener("mouseenter", () => {

        tag.style.transform = "translateY(-3px)";

    });


    tag.addEventListener("mouseleave", () => {

        tag.style.transform = "translateY(0)";

    });

});


/* =========================================================
   11. BACK TO TOP
   ========================================================= */

if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   12. BACK TO TOP VISIBILITY
   ========================================================= */

function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";

        backToTop.style.visibility = "visible";

        backToTop.style.transform =
            "translateY(0)";

    } else {

        backToTop.style.opacity = "0";

        backToTop.style.visibility = "hidden";

        backToTop.style.transform =
            "translateY(10px)";

    }

}


if (backToTop) {

    backToTop.style.transition =
        "opacity 0.3s ease, " +
        "visibility 0.3s ease, " +
        "transform 0.3s ease";

    backToTop.style.opacity = "0";

    backToTop.style.visibility = "hidden";

}


window.addEventListener("scroll", updateBackToTop);

updateBackToTop();


/* =========================================================
   13. ESCAPE KEY
      Close mobile navigation
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navbar) {

            navbar.classList.remove("open");

        }


        if (menuButton) {

            menuButton.classList.remove("active");

        }

    }

});


/* =========================================================
   14. CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!navbar || !menuButton) {

        return;

    }


    const clickedInsideNavbar =
        navbar.contains(event.target);


    const clickedMenuButton =
        menuButton.contains(event.target);


    if (
        navbar.classList.contains("open") &&
        !clickedInsideNavbar &&
        !clickedMenuButton
    ) {

        navbar.classList.remove("open");

        menuButton.classList.remove("active");

    }

});


/* =========================================================
   15. IMAGE ERROR HANDLING
   ========================================================= */

const portfolioImages =
    document.querySelectorAll("img");


portfolioImages.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const parent = image.parentElement;


        if (parent) {

            parent.classList.add("image-not-found");

        }

    });

});


/* =========================================================
   16. CURRENT YEAR
   ========================================================= */

const footerText =
    document.querySelector(".footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.textContent =
        `© ${currentYear} Vadde Pavan. All Rights Reserved.`;

}


/* =========================================================
   17. PREVENT EMPTY EXTERNAL LINKS
   ========================================================= */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach((link) => {

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});


/* =========================================================
   18. PAGE LOADED
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* =========================================================
   END OF SCRIPT.JS
   ========================================================= */