
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	boy= loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	tree = new Tree(1000, 340, 450,500);
	mango1 = new Mango(1000, 150, 30);
	mango2 = new Mango(1200, 250, 30);
	mango3 = new Mango(1200, 300, 30);
	mango4 = new Mango(1100, 200, 30);
 stone = new Stone(235, 420, 30);
 slingShot= new Slingshot(stone.body, {x:245, y:420})	
Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 200, 340, 200, 300);
  drawSprites();
  tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 stone.display();
 slingShot.display();

}
function mouseDragged(){
	 Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
 }
function mouseReleased(){
	slingShot.fly();
}
