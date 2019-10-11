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
    $('#myCarousel').carousel({
        interval: 200
    });

    $('#myModal').modal({
        keyboard: false
    });
}) 