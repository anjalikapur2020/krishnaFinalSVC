
var ground,groundImage;
var obstacle;
var openImage;
var player,playerImage
var name1;
var gameState="wait"
var bg,bgImage
var obImage,obImag
var bgImg,edges;
var x1 = 0;
var x2;
var enemyGroup,airenemyGroup,enemyairimg;
var scrollSpeed = 2;
var obImage1
var playerJump;
var invisibleground;
var score =0
var play,pause,exit,restart
var playimg,pauseimg,exitimg,restartimg
var level1button,level2button,level1buttonimg,level2buttonimg
var knifeimg;
var level1gamebg,level2gamebg
var enemykilled=0
var soldiersound,bombimg,bomb,moneyimg,bombCollected=0,moneycount=0;
var moneygroup,bombgroup;

var start,startimg,play,playimg,exit,exitimg,pause,pauseimg
var finalbg;

function preload(){

//load image for various buttons 
startimg=loadImage("buttons/start.png")
playimg=loadImage("buttons/play.png")
//pauseimg=loadImage("buttons/pause.png")
//exitimg=loadImage("buttons/exit.png")

finalbg=loadImage("finalbackground.jpg")
knifeimg=loadAnimation("fight/knife1.png","fight/knife1.png","fight/knife2.png","fight/knife2.png","fight/knife3.png","fight/knife3.png","fight/knife3.png","fight/knife4.png","fight/knife4.png")

level1buttonimg=loadImage("level/level1.png")
level2buttonimg=loadImage("level/level2.png")

bglevel1Img = loadImage("level/bgnew.png");
bglevel2Img=loadImage("level/bglevel2.jpg")
openImage=loadImage("startbg.jpg")
instructionsimg=loadImage("instructions.jpg")

knife=loadSound("enemy/knife.mp3")
tank=loadSound("enemy/tank.mp3")
//bgImage=loadImage("start.png")
playerImage=loadAnimation("run1.png","run5.png","run6.png")
playerJump=loadImage("jump2.png")
playerflipImage=loadAnimation("flip1.png","flip2.png","flip3.png")
soldiersound=loadSound("enemy/soldier.mp3")
bombimg=loadImage("airstrike/bomb.png")
//moneyimg=loadImage("airstrike/money.png")

//enemyimg1=loadAnimation("enemy/t1.png","enemy/t1.png","enemy/t2.png","enemy/t2.png","enemy/t3.png","enemy/t3.png","enemy/t4.png","enemy/t4.png","enemy/t5.png","enemy/t5.png","enemy/t6.png","enemy/t6.png","enemy/t7.png","enemy/t7.png","enemy/t8.png","enemy/t8.png","enemy/t9.png","enemy/t9.png","enemy/t10.png","enemy/t10.png","enemy/t11.png","enemy/t11.png")
//enemyimg2=loadAnimation("enemy/2enemy1.PNG","enemy/2enemy1.PNG","enemy/2enemy1.PNG","enemy/2enemy2.PNG","enemy/2enemy2.PNG","enemy/2enemy2.PNG","enemy/2enemy3.PNG","enemy/2enemy3.PNG","enemy/2enemy3.PNG")

enemyimg1=loadAnimation("enemy/t1.png","enemy/t2.png","enemy/t3.png","enemy/t4.png","enemy/t5.png","enemy/t6.png","enemy/t7.png","enemy/t8.png","enemy/t9.png","enemy/t10.png","enemy/t11.png")
enemyimg2=loadAnimation("enemy/s1.png","enemy/s2.png","enemy/s3.png","enemy/s4.png","enemy/s5.png","enemy/s6.png","enemy/s7.png","enemy/s8.png")

//enemyairimg=loadAnimation("airstrike/p1.png","airstrike/p1.png","airstrike/p2.png","airstrike/p2.png","airstrike/p3.png","airstrike/p3.png","airstrike/p4.png","airstrike/p4.png","airstrike/p5.png","airstrike/p5.png","airstrike/p6.png","airstrike/p6.png",)
enemyairimg=loadAnimation("airstrike/p1.png")
}


