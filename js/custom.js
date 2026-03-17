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
        // Navigation arrows
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
    });

//swiper slider script ends