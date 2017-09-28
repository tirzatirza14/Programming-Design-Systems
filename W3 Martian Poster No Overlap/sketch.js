//mars and earth's location alternate without overlapping
//against a grey-whitish background

var planetsA = [];
var starsA = [];
var numStars = 100;
var numPlanet = 2; //we only need Mars and Earth
var c1, c2, c3, c4;

function setup() {
   createCanvas(300, 450);

   colorMode(HSL);

   //colours
   c1 = color(360, 0, random(90, 100)); //putting them here so the colours don't update every now and then 
   c2 = color(360, 0, random(80, 100));
   //c3 is for background, in the for loop.
   c4 = color(280, 0, random(10, 40));
}

function draw() {
   //background
   push();
   for (var i = 0; i <= height * 2; i++) {
      var n = map(i, 0, height, 0, 1); //new value go from 0 to 1, following the amt of colour lerping 
      c3 = lerpColor(c1, c2, n * 0.5);
      stroke(c3);
      line(width * 2, 0, 0, i);
   }
   pop();

   //stars
   while (starsA.length < numStars) { //earth and Mars will be of different sizes and will be placed at a random position
      var stars = {
         x: random(width),
         y: random(height),
         r: random(0, 1)
      }

      starsA.push(stars);

      for (var i = 0; i < starsA.length; i++) {
         fill(c4);
         noStroke();
         ellipse(starsA[i].x, starsA[i].y, starsA[i].r * 2, starsA[i].r * 2);
      }
   }

   //THE PLANETS
   //making sure earth and mars don't overlap

   var protection = 0; // Making sure we don't get stuck in infinite loop

   while (planetsA.length < numPlanet) { //earth and Mars will be of different sizes and will be placed at a random position
      var planet = {
         x: random(width),
         y: random(height),
         r: random(5, 500)
      }

      // check if mars and earth overlap
      var overlapping = false;
      for (var j = 0; j < planetsA.length; j++) {
         var other = planetsA[j];
         var d = dist(planet.x, planet.y, other.x, other.y);
         if (d < planet.r + other.r) {
            overlapping = true;
         }
      }

      // if they don't overlap, draw it.
      if (!overlapping) {
         planetsA.push(planet);
      }

      // in case we get stuck in the loop
      protection++;
      if (protection > 10000) {
         break;
      }
   }

   // Draw earth and mars
   for (var i = 0; i < planetsA.length; i++) {
      fill(c4);
      noStroke();
      ellipse(planetsA[i].x, planetsA[i].y, planetsA[i].r * 2, planetsA[i].r * 2);
   }

   noLoop();


}