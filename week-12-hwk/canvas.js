var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(0, 155, 155)';
var ballColor2 = 'rgb(0, 250, 100)';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;


function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'black';
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
        directionRight = !directionRight;
    }

    if(directionRight){
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }


    if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if(directionDown){
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){
        console.log('FIRE!!!!!!');
       directionDown = !directionDown;
       directionRight = !directionRight;
       var score = parseInt(document.getElementById("score").innerHTML);
       score++;
       document.getElementById("score").innerHTML = score;
    }
})

$("#color").click(function(){
    if(ctx.fillStyle = ballColor){
        ctx.fillStyle = ballColor2;
        console.log("is this thing working?")
    }
    else {
        ctx.fillStyle = ballColor
    }

})