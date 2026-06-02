let flag1, flag2, flag3;

function setup() {
  createCanvas(400, 400);
  
  flag1 = new Flag('blue', 'gold', 'red', 200, 20);
  flag2 = new Flag('rgb(1,252,135)', 'rgb(197,184,114)', 'rgb(236,112,112)', 200, 150);
  flag3 = new Flag('rgb(30,30,155)', 'rgb(197,184,114)', 'rgb(0,255,244)', 200, 280);
}

function draw() {
  background(1);
  
  if (frameCount > 100) { flag1.c2 = 'rgb(255,255,255)'; }
  
  flag1.drawFlag();
  flag2.drawFlag();
  flag3.drawFlag();
}

class Flag {
  constructor(c1, c2, c3, x, y) {
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.x = x;
    this.y = y;
  }
  w = 160;
  h = 100;
  
  drawFlag() {
    const stripe = this.w / 100;
    const slices = 40;
    const sliceH = this.h / slices;
    const amp = 200;
    const t = frameCount * 0.05;
    const colors = [this.c1, this.c2, this.c3];
    
    noStroke();
    for (let row = 0; row < slices; row++) {
      const y = this.y + row * sliceH;
      const offset = sin(row * 0.3 + t) * amp;
      for (let i = 0; i < 3; i++) {
        fill(colors[i]);
        rect(this.x + i * stripe + offset, y, stripe, sliceH + 1);
      }
    }
  }
}