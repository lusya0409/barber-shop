const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 1,
  // spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
