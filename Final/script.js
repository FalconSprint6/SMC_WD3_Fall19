$(document).ready(function () {
        console.log( "ready!" );
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

function addressFunction() 
{
    if (document.getElementById('fillbilling').checked)
    {  
        document.getElementById('billingfirstName').value = document.getElementById('shippingfirstName').value; 
        document.getElementById('billinglastName').value = document.getElementById('shippinglastName').value;
        document.getElementById('billingAddress').value = document.getElementById('shippingAddress').value;
        document.getElementById('billingAddress2').value = document.getElementById('shippingAddress2').value;
        document.getElementById('billingCountry').value = document.getElementById('shippingCountry').value;
        document.getElementById('billingState').value = document.getElementById('shippingState').value;
        document.getElementById('billingCity').value = document.getElementById('shippingCity').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;

  
} else {  
        document.getElementById('billingfirstName').value = '';   
        document.getElementById('billinglastName').value = '';
        document.getElementById('billingAddress').value = '';
        document.getElementById('billingAddress2').value = '';
        document.getElementById('billingCountry').value = '';
        document.getElementById('billingState').value = '';
        document.getElementById('billingCity').value = '';
        document.getElementById('billingZip').value = '';       
}};



$('shippingState').change(function(){
        $('shippingCity').val($(this).val());
})


function checkifempty(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('cc-expiration').disabled=true
        else
            document.getElementById('cc-expiration').disabled=false    
    }
    setInterval("checkifempty()",100);//cvv enable

function checkifempty(){
    if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
        document.getElementById('cc-cvv').disabled=true
    else
        document.getElementById('cc-cvv').disabled=false    
}
setInterval("checkifempty()",100);//cvv enable

function something() {
        'use strict';
        window.addEventListener('load', function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      };

     
     

