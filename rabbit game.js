var garden,rabbit;
var gardenImg,rabbitImg;
var apples, appleImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leaveImage = loadImage("leaf.png");
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

  rabbit.x = World.mouseX;

  createApples()

  drawSprites();
}

function createApples(){
 
  var select_sprites = Math.round(random(1, 2));


   if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      apples = createSprite(random(50, 350),40, 10, 10);
      apples.addImage("apple", appleImage);
      apples.scale = 0.08;
      apples.velocityY = 4;
    } else {
      createLeaves();
    }
   }
  }


function createLeaves(){
  if (frameCount % 80 == 0) {
    leaves = createSprite(random(50, 350),40, 10, 10);
    leaves.addImage("leaf", leaveImage);
    leaves.scale = 0.08;
    leaves.velocityY = 4;
  }

}