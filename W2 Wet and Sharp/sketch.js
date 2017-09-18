function setup() {
  createCanvas(500, 500);

  background(0);

  fill(255);
  noStroke();

  //small triangles
  var baseSTri = 20; //len of the base of the small triangles
  var midTri = baseSTri / 2;
  var heightTri = -10;
  var padding = 2; //dist between each triangle
  var distBetTips = baseSTri + (padding * 2); //dist between each vertex of the tri
  var numUpw = 3; //number of upwards pointing tri
  var numDow = 2; //number of downwards pointing tri

  //tall triangles
  var baseTTri = baseSTri;
  var heightTTri = -heightTri * 9;
  var baseHTri = padding;

  translate((width / 2) - (baseSTri+midTri), (height / 2) - 50);
  
  //small triangles
  for (var i = 0; i < numUpw * distBetTips; i += distBetTips) { //upwards pointing triangle
    beginShape();
    vertex(0 + i, 0);
    vertex(baseSTri + i, 0);
    vertex(midTri + i, heightTri);
    endShape(CLOSE);
    for (var j = 0; j < numDow * distBetTips; j += distBetTips) { //downwards pointing triangle
      beginShape();
      vertex(baseSTri + padding + j, 0, 0);
      vertex(midTri + padding + j, heightTri);
      vertex(midTri + baseSTri + padding + j, heightTri);
      endShape(CLOSE);
    }
  }

  //tall triangles
  for (n = 0; n < 3; n++) {
    for (i = 0; i < 2 * baseTTri; i += baseTTri + padding * 1.5) {
      beginShape();
      vertex(0 + (i * n), baseHTri);
      vertex(baseTTri + (i * n) + (padding * 0.5), baseHTri);
      vertex(baseSTri + padding + midTri, heightTTri);
      endShape();
    }
  }

  //blood
  var begin = baseSTri * 2 + 5;
  var lengthB = heightTTri * 0.7;
  beginShape();
  vertex(begin, lengthB);
  bezierVertex(begin + 5, lengthB - 10, begin - 20, lengthB + 50, begin, heightTTri + 20);
  bezierVertex(begin + 10, lengthB + 35, begin, lengthB + 30, begin, lengthB);
  endShape(CLOSE);

  beginShape();
  vertex(begin + 10, lengthB - 20);
  bezierVertex(begin + 10, lengthB, begin - 5, lengthB + 20, begin + 10, heightTTri - 10);
  bezierVertex(begin + 20, lengthB + 10, begin + 3, lengthB - 10, begin + 10, lengthB - 20);
  endShape(CLOSE);

}