$(document).ready(function () {


    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    })



    $('.js-modal-close').click(function () {
        $('.alert').addClass('show');
        $('.alert').alert();

        if (true) {
            $("#myModal").modal('hide');
        }
    })

    $('input').blur(function () {
        if ($(this).val() !== "") {
            var form = $(this).parents('form');
            console.log($("[type=submit]"));
            $("[type=submit]").removeClass('disabled').removeAttr('disabled').data('dismiss', 'modal');
        }
    })

    $('.modal form').submit(function (e) {
        e.preventDefault(); 
        $('#myModal').modal('hide')
    })



})

$(window).on('load', function () {
    $('#myModal').modal({
        keyboard: false,
        backdrop: 'static',
    });
})

var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', 'white');
                $('.nav-link').css('color', 'black');
                $('.navbar-brand').css('color', 'black');
                $('.navbar-collapse').css('color', 'black');
            } else {
                $('.navbar').css('background-color', 'transparent');
                $('.nav-link').css('color', 'white');
                $('.navbar-brand').css('color', 'white');
                $('.navbar-collapse').css('color', 'white');
            }
        });
    }

    $('#myModal').on('hidden.bs.modal', function () {
        $("#submitalert").addClass('show')
      })

     