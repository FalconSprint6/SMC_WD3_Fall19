$(document).ready(function(){
// $("#mainTitle").addClass("pink");

$("#colorChange").click(changeColor);
$("addDiv").click(addStuff);

function changeColor(){
   $("#mainTitle").toggleClass("blue");
   $("#subTitle").toggle();
}

function addStuff(){
    $("#mainTitle").append("<span style='color: red'>ha</span>")
}

})