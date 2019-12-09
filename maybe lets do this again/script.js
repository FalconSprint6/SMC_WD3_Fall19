$( document ).ready(function() {
    console.log( "ready!" );
var addItem = $('.addCart');
       var items = $('#cartItems');
       var count = 0;
   addItem.click(function(event) {
   	count += 1;
     cartItems.innerHTML = count;
   }); // end add item function
   $("#add2Cart").click(function() {
    $(".fa-shopping-cart").addClass("animate").delay(150).queue(function(next) {
      $(this).removeClass("animate");
      next();
    });
  }); // end cart rotation function
  $(":input").blur(function(){
      $("#form").children().each(function(){
        if ($(this).val!==""){
            $("#payment").prop("disabled", false)
        }
        else $("#payment").prop("disabled", true)
      })
  }); // end payment disable
  $('#carouselExampleCaptions').carousel({
    interval: 2500
  }); // end carousel control
});


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
}}; //end fill billing
