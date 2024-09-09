//Active  navLink on scroll
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header navlist a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLink.forEach(navLink => {
        navLink.classList.remove('active');
        document.querySelector('header navlist a[href*' + id + ']').classList.add('active');
      });
    };
  });
}


//navbar
const bars = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');

bars.addEventListener('click', () => {
  navlist.classList.toggle("open");
  bars.classList.toggle(".fa-xmark")
})
window.onscroll = () => {
  navlist.classList.remove("open");
  bars.classList.remove(".fa-xmark")
}

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myswiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


