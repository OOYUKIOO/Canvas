var c = document.getElementById("draw");
c.addEventListener("click",dot);
console.log(c);
/**
var ctx = c.getContext("2d");

var circle = document.getElementById("c");

var s = document.getElementById("s");
var dvd = document.getElementById("dvd");
var requestID;
var dvdImg = new Image();
dvdImg.src = "dvd.png";

var stop = function(e) {
    e.preventDefault();
    window.cancelAnimationFrame( requestID );
 //   ctx.clearRect(0,0,500,500);
};

var startCircle = function() {
    window.cancelAnimationFrame( requestID );
    var radius = 0;
    var grow = true;
    var bounce = function() {
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(250,250,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	if (grow) {
	    radius ++;
	    if (radius >= 250){
		grow = false;
	    };
	} else {
	    radius --;
	    if (radius == 0){
		grow = true;
	    };
	};
	requestID = window.requestAnimationFrame( bounce );
    };
    bounce();
};

var startDVD = function() {
    window.cancelAnimationFrame( requestID );
    xcor = 40;
    ycor = 25;
    ctx.drawImage(dvdImg,xcor,ycor,80,50);
};

circle.addEventListener("click",dot)
**/

var dot = function(e) {
    var c1 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle');

    c1.setAttribute("cx","200");
};
/**
s.addEventListener("click",stop)
dvd.addEventListener("click",startDVD)
**/
