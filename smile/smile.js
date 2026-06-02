function setup() {
  createCanvas(400, 400);
  
  colorMode(HSB);

  // Définit le mode des anglesssss
  angleMode(DEGREES);

  describe('Deux yeux qui suivent le curseur avec une bouche.');
}

function draw() {
  background(123);

  // Dessiner l'œil gauche

  let leftX = 150;
  let leftY = 200;

  // Calculer l'angle entre l'œil gauche et la souris
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);

  // Blanc de l'œil (ovale)
  fill(255);
  ellipse(0, 0, 70, 45);

  rotate(leftAngle);

  // Pupille
 fill(0);
  ellipse(12.5, 0, 25, 25);

  pop();

  // Dessiner l'œil droit

  let rightX = 250;
  let rightY = 200;

  // Calculer l'angle entre l'œil droit et la souris
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);

  // Blanc de l'œil (ovale
 fill(0, 100, 100);
ellipse(0, 0, 70, 45);

  rotate(rightAngle);

  // Pupille
  fill(0);
  ellipse(12.5, 0, 25, 25);

  pop();

  // Dessiner la bouche
  noFill();
 stroke(0, 100, 100);
  strokeWeight(4);
  arc(200, 280, 80, 50, 0, 200);
}