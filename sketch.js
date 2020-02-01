var num = 400;
var outsideNum = 150;
var Stars = [];
var outsideStars = [];
var isOn = true;
var pos;
var outR;

function setup(){
  var myCanvas = createCanvas(displayWidth, displayHeight, WEBGL);
  myCanvas.parent("#canvas");
  pixelDensity(displayDensity());
  background(0);
  noStroke();
  colorMode(HSB);

  pos = 0;
  outR = 2;
  if(isVertical()){
    pos = -70;
    outR = 1;
  }

  for(var i = 0; i < outsideNum; i++){
    var star = new Star(0.39);
    outsideStars.push(star);
    outsideStars[i].setColorWhite();
    outsideStars[i].setRadius(outR);
    outsideStars[i].drawStarWhite();
  }
  console.log(outR);
  for(var i = 0; i < num; i++){
    var star = new Star(0.29);
    Stars.push(star);
    Stars[i].update();
    Stars[i].drawStar();
  }

  translate(0, pos, 0);
}

function draw(){
  translate(0, pos, 0);

  background(0);


  for(var i = 0; i < outsideNum; i++){
    outsideStars[i].update();
    outsideStars[i].drawStarWhite();
  }

  for(var i = 0; i < num; i++){
    Stars[i].update();
    Stars[i].drawStar();
  }
}

// function mouseClicked(){
//   var r = random();
//   for(var i = 0; i < num; i++){
//     Stars[i].setStar(r);
//   }
// }

function touchEnded(){
  var r = random();
  for(var i = 0; i < num; i++){
    Stars[i].setStar(r);
  }
}

function isVertical(){
  let isVertical;
  if(displayHeight > displayWidth){
    isVertical = true;
  }else{
    isVertical = false;
  }
  return isVertical;
}

// function mouseWheel(event){
//   pos += event.delta;
//   pos = constrain(pos, 0, 2000);
// }

class Star{
  constructor(randomNumber){
    this.setStar(randomNumber);
    this.x = this.targetX;
    this.y = this.targetY;
    this.z = this.targetZ;
    this.radius = random(1.5, 2.5);
    this.c = this.setColor();
  }

  drawStar(){
    push();
    rotateX(millis()/2000*0.1);
    rotateY(millis()/2000*0.1);
    fill(color(this.c, 90, 100));
    translate(this.x, this.y, this.z);
    sphere(this.radius);
    pop();
  }

  drawStarWhite(){
    push();
    rotateX(-millis()/2000*0.1);
    rotateY(-millis()/2000*0.1);
    fill(color(this.c, 50, 100));
    translate(this.x, this.y, this.z);
    sphere(this.radius);
    pop();
  }

  setStar(randomNumber){
    var baseLength;
    if(displayHeight > displayWidth){
      baseLength = displayHeight;
    }else{
      baseLength = displayWidth;
    }
    var phi = random(TWO_PI);
    var unitZ = random(-1, 1);

    if(randomNumber< 0.4){
      randomNumber*=2;
      randomNumber = constrain(randomNumber, 0.1, 0.5);
      this.targetX = baseLength*randomNumber * sqrt(1 - unitZ * unitZ) * cos(phi);
      this.targetY = baseLength*randomNumber * sqrt(1 - unitZ * unitZ) * sin(phi);
      this.targetZ = baseLength*randomNumber * unitZ;
    }else if(randomNumber<0.8){
      this.targetX = random(-baseLength/2, baseLength/2);
      this.targetY = random(-baseLength/2, baseLength/2);
      this.targetZ = random(-baseLength/2, baseLength/2);
    }else if(randomNumber<0.9){
      this.targetX = random(baseLength-500, baseLength-400)*0.5 * cos(phi);
      this.targetY = random(baseLength-500, baseLength-400)*0.5 * sin(phi);
      this.targetZ = random(-20, 20);
    }else{
      this.targetX = random(-100, 100);
      this.targetY = random(-100, 100);
      this.targetZ = 0;
    }
  }

  setColor(){
    var c;
    if(random() < 0.1){
      c = random(50, 60);
    }else{
      c = random(240, 280);
    }
    return c;
  }

  setColorWhite(){
    this.c = 276;
  }

  setRadius(_r){
    this.radius = _r;
  }

  update() {
    this.x += (this.targetX - this.x) * 0.02;
    this.y += (this.targetY - this.y) * 0.02;
    this.z += (this.targetZ - this.z) * 0.02;
  }
}
