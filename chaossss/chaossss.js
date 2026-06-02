function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(2);
  
  let cols = 5;
  let rows = 5;
  let espX = width / cols;
  let espY = height / rows;
  
  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= cols; x++) {
      
      // position de chaque elipse
      let baseX = x * espX;
      let baseY = y * espY;
      
      // khoảng cách từ chuột đến ellipse này
      let d = dist(mouseX, mouseY, baseX, baseY);
      
      // shake it upppp
      let shake = 0;
      if (d < 150) {
        shake = map(d, 0, 150, 20, 0);
      }
      
      // vibratio
      let offsetX = shake * sin(frameCount * 0.9 + x);
      let offsetY = shake * cos(frameCount * 0.2 + y);
      
      ellipse(baseX + offsetX, baseY + offsetY, espX * 1.8, espY * 1.8);
    }
  }
}