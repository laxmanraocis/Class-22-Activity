//namespacing(renaming)
//constant whose value will never change in the whole program
const Engine=Matter.Engine; 
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world, ball;
var ground;

function setup() {
  createCanvas(400,400);

  //creating engine
  engine = Engine.create();

  //connecting world with the engine so that it will follow physics rules
  world=engine.world;

  var ball_options={
    restitution:2  //bounciness
 
  }

  //creating a circle body
  ball=Bodies.circle(200,100,30,ball_options); //x&y&radius
  //adding body to the world
  World.add(world,ball);

  var ground_options={
    isStatic:true    //No semicolon----true means no gravity
  }
  //creating a rectangle body
  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);

  console.log(ball);

}

function draw() { 
  //updating the engine
  Engine.update(engine);
  background(0); 
  
  fill(255);

  //displaying circle body using ellipse command
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30); //vertical and horizontal radius

  //displaying rectangle body using rect command
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

} 