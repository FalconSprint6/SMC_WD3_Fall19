$( document ).ready(function() {
    console.log( "ready!" );
});

function FillBilling(checked) {
    if (checked) {  
        document.getElementById('shippingfirstName').value = document.getElementById('billingfirstName').value;   
  
} else {  
        document.getElementById('shippingfirstName').value = '';   
        
}  
} 