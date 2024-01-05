let rez = 0.05;
let triangleSize = 70;

function setup() {
  createCanvas(600,600);
  colorMode(HSB,360,100,100,100);
  colorStart = random(260);
  noLoop();
}

function draw() {
  background(255);
  for (i = 0; i < width; i += triangleSize) {
    for (j = 0; j < height; j += triangleSize) {
      n1 = noise(i * rez, j * rez);
      n2 = noise(i * rez+10000, j * rez+10000);
      if (n1 < 0.5) {
        fill(floor(n1*100)+colorStart,100,100,100);
        triangle(i, j, i + triangleSize, j + triangleSize, i,j+triangleSize);
        fill(floor(100-(n1*100))+colorStart,100,100,100);
        triangle(i, j, i + triangleSize, j + triangleSize, i+triangleSize,j);
      } else {
        fill(floor(n2*100)+colorStart,100,100,100);
        triangle(i + triangleSize, j, i, j + triangleSize,i,j);
        fill(floor(100-(n2*100))+colorStart,100,100,100);
        triangle(i + triangleSize, j, i, j + triangleSize,i+triangleSize,j+triangleSize);
      }
    }
  }
}