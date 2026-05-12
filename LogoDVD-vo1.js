let posX = 200;
let posY = 200;

let posR = 200;

let size = 30;

let vitX = 9;

let vitY = 20;
 ;

let vitR = 1;

function setup() {
  createCanvas(400, 400);
}





function draw() {
 // background(0, 0, 0);
  
  stroke(posR, 123, 234, 23);
  fill(posR, 123, 234);
  
  
  posR += vitR;
  
  posX += vitX;
    posY += vitY;
  
  if( posX >= 400-size || posX <= 0 ){
    vitX = vitX * -1;
  }
  
   if( posY >= 400-size || posY <= 0 ){
    vitY = vitY * -1;
  }
 
  
    if( posR >= 255 || posR <= 0 ){
    vitR = vitR * -1;
  }
  
  
  
  circle(posX, posY, size);
  
  
  
  
  
  

}




