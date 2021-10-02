
var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(190,190,50,50)
}

function draw() 
{
  background("red");
if(keyIsDown(RIGHT_ARROW))
{
  ball.x = ball.x+2
}
if(keyIsDown(LEFT_ARROW))
{
  ball.x = ball.x-2
}
if(keyIsDown(UP_ARROW))
{
  ball.y = ball.y-2
}
if(keyIsDown(DOWN_ARROW))
{
  ball.y = ball.y+2
}
drawSprites()
}




