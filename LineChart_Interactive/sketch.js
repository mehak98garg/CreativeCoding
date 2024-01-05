let data = [30, 50, 80, 120, 60];
let spacing;
let maxValue;

function setup() {
  createCanvas(1000, 1000);
  spacing = width / (data.length - 1);
  maxValue = max(data);
}

function draw() {
  background(240);
  stroke(0);
  noFill();

  // Draw line chart
  beginShape();
  for (let i = 0; i < data.length; i++) {
    let x = i * spacing;
    let y = map(data[i], 0, maxValue, height - 50, 50);
    vertex(x, y);

    // Display data values
    fill(0);
    ellipse(x, y, 8, 8);
    text(data[i], x, y - 10);
  }
  endShape();

  // Highlight the point under the mouse
  let mouseXIndex = floor(mouseX / spacing);
  if (mouseXIndex >= 0 && mouseXIndex < data.length) {
    fill(255, 100, 100);
    let x = mouseXIndex * spacing;
    let y = map(data[mouseXIndex], 0, maxValue, height - 50, 50);
    ellipse(x, y, 12, 12);
  }
}

function mousePressed() {
  // Increase the value of the point under the mouse
  let mouseXIndex = floor(mouseX / spacing);
  if (mouseXIndex >= 0 && mouseXIndex < data.length) {
    data[mouseXIndex] += 20;
  }
}
