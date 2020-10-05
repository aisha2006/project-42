var hr,mn,sc
var hrAngle, mnAngle, scAngle;
var clockImg;

function preload(){
  clockImg = loadImage("clock.jpeg")
}

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");  
  imageMode(CENTER);
  image(clockImg,200,200,400,400);
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr%12, 0, 60, 12, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push()
  translate(200,200);
  rotate(scAngle-90);
  stroke("grey");
  strokeWeight(3);
  line(130,0,10,0);
  pop()

  push()
  translate(200,200)
  rotate(mnAngle-90);
  stroke(255,255,255);
  strokeWeight(7);
  line(80,0,10,0);
  pop()

  push()
  translate(200,200);
  rotate(hrAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(50,0,10,0);
  pop()

  ellipse(200,200,10,10)
}