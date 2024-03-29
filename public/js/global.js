function initDropdowns() {
  if ($(".dropdown-toggle").length > 0) {
    $(".dropdown-toggle").click(function () {
      var target = $(this).data("target");
      $(target).slideToggle();
      $(this).toggleClass("open");
    })
  }
}
function swiper() {
  var swiper = new Swiper('.swiper-container', {
    autoHeight: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
function listGridView() {
  $('#products .item').removeClass('grid-group-item');
  $('#products .item').addClass('list-group-item');
  $('#list').click(function (event) {
    event.preventDefault();
    $('#products .item').addClass('list-group-item');
  });
  $('#grid').click(function (event) {
    event.preventDefault();
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
  });
}
$(document).ready(function () {
  listGridView();
  initDropdowns();
  swiper();
})