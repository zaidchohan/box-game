
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1;
var box2;
var box3,ball;


	

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	box1=new Box(200,200,70,10)
	box2=new Box(180,200,70,10)
	box3=new Box(140,200,70,10)
	ball=new Ball(40,320,20,20)

  
}


function draw() {
  rectMode(CENTER);
  background(blue);
  
	Engine.update(engine);
	box1.display()
	box2.display();
	box3.display();
	ball.display();
	drawSprites();


 
}



