var ship,shipImg;
var enemy1,enemyImg;
var enemy2,enemy2Img
var bg,backgroundImg;
var missile,missileImg;

function preload(){
  shipImg=loadImage("The fighter plane.png");
  enemyImg=loadImage("enemy4.png");
  enemy2Img=loadImage("enemy.png");
  backgroundImg=loadImage("bg.png");
  missileImg=loadImage("Missile-Background-PNG.png");
}

function setup(){
  createCanvas(600,600);
  bg=createSprite(300,300,10,10);
  bg.addImage(backgroundImg);
  bg.velocityY=1;

  ship=createSprite(400,400,40,40);
  ship.addImage("ship",shipImg);
  ship.scale=0.08;
  
  missile=createSprite(80,800);
  missile.addImage("missile",missileImg);
  missile.scale=0.08;
 
}

function draw(){
background(0);
frameRate(50);

//moving background
if(bg.y<400){
  bg.y=300;
}

//creating edge
edges=createEdgeSprites();
   ship.collide(edges);

//controll for ship
if(keyCode===LEFT_ARROW){
  ship.x=ship.x-1;
}
if(keyCode===RIGHT_ARROW){
  ship.x=ship.x+1;
}

//making enemy in 1row
Enemy();

//making enemy in 2nd row
Enemy2();
//shooting for spaceship 
if(keyCode===32){
  ship.shoot(missile);
}
drawSprites();
}

function Enemy(){
  enemy1=createSprite(400,100,40,40);
  enemy1.addImage("enemy1",enemyImg);
  enemy1.scale=0.08;

  var i=enemy1;
  for(var i;i<6;i++){
    enemy1(i);
  }
}

function Enemy2(){
  enemy2=createSprite(400,200,40,40);
  enemy2.addImage("enemy2",enemy2Img);
  enemy2.scale=0.08;

  var k =enemy2;
  for(var k;k<6;k++){
    enemy2(k);
  }
}

