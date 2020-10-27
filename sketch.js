
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(32,52);
  weight =  random(223,321);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);

  bullet = createSprite(50,200,30,30);
  bullet.shapeColor = "white";

}  

function draw() {
  background("black");

  bullet.velocityX = speed;

  if(hasCollide(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage < 10){
      wall.shapeColor = "green";
    }
    if(damage > 10){
      wall.shapeColor = "red";
    }

  }
  

  drawSprites();
}
function hasCollide(blt,wl){
 bulletRightEdge = blt.x + blt.width;
 wallLeftEdge = wl.x;

 if(bulletRightEdge >= wallLeftEdge){
   return true;
 }
 return false;
}
  