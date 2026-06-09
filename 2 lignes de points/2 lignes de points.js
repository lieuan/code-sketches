function setup() {
  createCanvas(400, 400);
  background(220);
  
  for( let etap = 50; etap < 400; etap += 50 ){
    circle(etap, height/2, 20);
  }
  
  for( let i = 1; i < 8; i++){
    circle ( i*50, height/2+50, 20);
  }
}

function draw() {
  
}