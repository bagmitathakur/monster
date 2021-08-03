const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7;
var hero,monster,rope,ground,ground1,ground2;
var invisibleGr;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(600, 540, 2100, 20);
  
  hero = new Hero(400,700,250);
  rope = new Rope(hero.body, { x: 400, y: 50 });
  monster = new Monster(1100,530,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5=new Box(900,100,70,70);
  box6=new Box(900,100,70,70);
  box7=new Box(900,100,70,70);
  

  

}

function draw() {
  background(bg);
  Engine.update(engine);
  monster.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  
  hero.display();
  rope.display();
  
  isTouching(hero,monster);
  keyPressed();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});




}
function mouseReleased(){
rope.fly();


}
function keyPressed(){
if(keyCode===32){ 
rope.attach(hero.body);

}


}
function isTouching(hero1,monst){
  monstPos=monst.body.position;
  heroPos=hero1.body.position;
  
  var collision=dist(monstPos.x,heroPos.x,monstPos.y,heroPos.y);
  if(monstPos.x/2+heroPos.r/2<collision||monstPos.y/2+heroPos.r/2<collision){
    
  
    World.remove(world,monst.body);
  
  
  
  
  }
  
  
  
  
  }
 

