"use strict";

$(function() {
  // $(".header__burger-menu").on("click", function() {
  //   $(".header__menu").toggleClass("open-menu");
  // });

  // $(".header__link-item").on("click", function(event) {
  //   let anchor = $(this);
  //   $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 30 + "px"}, 777);
  //   $(".header__menu").removeClass("open-menu");

  //   event.preventDefault();
  //   return false;
  // });

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
          $("<th></th>").text(arrayOfUsers[i].id).addClass("table__cell"),
          $("<td></td>").text(arrayOfUsers[i].name).addClass("table__cell"),
          $("<td></td>").text(arrayOfUsers[i].symbol).addClass("table__cell"),
          $("<td></td>").text(arrayOfUsers[i].priceUsd).addClass("table__cell")
        )       
      )
    }

  };
});  