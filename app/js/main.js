"use strict";

$(function() {
  $(".header__burger-menu").on("click", function() {
    $(".header__menu").toggleClass("open-menu");
    $(".header__burger-menu").addClass("hide-menu");
  });

  $(".header__link-item").on("click", function(event) {
    let anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top + "px"}, 777);
    $(".header__menu").removeClass("open-menu");
    $(".header__burger-menu").removeClass("hide-menu");

    event.preventDefault();
    return false;
  });

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          handleAPILoaded(this.response);
      };
  };

  xhttp.open("GET", "https://api.coincap.io/v2/assets/?limit=10");
  xhttp.send();

  function handleAPILoaded(code) {
    let arrayOfUsers = JSON.parse(code).data;

    for (let i = 0; i < arrayOfUsers.length; i++) {
      $(".table__body").append(
        $("<tr></tr>").append(
          $("<td></td>").text(arrayOfUsers[i].id).addClass("table__cell").attr("data-label", "Id"),
          $("<td></td>").text(arrayOfUsers[i].name).addClass("table__cell").attr("data-label", "Name"),
          $("<td></td>").text(arrayOfUsers[i].symbol).addClass("table__cell").attr("data-label", "Symbol"),
          $("<td></td>").text(arrayOfUsers[i].priceUsd).addClass("table__cell").attr("data-label", "Price in USD")
        ).addClass("table__row")     
      )
    }
  };

  $(".form").on("submit", function() {
    let value = $(".form__input").val();
    let date = new Date(Date.now() + 2592000e3);
    date = date.toUTCString();
    document.cookie = document.cookie = encodeURIComponent("email") + '=' + encodeURIComponent(value) + "; expires=" + date;
    return false;
  })
});  