function clickme(){


   var ball = document.getElementById("ball");
   ball.style.position = "relative";
   var currentPosition = ball.style.left || "0px";
   var newPosition = (parseInt(currentPosition)+10 )+ "px";
   // currentPosition = (parseInt(currentPosition)+10)+ "px";

   // ball.style.left = currentPosition;
   ball.style.left = newPosition;
}
var ball = document.getElementById("ball");
ball.style.position = "relative";
var step = 10;
var currentPosition = ball.style.left || "0px" || ball.style.top || "0px";
ball.style.left = "0px";
ball.style.top = "0px";
document.addEventListener("keydown",function (event){

   //var current =  ball.style.left|| "0px";

   switch (event.key){
      case "w":
         ball.style.top  = (parseInt(ball.style.top)+10 )+ "px";

         break;
      case "d":

         ball.style.left = (parseInt(ball.style.left)+10 )+ "px";
         // currentPosition = (parseInt(currentPosition)+10)+ "px";

         // ball.style.left = currentPosition;

         break;
   }

})