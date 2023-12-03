
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options={isStatic: true}
	
		var block1_options = {
			restituition:0.8,
			friction:0.01,
			frictionAir:0
		}
		var block2_options = {
			restituition:0.3,
			friction:0.3,
			frictionAir:0.2
		}
		var block3_options = {
			restituition:0.1,
			friction:0.9,
			frictionAir:0.4
		}

	
block1 = Bodies.circle(220,10,10,block1_options);
World.add(world,block1);

block2 = Bodies.rectangle(110,50,10,block2_options);
World.add(world,block2);

block3 = Bodies.rectangle(350,50,10,block3_options);
World.add(world,block3);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
fill("white");
ellipse(block1.position.x,block1.position.y,50);
fill("white");
rect(block2.position.x,block2.position.y,50,50)
fill("white");
rect(block3.position.x,block3.position.y,100,50)





  drawSprites();
 
Engine.update(engine);



}



