const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  engine = Engine.create();
    world = engine.world;

  a=height;
  circles.push(width/2)
  base1=new Ground(300,400,250,30);
  base2=new Ground(600,300,280,30);
  box1=new Box(200,360,40,40)
  box2=new Box(250,360,40,40)
  box3=new Box(300,360,40,40)
  box4=new Box(350,360,40,40)
  box5=new Box(400,360,40,40)
  box6=new Box(220,320,40,40)
  box7=new Box(270,320,40,40)
  box8=new Box(320,320,40,40)
  box9=new Box(370,320,40,40)
  box10=new Box(240,280,40,40)
  box11=new Box(290,280,40,40)
  box12=new Box(340,280,40,40)
  box13=new Box(270,240,40,40)
  box14=new Box(320,240,40,40)

  box15=new Box(500,260,40,40)
  box16=new Box(550,260,40,40)
  box17=new Box(600,260,40,40)
  box18=new Box(650,260,40,40)
  box19=new Box(700,260,40,40)
  box20=new Box(750,260,40,40)
  box21=new Box(510,180,40,40)
  box22=new Box(560,180,40,40)
  box23=new Box(610,180,40,40)
  box24=new Box(660,180,40,40)
  box25=new Box(570,120,40,40)
  groundfloor=new Ground(400,790,800,30)
  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon)
  slingshot= new SlingShot(this.polygon,{x:100,y:200})
}

function draw() {
  
  background(79);  
  Engine.update(engine);
  
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20)
 base1.display();
 base2.display();
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()

 box15.display()
 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 box25.display()
slingshot.display()
 groundfloor.display();
 
 drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}