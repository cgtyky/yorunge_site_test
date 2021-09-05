var box_one = document.getElementById("box_one");
var box_two = document.getElementById("box_two");
var box_three = document.getElementById("box_three");
var box_four = document.getElementById("box_four");

document.addEventListener("scroll", animate);
document.addEventListener("onload", startOnLoad);

function startOnLoad() {
  box_one.classList.toggle("animate__fadeInUp");

  box_two.classList.toggle("animate__fadeInUp");

  box_three.classList.toggle("animate__fadeInUp");

  box_four.classList.toggle("animate__fadeInUp");
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
    box_one.getBoundingClientRect().top + scrollY + box_one.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate() {
  // is element in view?
  if (inView() && !box_one.classList.contains("animate__fadeInUp")) {
    // element is in view, add class to element

    box_one.classList.add("animate__fadeInUp");
    box_two.classList.add("animate__fadeInUp");
    box_three.classList.add("animate__fadeInUp");
    box_four.classList.add("animate__fadeInUp");
  }
}
