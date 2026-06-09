let cols = 100;
let rows = 100;
let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = make2Darray(cols, rows);

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            colors[i][j] = random(255);
            console.log(colors[i][j]);
        } // j
    } // i



background(51);
//dessiner
  for( let a=0; a<cols; a++){
    for (let b=0; b<rows; b++){
      let x = a * 30;
      let y = b * 30;
    fill( colors[a][b], 15, 0);
    stroke(0); noStroke()
   ellipse(x + 15, y + 15, 30, 30);
  }
  }
  
  
} // fin setup

// usine de papier quadrillé...
function make2Darray(cols, rows) {
    var arr = new Array(cols);
    for(var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function draw() {
    // Le reste du code pour le dessin
}