const speed = 5;
const screen = 80;
let x = screen/2;
let y = screen/2;

function draw() {
  background(220);
  scene();
  ballOne();
  ballTwo();
  frog();
  keyPressed();
  
}

function scene() {
  noStroke();
  fill("#88FF57")
  rect(0, 0, 400, 50)
  fill("#6CD1FF")
  rect(0, 50, 400, 50)
  rect(0, 100, 400, 50)
  fill("#88FF57")
  rect(0, 150, 400, 50)
  fill("#2A2A2A")
  rect(0, 200, 400, 50)
  rect(0, 250, 400, 50)
  rect(0, 300, 400, 50)
  fill("#88FF57")
  rect(0, 350, 400, 50)
}


// Function One
function ballOne () {
  for (let dotsShown = 0; dotsShown < dots.length; dotsShown++) {

  dots[ dotsShown ].move();
  dots[ dotsShown ].show();
  }
}

class Dot {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 50%, 1)"
    this.addX = 3;
  }

  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let dotIsTooFarLeft = (this.x < 0);
    let dotIsTooFarRight = (this.x > 301);
    if (dotIsTooFarLeft || dotIsTooFarRight ) {
      this.addX = - this.addX;
    }
  }

  show() {
    push();
    fill("rgb(136,59,25)");
    noStroke();
    rect(this.x, this.y, 100, 50);
    pop();
  }
}


// Function Two
function ballTwo () {
  for (let ballsShown = 0; ballsShown < balls.length; ballsShown++) {

  balls[ ballsShown ].move();
  balls[ ballsShown ].show();
  }
}

class Dots {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 50%, 1)"
    this.addX = 3;
  }

  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let ballIsTooFarLeft = (this.x < 0);
    let ballIsTooFarRight = (this.x > 301);
    if (ballIsTooFarLeft || ballIsTooFarRight ) {
      this.addX = - this.addX;
    }
  }
  
    show() {
    push();
    fill("rgb(136,59,25)");
    noStroke();
    rect(this.x, this.y, 100, 50);
    pop();
  }
}


// Function Three
function ballThree () {
  for (let carsShown = 0; carsShown < cars.length; carsShown++) {

  cars[ carsShown ].move();
  cars[ carsShown ].show();
  }
}

class Cars {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 50%, 1)"
    this.addX = 3;
  }

  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let carIsTooFarLeft = (this.x < 0);
    let carIsTooFarRight = (this.x > 301);
    if (carIsTooFarLeft || carIsTooFarRight ) {
      this.addX = - this.addX;
    }
  }
  
    show() {
    push();
    fill("rgb(136,59,25)");
    noStroke();
    rect(this.x, this.y, 100, 50);
    pop();
  }
}



function setup() {
  createCanvas(400, 400);
 
// DOT
dots = [];

for (let dotsDrawn = 0; dotsDrawn < 1; dotsDrawn++) {
  let thisX = random(width);
  let thisY = (50);
  let thisHue = random(10);

dots[ dotsDrawn ] = new Dot(thisX, thisY, thisHue);
  }
}

// BALL
balls = [];

for (let ballsDrawn = 0; ballsDrawn < 1; ballsDrawn++) {
  let thisX = (10);
  let thisY = (100);
  let thisHue = (10);

balls[ ballsDrawn ] = new Dots(thisX, thisY, thisHue);
  }

// CAR
cars = [];

for (let carsDrawn = 0; carsDrawn < 1; carsDrawn++) {
  let thisX = (100);
  let thisY = (210);
  let thisHue = (10);

cars[ carsDrawn ] = new Cars(thisX, thisY, thisHue);
  }


// Frog
function frog() {
  push();
  noStroke();
  translate(x, y);
  fill("darkgreen")
  rect(100, 310, 50, 50)
  pop();
}


// Movement
function keyPressed() {
  if(keyCode === UP_ARROW && keyIsPressed) {
    y-=speed;
  }
  if(keyCode === DOWN_ARROW && keyIsPressed) {
    y+=speed;
  }
  if(keyCode === RIGHT_ARROW && keyIsPressed) {
    x+=speed;
  }
  if(keyCode === LEFT_ARROW && keyIsPressed) {
    x-=speed;
  }
}
