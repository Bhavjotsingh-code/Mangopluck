
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,boy,treeImage,boyImage;
var gameState="onSling"
function preload()
{
  treeImage = loadImage("tree.png");
  boyImage= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var boy= createSprite(170,450,20,20)
boy.addAnimation("boy", boyImage);
boy.scale = 0.1;

rock= new Rock(200,300,40,40)
mango1= new Mango(500,300,20,20)
mango2= new Mango(620,300,20,20)
mango3= new Mango(650,270,20,20)
mango4 = new Mango(670,310,20,20)
mango5= new Mango(600,220,20,20)
 var  tree= createSprite(600,400,20,20)
tree.addAnimation("tree", treeImage);
tree.scale= 0.3;

ground = new Ground(600,600,1200,20);
rope = new Rope(rock.body,{x:130, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  rock.display();
  ground.display();
  rope.display();
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);

}
function keyPressed(){
  if(keyCode === 32){
    
        rope.attach(rock.body);
  }
}
function detectCollision(rock,mango){
 mangoBodyPosition=mango.body.position 
  rockBodyPosition=rock.body.position 
  var distance=dist(rockBodyPosition.x, rockBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=mango.r+rock.r)
  {
   Matter.Body.setStatic(mango.body,false)
   // mango.isStatic=false
  }
}
function mouseDragged(){
  if(gameState!="launch"){
  Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  rope.fly();
  gameState="launch"
}
