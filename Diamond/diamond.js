let posX = 200;
let posY = 200;
let posR = 200;

let size = 20;

let vitX = 3.123;
let vitY = 5.4321;
let vitR = 1;

function setup() {
  frameRate(60000000);
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  stroke(posR,12,0);
  fill(posR,4,2);
  
   posX+= vitX;
  posY += vitY
  
  posR += vitR;
  if( posR >= 255 || posR <=0){
    vitR = vitR * -1;
  }
 
  
  if( posX >= width-size|| posX <=0){
    vitX= vitX * -1;
  }
  
    if( posY >= height-size|| posY <=0){
    vitY= vitY * -1;
  }
  
  circle(posX, posY, size);

}