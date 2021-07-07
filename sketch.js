var garden,rabbit;
var gardenImg,rabbitImg;
var apple, apple_image;
var leave, leave_image

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_image = loadImage("apple.png")
  leave_image = loadImage("leaf.png")
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

  rabbit.x = World.mouseX

  var select = Math.round(random(1,3))

  if(frameCount % 80 == 0){
    var select = Math.round(random(1,3))
    if(select == 1){
     createApples()
    } 
    else{
      createLeaves()
    } 
  }



  drawSprites();
}

function createApples(){
  apple = createSprite(200,200,20,20)
  apple.velocityY = 3
  apple.addImage("apple",apple_image)
  apple.lifetime = 60
  apple.x = Math.round(random(1,400))
  apple.scale = 0.1
}

function createLeaves(){
  leave = createSprite(200,200,20,20)
  leave.velocityY = 3
  leave.addImage("leave",leave_image)
  leave.lifetime = 60
  leave.x = Math.round(random(1,400))
  leave.scale = 0.1
}