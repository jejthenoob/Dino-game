
var trex ,trex_running;
var groundImage, ground;
function preload(){
  trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png");  
  groundImage = loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (100,150, 30,60);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.75;

ground = createSprite(300,190,600,5)
ground.addImage ("ground",groundImage)
ground.velocityX = -7
 
}

function draw(){
  
  background(200)
  trex.collide (ground)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (keyDown("space")){
    trex.velocityY = -15
  }
  // gravity in the game
  trex.velocityY += 0.8;
  drawSprites ()
}
