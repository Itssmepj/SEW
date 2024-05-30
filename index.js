const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});


// Accordion
document.addEventListener('DOMContentLoaded', function () {
   const accordionBtns = document.querySelectorAll('.accordion-btn');
 
   accordionBtns.forEach(function (btn) {
     btn.addEventListener('click', function () {
       // Close all panels
       accordionBtns.forEach(function (otherBtn) {
         if (otherBtn !== btn) {
           const otherPanel = otherBtn.nextElementSibling;
           otherPanel.classList.remove('show');
           otherPanel.style.maxHeight = 0;
           otherBtn.classList.remove('active');
         }
       });
 
       // Toggle the clicked panel
       const panel = this.nextElementSibling;
       if (panel.classList.contains('show')) {
         panel.classList.remove('show');
         panel.style.maxHeight = 0;
         this.classList.remove('active');
       } else {
         panel.classList.add('show');
         panel.style.maxHeight = panel.scrollHeight + '500px';
         this.classList.add('active');
       }
     });
   });
 });

 

// Footer year
document.getElementById("year").innerHTML = new Date().getFullYear();



