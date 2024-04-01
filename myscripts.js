$(document).ready(function () {
    $(".option .label").click(function () {
      $(".option .label").removeClass("active");
      $(this).addClass("active");
      let indis = $(".option .label").index(this);
    });
    $(".option .label").click(function () {
      var tab_id = $(this).attr("data-tab");


      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });