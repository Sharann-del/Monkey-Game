//Global Variables
var player,playerani;
var banana,bananaimg;
var obstacle,obstacleimg;
var score;
var back,backimg;

function preload(){
  backimg = loadImage("jungle.jpg");
  playerani=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg = loadImage("Banana.png");
}

function setup() {
  createCanvas(600,300);
  player = createSprite(300,150,50,100);
  back = createSprite(300,150,600,300);
  
  back.addImage(backimg);
  player.addAnimation(playerani);
}

function draw(){
 background(150);
  Banana();
  drawSprites();
}

function Banana(){
if(frameCount%60===0){
banana = createSprite(630,50,10,100);
  banana.scale = 0.05;
  banana.velocityX = -10;
  banana.velocityY = banana.velocityY+2.9;
  banana.addImage(bananaimg);
}
}

