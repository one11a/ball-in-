
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball

function setup() {
	createCanvas(1350, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	engine = Engine.create();
	world = engine.world;

	ball = Matter.Bodies.circle(100,650,20,[ball_options])
	World.add(world, ball)

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120)
	rightSide = new ground(900,600,20,120)
}


function draw() {
	background(0);
  rectMode(CENTER);
  Engine.update(engine);
 
  //console.log(mouseX)
  //console.log(mouseY)
  groundObj.display()
	

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.01, y:0.01})
	}

}


