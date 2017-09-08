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
  push();
  fill(0);
  ellipse(80, 135, 150, 150);
  pop();
  
  //semi circle to indicate the ice cream
  //semi circle achived by drawing a circle which half part 
  //of it is covered by the triangle. 
  push();
  fill(255);
  noStroke();
  ellipse(80, 100, 50, 50);
  pop();

  //those circles 
  for (var i = 80; i <= 80; i++) {
    smallCircles(i, 102);
  }

  //Cone
  push();
  noStroke();
  fill(255);
  // triangle(50, 100, 100, 100, 75, 200);
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
  push();
  fill(0);
  ellipse(240, 138, 150, 150);
  pop();
  
  //semi circle to indicate the ice cream
  //semi circle achived by drawing a circle which half part 
  //of it is covered by the triangle. 
  push();
  fill(255);
  noStroke();
  ellipse(240, 100, 50, 50);
  pop();

  //Cone
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

  //white lines
  for (var i = 214; i <= 214; i++) {
     blackLine(i, 125);
  }
}

function iceCreamThree() {
  push();
  fill(0);
  ellipse(400, 138, 150, 150);
  pop();
  
  //ice cream
  push();
  fill(255);
  rect(375, 80, 50, 95, 20);
  pop();

  //bite
  push();
  fill(0);
  ellipse(380, 90, 30, 30);
  pop();

  //stick
  push();
  fill(255);
  rect(395, 178, 10, 20);
  pop();
}

function blackLine(x, y) { //these white lines go on the cones
  noStroke();
  fill(0);
  rect(x + 5, y - 7, 35, 3); //rect 1 25 px above rect 2 
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