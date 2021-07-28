var PLAY = 1;

var END = 0;
var WIN = 2;
var PLANT = 3;
var FINISH = 4
var SAPLING = 5
var DUMPING = 6
var gameState = PLAY;
var ground,player;
var ground_img,player_img;
var fence,fence_img,fenceGroup;
var sapling,seed1,seed2,seed3,sapling_img,saplingGroup
var EndGround,boy,boy_image
var canGroup,can1,can2,can
var trashcan,trashcan_img
var Mangotree,Mango_img,sunflower,tree1_img,papayatree,tree2_img
var tree3,tree3_img,tree4,tree4_img
var bird,deer,bird_img,deer_img
var form1
var saplingCount = 0;
var fenceCount = 0;
var canCount = 0;


function preload()
{
  ground_img = loadImage("IMAGES - PLANTING SAPLINGS/path-1.png")
  player_img = loadAnimation("IMAGES - PLANTING SAPLINGS/Runner-1.png","IMAGES - PLANTING SAPLINGS/Runner-2.png")
  fence_img = loadImage("IMAGES - PLANTING SAPLINGS/fence.png")
  seed1 =loadImage("IMAGES - PLANTING SAPLINGS/seed- 1.png")
  seed2 =loadImage("IMAGES - PLANTING SAPLINGS/seed-2.png")
  seed3 =loadImage("IMAGES - PLANTING SAPLINGS/seed-3.png")
  sapling_img = loadImage("IMAGES - PLANTING SAPLINGS/sapling-1.png")
  can1 = loadImage("IMAGES - PLANTING SAPLINGS/can-1.png")
  can2 = loadImage("IMAGES - PLANTING SAPLINGS/can-2.png")
  EndGround = loadImage("IMAGES - PLANTING SAPLINGS/end-land.jpg")
  boy_image = loadImage("IMAGES - PLANTING SAPLINGS/Boy.png")
  Mango_img = loadImage("IMAGES - PLANTING SAPLINGS/mangotree-2.png")
  tree1_img = loadImage("IMAGES - PLANTING SAPLINGS/sunflower-1.png")
  tree2_img = loadImage("IMAGES - PLANTING SAPLINGS/tree-2.png")
  tree3_img = loadImage("IMAGES - PLANTING SAPLINGS/tree-3.png")
  tree4_img = loadImage("IMAGES - PLANTING SAPLINGS/tree-4.png")
  trashcan_img = loadImage("IMAGES - PLANTING SAPLINGS/dustbin.png")

}


function setup()
{
  createCanvas(500,800)

  ground = createSprite(250,400)
  ground.addImage(ground_img)
  ground.scale = 6
  ground.velocityY = 3

  player = createSprite(200,600)
  player.addAnimation("players",player_img)
  player.scale = 0.08


  player.setCollider("rectangle",0,0,850,850);
  player.debug = true

  boy = createSprite(400,430,20,20)
  boy.addImage(boy_image)
  boy.visible = false

  Mangotree = createSprite(100,430,20,20)
  Mangotree.addImage(Mango_img)
  Mangotree.visible = false

  sunflower = createSprite(300,520,20,20)
  sunflower.addImage(tree1_img)
  sunflower.visible = false

  papayatree = createSprite(400,460,20,20)
  papayatree.addImage(tree2_img)
  papayatree.visible = false

trashcan = createSprite(400,700,20,20)
trashcan.visible = false
trashcan.addImage(trashcan_img)

  fenceGroup = new Group()
  saplingGroup = new Group()
  canGroup = new Group()

form1 = new Form()

}

