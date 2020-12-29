
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box,box2,box3;
var ball,ballimage;
var dustbin,dustbinimage;

function preload()
{
	dustbinimage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20)
	box = new Box(650,650,100,20);
	box2 = new Box(710,630,20,60);
	box3 = new Box(590,630,20,60);
	ball=new Ball(100,635,70)
	
	
	
	

	Engine.run(engine);
   dustbin=createSprite(650,565,20,20)
   dustbin.addImage(dustbinimage)
   dustbin.scale=0.6;
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  ground.display();
  box.display()
  box2.display()
  box3.display()
  ball.display();
  //dustbin.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.setStatic(ball.body,false)
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
	}
}


