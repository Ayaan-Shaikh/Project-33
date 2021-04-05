const   Engine = Matter.Engine;
const   World = Matter.World;
const   Events = Matter.Events;
const   Bodies = Matter.Bodies;

var particles=[];
var plinkos =[];
var divisons=[];
var divisonsHeight=300;
var score=0;
var count=0;
var particle;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);

            //DIVISONS
  for (var k=0; k<=width; k=k +80){
   divisons.push(new Divisions(k,790,divisonsHeight/1,10,divisonsHeight));
  }
  for (var k=0; k<=width; k=k +80){
   divisons.push(new Divisions(k,790-divisonsHeight/2,10,divisonsHeight));
  }   

      //  PLINKOS
    for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,375));
    }
      
}
 


function draw() {
  background("black");
   Engine.update(engine);
   push();
   textSize(20)
   fill(255);
   text("Score : "+score,20,30);
   pop();
  if( gameState  ===   PLAY){
       //500
       if(particle!=null){
         particle.display();
if(particle.body.position.y>760){
      if(particle.body.position.x<300){
         score=score+500;
         count=count+1;
         particle=null;
   }
 }  
}     //100
     if(particle!=null){
        particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x<410||particle.body.position.x<470||particle.body.position.x<550)
{      score=score+100;
       count=count+1;
       particle=null;
    }
   }  
 }    //200
     if(particle!=null){
       particle.display();
if(particle.body.position.y>760){
     if(particle.body.position.x<610||particle.body.position.x<680||particle.body.position.x<780)
   {   score=score+200;
       count=count+1;
       particle=null;
     }
   }
 }
   
 } 

  push();
  textSize(25)
  fill(255);
  text("500",20,500);
  text("500",100,500);
  text("500",175,500);
  text("500",260,500);
  text("100",340,500);
  text("100",415,500);
  text("100",500,500);
  text("200",580,500);
  text("200",660,500);
  text("200",740,500);
  pop();
if(count>= 5){
   push();
   textSize(45)
   fill(255);
   text("Game Over",250,250);
   pop();
   gameState="END";
}

         //PLINKOS 
   for (var i = 0; i < plinkos.length; i++) {
         plinkos[i].display();
        }
        //DIVISONS
   for (var k = 0; k < divisons.length; k++) {
          divisons[k].display();
       }



}


     
     //MOUSE PRESSED
function mousePressed(){
   if(gameState!=="END"){
      particle=new Particle(mouseX,10,10,10)
   }
}