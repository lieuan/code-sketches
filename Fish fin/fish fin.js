var ligne;
var lignee;

function setup() {
  frameRate(999);
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  stroke(255, 255, 255);
  ligne = windowWidth / 2;
  lignee = windowHeight / 2;
}

function draw() {
  ligne = ligne + (mouseX - ligne) / 10;

  lignee = lignee + (mouseY - lignee) / 10;
  
  //chiffre aprèf le / c'est la finnesse que sur un axe qui divise 
  line(0, 0, ligne, lignee);
}

function keyPressed() {
  if (key === "x") {
    background(0, 0, 255);
  }
}
