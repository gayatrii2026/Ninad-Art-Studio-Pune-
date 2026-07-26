/* ===========================================
   NINAD ART STUDIO - JAVASCRIPT
   Part 1
===========================================*/


/*===========================================
        STICKY NAVBAR
===========================================*/

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
        header.style.transition = ".4s";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});


/*===========================================
      SMOOTH SCROLL
===========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*===========================================
      SCROLL REVEAL ANIMATION
===========================================*/

const revealElements = document.querySelectorAll(

".hero,.welcome,.products,.features,.reviews,.about-section,.gallery,.contact-section,.map-section,.cta"

);

function revealOnScroll(){

    revealElements.forEach(function(element){

        const position = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*===========================================
      ACTIVE NAVIGATION
===========================================*/

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    if(link.getAttribute("href")==currentPage){

        link.classList.add("active");

    }

});


/*===========================================
      IMAGE HOVER EFFECT
===========================================*/

const images = document.querySelectorAll(".gallery-item img");

images.forEach(function(image){

    image.addEventListener("mouseover",function(){

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseout",function(){

        image.style.transform="scale(1)";

    });

});


/*===========================================
      WELCOME MESSAGE
===========================================*/

console.log("Welcome to Ninad Art Studio");
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}