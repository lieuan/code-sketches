class Panneau {
  constructor(x, y, bg, c1, c2, c3) {
    this.x = x;
    this.y = y;
    this.bg = bg;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
  }
// les minis rect dans chaque carre
  afficher() {
    // backgorund
    fill(this.bg);
    noStroke();
    rect(this.x, this.y, 300, 300);

    // rect 1 (trái, cao)
    fill(this.c1);
    rect(this.x + 40, this.y + 40, 90, 160);

    // rect 2 (phải trên)
    fill(this.c2);
    rect(this.x + 140, this.y + 40, 110, 100);

    // rect 3 (phải dưới)
    fill(this.c3);
    rect(this.x + 140, this.y + 150, 110, 110);
  }
}

// 4 panels
let p1, p2, p3, p4;

function setup() {
  createCanvas(600, 600);
  noLoop();

  // color 1 rect haut gacuhe
  p1 = new Panneau(0, 0,
    color(240, 235, 210),  
    color(130, 170, 155),  
    color(240, 210, 120),  
    color(180, 30, 70)    
  );

  // color 2 rect haut droit
  p2 = new Panneau(300, 0,
    color(30, 15, 50),    
    color(210, 140, 160), 
    color(130, 100, 150), 
    color(240, 235, 210)   
  );

  // color 3 bas gauche
  p3 = new Panneau(0, 300,
    color(180, 90, 20),   
    color(240, 220, 120), 
    color(130, 30, 30),    
    color(220, 140, 80)   
  );

  // color 4 bas droit
  p4 = new Panneau(300, 300,
    color(150, 185, 170),  // xanh xám
    color(220, 150, 165),  // hồng
    color(240, 235, 210),  // kem
    color(100, 100, 120)   // xám xanh
  );
}

function draw() {
  p1.afficher();
  p2.afficher();
  p3.afficher();
  p4.afficher();
}