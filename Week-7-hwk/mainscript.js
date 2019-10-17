$(document).ready(function(){


    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    })



    $('.js-modal-close').click(function(){
        $('.alert').addClass('show');
        $('.alert').alert();

        if( true ){
            $("#myModal").modal('hide');
        }
    })

})

$(window).on('load', function(){
    $('#myModal').modal({
        keyboard: false,
        backdrop: 'static',
    });
}) 


$('input').blur(function(){
        

    if($(this).val() !== ""){
        var form  = $(this).parents('form');
        console.log($("[type=submit]"));
        $("[type=submit]").removeClass('disabled').removeAttr('disabled').data('dismiss', 'modal');
    }
})

$('.modal form').submit(function(e){
    e.preventDefault();
})
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });