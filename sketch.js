//nameSpace
const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

//creating my own physics engine
var  engine,world
var ground;
var ball;





function setup(){
createCanvas(400,400)


engine= Engine.create()
world=engine.world

var ground_options={
  isStatic:true
}
var ball_option={
  restitution:.5
}
ground= Bodies.rectangle(200, 380, 400, 20,ground_options) 
World.add(world,ground)

ball= Bodies.circle(300,300,25,ball_option)
World.add(world,ball)

}
function draw(){
  background("black")

  Engine.update(engine)
  push()
  rectMode(CENTER)
  fill("pink")
  rect(ground.position.x,ground.position.y,400,20)
  pop()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
  

}
