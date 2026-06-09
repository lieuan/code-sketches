function setup() {
    createCanvas(windowWidth, windowHeight);

    for(let y = 0; y < 8; y++){
        for(let x = 0; x < 8; x++){
          noStroke()
            fill(x * 51, 123, y * 33);
            square(x * 50, y * 50, 50);
            print(x, y, x * 51, y * 51);
        }
    }
}

function draw() {
}