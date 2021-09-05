// get the element to animate
var element = document.getElementById("box");
var midEle1 = document.getElementById("mid_1");
var midEle2 = document.getElementById("mid_2");
var midEle3 = document.getElementById("mid_3");
var midEle4 = document.getElementById("mid_4");
var kisaca = document.getElementById("kisaca");
var biz = document.getElementById("biz");

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);
document.addEventListener("onload", startOnLoad);

function startOnLoad() {
  element.classList.toggle("opacity-0");
  element.classList.toggle("animate__fadeInUp");
  midEle1.classList.toggle("opacity-0");
  midEle1.classList.toggle("animate__fadeInUp");
  midEle2.classList.toggle("opacity-0");
  midEle2.classList.toggle("animate__fadeInUp");
  midEle3.classList.toggle("opacity-0");
  midEle3.classList.toggle("animate__fadeInUp");
  midEle4.classList.toggle("opacity-0");
  midEle4.classList.toggle("animate__fadeInUp");
  kisaca.classList.toggle("opacity-0");
  kisaca.classList.toggle("animate__fadeInUp");
  biz.classList.toggle("opacity-0");
  biz.classList.toggle("animate__fadeInUp");
}

// check if element is in view
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

function inViewTwo() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    midEle3.getBoundingClientRect().top + scrollY + midEle3.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function inViewThree() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    kisaca.getBoundingClientRect().top + scrollY + kisaca.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView() && !element.classList.contains("animate__fadeInUp")) {
    // element is in view, add class to element
    element.classList.toggle("opacity-0");
    element.classList.toggle("animate__fadeInUp");
  }
  if (inViewTwo() && !midEle3.classList.contains("animate__fadeInUp")) {
    midEle1.classList.toggle("opacity-0");
    midEle1.classList.toggle("animate__fadeInUp");
    midEle2.classList.toggle("opacity-0");
    midEle2.classList.toggle("animate__fadeInUp");
    midEle3.classList.toggle("opacity-0");
    midEle3.classList.toggle("animate__fadeInUp");
    midEle4.classList.toggle("opacity-0");
    midEle4.classList.toggle("animate__fadeInUp");
  }
  if (inViewThree() && !kisaca.classList.contains("animate__fadeInUp")) {
    kisaca.classList.toggle("opacity-0");
    kisaca.classList.toggle("animate__fadeInUp");
    biz.classList.toggle("opacity-0");
    biz.classList.toggle("animate__fadeInUp");
  }
}
