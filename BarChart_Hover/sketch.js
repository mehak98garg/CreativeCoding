let data = [45, 70, 120, 200, 90];
let barWidth;
let maxValue;

function setup() {
  createCanvas(700, 700);
  // Consider width after excluding the padding after last bar and the space between bars
  barWidth = (width - 80) / data.length; 
  maxValue = max(data);
}

function draw() {
  background(240);

  // Draw bars and labels
  for (let i = 0; i < data.length; i++) {
    // Include padding of 10 points between bars
    let x = 20 + i * (barWidth + 10); 
    let h = map(data[i], 0, maxValue, 0, height - 50);
    let y = height - h - 20;

    // Highlight the bar under the mouse hover event
    if (mouseX > x && mouseX < x + barWidth && mouseY > y && mouseY < height - 20) {
      fill(255, 100, 100);
    } else {
      fill(100, 100, 255);
    }

    rect(x, y, barWidth - 1, h);

    // Display the value represented by the bar
    fill(0);
    textAlign(CENTER);
    text(data[i], x + barWidth / 2, y - 5);
    text('Category ' + (i + 1), x + barWidth / 2, height - 5);
  }
}

function mousePressed() {
  // Changes the color of the bar on which the mouse is hovered
  for (let i = 0; i < data.length; i++) {
    let x = 20 + i * (barWidth + 10);
    let h = map(data[i], 0, maxValue, 0, height - 50);
    let y = height - h - 20;

    if (mouseX > x && mouseX < x + barWidth && mouseY > y && mouseY < height - 20) {
      data[i] += 20;
      break; 
    }
  }
}
