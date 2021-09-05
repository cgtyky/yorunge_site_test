const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  spaceBetween: 40,
  slidesPerView: "auto",
  slidesOffsetBefore: 96,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
