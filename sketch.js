const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground= new Ground(240, 750, 500, 30)
}

function draw() {
  background('black'); 
  
  ground.display();  
  drawSprites();
}