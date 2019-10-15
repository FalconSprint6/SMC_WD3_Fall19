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


document.getElementById("submit").addEventListener("click", function() {
  alert.getElementById("submitalert");
});

