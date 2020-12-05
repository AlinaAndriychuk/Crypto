"use strict";

$(function() {
  $(".header__burger-menu").on("click", function() {
    $(".header__menu").toggleClass("open-menu");
  });

  $(".header__link-item").on("click", function(event) {
    let anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 30 + "px"}, 777);
    $(".header__menu").removeClass("open-menu");

    event.preventDefault();
    return false;
  });
});  