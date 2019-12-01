$(document).ready(function () {
        $('#firstName, #email').change(function () {
                if ($("#firstName").val().length && $("#email").val().length) {
                        $("#submit").prop('disabled', false);
                } else {
                        $("#submit").prop('disabled', true);
                }
        }); // end FAQ button disable


        $("#submit").click(function () {
                preventDefault();
                $("#buttonAlert").addClass('show');
        }); // end FAQ submit button click
}); // end ready