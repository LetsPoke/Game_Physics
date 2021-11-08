/*
Marcel Kuehnau 573132
Uebung 5
07.11.2021 
*/

/* template GTAT2 Game Technology & Interactive Systems */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var widthScale = 0.029;                                                                       // width: 1cm = 28.9cm
var frmRate = 60;                                                                             // Screen-Refreshrate

var ballX, ballY;                                                                             // Golfball
var Xnull, Ynull;                                                                             // Nullpunkt
var Sc;                                                                                       // Scale
var t, dt;                                                                                    // Zeitvariable, Increment der Zeitvariable
var speed, angle, s, a, g = 9.81, sx, sy;                                                                       // Ballgeschwindigkeit, Winkel der 1.Slope
var ms = 3.8;                                                                                 // Geschwindigkeit in m/s

var move = false;                                                                             // Variable "New" button
var mouseOverNew = false;                                                                     // Maus über button abfrage
var mouseOverReset = false;                                                                   // Maus über button abfrage

var startState = false, plane1Forward = false, slope1Forward = false;                         // boolean deklaration zur status abfrage
var slope1Backward = false, plane1Backward = false, air1 = false;   


function setup() {							/* here are program-essentials to put */
  createCanvas(windowWidth, windowHeight);
  frameRate(frmRate);                                                                         // setzen der Bildwechselfrequenz

  Xnull = width/2 + (10*widthScale*canvasWidth);                                              // Nullpunkt festlegen
  Ynull = height/2 + (3.4*widthScale*canvasHeight);                                           // Nullpunkt festlegen
  Sc = widthScale*canvasWidth;                                                                // dynamischer Maßstab

  t = 0;
  dt = 1/frmRate;                                                                             // Zeitincrement
  speed = 0;

  ballX = 0;                                                                                  // Startlage Golfball
  ballY = 0.61*Sc - 10;                                                                       // Startlage Golfball

  textSize(26);
}

