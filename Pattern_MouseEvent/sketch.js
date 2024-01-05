let rotatingAngle=0
function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER)
  
}

function draw() {
  background(0);

  for (let var1 = 50; var1 < mouseX; var1 += 50) {
    for (let var2 = 50; var2 < mouseY; var2 += 50) {
      noFill()
      stroke(mouseX - var1, var1, mouseY - var2)
      strokeWeight(3)
      
      let d =dist(mouseX,mouseY,var1+width/2,var2+height/2)
      
      let r=d/7
      push()
      translate(var1, var2)
      rotate(-rotatingAngle)
      rect(0, 0, r, r)
      pop()
      
      push()
      translate(var1, var2)
      rotate(rotatingAngle)
      rect(0, 0, r, r)
      pop()
      
      rotatingAngle+=0.00002
      
    }
  }

}