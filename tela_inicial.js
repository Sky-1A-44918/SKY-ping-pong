press=1
press2=2
function tela1(){
  
  
  background('green');

 {
   fill(225)
  circle(0, 200, 200)
  rect(0,0,10,400)
  
  circle(400, 200, 200)
  rect(390,0,10,400)
  
  
  rect(195,0,10,400);
  circle(200, 200, 150)
  
  
  
  rect(125,220,150,50,20)
  
  
  
  rect(125,120,150,50,20)
    }
  let k = "Options press 2"
{ fill(color('black'))
  textSize(20)
  text(k,130,250)
  textSize(15)
 text('PING-PONG',160,50)
 text('SKY44918',160,370)
  text('PING-PONG Press 1',130,150)}
 

  
  if (keyIsDown(49) && tela < 2)
  {
    tela += press
    }
  else if (keyIsDown(49) && tela > 1)
    tela -= press
  
  if ( keyIsDown(50) && tela < 2)
  {
    tela += press2
  }
else if (keyIsDown(50) && tela > 1)
  tela +=press 
}
