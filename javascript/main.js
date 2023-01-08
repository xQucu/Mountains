'use strict';
$(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 256) {
    $('.visibility-toggler-box').show();
    $('.box-hook').removeClass('box');
    $('.orbit-hook').removeClass('orbit');
    $('.orbit1-hook').removeClass('orbit1');
    $('.orbit2-hook').removeClass('orbit2');
    $('.orbit3-hook').removeClass('orbit3');
    $('.orbit4-hook').removeClass('orbit4');
    $('.orbit5-hook').removeClass('orbit5');
    $('.orbit6-hook').removeClass('orbit6');
    $('.orbit7-hook').removeClass('orbit7');
    $('.orbit8-hook').removeClass('orbit8');
    $('.in-center-hook').removeClass('in-center box');
    $('.navbar-nav').removeClass('rotating-container');
  } else {
    $('.visibility-toggler-box').off();
    $('.visibility-toggler-box').hide();
    $('.box-hook').addClass('box');
    $('.orbit-hook').addClass('orbit');
    $('.orbit1-hook').addClass('orbit1');
    $('.orbit2-hook').addClass('orbit2');
    $('.orbit3-hook').addClass('orbit3');
    $('.orbit4-hook').addClass('orbit4');
    $('.orbit5-hook').addClass('orbit5');
    $('.orbit6-hook').addClass('orbit6');
    $('.orbit7-hook').addClass('orbit7');
    $('.orbit8-hook').addClass('orbit8');
    $('.in-center-hook').addClass('in-center box');
    $('.navbar-nav').addClass('rotating-container');
  }
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 256) {
    $('.visibility-toggler-box').show();
    $('.box-hook').removeClass('box');
    $('.orbit-hook').removeClass('orbit');
    $('.orbit1-hook').removeClass('orbit1');
    $('.orbit2-hook').removeClass('orbit2');
    $('.orbit3-hook').removeClass('orbit3');
    $('.orbit4-hook').removeClass('orbit4');
    $('.orbit5-hook').removeClass('orbit5');
    $('.orbit6-hook').removeClass('orbit6');
    $('.orbit7-hook').removeClass('orbit7');
    $('.orbit8-hook').removeClass('orbit8');
    $('.in-center-hook').removeClass('in-center box');
    $('.navbar-nav').removeClass('rotating-container');
  } else {
    $('.visibility-toggler-box').off();
    $('.visibility-toggler-box').hide();
    $('.box-hook').addClass('box');
    $('.orbit-hook').addClass('orbit');
    $('.orbit1-hook').addClass('orbit1');
    $('.orbit2-hook').addClass('orbit2');
    $('.orbit3-hook').addClass('orbit3');
    $('.orbit4-hook').addClass('orbit4');
    $('.orbit5-hook').addClass('orbit5');
    $('.orbit6-hook').addClass('orbit6');
    $('.orbit7-hook').addClass('orbit7');
    $('.orbit8-hook').addClass('orbit8');
    $('.in-center-hook').addClass('in-center box');
    $('.navbar-nav').addClass('rotating-container');
  }
});
