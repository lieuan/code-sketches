let cols = 100;
let rows = 100;
let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = make2Darray(cols, rows);

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            colors[i][j] = random(255);
        }
    }

    background(0);

    for(let a = 0; a < cols; a++) {
        for(let b = 0; b < rows; b++) {
            
            let x = a * 30;
            let y = b * 30;
            let s = 14;
            
            fill(colors[a][b]);
            noStroke();
            
            quad(
                x + 15,     y,
                x + 15 + s, y + 15,
                x + 15,     y + 30,
                x + 15 - s, y + 15
            );
        }
    }

}

function make2Darray(cols, rows) {
    var arr = new Array(cols);
    for(var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function draw() {}