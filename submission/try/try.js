function setup() {
    createCanvas(windowWidth, 600);
    angleMode(DEGREES);
  }
  
  function draw() {

  noFill();
  strokeWeight(3);
  stroke("#9B5D58");
  translate(width / 2, height / 2 - 30);
  s = second();
  secondmap = map(s, 0, 60, 0, 360);
  rotate(secondmap);
  translate(0, 140);
  s = second();
  secondmap = map(s, 0, 60, 0, -360);
  rotate(secondmap);
  hr = hour();
  // if (hr>12) {
  //   scale(-1);
  //   translate (0, -50)
  // }
  circle(0, -12.5, 25);
  push();
  stroke("#E6CBC1");
  translate(0, 0);
  hr = hour();
  hourmap = map(hr, 0, 12, 0, 360);
  rotate(hourmap);
  line(0, 0, 0, -20);
  pop();
  push();
  stroke("#E6CBC1");
  translate(0, 40);
  m = minute();
  minutemap = map(m, 0, 60, 0, 360);
  rotate(minutemap);
  line(0, 0, 0, -30);
  pop();
  push();
  translate(0, 40);
  line(0, 0, 15, 30);
  pop();
  push();
  translate(0, 0);
  line(0, 0, 0, 40);
  pop();
  push();
  translate(0, 0);
  line(0, 0, -20, 10);
  pop(); 
  }