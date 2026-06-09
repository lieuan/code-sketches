let flag1;

function setup() {
   createCanvas(windowWidth, windowHeight);
  
  flag1= new Flag('blue','gold', 'red', 40,80);
  flag2= new Flag('rgb(244,247,5)','rgb(241,23,170)', 'rgb(0,0,0)', 400,80);
  flag3= new Flag('rgb(30,30,155)','rgb(197,184,114)', 'rgb(236,112,112)', 220,80);
  
 
}

function draw() {
  
  if(frameCount > 100){ flag1.c2 = "black"; }
  if(frameCount > 100){ flag2.c1 = "rgb(38,139,101)"; }
  if(frameCount > 100){ flag3.c3 = "rgb(31,89,161)"; }
  flag1.drawFlag();
   flag2.drawFlag();
    flag3.drawFlag();
  
}

class Flag{
  constructor(c1,c2,c3,x,y){
    this.c1=c1;
    this.c2=c2;
    this.c3=c3;
    this.x= x;
    this.y=y;
  }
  w=160;
  h=100;

drawFlag(){
  noStroke();
  const bandeau = this.w/3;
  fill( this.c1); 
  rect( this.x,this.y,bandeau,this.h);
  fill(this.c2);
  rect(this.x+bandeau, this.y, bandeau, this.h);
  fill(this.c3);
  rect(this.x+bandeau*2, this.y, bandeau, this.h);
  
}
}

//let machin = new Flag();