var garden,rabbit;
var gardenImg,rabbitImg;
var Apples,appleImg;
var Leaves,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

  var select_sprites = Math.round(random(1,2));
  if (frameCount % 80== 0){
    if(select_sprites===1){
      createApples()
    }else{
      createLeaves()
    }
  }
 

  drawSprites();
}
function createApples() {
  Apple = createSprite(random(50,350),0,10,10);
  Apple.addImage(appleImg);
 Apple.velocityY=3
 Apple.lifetime=400/3
 Apple.scale=0.1
}

function createLeaves(){
  Leaves = createSprite(random(50,350),40,10,10);
  Leaves.addImage(leavesImg);
  Leaves.velocityY=3
  Leaves.lifetime=400/3
  Leaves.scale=0.1
  }