function setup() {
 createCanvas(displayWidth, displayHeight-displayHeight/7);

edges=createEdgeSprites()

 // x2 = width;
  //createCanvas(windowWidth-10, windowHeight-30);
  //background('green')
enemyGroup=new Group()
airenemyGroup=new Group()

bombgroup=new Group()
//moneygroup=new Group()

//create sprites for various buttons
play=createSprite(100,100)
play.addImage(playimg)
play.visible=false
play.scale=0.2 

/*
pause=createSprite(100,150)
pause.addImage(pauseimg)
pause.visible=false
pause.scale=0.2
*/




level1button= createSprite(width/4,height-height/4)
level2button= createSprite(width/2,height-height/4)

level1button.addImage(level1buttonimg)
level2button.addImage(level2buttonimg)

level1button.visible=false
level2button.visible=false

ground=createSprite(windowWidth/2,windowHeight/2,width,height)
ground.addImage(openImage)
ground.scale=2.845

invisibleground=createSprite(width/2,height,width,10)
invisibleground.visible=false


start=createSprite(width/2,height-height/10)
start.addImage(startimg)

instructions=createSprite(width/2,height/2)
instructions.addImage(instructionsimg)
instructions.visible=false

level1gamebg=createSprite(width/2,height/2)
level1gamebg.addImage(bglevel1Img)
level1gamebg.visible=false
level1gamebg.velocityX=-2
level1gamebg.scale=0.01

level2gamebg=createSprite(width/2,height/2)
level2gamebg.addImage(bglevel2Img)
level2gamebg.visible=false
level2gamebg.velocityX=-2


player=createSprite(80,height-height/3,100,100)
player.addAnimation("running",playerImage)
player.addAnimation("knife",knifeimg)
player.addAnimation("flip",playerflipImage)

player.scale=0.5
player.visible=false
}

function draw() {

  if (mousePressedOver(start)) {
ground.visible=false

background(instructionsimg)
gameState="start"
play.visible=true


level1button.visible=true
level2button.visible=true



start.visible=false

  }
  

if(mousePressedOver(level1button)){
 
  background(bglevel1Img)
textSize(35)

fill("black")
stroke("red")
  text(" This is a Ground Battle Level",width/4,height/8)
  text(" Mission : ",width/4,height/5)
  fill("white")
stroke("black")
strokeWeight(5)
  text(" The Player has to score 10000 points",width/4,height/4)
  text(" How To Play  :",width/4,height/3.25)
  text(" Use right arrow to attack the enemy with knife.",width/4,(height/3.25)+50)
  text(" Use Space bar to make the player jump.",width/4,(height/2.5)+50)
  text(" Use the left arrow to bring the player back to normal walking mode.",width/4,(height/2)+50)
  
 
  

}

if(mousePressedOver(level2button)){
  background(bglevel2Img)
  textSize(35)
  //fill("black")
//stroke("red")
fill("white")
stroke("black")
strokeWeight(5)
  text(" This is an Air Battle Level",width/4,height/12)
  text(" Mission : ",width/4,height/6)
  fill("white")
stroke("black")
strokeWeight(5)
  text(" The Player has to collect 25 Missiles",width/4,height/4)
  text(" How To Play  :",width/4,height/3.25)
  text(" Use right arrow to move the player right/forward.",width/4,(height/3.25)+50)
  text(" Use Space bar to make the player jump.",width/4,(height/2.5)+50)
  text(" Use left arrow to move the player left/backward.",width/4,(height/2)+50)
  

}


if(mousePressedOver(play)){
  gameState="level1"
 
}



  if (keyDown("space") && player.y>=589){
    player.velocityY=-35
    player.addAnimation("jump",playerJump)
  }

 player.velocityY=player.velocityY+0.5


 

if(gameState==="level1"){
  forlevel1()
  play.visible=true
  
 


  for (var i = 0; i < enemyGroup.length; i++) {
    if (enemyGroup.get(i).isTouching(player)) {
         enemyGroup.get(i).destroy()
         score=score-1000
    }
  }
    enemykilled=enemykilled+1
    
}


if(score>=100){
  enemyGroup.destroyEach()
  gameState="level2"

}

if(gameState==="level2"){
  forlevel2()
  
  
}

player.collide(invisibleground)
drawSprites()

if (gameState==="wait"){
textSize(40)
fill("black")
strokeWeight(10)
stroke("red")
text("AS ALWAYS THE FIGHT IS BETWEEN ",width/4,150)
text(" THE GOOD AND THE EVIL....",width/3,250)
textSize(100)
fill("Yellow")
strokeWeight(10)
stroke("red")
text("WAR ZONE",width/3,height/2)
text("DARE TO FIGHT WITH US ???",100,height/2+ 200)
textSize(50)
fill("black")
strokeWeight(10)
stroke("red")
text("Mind You.. There is no Exit Once you Enter",width/4,height/2+ 100)
}



if (gameState==="level1"){
 // score = score + Math.round(getFrameRate()/3600);
textSize(35)
  fill("Yellow")
  strokeWeight(3)
  stroke("red")
  text("Score: "+ score,width-200,100);
}

if(gameState==="level2"){
 
    if(player.isTouching(bombgroup)){
      bombCollected =bombCollected+ 1
      bombgroup.destroyEach()
    }
    
    if(bombCollected===1){
        gameState="end"
    }

   
  fill("Black")
  strokeWeight(3)
  stroke("red")
  textSize(35)
  text("BombCollected : "+ bombCollected,(width-width/4),100)
 }
if(gameState==="end"){
    background(finalbg)
    textSize(50)
    text("CONGRATULATIONS....",width/3,100)
    text("COME SOON AGAIN....",width/3,(height-50))

    
airenemyGroup.destroyEach()
bombgroup.destroyEach()
      }
}