function draw()
{
  background("white")
  console.log(player.y)
  
if(gameState === PLAY)
{

  form1.hide1()
  form1.hide2()

  if(ground.y>800)
  {
   ground.y = 400 
   ground.height = ground.height/2

  }

  if(keyDown("RIGHT_ARROW"))
  {
    player.x = player.x+2
  }

  if(keyDown("LEFT_ARROW"))
  {
    player.x = player.x-2
  }

  
  

 spawnObstacles()
 spawnSaplings()
 spawnCans()

 
  drawSprites()

  fill("white")
  textSize(20)
  text("SaplingCount :" + saplingCount,260,100)

  fill("white")
  textSize(20)
  text("FenceCount :" + fenceCount,265,50)

  fill("white")
  textSize(20)
  text("CanCount :" + canCount,265,150)

if(player.isTouching(fenceGroup))
  {
    

     fill("yellow")
     textSize(20)
     text("ONE FENCE IS OBTAINED",100,200)
     fenceGroup.destroyEach()
     fenceCount = fenceCount +1
  }

  if(player.isTouching(saplingGroup))
  {
     fill("yellow")
     textSize(20)
     text("ONE SAPLING IS COLLECTED",100,200)
     saplingGroup.destroyEach()
     saplingCount = saplingCount +1
  }

  if(player.isTouching(canGroup))
  {
    fill("yellow")
    textSize(20)
    text("ONE CAN IS OBTAINED",100,200)
    canGroup.destroyEach()
    canCount = canCount+1
  }

  if(fenceCount === 3)
  {
    ground.velocityY = 0
    saplingGroup.setVelocityYEach(0)
    fenceGroup.setVelocityYEach(0)
    fenceGroup.destroyEach()
    gameState = END;
     
  }

  if(saplingCount>=1 && canCount>=1)
  {
    ground.velocityY = 0
    saplingGroup.setVelocityYEach(0)
    fenceGroup.setVelocityYEach(0)
    fenceGroup.destroyEach()
    gameState = WIN;
     
  }



}
if(gameState === END)
{
  form1.hide1()
  form1.hide2()
  background("green")
  fill("White")
  textSize(40)
  text("GAME OVER",120,300)

  fill("White")
  textSize(20)
  text("YOU HAVE COLLIDED THE FENCE 3 TIMES",45,600)

  ground.destroy()
  player.destroy()
  fenceGroup.destroyEach()

  
}

if(gameState === WIN)
{

  form1.hide1()
  form1.hide2()
  background("black")
  fill("white")
  textSize(25)
  text("WELL DONE !! ",10,170)
  textSize(20)
  text("YOU HAVE COLLECTED ALL SAPLINGS AND CANS",10,200)

  fill("yellow")
  textSize(20)
  text("PRESS SPACE TO GO TO NEXT LEVEL",10,350)

  fill("orange")
  textSize(15)
  text("IN THE NEXT LEVEL YOU HAVE TO",10,420)
  text("PLANT THE SAPLINGS AND DUMP THE CANS IN A DUSTBIN",10,460)

  ground.destroy()
  player.destroy()
  fenceGroup.destroyEach()

  if(keyDown("space"))
  {
    gameState = PLANT;
                            
  }
}
if(gameState === PLANT)
{
  background(EndGround)
  
  ground.destroy()
  player.destroy()
  fenceGroup.destroyEach()
  saplingGroup.destroyEach()

   boy.visible = true;
   boy.scale =0.5
form1.create()

drawSprites()
  
}


}


function spawnObstacles()
{
  if(frameCount%250 === 0)
  {
    fence = createSprite(30,-20)
    fence.addImage(fence_img)
    fence.velocityY =3
    fence.scale = 0.5
    fence.x = Math.round(random(40,430))
    fence.lifetime = 480
    fenceGroup.add(fence)
    player.depth = fence.depth +1
    fence.debug = true
  }
  
}

function spawnSaplings()
{
   var rand = Math.round(random(1,4));
  if(frameCount%280===0){
      
      sapling = createSprite(30, -20);
      switch(rand){
          case 1: sapling.addImage(sapling_img);
          break;
          case 2: sapling.addImage(seed1);
          break; 
          case 3: sapling.addImage(seed2);
          break;
          case 4: sapling.addImage(seed3);
          break;
          default: break;
      }
      sapling.velocityY =3
      sapling.scale = 0.25
      sapling.x = Math.round(random(30,430))
      sapling.lifetime = 480
      saplingGroup.add(sapling)
      player.depth = sapling.depth +1
  }

}

function spawnCans()
{
  var rands = Math.round(random(1,2));
  if(frameCount%340===0){
      
      can = createSprite(30, -20);
      switch(rands){
          case 1: can.addImage(can2);
          break;
          case 2: can.addImage(can1);
          break; 
          default: break;
      }
      can.velocityY =3
      can.scale = 0.1
      can.x = Math.round(random(30,430))
      can.lifetime = 480
      canGroup.add(can)
      player.depth = can.depth +1
  }
  
}


