function setup() {
  createCanvas(800, 800);
  colorMode(RGB, 1);
  noStroke();
}

const radius = Math.sqrt(0.5);
const circleSize = 0.04;
const goldenRatio = (1 + Math.sqrt(5)) / 2;

function draw() {
  scale(width, height);
  background(0);
  const c = color(0, 255, 50);
  fill(c);

  const totalLayers = 1000;
  for (let num = 1; num < totalLayers; num++) {
    const f = num / totalLayers;
    const angle = num * goldenRatio;
    const dist = f * radius;

    const x = 0.5 + cos(angle * 2 * PI) * dist;
    const y = 0.5 + sin(angle * 2 * PI) * dist;

    const r = f * circleSize;

    circle(x, y, r);
  }
}