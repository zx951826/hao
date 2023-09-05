$(window).on("load", function () {
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;

  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    console.log(slideIndex);
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();
});
// scrollIt
$.scrollIt();

$(document).ready(function () {
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav ").slideToggle();
    }
  });
});
