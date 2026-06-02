let bouncy = {
  
size: 16,
posX: 10,
posY: 15,
vitX: 1.2,
vitY: 0.9,
name: "A bouncy thing",
  
bouger: function () {
this.posX = this.posX + this.vitX;
this.posY += this.vitY;
},
  
  
rebondir: function () {
if (this.posX + this.size > width || this.posX < 0) {
this.vitX = this.vitX * -1;
}
  
  
if (this.posY + this.size > height || this.posY < 0) {
this.vitY *= -1;
}
  
},
  
  
afficher: function () {
stroke(255, 0, 255);
strokeWeight(2);
square(this.posX, this.posY, this.size);
noStroke();
text(this.name, this.posX, this.posY - 4);
},
  
  
update: function () {
this.bouger();
this.rebondir();
this.afficher();
}
  
  
}; // bouncy object
/* - - - - - - - - - - */
let bBouncy = Object.create(bouncy);
bBouncy.name = "Bouncy McBounceface";
bBouncy.vitX = 1.5;
let copyBouncy = Object.create(bouncy);
copyBouncy.name = "Crazy bouncy";
copyBouncy.vitY = 1.3;
/* - - - - - - - - - - */

function setup() {
frameRate(120);
createCanvas(400, 400);
}
function draw() {
background(220);
bouncy.update();
bBouncy.update();
copyBouncy.update();
}