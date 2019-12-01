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



/*--Payment Enable--*/

function checkifemptycr(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('credit').disabled=true
        else
            document.getElementById('credit').disabled=false    
    }
    setInterval("checkifemptycr()",100);//credit enable

    function checkifemptydb(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('debit').disabled=true
        else
            document.getElementById('debit').disabled=false    
    }
    setInterval("checkifemptydb()",100);//debit enable

    function checkifemptypp(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('paypal').disabled=true
        else
            document.getElementById('paypal').disabled=false    
    }
    setInterval("checkifemptypp()",100);//debit enable


function checkifemptynam(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('cc-name').disabled=true
        else
            document.getElementById('cc-name').disabled=false    
    }
    setInterval("checkifemptynam()",100);//name enable


function checkifemptynum(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('cc-number').disabled=true
        else
            document.getElementById('cc-number').disabled=false    
    }
    setInterval("checkifemptynum()",100);//number enable

function checkifemptyex(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('cc-expiration').disabled=true
        else
            document.getElementById('cc-expiration').disabled=false    
    }
    setInterval("checkifemptyex()",100);//expiration enable

function checkifemptycc(){
    if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
        document.getElementById('cc-cvv').disabled=true
    else
        document.getElementById('cc-cvv').disabled=false    
}
setInterval("checkifemptycc()",100);//cvv enable

function checkifemptysb(){
        if (document.getElementById('billinglastName').value=='' && document.getElementById('billingfirstName').value==''  && document.getElementById('billingAddress').value=='')
            document.getElementById('submitC').disabled=true
        else
            document.getElementById('submitC').disabled=false    
    }
    setInterval("checkifemptysb()",100);//submit enable

//end payment enable//

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

     
     

