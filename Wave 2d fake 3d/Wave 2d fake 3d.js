function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#00048F');
  
  let cols = 20;
  let rows = 20;
  let espX = width / cols;
  let espY = height / rows;
  
  let c1 = color('#9e0059');
  let c2 = color('#ff0054');
  let c3 = color('#ff5400');
  let c4 = color('#ffbd00');
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      
      // position
      let posX = x * espX + espX / 2;
      let posY = y * espY + espY / 2;
      
      // distance depuis la souris
      let d = dist(mouseX, mouseY, posX, posY);
      
      // effect waves, j'ai demandé à chat gpt comment faire :))))
      let wave = sin(d * 0.05 - frameCount * 0.1);
      
      // taille change selon les waves
      let taille = map(wave, -1, 1, 5, espX * 0.9);
      
      // color change selon les waves
      let t = map(wave, -1, 1, 0, 1);
      
      let strokeCol;
      
      if (t < 0.33) {
        strokeCol = lerpColor(c1, c2, t / 0.33);
      } else if (t < 0.66) {
        strokeCol = lerpColor(c2, c3, (t - 0.33) / 0.33);
      } else {
        strokeCol = lerpColor(c3, c4, (t - 0.66) / 0.34);
      }
      
      // briller
      let bright = map(d, 0, 300, 255, 80);
      bright = constrain(bright, 80, 255);
      
      strokeCol.setAlpha(bright);
      
      noFill();
      stroke(strokeCol);
      strokeWeight(1.5);
      ellipse(posX, posY, taille, taille);
    }
  }
}