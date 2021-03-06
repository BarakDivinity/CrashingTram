const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var rock1;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  boggie1=new Boggie(50,180,50,50);
  boggie2=new Boggie(150,180,50,50);
  boggie3=new Boggie(250,180,50,50);
  boggie4=new Boggie(350,180,50,50);
  boggie5=new Boggie(450,180,50,50);
  boggie6=new Boggie(550,180,50,50);

  rock1=new Rock(1100,785,50,50);

  chain1=new Chain(boggie1.body,boggie2.body);
  chain2=new Chain(boggie2.body,boggie3.body);
  chain3=new Chain(boggie3.body,boggie4.body);
  chain4=new Chain(boggie4.body,boggie5.body);
  chain5=new Chain(boggie5.body,boggie6.body);

  ground=new Ground(600,380,1200,10);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();

  rock1.show();
  
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

  var collision=Matter.SAT.collides(boggie6.body,rock1.body);
  if(collision.collided){
    flag=1;
  }

  if(flag===1){
    text("CRASH",580,200)
  }  
}

  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},
        {x:0.5,y:0});
        trainSound.play();
    }
  }