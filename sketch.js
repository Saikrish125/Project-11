var trackImage;

var track;

var boyAnimation;

var boy;

var boundry1;

var boundry2;


function preload(){
  trackImage = loadImage("path.png");
  boyAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  track = createSprite(200,200,400,400);
  track.addImage("track", trackImage);
  track.velocityY = 3

  boy = createSprite(200,320,20,20);
  boy.addAnimation("boy running", boyAnimation);
  boy.scale = 0.1;

  boundry1 = createSprite(64,5,10,800);
   boundry1.visible = false;

  boundry2 = createSprite(343,5,10,800);
  boundry2.visible = false;
 
  

}

function draw() {
  background(0);

  if(track.y>400){
    track.y = height/2;
  }

  

  


  boy.x = World.mouseX;

  boy.collide(boundry1);
  boy.collide(boundry2);

  drawSprites();

}
