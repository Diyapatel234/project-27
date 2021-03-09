
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
roof = new Roof(370,50,550,50);
bob1 = new Bob(170,550,45);

bob2 = new Bob(260,550,45);
bob3 = new Bob(350,550,45);
bob4 = new Bob(440,550,45);
bob5 = new Bob(530,550,45);
rope1 = new Rope(bob1.body,roof.body,-99*2,0);
rope2 = new Rope(bob2.body,roof.body,-57*2,0);
rope3 = new Rope(bob3.body,roof.body,-12*2,0);
rope4 = new Rope(bob4.body,roof.body,65,0);
rope5 = new Rope(bob5.body,roof.body,155,0);
rope6 = new Rope(bob2.body,bob4.body,0,0);

	Engine.run(engine);
 
}


function draw(){


  background(225);
  rectMode(CENTER);
  Engine.update(engine);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  

  
  drawSprites();
 }
 function keyPressed(){
   if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(bob1.body,bob1.position,{x:-465,y:-465});
   
    }
    
 }