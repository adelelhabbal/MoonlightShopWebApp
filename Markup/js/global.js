function initDropdowns(){
    if($(".dropdown-toggle").length > 0){
        $(".dropdown-toggle").click(function(){
            var target = $(this).data("target");
            $(target).slideToggle();
            $(this).toggleClass("open");
        })
    }
}
$(document).ready(function(){
    initDropdowns();
})