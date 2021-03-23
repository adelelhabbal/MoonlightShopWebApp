function initDropdowns(){
    if($(".dropdown-toggle").length > 0){
        $(".dropdown-toggle").click(function(){
            var target = $(this).data("target");
            $(target).slideToggle();
            $(this).toggleClass("open");
        })
    }
}
function swiper(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
}

$(document).ready(function(){
    initDropdowns();
    swiper();
})