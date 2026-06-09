let cols = 11;
let rows = 11;
let colors = [];



let heart = [
  [0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,1,1,0,0],
  [0,1,1,1,1,0,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0]
];

function setup() {
    createCanvas(windowWidth, windowHeight);
//dessiner
  for (let a = 0; a < cols; a++) {
    for (let b = 0; b < rows; b++) {

      let x = a * 27;
    let y = b * 27;
      
      if (heart[b][a] == 1) {
        fill(255, 0, 80); // rose
      } else {
        fill(0); // black
      }

      noStroke();
      ellipse(x + 15, y + 15, 28, 28);
    }
  }
}

function draw() {
}