/*
Marcel Kuehnau 573132
Uebung 1
11.10.2021 
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
	
	/* display */
  translate(width/2,height/2);
  //screen goes from (-12.3*widthScale)*canvasWidth till (12.3*widthScale)*canvasWidth
  

  //background
  fill(224,238,220);
  rectMode(CENTER);
  rect(0*canvasWidth, 0*canvasHeight, (24.6*widthScale)*canvasWidth, (10*heightScale)*canvasHeight);
  noStroke();

  //water
  fill(33,136,143)
  rect((-2*widthScale)*canvasWidth, 4.4*heightScale*canvasHeight, (2.5*widthScale)*canvasWidth, (0.7*heightScale)*canvasHeight);

  //bottom
  fill(237,125,49);
  rect(0*canvasWidth, (5-0.01)*heightScale*canvasHeight, (24.6*widthScale)*canvasWidth, (0.6*heightScale)*canvasHeight);

  //leftground
  rect((-9.55*widthScale)*canvasWidth, 4.3*heightScale*canvasHeight, (5.5*widthScale)*canvasWidth, (0.8*heightScale)*canvasHeight);

  //midground
  rect((-4.5*widthScale)*canvasWidth, 4.3*heightScale*canvasHeight, (3.1*widthScale)*canvasWidth, (0.8*heightScale)*canvasHeight);

  //rightground
  rect((5.45*widthScale)*canvasWidth, 4.3*heightScale*canvasHeight, (13.7*widthScale)*canvasWidth, (0.8*heightScale)*canvasHeight);

  //lefttriangle needs to be replaced with triangle
  //rect((-10.9*widthScale)*canvasWidth, 2.4*heightScale*canvasHeight, (2.8*widthScale)*canvasWidth, (3.0*heightScale)*canvasHeight);
  triangle((-12.3*widthScale)*canvasWidth, 0.125*canvasHeight, (-12.3*widthScale)*canvasWidth, 0.03*canvasHeight, (-9.5*widthScale)*canvasWidth, 0.125*canvasHeight);

  //midtriangle needs to be replaced with a triangle
  //rect((3*widthScale)*canvasWidth, 3.14*heightScale*canvasHeight, (6.5*widthScale)*canvasWidth, (1.5*heightScale)*canvasHeight);
  triangle(-0.01*canvasWidth, 0.125*canvasHeight, 0.08*canvasWidth, 0.075*canvasHeight, 0.18*canvasWidth, 0.125*canvasHeight);

  //golf club
  fill(0,0,0)
  rect((10*widthScale)*canvasWidth, 2.8*heightScale*canvasHeight, (0.15*widthScale)*canvasWidth, (2*heightScale)*canvasHeight);
  fill(255,136,0)
  circle((9.8*widthScale)*canvasWidth, 3.6*heightScale*canvasHeight, 20);
  
  //banner
  fill(0,0,0)
  rect((-7.8*widthScale)*canvasWidth, 1.8*heightScale*canvasHeight, (0.1*widthScale)*canvasWidth, (4*heightScale)*canvasHeight);
  fill(255,255,0)
  triangle((-9.5*widthScale)*canvasWidth, 0.01*canvasHeight, (-7.8*widthScale)*canvasWidth, -0.005*canvasHeight, (-7.8*widthScale)*canvasWidth, 0.025*canvasHeight);

  
  

  
}

function windowResized() {					/* responsive part */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
