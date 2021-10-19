/*
Marcel Kuehnau 573132
Uebung 2
18.10.2021 
*/

/* template GTAT2 Game Technology & Interactive Systems */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

function setup() {							/* here are program-essentials to put */
  createCanvas(windowWidth, windowHeight);
}


function draw() {							/* here is the dynamic part to put */
	/* administrative work */
	
	/* calculations */
  /* width: 1cm = 28.9cm height: 1cm = 31.58cm */
  var widthScale = 0.029;
  var heightScale = 0.032;

  var Xnull = width/2 + (10*widthScale*canvasWidth); //translate the mid point from the mid to the point i want 
  var Ynull = height/2 + (3.4*heightScale*canvasHeight); //translate the mid point from the mid to the point i want 

  var WS = widthScale*canvasWidth;
  var HS = heightScale*canvasHeight;
	
	/* display */
  translate(Xnull, Ynull); 
  
  //background
  fill(224,238,220);
  rectMode(CENTER);
  rect(-10*WS, -3.4*HS, 24.6*WS, 10*HS);
  noStroke();

  //water
  fill(33,136,143)
  rect(-12.3*WS, 1*HS, 2*WS, 0.7*HS);

  //bottom
  fill(237,125,49);
  rect(-10*WS, 1.6*HS, 24.6*WS, 0.6*HS);

  //erklärung rechnung: linker rand - entfernung vom rand - hälfte der länge des rechtecks
  //leftground
  rect(-(22.3 - 0 - 2.5)*WS, 1*HS, 5*WS, 0.8*HS);
  //midground
  rect(-(22.3 - 5.7 - 1.7)*WS, 1*HS, 3.4*WS, 0.8*HS);
  //rightground
  rect(-(22.3 - 10.8 - 6.9)*WS, 1*HS, 13.8*WS, 0.8*HS);

  //lefttriangle
  triangle(-22.3*WS, 0.61*HS, -22.3*WS, -2.4*HS, -19.3*WS, 0.61*HS);

  //midtriangle
  triangle(-10*WS, 0.61*HS, -6.75*WS, -0.8*HS, -3.5*WS, 0.61*HS);

  //golf club
  fill(0,0,0)
  rect(0*WS, -0.5*HS, 0.15*WS, 2*HS);
  fill(255,136,0)
  circle(-0.2*WS, 0.25*HS, 20);
  
  //banner
  fill(0,0,0)
  rect(-17.8*WS, -1.3*HS, 0.1*WS, 4*HS);
  fill(255,255,0)
  triangle(-19.5*WS, -2.8*HS, -17.8*WS, -2.4*HS, -17.8*WS, -3.2*HS);

  //mid point
  fill(255, 0, 0);
  rect(0, 0, 5, 5);

  //reset button
  fill(255, 0, 0);
  rect(-(22.3 - 1.5)*WS, 3*HS, 3*WS, 1.4*HS, 20)
  //new button
  fill(0,255,0);
  rect(0.9*WS, 3*HS, 3*WS, 1.4*HS, 20)
}

function windowResized() {					/* responsive part */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
