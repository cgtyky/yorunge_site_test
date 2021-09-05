const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  effect: "fade",

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
