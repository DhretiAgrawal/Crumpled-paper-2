const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var   paper , dustbinImage , dustbin , dustbin2 , dustbin3 , ground;



function setup() {
	createCanvas(900, 500);

    engine = Engine.create();
	world = engine.world;

	//ground=createSprite(width/2, height-35, width,10);
	//ground.shapeColor=color(0)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	paper = new Paper(200,100,50);
	
	dustbin = new Dustbin(700,350,10,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
 

  paper.display();
  dustbin.display();

  //ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

//Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

