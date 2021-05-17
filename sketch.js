var bullet,wall;

var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);
thickness=random(22,83);

bullet= createSprite(50,200,50,50);
bullet.velocityX= speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor= color(80,80,80);
}

function draw() {
  background(255,255,255); 
  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var deformation = 0.5* weight*speed/22509;
    if (deformation>180) {
      bullet.shapeColor= "green";
    }

    if (deformation<180 && deformation>100) {
      bullet.shapeColor= "brown";
    }

    if (deformation<100) {
      bullet.shapeColor= "red";
    }
  }

  drawSprites();
}