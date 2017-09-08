// Ice Cream Icons
// Make icons for ice cream with just ellipses, triangles, and rectagles

function setup() {
  createCanvas(500, 300);
  background(255);
}

function draw() {
  iceCreamOne();
  iceCreamTwo();
  iceCreamThree();
}

function iceCreamOne() {
  //the background circle
  push();
  fill(0);
  ellipse(80, 135, 150, 150);
  pop();

  //one big scoop of ice cream
  push();
  fill(255);
  noStroke();
  ellipse(80, 100, 50, 50);
  pop();

  //smaller ice cream scoops on the sides
  for (var i = 80; i <= 80; i++) {
    smallCircles(i, 102);
  }

  //the cone
  push();
  noStroke();
  fill(255);
  triangle(55, 100, 105, 100, 80, 200);
  pop();

  //white border between the ice cream and the cone
  push();
  noStroke();
  fill(0);
  rect(55, 110, 50, 3);
  pop();
}

function iceCreamTwo() {
  //the background circle
  push();
  fill(0);
  ellipse(240, 138, 150, 150);
  pop();

  //one scoop of ice cream
  push();
  fill(255);
  noStroke();
  ellipse(240, 100, 50, 50);
  pop();

  //the cone
  push();
  noStroke();
  fill(255);
  triangle(215, 100, 265, 100, 240, 200);
  pop();

  //white border between the ice cream and the cone
  push();
  noStroke();
  fill(0);
  rect(215, 110, 50, 3);
  pop();

  //white lines for a bit of accent
  for (var i = 214; i <= 214; i++) {
    blackLine(i, 125);
  }
}

function iceCreamThree() {
  //the background circle
  push();
  fill(0);
  ellipse(400, 138, 150, 150);
  pop();

  //ice cream, rectangle shaped
  push();
  fill(255);
  rect(375, 80, 50, 95, 20);
  pop();

  //bitten!
  push();
  fill(0);
  ellipse(380, 90, 30, 30);
  pop();

  //ice cream stick stick
  push();
  fill(255);
  rect(395, 178, 10, 20);
  pop();
}

//the accent lines that goes on the second ice cream
function blackLine(x, y) { 
  noStroke();
  fill(0);
  rect(x + 5, y - 7, 35, 3); //the first line is 5 units above the second line.  
  rect(x, y, 30, 3);
  rect(x - 5, y + 7, 25, 3);
}

function smallCircles(x, y) {
  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(x - 25, y, 20, 20);
  ellipse(x + 25, y, 20, 20);
}