//Spawn enemies for 1st LEVEL
function SpawnObstacles(){
  if (frameCount % 150 === 0){
     obstacle = createSprite(width,(height-height/5),0,40);
    obstacle.velocityX = -6
    obstacle.scale=2.3
    //obstacle.debug=true
    obstacle.setCollider("circle",0,0,25)
   //obstacle.addAnimation("enemy1",enemyimg1)
var no =Math.round(random(1,2))
switch(no){
case 1: obstacle.addAnimation("enemy1",enemyimg1)
break;

case 2: obstacle.addAnimation("enemy2",enemyimg2)
break;

default: break;

}
if (no ===1){
  tank.loop()
  soldiersound.stop()
  
}
else if(no===2){
  tank.stop()
  soldiersound.loop()
}
obstacle.lifetime = 300;
enemyGroup.add(obstacle)

}}

// function for LEVEL1
function forlevel1(){
  
// background(bgImage)
level1gamebg.visible=true
if(level1gamebg.x<width/3){
  level1gamebg.x=width/2
}
player.visible=true   
ground.visible=false

score = score +(Math.round(getFrameRate()/60))
;

play.visible=false

level1button.visible=false
level2button.visible=false
level1gamebg.velocityX=-2
level1gamebg.scale=3


//background("green");
/* image(bglevel1Img, x1, 0, width, height);
image(bglevel1Img, x2, 0, width, height);*/

if (keyDown("space") && player.y>=589){
player.velocityY=-35
}

player.velocityY=player.velocityY+0.5

if (keyDown("right_arrow") ){
  player.changeAnimation("knife",knifeimg)
 player.scale=0.7
 knife.play()
} 

else if (keyDown("up_arrow") ){
 player.changeAnimation("running",playerImage)
 player.scale=0.5
} 

SpawnObstacles()


}

function airObstacles(){
  if (frameCount % 150 === 0){
var score=0
    airobstacle = createSprite(width,150,50,40);  
       airobstacle.scale=3
    airobstacle.velocityX=-35
    airobstacle.x=Math.round(random(width/2,width))
//if(frameCount % 50==0){
  airbomb=createSprite((airobstacle.x)/2,(airobstacle.y),50,50)
  airbomb.addImage(bombimg)
  airbomb.scale=0.25
  
    airbomb.velocityY=50
  //airbomb.debug=true
  airbomb.setCollider("circle",0,0,40)
  airbomb.lifetime=300;
  
  //player.debug=true
  
  
  //player.setCollider("rectangle",0,150,100,100)
   airobstacle.addAnimation("bomb",enemyairimg)
  airobstacle.lifetime = 300;
 

airenemyGroup.add(airobstacle)
bombgroup.add(airbomb)

  }
  
  
}

  
    
   
   



function forlevel2(){
 
  level1gamebg.visible=false
// background(bgImage)
level2gamebg.visible=true
if(level2gamebg.x<width/3){
  level2gamebg.x=width/2
}
player.visible=true   
ground.visible=false

//score = score +(Math.round(getFrameRate()/60))


play.visible=false

level1button.visible=false
level2button.visible=false
level2gamebg.velocityX=-2
level2gamebg.scale=3
/*textSize(30)
fill("black")
text("Score : "+score,width/2,height/2)
//background("green");
/* image(bglevel1Img, x1, 0, width, height);
image(bglevel1Img, x2, 0, width, height);*/

if (keyDown(RIGHT_ARROW)){
  player.x +=10
  player.changeAnimation("running",playerImage)
  }
  

  if (keyDown(LEFT_ARROW)){
    player.x -=10
    player.changeAnimation("flip",playerflipImage)
    }
    
if (keyDown("space") && player.y>=589){
player.velocityY=-35
}

player.velocityY=player.velocityY+0.5

if( player.x>=width){
  player.x=80
  }

  if(player.x<=10 ){
    player.x=width-100
  }

soldiersound.stop()
tank.stop()
airObstacles()



}