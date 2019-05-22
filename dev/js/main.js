// require('../../node_modules/slick-carousel');
// не розумію чому він норм не підключився :(, ех прийдеться по поганному лінками :(
// Доречі думав не забирати при клику по контенту, але поняв що там буде мінятися мова
$(function() {
  $('.lang-vis').click(function() {
    $(this).siblings(".lang-vis__active").toggle();
    $(this).toggleClass('lang-vis__active');
  });
});

$(function() {
  $('#header-btn-aboutUs').click(function() {
    $(this).siblings(".header-nav-btn__active").click();
    $(this).toggleClass('header-nav-btn__active');
  });
});

// Спеціальності
$(document).ready(function(){
  $('.specialty-catalog-slider').slick({
    dots: false,
    speed: 3000,
    // autoplay: true,
    autoplaySpeed: 4000,
    infinite: false,
    nextArrow: '<div class="specialty-arrow specialty-arrow-right"><i class="material-icons">keyboard_arrow_right</i></div>',
    prevArrow: '<div class="specialty-arrow specialty-arrow-left"><i class="material-icons">keyboard_arrow_left</i></div>',
  

  });
});


// Лікарні закладу
$(function() {
  $('.doctors-catalog-item').click(function() {
    $(this).siblings(".doctors-catalog-item__active").click();
    $(this).toggleClass('doctors-catalog-item__active');
  });
});

$(document).ready(function(){
  $('.doctors-catalog-slider').slick({
    speed: 3000,
    dots: true,
    // adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    infinite: false,
    nextArrow: '<div class="doctors-arrow doctors-arrow-right"><i class="material-icons">arrow_forward</i></div>',
    prevArrow: '<div class="doctors-arrow doctors-arrow-left"><i class="material-icons">arrow_back</i></div>',
  });
});

// Послугі та ціни
$(document).ready(function(){
  $('.servicesAndPrices-catalog-slider').slick({
    dots: false,
    speed: 3000,
    // autoplay: true,
    autoplaySpeed: 4000,
    infinite: false,
    nextArrow: '<div class="specialty-arrow servicesAndPrices-right"><i class="material-icons">keyboard_arrow_right</i></div>',
    prevArrow: '<div class="specialty-arrow servicesAndPrices-left"><i class="material-icons">keyboard_arrow_left</i></div>',
  });
});
