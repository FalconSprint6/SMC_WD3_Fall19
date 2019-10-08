$( document ).ready(function() {
    console.log( "ready!" );
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
        document.getElemeentById('billinglastName').value = '';
        document.getElementById('billingAddress').value = '';
        document.getElementById('billingAddress2').value = '';
        document.getElementById('billingCountry').value = '';
        document.getElementById('billingState').value = '';
        document.getElementById('billingCity').value = '';
        document.getElementById('billingZip').value = '';       
}  
} 

function checkifempty(){
    if (document.getElementById('billingfirstName').value=='')
        document.getElementById('cc-expiration').disabled=true
    else
        document.getElementById('cc-expiration').disabled=false
}
setInterval("checkifempty()",100)


