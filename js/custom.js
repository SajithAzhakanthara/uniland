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
      centeredSlides: true,   // 
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,  // 
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

//custom slider button recent updates

function customRecentSliderButton() {
  let buttonLeft = document.querySelectorAll('.custom_recent_slider_btn_left');
  let buttonRight = document.querySelectorAll('.custom_recent_slider_btn_right');

  let originalButtonLeft = document.querySelector('.recent_upadete_slide_prev');
  let originalButtonRight = document.querySelector('.recent_upadete_slide_next');

  buttonLeft.forEach(function(item){
    item.addEventListener('click', function(){
      originalButtonLeft.click();
    })
    
  })

  buttonRight.forEach(function(item){
    item.addEventListener('click', function(){
      originalButtonRight.click();
    })
  })



}

//menu toggle script

function mobileMenuToggle() {

    let mobileToggle = document.querySelector('.mobile_menu_toggle_btn');
    let mobileMenu = document.querySelector('.mobile_menu');
    let mobileMenuClose = document.querySelector('.menu_close_btn');

    mobileToggle.addEventListener('click',function(){
      mobileMenu.classList.remove('d-none');
    })

    mobileMenuClose.addEventListener('click',function(){
      mobileMenu.classList.add('d-none');
    })


}








customRecentSliderButton();
mobileMenuToggle()




