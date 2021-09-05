var element = document.getElementById("box");

document.addEventListener("scroll", animate);
document.addEventListener("onload", startOnLoad);

function startOnLoad() {
  element.classList.toggle("opacity-0");
  element.classList.toggle("animate__fadeInUp");
}

function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + element.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate() {
  // is element in view?
  if (inView() && !element.classList.contains("animate__fadeInUp")) {
    // element is in view, add class to element
    element.classList.toggle("opacity-0");
    element.classList.toggle("animate__fadeInUp");
  }
}
