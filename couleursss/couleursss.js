
let points = [];
let couleurs = [];
let ligne = 5;


function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  // randomm points
  for (let i = 0; i < ligne; i++) {
    points.push({
      aX: random(width),
      aY: random(height),
      bX: random(width),
      bY: random(height),
      vitAX: random(1, 4) * (random() > 0.5 ? 1 : -1),
      vitAY: random(1, 4) * (random() > 0.5 ? 1 : -1),
      vitBX: random(1, 4) * (random() > 0.5 ? 1 : -1),
      vitBY: random(1, 4) * (random() > 0.5 ? 1 : -1),
    });
    
    // couleurrr
    couleurs.push({
      r: random(255),
      g: random(255),
      b: random(255),
      vitR: random(0.5, 2),
      vitG: random(0.5, 2),
      vitB: random(0.5, 2),
    });
  }
}

function draw() {
  //opacity
  background(0, 0, 0, 8);
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let c = couleurs[i];
    
    // changer la couleur
    c.r += c.vitR;
    c.g += c.vitG;
    c.b += c.vitB;
    if (c.r >= 255 || c.r <= 0) { c.vitR *= -1; }
    if (c.g >= 255 || c.g <= 0) { c.vitG *= -1; }
    if (c.b >= 255 || c.b <= 0) { c.vitB *= -1; }
    
    // positions
    p.aX += p.vitAX;
    p.aY += p.vitAY;
    p.bX += p.vitBX;
    p.bY += p.vitBY;
    
    // rebondir quand il touche le bord
    if (p.aX >= width  || p.aX <= 0) { p.vitAX *= -1; }
    if (p.aY >= height || p.aY <= 0) { p.vitAY *= -1; }
    if (p.bX >= width  || p.bX <= 0) { p.vitBX *= -1; }
    if (p.bY >= height || p.bY <= 0) { p.vitBY *= -1; }
    
    strokeWeight(map(mouseX, 0, width, 0.5, 3));
    stroke(c.r, c.g, c.b, 180);
    line(p.aX, p.aY, p.bX, p.bY);

    strokeWeight(4);
    point(p.aX, p.aY);
    point(p.bX, p.bY);
  }
}

// si je click il y aura des nouvelles lignes hehehe
function mousePressed() {
  points.push({
    aX: mouseX,
    aY: mouseY,
    bX: random(width),
    bY: random(height),
    vitAX: random(1, 5) * (random() > 0.5 ? 1 : -1),
    vitAY: random(1, 5) * (random() > 0.5 ? 1 : -1),
    vitBX: random(1, 5) * (random() > 0.5 ? 1 : -1),
    vitBY: random(1, 5) * (random() > 0.5 ? 1 : -1),
  });
  couleurs.push({
    r: random(255),
    g: random(255),
    b: random(255),
    vitR: random(0.5, 2),
    vitG: random(0.5, 2),
    vitB: random(0.5, 2),
  });
}

// save
function keyPressed() {
  if (key === "s") {
    save("dessin.png");
  }
}