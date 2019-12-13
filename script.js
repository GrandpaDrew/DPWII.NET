var myShip;
var stars = [];

function setup() {
  createCanvas(400, 400);
  myShip = new Ship();
  for (var i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (var i = 0; i < 100; i++) {
    stars[i].display();
  }
  myShip.display();
  mvmt();
  //print(stars[0]);
}

function mvmt() {
  if (keyIsDown(RIGHT_ARROW)) {
    myShip.setRot(0.05);
  } else if (keyIsDown(LEFT_ARROW)) {
    myShip.setRot(-0.05)
  }
  if (keyIsDown(UP_ARROW)) {
    for (var i = 0; i < 100; i++) {
      stars[i].setPos(myShip.Vspeed, myShip.rot);
    }
    if (keyIsDown(DOWN_ARROW)) {
  
    }
  }
}
class Ship {
  constructor() {
    this.size = 20;
    this.x = (width / 2);
    this.y = height / 2;
    this.rot = 0;
    this.speed = 0;
    this.Vspeed = 5;
  }

  display() {
    push();
    translate(this.x, this.y)
    rotate(this.rot)
    stroke(255);
    fill(0);
    rect(-this.size,-this.size/3.5,15,10)
    triangle(this.size / 2, 0, -this.size / 2, -this.size / 2,
      -this.size / 2, this.size / 2);
    
    noStroke();
    rect(-this.size+4,-this.size/3.5+0.5,15,10)
    fill(255)
    pop();
  }

  setX(posX) {
    this.x = posX;
  }
  setY(posY) {
    this.y = posY;
  }
  setRot(r) {
    this.rot = this.rot + r
  }

}
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 2.5;

  }
  display() {
    push();
    fill(255)
    rect(this.x, this.y, this.size, this.size);
    pop();
  }
  setPos(speed, angle) {
    this.x = (this.x - speed * cos(angle));
    this.y = (this.y - speed * sin(angle));
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

}
class Bullet {
  constructor(posX,posY) {
    this.x = posX;
    this.y = posY;
    this.diameter = 5;
    this.color = color(random(255),random(255),random(255));
    this.speed = 4;
  }
  
  move() {
    this.y = this.y - this.speed
  }
  
  display() {
    push()
    fill(this.color);
    ellipse(this.x,this.y,this.diameter,this.diameter);
    pop()
  }
}// JavaScript Document