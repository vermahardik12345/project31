const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine= Matter.Engine;
var divisons=[];
var plinkos=[];
var particles=[];




var Ground1;
var divisionHeight=450;


function setup() {
createCanvas(480,800);

engine=Engine.create();
world=engine.world;

  Ground1=new Ground(width/2,780,width,10);

  for (var k = 0; k <= width; k = k + 80){
    divisons.push(new Divisions(k, height-divisionHeight/2+75, 10 ,divisionHeight-200))
   }

   for(var j=40; j<=width; j=j+50)

  {
    plinkos.push(new Plink(j,75))
  }
  for(var j=15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plink(j,175))
  }

  for(var j=35; j<=width-20; j=j+50)
  {
    plinkos.push(new Plink(j,275))
  }


  for(var j=45; j<=width-20; j=j+50)
  {
    plinkos.push(new Plink(j,375))
  }
  for(var j=15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plink(j,475))
  }
  


}

function draw() {
  background(0);
  Engine.update(engine);  
  Ground1.display();
   
  for(var z=0; z< divisons.length; z++)
  {
    divisons[z].display();
  }
  for(var j=0; j< plinkos.length; j++)
  {
    plinkos[j].display();
  }
  if(frameCount%25===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j=0; j< particles.length; j++)
  {
    particles[j].display();
  }
 
}