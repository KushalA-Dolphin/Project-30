const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,stand1,ball,launcher,polygon;

function preload(){
 polygon = loadImage("polygon.png");
}

function setup(){
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;


  stand1 = new Stand(390, 300,250, 10);
  stand2 = new Stand(700, 200,200, 10);

  strokeWeight(2);
  stroke(15);
  
  //layer 1 is as follows
  fill("blue");
  box1 = new Box(300, 275, 30, 30);
  box2 = new Box(330, 275, 30, 30);
  box3 = new Box(360, 275, 30, 30);
  box4 = new Box(390, 275, 30, 30);
  box5 = new Box(420, 275, 30, 30);
  box6 = new Box(450, 275, 30, 30);
  box7 = new Box(480, 275, 30, 30);
  //layer 2 is given below
  fill("lightblue");
  box8 = new Box(330, 235, 30, 30);
  box9 = new Box(360, 235, 30, 30);
  box10 = new Box(390, 235, 30, 30);
  box11 = new Box(420, 235, 30, 30);
  box12= new Box(450, 235, 30, 30);
  //layer 3 
  box13 = new Box(360, 195, 30, 30);
  box14 = new Box(390, 195, 30, 30);
  box15 = new Box(420, 195, 30, 30);
  //layer 4 
  box16 = new Box(390, 155, 30, 30);
  //stand 2
  //layer 1
  boxes1=new Box(640,175,30,30);
  boxes2=new Box(670,175,30,30);
  boxes3=new Box(700,175,30,30);
  boxes4=new Box(730,175,30,30);
  boxes5=new Box(760,175,30,30);
  //layer2
  boxes6=new Box(670,135,30,30);
  boxes7=new Box(700,135,30,30);
  boxes8=new Box(730,135,30,30);
  //layer 3
  boxes9=new Box(700,90,30,30);

  ball=Bodies.circle(50,200,20);
  World.add(world,ball);

  launcher = new Launch(this.ball,{x:150,y:200});
}

function draw (){
  Engine.update(engine);
  background(0,0,0);

  textSize(20);
  fill("white");
  text("Drag and drop ball to knock down box",100,30);

  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();
  boxes9.display();
  image(polygon,ball.position.x,ball.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}