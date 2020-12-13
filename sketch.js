const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600,690,1200,20);
	bin = new dustbin();
	//bin2 = new dustbin(610,640,20,100);
	//bin3 = new dustbin(790,640,20,100);
	circle = new Circle(200,650);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
	//bin1.display();		
	//bin2.display();
	//bin3.display();
	bin.display(850, 605, 150, 150);
	circle.display();
}

function keyPressed()
{
	if(keyCode===38)
	{Matter.Body.applyForce(circle.body,circle.body.position,{x:1,y:-1})}
}