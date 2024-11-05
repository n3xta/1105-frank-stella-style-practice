function setup() {
  createCanvas(800, 400);
}

function draw() {

  background(0);
  fill(0);
  rect(0,0,width,height);
  strokeWeight(2.5);
  stroke(255);
  for(i = 0; i < width; i += width / 78){
    line(0, i, width, i);
  }

  push();
  clip(mask1);
  fill(0, 47, 167);
  rect(0,0,width,height);
  strokeWeight(2.5);
  stroke(255);
  for(i = 0; i < width; i += width / 78){
    line(i, 0, i, height);
  }
  pop();

  push();
  clip(mask2);
  background(0);
  fill(0, 47, 167);
  rect(0,0,width,height);
  pop();
  
}

function mask1(){
  triangle(width/2, 0, width/4, height/2, width/2, height);
  triangle(width/2, 0, width/4 * 3, height/2, width/2, height);
}

function mask2(){
  triangle(0, 0, width/4, 0, 0, height/2);
  triangle(0, height/2, width/4, height, 0, height);
  triangle(width, 0, width/4 * 3, 0, width, height/2);
  triangle(width, height/2, width/4 * 3, height, width, height);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('attempt', 'png');
  }
}
