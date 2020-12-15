
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("white");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  spawnObstacles();
  spawnBanana();
  
 drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,320,10,40);
   obstacle.velocityX = -6;

   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //adding obstacles to the group
   obstacleGroup.add(obstacle);
 }
}




function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(150,280));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   FoodGroup.add(banana);
  }
  
}