function draw() {							/* here is the dynamic part to put */
	/* administrative work */
  translate(Xnull, Ynull); 
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  // reset button idea taken from: https://editor.p5js.org/kjhollen/sketches/ryb3DHY6Z
  if(overRect(Xnull-22.3*Sc, Xnull-(22.3 - 3)*Sc, Ynull+2.25*Sc, Ynull+3.65*Sc)){             // Reset button erstellen
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
  if(overRect(Xnull-0.6*Sc, Xnull+2.4*Sc, Ynull+2.25*Sc, Ynull+3.75*Sc)){                     // New button erstellen
    fill(0, 200, 0);
    mouseOverNew = true;
  }else{
    fill(0, 255,0)
    mouseOverNew = false;
  }
  rect(0.9*Sc, 3*Sc, 3*Sc, 1.4*Sc, 20)
  fill(0);
  text("NEW", 0.9*Sc, 3*Sc);
  
	/* calculations */
                                                                               
  t = t + dt;                                                                                 // Zeit incrementieren     
  speed = ms * sqrt(t) ;                                                                      // Startgeschwindigkeit - zeit                                                       
  angle = speed*0.45;                                                                         // winkel der 1.slope
  a = Math.sin(45);
  s = (1/2) * a * (t*t);                                                                      // Weg-Zeit-Gesetz
  sx = speed*t*Math.cos(45);                                                                                     // Wurfhöhe
  sy = speed*t*Math.sin(45) - ((g/2)*(t*t));                                                                                     //

  
  if(move){                                                                                   // abfrage wo sich der ball befindet
    startState = true;
    if(ballX > -3.5*Sc && startState){                                                        // ball auf 1. ebene?
      plane1Forward = true;
    }
    if(ballX > -6.5*Sc && ballX < -3.5*Sc && plane1Forward){                                  // ball auf 1. schräge?
      plane1Forward = false;
      slope1Forward = true;
    }
    if(ballX > -6.51*Sc && ballX < -6.49*Sc){                                                   // ball am höchsten punkt der 1.schräge?
      t = 0;
      s = 0.1;
      slope1Forward = false;
      slope1Backward = true;
    }
    if(ballX < -6.52*Sc){
      air1 = true;
      slope1Forward = false;
      slope1Backward = false;
    }
    if(ballX > -3.6*Sc && ballX < -3.5*Sc && slope1Backward){                                 // ball aufn weg von 1. schräge zu 1. ebene?
      slope1Backward = false;
      plane1Backward = true;
      move = false; 
    }
  }

  if(startState){                                                                             // abfrage wo sich der ball bedindet und dementprechende geschwindigkeitswechsel
    if(plane1Forward){
      ballX = ballX -= speed;
    }else if(slope1Forward){
      ballY = ballY -= angle/s;                                                               // geschwindigkeit / weg zeit => ball wird langsamer
      ballX = ballX -= speed/s;                                                               
    }else if(air1){
      //ballY = ballY += -(speed*t*a-(g/2*(t*t)));                                                               // geschwindigkeit / weg zeit => ball wird langsamer
      //ballX = ballX -= speed/sqrt(s);
      ballY = ballY += sy;                                                               // geschwindigkeit / weg zeit => ball wird langsamer
      ballX = ballX -= sx;
    }else if(slope1Backward){
      ballY = ballY += angle*s;                                                               // geschwindigkeit * weg zeit => ball wird schneller
      ballX = ballX += speed*s;
    }else if(plane1Backward && ballX < 2*Sc){
      ballX = ballX += speed;
    }
  }

	/* display */
  fill(224,238,220);                                                                          // background
  rect(-10*Sc, -3.4*Sc, 24.6*Sc, 10*Sc);
  noStroke();

  fill(33,136,143)                                                                            // water
  rect(-12.3*Sc, 1*Sc, 2*Sc, 0.7*Sc);

  fill(237,125,49);                                                                           // bottom
  rect(-10*Sc, 1.6*Sc, 24.6*Sc, 0.6*Sc);
                                                                                              
  rect(-(22.3 - 0 - 2.5)*Sc, 1*Sc, 5*Sc, 0.8*Sc);                                             // leftground erklärung rechnung: linker rand - entfernung vom rand - hälfte der länge des rechtecks
  rect(-(22.3 - 5.7 - 1.7)*Sc, 1*Sc, 3.4*Sc, 0.8*Sc);                                         // midground
  rect(-(22.3 - 10.8 - 6.9)*Sc, 1*Sc, 13.8*Sc, 0.8*Sc);                                       // rightground

  triangle(-22.3*Sc, 0.61*Sc, -22.3*Sc, -2.4*Sc, -19.3*Sc, 0.61*Sc);                          // lefttriangle
  triangle(-10*Sc, 0.61*Sc, -6.75*Sc, -0.8*Sc, -3.5*Sc, 0.61*Sc);                             // midtriangle

  fill(0,0,0)                                                                                 // golf club
  rect(0*Sc, -0.5*Sc, 0.15*Sc, 2*Sc);
  fill(255,136,0)
  circle(-0.2*Sc, 0.25*Sc, 20);
  
  fill(0,0,0)                                                                                 // banner
  rect(-17.8*Sc, -1.3*Sc, 0.1*Sc, 4*Sc);
  fill(255,255,0)
  triangle(-19.5*Sc, -2.8*Sc, -17.8*Sc, -2.4*Sc, -17.8*Sc, -3.2*Sc);
  
  fill(255, 0, 0);                                                                            // mid point
  rect(0, 0, 5, 5);

  fill(255,136,255)                                                                           // ball
  circle(ballX, ballY, 20);
}

function windowResized() {					/* responsive part */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}

function overRect(x, x2, y, y2) {                                                             // check ob maus über button
	if (mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2) {
	  return true;	
	} else {
	  return false;	
	}
}

function mouseClicked(){
  if(mouseOverNew){
    ballX = 0;                                                                                // Startlage Golfball wiederherstellen
    ballY = 0.61*Sc - 10;
    t = 0.01; 

    move = true;                                                                              // Bewegung starten
  }

  if(mouseOverReset){
    ballX = 0;                                                                                // Startlage Golfball wiederherstellen
    ballY = 0.61*Sc - 10;
    t = 0.01;

    move = false;                                                                             // States zurücksetzen
    startState = false;
    plane1Forward = false;
    slope1Forward = false;
    slope1Backward = false;
    plane1Backward = false;
  }
}

