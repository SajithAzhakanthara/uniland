window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


//swiper slider script starts


var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,   // ✅ center on mobile
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,  // ❌ disable center
    },
    992: {
      slidesPerView: 4,
      centeredSlides: false,
    }
  }
});

//swiper slider script ends

// const recentUpdateSwiper = new Swiper(".recent_update_slider", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   loop: true,
//   speed: 600,
//   spaceBetween: 30,

//   navigation: {
//     nextEl: ".recent_upadete_slide_next",
//     prevEl: ".recent_upadete_slide_prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,        // ✅ mobile (0–767)
//       centeredSlides: false,   // better for full width
//     },
//     768: {
//       slidesPerView: "auto",   // ✅ back to center mode
//       centeredSlides: true,
//     }
//   }
// });

const recentUpdateSwiper = new Swiper(".recent_update_slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  speed: 600,
  spaceBetween: 30,

  navigation: {
    nextEl: ".recent_upadete_slide_next",
    prevEl: ".recent_upadete_slide_prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,        // ✅ only 1 slide
      centeredSlides: false,   // ❌ remove center
      spaceBetween: 15,        // ✅ mobile spacing
    },
    768: {
      slidesPerView: "auto",   // desktop mode
      centeredSlides: true,
      spaceBetween: 30,
    }
  }
});


