var misyon = document.getElementById("misyon");
var ve = document.getElementById("ve");
var vizyon = document.getElementById("vizyon");

document.addEventListener("scroll", animate);

function inViewTwo() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    misyon.getBoundingClientRect().top + scrollY + misyon.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate() {
  // is element in view?
  if (inViewTwo() && !misyon.classList.contains("animate__fadeInUp")) {
    // element is in view, add class to element

    misyon.classList.add("animate__fadeInUp");

    ve.classList.add("animate__fadeInUp");

    vizyon.classList.add("animate__fadeInUp");
  }
}
