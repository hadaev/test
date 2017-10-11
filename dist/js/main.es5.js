"use strict";

var _this = undefined;

/*
Concatinated js file 
Author: Alex 
Created Date: 2017-10-11
 */
$(document).ready(function () {
  $('.carousel').carousel({
    ride: false
  });
  $('.form-control').on('input', function (e) {
    e.preventDefault();

    if ($(_this).val() !== '') {
      $(_this).removeClass('placeholder__star');
    } else {
      $(_this).addClass('placeholder__star');
    }
  });
  $('.ico-menu, .mobile-menu__close').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.mobile-menu').toggleClass('menu-open');
    $('.mobile').toggleClass('window-shadow');
  });
  $('#table-show').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.content__table').find('thead, tbody').removeClass('hidden');
    $(_this).empty();
  });
});
$(document).ready(function () {
  $('.search__button').click(function (e) {
    e.preventDefault();
    $('.search__input').toggleClass('search-open');
  });
  $('form').keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  $('.search__input').keyup(function (e) {
    e.preventDefault();
    var code = e.keyCode ? e.keyCode : e.which;

    if (code == 13) {
      $(_this).val('');
      return true;
    }
  });
});
$(document).ready(function () {
  function sizeImage() {
    var height = $('.carousel-inner').outerHeight();
    var width = $('.carousel-inner').outerWidth();
    $('.carousel-inner .item').each(function (i, el) {
      if (1000 >= width) {
        $(el).css({
          'height': height + 'px',
          'width': 'auto',
          'max-width': 'none'
        });
        $(el).find('img').css({
          'height': height + 'px',
          'width': 'auto',
          'max-width': 'none'
        });
      } else {
        $('.carousel-inner .item').removeAttr('style');
        $('.carousel-inner .item img').removeAttr('style');
      }
    });
  }

  sizeImage();
  $(window).resize(function () {
    sizeImage();
  });
});
