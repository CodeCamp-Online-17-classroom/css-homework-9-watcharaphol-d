// =============== Change about drop-down symbol ================
document.getElementById("myBtn").onclick = function () { myFunction() };
let symbol_state = document.getElementById("drop-symbol").className;
let symbol_value = 'bi bi-chevron-up';
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    if (symbol_state == symbol_value) {
        document.getElementById("drop-symbol").className = "bi bi-chevron-down";
        symbol_state = "bi bi-chevron-down";
    }
    else {
        document.getElementById("drop-symbol").className = "bi bi-chevron-up";
        symbol_state = "bi bi-chevron-up";
    }
}

// =============== Hamberger Navbar ================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close 
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// =============== Smooth Scrollbar ================
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// =============== Goback to top ================
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;

function handleScroll() {
    // Do something on scroll
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

// =============== Goback to top-Decorate ================
document.getElementById("scrollToTopBtn").onmouseover = function () { mouseOver() };
document.getElementById("scrollToTopBtn").onmouseout = function () { mouseOut() };
function mouseOver() {
    document.getElementById("ToTopWord").style.display = "inline-block";
}

function mouseOut() {
    document.getElementById("ToTopWord").style.display = "none";
}

// =============== Switch icon ================
let bodywidth = screen.width;
function updateSize() {
    bodywidth = window.innerWidth;

    if (bodywidth <= 1000) {
        document.getElementById("uberApp-pic").src = "./PIC/Rider-App-Icon_iOS.svg";
        document.getElementById("uberDriveApp-pic").src = "./PIC/Driver-App-Icon_iOS.svg";
    }
    else {
        document.getElementById("uberApp-pic").src = "./PIC/uber-driver.webp";
        document.getElementById("uberDriveApp-pic").src = "./PIC/uber-driver.webp";
    }
}
// Add event listener for window resize
window.addEventListener("resize", updateSize);
// Initial update
updateSize();

// =============== App Arrow ================

let appArrow1 = document.getElementById("uberApp");
let appArrow2 = document.getElementById("uberDriveApp");
appArrow1.addEventListener("mouseover", Arrow1Hover, false);
appArrow1.addEventListener("mouseout", Arrow1NotHover, false);
appArrow2.addEventListener("mouseover", Arrow2Hover, false);
appArrow2.addEventListener("mouseout", Arrow2NotHover, false);

function Arrow1Hover() {
    document.getElementById("uberAppArrow").classList.add("arrowright");
}
function Arrow1NotHover() {
    document.getElementById("uberAppArrow").classList.remove("arrowright");
}
function Arrow2Hover() {
    document.getElementById("uberDriveAppArrow").classList.add("arrowright");
}
function Arrow2NotHover() {
    document.getElementById("uberDriveAppArrow").classList.remove("arrowright");
}
// ===============================