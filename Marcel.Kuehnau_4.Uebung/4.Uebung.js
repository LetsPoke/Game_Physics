/*
Marcel Kuehnau 573132
Uebung 4
01.11.2021 
*/

/* template GTAT2 Game Technology & Interactive Systems */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
/* width: 1cm = 28.9cm */
var widthScale = 0.029;
var frmRate = 60;

var ballX, ballY;
var Xnull, Ynull;
var Sc;
var dt, t, speed, angle;

var move = false;
var mouseOverNew = false;
var mouseOverReset = false;

var startState = false, plane1Forward = false, slope1Forward = false, slope1Backward = false, plane1Backward = false;


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
  ballY = 0.61*Sc - 10;

  textSize(26);
}

function draw() {							/* here is the dynamic part to put */
	/* administrative work */
  
	/* calculations */
  //Ziel 3,6 m/s -> 28.9cm = 1*Sc 360cm/28.9cm = 12.46*Sc pro sekunde
  //Ziel 2,0 m/s -> 28.9cm == 1*Sc ; 200/28.9cm => 6.92*Sc pro sekunde
  t = t * dt;
  speed = (6.92*Sc)/frmRate;
  angle = speed*0.45;

  if(move){
    startState = true;
    if(ballX > -3.5*Sc && startState){
      plane1Forward = true;
      slope1Forward = false;
      slope1Backward = false;
      plane1Backward = false;
    }
    if(ballX > -6.6*Sc && ballX < -3.5*Sc && plane1Forward){
      plane1Forward = false;
      slope1Forward = true;
      slope1Backward = false;
      plane1Backward = false;
    }
    if(ballX > -6.6*Sc && ballX < -6.5*Sc){
      plane1Forward = false;
      slope1Forward = false;
      slope1Backward = true;
      plane1Backward = false;
    }
    if(ballX > -3.6*Sc && ballX < -3.5*Sc && slope1Backward){
      plane1Forward = false;
      slope1Forward = false;
      slope1Backward = false;
      plane1Backward = true;
      move = false; 
    }
  }
  if(startState){
    if(plane1Forward){
      ballX = ballX -= speed;
    }else if(slope1Forward){
      ballY = ballY -= angle;
      ballX = ballX -= speed;
    }else if(slope1Backward){
      ballY = ballY += angle;
      ballX = ballX += speed;
    }else if(plane1Backward && ballX < 2*Sc){
      ballX = ballX += speed;
    }
  }

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
  circle(ballX, ballY, 20);


  textAlign(CENTER, CENTER);
  //reset button idea taken from: https://editor.p5js.org/kjhollen/sketches/ryb3DHY6Z
  if(overRect(Xnull-22.3*Sc, Xnull-(22.3 - 3)*Sc, Ynull+2.25*Sc, Ynull+3.65*Sc)){
    fill(200, 0, 0);
    mouseOverReset = true;
  }else{
    fill(255, 0,0)
    mouseOverReset = false;
  }
  rect(-(22.3 - 1.5)*Sc, 3*Sc, 3*Sc, 1.4*Sc, 20)
  fill(0);
  text("RESET", -(22.3 - 1.5)*Sc, 3*Sc);

  //new button idea taken from: https://editor.p5js.org/kjhollen/sketches/ryb3DHY6Z
  if(overRect(Xnull-0.6*Sc, Xnull+2.4*Sc, Ynull+2.25*Sc, Ynull+3.75*Sc)){
    fill(0, 200, 0);
    mouseOverNew = true;
  }else{
    fill(0, 255,0)
    mouseOverNew = false;
  }
  rect(0.9*Sc, 3*Sc, 3*Sc, 1.4*Sc, 20)
  fill(0);
  text("NEW", 0.9*Sc, 3*Sc);
}

function windowResized() {					/* responsive part */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}

function overRect(x, x2, y, y2) {
	if (mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2) {
	  return true;	
	} else {
	  return false;	
	}
}

function mouseClicked(){
  if(mouseOverNew){
    move = true;
  }

  if(mouseOverReset){
    ballX = 0;
    ballY = 0.61*Sc - 10;
    move = false;
    startState = false;
    plane1Forward = false;
    slope1Forward = false;
    slope1Backward = false;
    plane1Backward = false;
  }
}

