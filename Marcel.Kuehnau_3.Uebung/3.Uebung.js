/*
Marcel Kuehnau 573132
Uebung 3
24.10.2021 
*/

/* template GTAT2 Game Technology & Interactive Systems */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
/* width: 1cm = 28.9cm */
var widthScale = 0.029;
var frmRate = 10;

var ballX, ballY;

var Xnull, Ynull;
var Sc;

var dt, t, speed;

function setup() {							/* here are program-essentials to put */
  createCanvas(windowWidth, windowHeight);
  frameRate(frmRate);

  Xnull = width/2 + (10*widthScale*canvasWidth); //translate the mid point from the mid to the point i want 
  Ynull = height/2 + (3.4*widthScale*canvasHeight); //translate the mid point from the mid to the point i want 
  Sc = widthScale*canvasWidth;
  t = second();
  dt = t/frmRate;
  speed = 0;

  ballX = 0;
  ballY = 0;

  button = createButton('click me');
  button.position(0,0);
  button.mousePressed(moveBall);

  button = createButton('click me too');
  button.position(20,20);
  button.mousePressed(resetBall);
}

function moveBall(){
  while(ballX > -150){
    ballX = ballX - 10;
  }
}
function resetBall(){
  ballX = 0;
  speed = 0;
}


function draw() {							/* here is the dynamic part to put */
	/* administrative work */
  

	/* calculations */
  t = t * dt;
  speed = 10*Sc*t

	/* display */
  translate(Xnull, Ynull); 
  
  //background
  fill(224,238,220);
  rectMode(CENTER);
  rect(-10*Sc, -3.4*Sc, 24.6*Sc, 10*Sc);
  noStroke();

  //water
  fill(33,136,143)
  rect(-12.3*Sc, 1*Sc, 2*Sc, 0.7*Sc);

  //bottom
  fill(237,125,49);
  rect(-10*Sc, 1.6*Sc, 24.6*Sc, 0.6*Sc);

  //erklärung rechnung: linker rand - entfernung vom rand - hälfte der länge des rechtecks
  //leftground
  rect(-(22.3 - 0 - 2.5)*Sc, 1*Sc, 5*Sc, 0.8*Sc);
  //midground
  rect(-(22.3 - 5.7 - 1.7)*Sc, 1*Sc, 3.4*Sc, 0.8*Sc);
  //rightground
  rect(-(22.3 - 10.8 - 6.9)*Sc, 1*Sc, 13.8*Sc, 0.8*Sc);

  //lefttriangle
  triangle(-22.3*Sc, 0.61*Sc, -22.3*Sc, -2.4*Sc, -19.3*Sc, 0.61*Sc);

  //midtriangle
  triangle(-10*Sc, 0.61*Sc, -6.75*Sc, -0.8*Sc, -3.5*Sc, 0.61*Sc);

  //golf club
  fill(0,0,0)
  rect(0*Sc, -0.5*Sc, 0.15*Sc, 2*Sc);
  fill(255,136,0)
  circle(-0.2*Sc, 0.25*Sc, 20);
  
  //banner
  fill(0,0,0)
  rect(-17.8*Sc, -1.3*Sc, 0.1*Sc, 4*Sc);
  fill(255,255,0)
  triangle(-19.5*Sc, -2.8*Sc, -17.8*Sc, -2.4*Sc, -17.8*Sc, -3.2*Sc);

  //mid point
  fill(255, 0, 0);
  rect(0, 0, 5, 5);

  //ball
  fill(255,136,255)
  circle(ballX, ballY+18, 20);


  textAlign(CENTER, CENTER);
  //textSize(2.0*fontSize); 
  //reset button
  fill(255, 0, 0);
  rect(-(22.3 - 1.5)*Sc, 3*Sc, 3*Sc, 1.4*Sc, 20)
  fill(0);
  text("NEW", -(22.3 - 1.5)*Sc, 3*Sc);
  //new button
  fill(0,255,0);
  rect(0.9*Sc, 3*Sc, 3*Sc, 1.4*Sc, 20)
  fill(0);
  text("RESET", 0.9*Sc, 3*Sc);
}

function windowResized() {					/* responsive part */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}

function drawMap(){

}
