const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var gameState;
var car,carimg;
var tree,treeimg;
var input1,input2,button;
var backimg,backimg2,roadimg;
var background1;


function preLoad(){
  backimg=loadImage("Picture/back.png")
  roadimg=loadImage("Picture/download 2.jpg")
  carimg=loadImage("Picture/download.jpg")
  treeimg=loadImage("Picture/images.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create()
  world=engine.world
  background1=createSprite(200,200,50,50)
  background1.addImage(backimg)
  input1=createInput("name")
  input1.position(200,150)
  input2=input1.value()
  button=createButton('play')
 button.position(200,160)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  
  drawSprites();
}