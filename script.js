
let gridSize = 50;
let cols, rows;

function setup() {
  createCanvas(800, 800);
  cols = int(width / gridSize);
  rows = int(height / gridSize);
}

function draw() {
  background(255, 240, 245);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize / 2;
      let y = j * gridSize + gridSize / 2;

      let d = dist(x, y, mouseX, mouseY);
      let s = map(d, 0, 300, gridSize, 5);
      s = constrain(s, 5, gridSize);

      let r = map(x, 0, width, 255, 255);
      let g = map(x, 0, width, 120, 165);
      let b = map(x, 0, width, 180, 50);

      fill(r, g, b);
      noStroke();

      if (d < 150) {
        circle(x, y, s);
      } else {
        rectMode(CENTER);
        rect(x, y, s * 0.7, s * 0.7);
      }
    }
  }
}
